"use client";
/* eslint-disable @next/next/no-img-element, react-hooks/set-state-in-effect */

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight16Icon,
  ArrowUp12Icon,
  AtSign16Icon,
  BellDot18Icon,
  Clock16Icon,
  IconButton,
  NoiseOverlay,
  SplitHeadingBlock,
  STEEP_COPY,
  SteepButton,
  useWindowSize,
} from "./shared";

gsap.registerPlugin(ScrollTrigger);

const BRAND_LOGOS = [
  { src: "/images/customers/logos/voi.svg", alt: "voi" },
  { src: "/images/customers/logos/framer.svg", alt: "Framer" },
  { src: "/images/customers/logos/veo.svg", alt: "Veo" },
  { src: "/images/customers/logos/geoguessr.svg", alt: "GeoGuessr" },
  { src: "/images/customers/logos/monta.svg", alt: "Monta" },
  { src: "/images/customers/logos/bounce.svg", alt: "Bounce" },
  { src: "/images/customers/logos/wunderflats.svg", alt: "Wunderflats" },
  { src: "/images/customers/logos/hairburst.svg", alt: "Hairburst" },
  { src: "/images/customers/logos/alloy.svg", alt: "Alloy" },
  { src: "/images/customers/logos/lumiq.svg", alt: "LumiQ" },
  { src: "/images/customers/logos/juni.svg", alt: "Juni" },
  { src: "/images/customers/logos/instabox.svg", alt: "Instabox" },
  { src: "/images/customers/logos/cabonline.svg", alt: "Cabonline" },
  { src: "/images/customers/logos/onceupon.svg", alt: "Onceupon" },
  { src: "/images/customers/logos/budbee.svg", alt: "Budbee" },
  { src: "/images/customers/logos/goals.svg", alt: "Goals" },
  { src: "/images/customers/logos/philadelphia.svg", alt: "Philadelphia Inquirer" },
];

