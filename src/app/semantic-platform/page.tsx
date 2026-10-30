import type { Metadata } from "next";
import { SemanticPlatformPage } from "@/components/sites/steep/semantic-platform-page";

export const metadata: Metadata = {
  title: "Semantic platform | Steep",
  description:
    "The metrics-first semantic platform that helps you get out of the mess and move faster.",
  openGraph: {
    title: "Semantic platform | Steep",
    description:
      "The metrics-first semantic platform that helps you get out of the mess and move faster.",
    url: "https://steep.app/semantic-platform",
    siteName: "Steep",
    type: "website",
    images: [
      {
        url: "https://steep.app/images/og/platform.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Semantic platform | Steep",
    description:
      "The metrics-first semantic platform that helps you get out of the mess and move faster.",
    images: ["https://steep.app/images/og/platform.png"],
  },
};

export default function SemanticPlatformRoutePage() {
  return <SemanticPlatformPage />;
}
