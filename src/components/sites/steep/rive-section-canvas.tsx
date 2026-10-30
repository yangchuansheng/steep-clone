"use client";

import { useEffect } from "react";
import {
  useRive,
  EventType,
  decodeFont,
  decodeImage,
  RuntimeLoader,
  type Event as RiveEvent,
  type FileAsset,
  type FontAsset,
  type ImageAsset,
} from "@rive-app/react-webgl2";

const assetBytesCache = new Map<string, Promise<Uint8Array>>();

const PREWARM_RIVE_IMAGES = [
  "Avatar",
  "screenshot-report-fill",
  "map-empty-level1-min",
  "map-empty-level2-min",
  "map-hexagons-level3-min",
  "map-hexagons-level4-min",
] as const;

function fetchAssetBytes(url: string): Promise<Uint8Array> {
  const cached = assetBytesCache.get(url);
  if (cached) {
    return cached;
  }
  const promise = fetch(url)
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      return new Uint8Array(await response.arrayBuffer());
    })
    .catch((error) => {
      assetBytesCache.delete(url);
      throw error;
    });
  assetBytesCache.set(url, promise);
  return promise;
}

if (typeof window !== "undefined") {
  RuntimeLoader.setWasmUrl("/animations/rive-2.42.0.wasm");
  void fetchAssetBytes("/fonts/SohneVF-Roman.ttf").catch(() => {});
  for (const imageName of PREWARM_RIVE_IMAGES) {
    void fetchAssetBytes(`/animations/assets/${imageName}.png`).catch(() => {});
  }
}

const loadCustomFont = async (asset: FontAsset, assetName: string) => {
  try {
    const bytes = await fetchAssetBytes("/fonts/SohneVF-Roman.ttf");
    const font = await decodeFont(new Uint8Array(bytes));
    asset.setFont(font);
    font.unref();
  } catch (error) {
    console.error(`[Rive] Failed to load font: ${assetName}`, error);
  }
};

const loadCustomImage = async (asset: ImageAsset, assetName: string) => {
  const imageUrl = `/animations/assets/${assetName}.png`;
  try {
    const bytes = await fetchAssetBytes(imageUrl);
    const image = await decodeImage(new Uint8Array(bytes));
    asset.setRenderImage(image);
    image.unref();
  } catch (error) {
    console.warn(`[Rive] Failed to load image: ${assetName}`, error);
  }
};

export interface RiveSectionCanvasProps {
  src: string;
  artboard: string;
  onSectionDone?: () => void;
  onPauseChange?: (isPaused: boolean) => void;
}

export function RiveSectionCanvas({
  src,
  artboard,
  onSectionDone,
  onPauseChange,
}: RiveSectionCanvasProps) {
  const { rive, RiveComponent } = useRive(
    {
      src,
      artboard,
      stateMachines: "sectionMachine",
      autoplay: true,
      onPause: () => onPauseChange?.(true),
      onPlay: () => onPauseChange?.(false),
      assetLoader: (asset: FileAsset, bytes: Uint8Array) => {
        if (asset.cdnUuid.length > 0 || bytes.length > 0) {
          return false;
        }
        if (asset.isFont) {
          void loadCustomFont(asset as FontAsset, asset.name);
          return true;
        }
        if (asset.isImage) {
          void loadCustomImage(asset as ImageAsset, asset.name);
          return true;
        }
        return false;
      },
    },
    { fitCanvasToArtboardHeight: true },
  );

  useEffect(() => {
    if (!rive) return;
    const handleRiveEvent = (event: RiveEvent) => {
      const data = event?.data;
      if (
        data &&
        typeof data === "object" &&
        "name" in data &&
        data.name === "EndEvent"
      ) {
        onSectionDone?.();
      }
    };
    rive.on(EventType.RiveEvent, handleRiveEvent);
    return () => {
      rive.off(EventType.RiveEvent, handleRiveEvent);
    };
  }, [rive, onSectionDone]);

  return (
    <div
      onClick={() => {
        if (rive) {
          if (rive.isPaused) {
            rive.play();
          } else {
            rive.pause();
          }
        }
      }}
      className="w-full h-full cursor-pointer"
    >
      <RiveComponent className="w-full h-full" />
    </div>
  );
}