function BrandLogoStrip() {
  return (
    <div className="flex flex-row gap-8 md:gap-16 items-center shrink-0 pr-8 md:pr-16">
      {BRAND_LOGOS.map((brand, index) => (
        <div
          key={`brand-${index}`}
          className="shrink-0 flex items-center justify-center"
        >
          <Image
            src={brand.src}
            alt={brand.alt}
            width={0}
            height={0}
            sizes="150px"
            className="h-9 md:h-11 w-auto max-w-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}

export const BrandCarousel = ({ className }: { className?: string }) => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const firstChild = track?.firstElementChild as HTMLElement | null | undefined;
    if (!track || !firstChild) return;

    const updateWidth = () => {
      track.style.setProperty("--list-width", `${firstChild.offsetWidth}px`);
    };
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(firstChild);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={clsx("w-full", className)}>
      <div className="md:w-full py-8 flex flex-col mx-auto gap-7 md:gap-8 justify-center items-center">
        <div className="w-full relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-[20%] bg-linear-to-r from-primary-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-[20%] bg-linear-to-l from-primary-background to-transparent z-10 pointer-events-none" />
          <div
            ref={trackRef}
            className="flex flex-row animate-carousel"
            style={{ width: "fit-content" }}
            onMouseEnter={() =>
              trackRef.current?.style.setProperty("animation-play-state", "paused")
            }
            onMouseLeave={() =>
              trackRef.current?.style.setProperty("animation-play-state", "running")
            }
          >
            <BrandLogoStrip />
            <BrandLogoStrip />
          </div>
        </div>
      </div>
    </div>
  );
};

const AiPromptBox = () => (
  <div className="ai-button-container relative bg-white rounded-[20px] overflow-hidden flex w-full h-[100px] flex-col justify-between pr-3 pl-5 pt-4 pb-3">
    <div className="relative">
      <span className="ai-button-text text-secondary-text text-[15px] font-book leading-normal">
        Describe the app you want to deploy...
      </span>
      <span className="ai-button-text-typed absolute left-0 top-0 text-primary-text text-[15px] font-book leading-normal whitespace-nowrap overflow-hidden w-0">
        Deploy this Next.js repo with replicated PostgreSQL, Redis, and HTTPS
      </span>
    </div>
    <div className="ai-button-icons flex justify-between items-center">
      <div className="flex items-center gap-2 text-primary-text">
        <AtSign16Icon />
        <Clock16Icon />
      </div>
      <IconButton className="bg-black! text-white size-8!">
        <ArrowUp12Icon className="text-white" />
      </IconButton>
    </div>
  </div>
);

const HeroBannerPill = ({ className }: { className?: string }) => {
  const { label, href } = STEEP_COPY.hero.banner;
  return (
    <Link
      href={href}
      className={clsx(
        className,
        "group inline-flex items-center gap-2.5 rounded-full border border-black/4 bg-black/4 px-4 py-[9px] text-[15px] whitespace-nowrap font-book leading-[21px] text-primary-text tabular-nums transition-colors hover:bg-black/7",
      )}
    >
      <BellDot18Icon className="size-[18px] shrink-0" />
      <span className="pb-px">{label}</span>
      <span className="relative flex shrink-0 overflow-hidden opacity-50">
        <ArrowRight16Icon className="size-4 group-hover:animate-arrow-slide" />
      </span>
    </Link>
  );
};

const C =
  typeof navigator !== "undefined" &&
  /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

const T =
  "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.05)";

const E = (e: number) => ({ opacity: 1, y: -90 + e });
const R = { autoAlpha: 1, y: 0 };
const I = { autoAlpha: 0, y: -40, duration: 0.3 };
const O = { opacity: 0, scale: 0.5, y: -300, duration: 0.5 };
const M = { scale: 0.8, y: 800, opacity: 0 };
const z = { scale: 1, y: 200, opacity: 1 };
const F = { y: 800 };
const D = { y: 280 };
const G = (e: number) => ({ x: 1100, y: -560 + e });
const L = { x: 860, y: z.y - 600 };
const B = (e: number) => ({ x: -480, y: -750 + e });
const V = { x: 247, y: z.y - 600 };
const Z = (e: number) => ({ x: -20, y: -280 + e });
const q = { x: 247, y: z.y - 354 };
const H = (e: number) => ({ opacity: 1, x: 660, y: -190 + e, width: 400 });
const W = { x: 248, y: z.y - 740, width: 600 };
const J = (e: number) => {
  const t = Z(e);
  return { x: t.x - 50, y: t.y + 70 };
};
const U = { x: q.x - 30, y: q.y + 60 };
const $ = (e: number) => {
  const t = H(e);
  return { scale: 0.9, x: t.x + 120, y: t.y + 40 };
};
const X = { x: W.x + 480, y: W.y + 60 };
const K = { y: 0 };
const Q = { y: -130 };
const Y = { opacity: 0, top: 28, left: 300, y: 200 };
const ee = { opacity: 1, y: 84 };

function renderHeroTitle(): React.ReactNode {
  const title: React.ReactNode | (() => React.ReactNode) = STEEP_COPY.hero.title;
  return typeof title === "function" ? title() : title;
}

function useHeroDimensions() {
  const { width: e, height: t, hasMeasured: r } = useWindowSize();
  const s = e === 0 || e >= 1360 ? 1 : Math.max((e - 160) / 1200, 0.5);
  const a = Math.max(0, Math.min(1, (t - 800) / 400));
  return {
    scaleFactor: s,
    width: e,
    height: t,
    containerHeight: 1480 * s,
    yOffset: 200 * a,
    hasMeasured: r,
  };
}

export const HeroDesktop = ({ carousel }: { carousel: React.ReactNode }) => {
  const r = useRef<HTMLDivElement>(null);
  const a = useRef<HTMLDivElement>(null);
  const o = useRef<HTMLDivElement>(null);
  const n = useRef<HTMLDivElement>(null);
  const l = useRef<HTMLDivElement>(null);
  const c = useRef<HTMLDivElement>(null);
  const u = useRef<HTMLDivElement>(null);
  const m = useRef<HTMLDivElement>(null);
  const p = useRef<HTMLDivElement>(null);
  const f = useRef<HTMLDivElement>(null);
  const g = useRef<HTMLDivElement>(null);
  const y = useRef<HTMLDivElement>(null);
  const b = useRef<HTMLDivElement>(null);
  const w = useRef<HTMLDivElement>(null);
  const P = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  const {
    scaleFactor: et,
    width: er,
    containerHeight: es,
    yOffset: ea,
  } = useHeroDimensions();

  useLayoutEffect(() => {
    if (window.scrollY > 0) {
      window.scrollTo(0, 0);
    }
  }, []);

  useLayoutEffect(() => {
    if (
      er < 1024 ||
      [r, o, c, a, n, l, p, m, u, f, g, y, b, w, P].some((e) => !e.current)
    ) {
      return;
    }

    gsap.set(r.current, { height: es });
    gsap.set(a.current, {
      x: "-50%",
      y: "0%",
      scale: et,
      transformOrigin: "top center",
      visibility: "visible",
    });
    setIsReady(true);

    const e = gsap.context(() => {
      if (C) {
        gsap.defaults({ force3D: true });
      }
      const e = E(ea);
      const t = G(ea);
      const s = B(ea);
      const aPos = Z(ea);
      const i = H(ea);
      const d = J(ea);
      const x = $(ea);

      gsap.set(c.current, M);
      gsap.set(o.current, t);
      gsap.set(n.current, s);
      gsap.set(l.current, aPos);
      gsap.set(p.current, d);
      gsap.set(f.current, x);
      gsap.set(u.current, i);
      gsap.set(m.current, e);
      gsap.set(y.current, F);
      gsap.set(g.current, K);
      gsap.set(b.current, Y);

      const v = gsap.timeline({
        scrollTrigger: {
          trigger: r.current,
          start: "top top",
          pin: true,
          scrub: C ? 0.6 : 0.8,
          end: () => `+=${1.2 * es}`,
          anticipatePin: 0.5 * Number(Boolean(C)),
          invalidateOnRefresh: true,
          refreshPriority: 1,
        },
      });

      v.fromTo(m.current, e, O, 0);
      v.fromTo(
        o.current,
        { ...t, "--shadow-opacity": 1 },
        { ...L, "--shadow-opacity": 0 },
        0,
      );
      v.fromTo(
        n.current,
        { ...s, "--shadow-opacity": 1 },
        { ...V, "--shadow-opacity": 0 },
        0,
      );
      v.fromTo(p.current, d, U, 0);
      v.fromTo(f.current, x, X, 0);
      v.fromTo(
        l.current,
        { ...aPos, "--shadow-opacity": 1 },
        { ...q, "--shadow-opacity": 0 },
        0,
      );
      v.fromTo(
        u.current,
        { ...i, "--shadow-opacity": 1 },
        { ...W, "--shadow-opacity": 1 },
        0,
      );
      v.fromTo(P.current, R, I, 0);
      v.fromTo(".ai-button-text", { opacity: 1 }, { opacity: 0 }, 0);
      v.fromTo(c.current, M, z, 0);
      v.fromTo(y.current, F, D, 0);
      v.fromTo(g.current, K, Q, 0);
      v.to(
        ".ai-button-text-typed",
        { width: "auto", duration: 0.4, ease: "none", y: -6 },
        0.2,
      );
      v.to(
        u.current,
        { x: 594, width: 486, "--shadow-opacity": 0, duration: 0.5, y: "-=80" },
        0.7,
      );
      v.to(
        ".ai-button-container",
        { backgroundColor: "#F3F3F5", height: 45, duration: 0.5 },
        0.7,
      );
      v.to(".ai-button-icons", { opacity: 0, duration: 0.2 }, 0.6);
      v.to(f.current, { opacity: 0, duration: 0.3 }, 0.6);
      v.to(p.current, { opacity: 0, duration: 0.3 }, 0.6);
      v.to(o.current, { opacity: 0, duration: 0.3 }, 0.7);
      v.to(n.current, { opacity: 0, duration: 0.3 }, 0.7);
      v.to(l.current, { opacity: 0, duration: 0.3 }, 0.7);
      v.to(w.current, { opacity: 0, duration: 0.3 }, 0.6);
      v.to(b.current, ee, 0.7);
    }, r);

    return () => {
      e.revert();
      setIsReady(false);
    };
  }, [et, er, es, ea]);

  const shadowStyle = {
    "--shadow-opacity": 1,
    "--block-shadow": T,
  } as React.CSSProperties;

  return (
    <div
      ref={r}
      className="bg-linear-to-b from-[#F7F7F8] to-white relative"
      style={{ height: es }}
    >
      <div
        ref={g}
        className="absolute inset-0 w-full max-h-[1440px] transform-gpu"
      >
        <Image
          src="/images/backgrounds/bg-home.jpg"
          alt=""
          fill
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
      <NoiseOverlay className="h-full" />
      <div
        ref={P}
        className="absolute top-[103px] inset-x-0 z-20 flex justify-center transform-gpu"
      >
        <HeroBannerPill />
      </div>
      <div
        ref={a}
        className="absolute left-1/2 top-0 transform-gpu"
        style={{ visibility: isReady ? "visible" : "hidden" }}
      >
        <div
          ref={m}
          className="top-[35%] absolute left-0 w-[1200px] z-10 flex items-center justify-center transform-gpu"
        >
          <SplitHeadingBlock
            centerAligned
            heading={renderHeroTitle()}
            headingClassName="text-center text-[82px]! leading-[1.05] tracking-tight"
            description={STEEP_COPY.hero.description}
            descriptionClassName="text-center text-primary-text! leading-normal! max-w-[780px]!"
            cta={
              <div className="flex items-center justify-center gap-x-2">
                <Link href="https://sealos.run/downloads">
                  <SteepButton size="regular" label={STEEP_COPY.hero.cta} />
                </Link>
                <Link href="#capabilities">
                  <SteepButton
                    variant="tertiary"
                    size="regular"
                    label={STEEP_COPY.hero.ctaSecondary}
                  />
                </Link>
              </div>
            }
            isInView
          />
        </div>
        <div
          ref={c}
          className="w-[1200px] transform-gpu relative overflow-hidden rounded-3xl shadow-xl"
        >
          <Image
            src="/images/home-site-25/hero-desktop-clean.png"
            alt=""
            width={1200}
            height={880}
            priority
            unoptimized
          />
          <div ref={w} className="absolute top-22 left-62 transform-gpu">
            <img
              src="/images/home-site-25/home-content-start.png"
              alt=""
              width={906}
              height={790}
            />
          </div>
          <div ref={b} className="absolute transform-gpu">
            <img
              src="/images/home-site-25/home-content.png"
              alt=""
              width={800}
              height={790}
            />
          </div>
        </div>
        <div
          ref={o}
          className="absolute transform-gpu before:absolute before:inset-0 before:rounded-xl before:shadow-(--block-shadow) before:opacity-(--shadow-opacity)"
          style={shadowStyle}
        >
          <img
            src="/images/home/hero-pink-block.svg"
            alt=""
            width={294}
            height={235}
            className="rounded-xl relative"
          />
        </div>
        <div
          ref={n}
          className="absolute transform-gpu before:absolute before:inset-0 before:rounded-xl before:shadow-(--block-shadow) before:opacity-(--shadow-opacity)"
          style={shadowStyle}
        >
          <img
            src="/images/home/hero-blue-block.svg"
            alt=""
            width={600}
            height={235}
            className="rounded-xl relative"
          />
        </div>
        <div
          ref={l}
          className="absolute transform-gpu before:absolute before:inset-0 before:rounded-xl before:shadow-(--block-shadow) before:opacity-(--shadow-opacity)"
          style={shadowStyle}
        >
          <img
            src="/images/home/hero-gray-block.svg"
            alt=""
            width={294}
            height={200}
            className="rounded-xl relative"
          />
        </div>
        <div ref={p} className="absolute transform-gpu">
          <img
            src="/images/home/hero-cursor-left.svg"
            alt=""
            width={61}
            height={67}
          />
        </div>
        <div
          ref={u}
          className="absolute transform-gpu before:absolute before:inset-0 before:rounded-2xl before:shadow-(--block-shadow) before:opacity-(--shadow-opacity)"
          style={shadowStyle}
        >
          <AiPromptBox />
        </div>
        <div ref={f} className="absolute transform-gpu">
          <img
            src="/images/home/hero-cursor-right.svg"
            alt=""
            width={60}
            height={76}
          />
        </div>
        <div
          ref={y}
          className="absolute transform-gpu z-40 w-[110%] left-[-5%]"
        >
          {carousel}
        </div>
      </div>
    </div>
  );
};

export const HeroMobile = () => (
  <div className="z-10 flex justify-center pt-[22%] md:pt-[15%] relative bg-white">
    <div className="absolute inset-x-0 top-0 h-[70%] sm:h-full">
      <Image
        src="/images/backgrounds/bg-home-square.jpg"
        alt=""
        fill
        priority
        className="object-cover object-top"
      />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-white to-transparent" />
    </div>
    <div className={clsx("text-center w-full flex flex-col items-center h-full")}>
      <NoiseOverlay className="h-full" />
      <HeroBannerPill className="relative mb-8 mx-5" />
      <SplitHeadingBlock
        isInView
        centerAligned
        heading={renderHeroTitle()}
        headingClassName="text-center text-[44px] xs:text-[54px] sm:text-[64px] md:text-[76px] leading-[1.1] tracking-tight "
        description={STEEP_COPY.hero.description}
        descriptionClassName="text-center text-base! md:text-xl! lg:text-2xl! text-primary-text! leading-normal! px-10"
        cta={
          <div className="flex items-center justify-center gap-x-2 mt-2">
            <Link href="https://sealos.run/downloads">
              <SteepButton size="regular" label={STEEP_COPY.hero.cta} />
            </Link>
            <Link href="#capabilities">
              <SteepButton
                variant="tertiary"
                size="regular"
                label={STEEP_COPY.hero.ctaSecondary}
              />
            </Link>
          </div>
        }
      />
      <div className="relative mt-10 w-full overflow-x-clip overflow-y-visible sm:hidden">
        <Image
          width={2400}
          height={1760}
          sizes="160vw"
          priority
          src="/images/home-site-25/hero-medium.png"
          alt=""
          className="w-[160%] max-w-none h-auto ml-[10%] drop-shadow-xl"
        />
        <Image
          width={786}
          height={1704}
          sizes="46vw"
          priority
          src="/images/home-site-25/hero-mobile.png"
          alt="Hero Section mobile"
          className="absolute top-[23%] left-[6%] w-[46%] h-auto drop-shadow-2xl"
        />
      </div>
      <div className="relative w-[96%] overflow-hidden hidden sm:block p-20">
        <Image
          src="/images/home-site-25/hero-medium.png"
          alt="Hero Section small"
          width={2400}
          height={1760}
          sizes="80vw"
          priority
          className="w-full h-auto drop-shadow-xl"
        />
        <Image
          src="/images/home-site-25/hero-mobile.png"
          alt="Hero Section mobile"
          width={786}
          height={1704}
          sizes="20vw"
          priority
          className="absolute top-[36%] left-[16%] w-[22%] h-auto drop-shadow-xl"
        />
      </div>
    </div>
  </div>
);
