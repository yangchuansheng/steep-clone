"use client";
/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  NoiseOverlay,
  Section,
  SplitHeadingBlock,
  STEEP_COPY,
  ThreeCardRow,
  useInViewTrigger,
  useWindowSize,
} from "./shared";

gsap.registerPlugin(ScrollTrigger);

function PersonaAvatar({ src }: { src: string }) {
  return (
    <div className="relative size-6 shrink-0 overflow-hidden rounded-full bg-[#ececec]">
      <img
        src={src}
        alt=""
        className="absolute max-w-none w-full h-full object-cover"
      />
    </div>
  );
}

function PersonaBadge({
  name,
  role,
  avatarSrc,
}: {
  name: string;
  role: string;
  avatarSrc: string;
}) {
  return (
    <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white pl-2.5 pr-3.5 py-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
      <PersonaAvatar src={avatarSrc} />
      <span className="whitespace-nowrap text-sm leading-none">
        <span className="font-medium text-xs text-primary-text">{name}</span>{" "}
        <span className="font-normal text-xs text-primary-text/45">{role}</span>
      </span>
    </div>
  );
}

function PersonaBubble({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "rounded-[20px] bg-white px-5 py-4 text-xs leading-snug text-primary-text shadow-[0_8px_40px_rgba(0,0,0,0.10)] ring-1 ring-black/5",
        className,
      )}
    >
      {children}
    </div>
  );
}

interface PersonaCardProps {
  name: string;
  role: string;
  avatarSrc: string;
  message: string;
  className?: string;
  messageClassName?: string;
}

function PersonaCard({
  name,
  role,
  avatarSrc,
  message,
  className,
  messageClassName,
}: PersonaCardProps) {
  return (
    <div className={clsx("absolute z-10 flex flex-col gap-1.5", className)}>
      <PersonaBadge name={name} role={role} avatarSrc={avatarSrc} />
      <PersonaBubble className={messageClassName}>{message}</PersonaBubble>
    </div>
  );
}

export function MaryPersonaCard({
  className,
  messageClassName,
}: {
  className?: string;
  messageClassName?: string;
}) {
  return (
    <PersonaCard
      name="Alex"
      role="Full-Stack"
      avatarSrc="/images/ai/face-2.jpg"
      message="Deploy my local Next.js app with replicated Postgres and Redis"
      className={className}
      messageClassName={messageClassName}
    />
  );
}

export function CarlPersonaCard({
  className,
  messageClassName,
}: {
  className?: string;
  messageClassName?: string;
}) {
  return (
    <PersonaCard
      name="Sam"
      role="Open Source"
      avatarSrc="/images/ai/face-1.jpg"
      message="Launch Dify and New API with auto-filled credentials and persistent volumes"
      className={className}
      messageClassName={messageClassName}
    />
  );
}

export function JosephinePersonaCard({
  className,
  messageClassName,
}: {
  className?: string;
  messageClassName?: string;
}) {
  return (
    <PersonaCard
      name="Maya"
      role="Web & Leads"
      avatarSrc="/images/ai/face-3.jpg"
      message="Publish this interactive quote deck over HTTPS and save form leads to Postgres"
      className={className}
      messageClassName={messageClassName}
    />
  );
}

function DesktopPersonaOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 hidden lg:block">
      <MaryPersonaCard className="left-[0%] 2xl:left-[2%] top-[19%] w-[300px]" />
      <CarlPersonaCard className=" bottom-[4%] left-[0%] 2xl:left-[2%] w-[340px]" />
      <JosephinePersonaCard className="right-[2%] 2xl:right-[0%] top-[45%] w-[240px] sm:w-[380px]" />
    </div>
  );
}

function TabletPersonaOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 hidden sm:block lg:hidden">
      <MaryPersonaCard className="left-[3%] md:left-0 top-[9%] w-[300px]" />
      <JosephinePersonaCard className="right-[3%] md:right-0 top-[64%] w-[280px]" />
    </div>
  );
}

const AI_FEATURES = [
  {
    title: STEEP_COPY.aiSection.featureOne.title,
    description: STEEP_COPY.aiSection.featureOne.description,
    image: "/images/ai/trust.png",
  },
  {
    title: STEEP_COPY.aiSection.featureTwo.title,
    description: STEEP_COPY.aiSection.featureTwo.description,
    image: "/images/ai/generate-reports.png",
  },
  {
    title: STEEP_COPY.aiSection.featureThree.title,
    description: STEEP_COPY.aiSection.featureThree.description,
    image: "/images/ai/workflows.png",
  },
];

export function AiSection() {
  const { isSmall } = useWindowSize();
  const { triggerRef, isInView } = useInViewTrigger({
    start: isSmall ? "top bottom-=200" : "top bottom-=300",
  });

  return (
    <div
      ref={triggerRef}
      className="flex overflow-hidden relative flex-col"
      style={{ background: "#f2f2f3" }}
    >
      <div className="absolute z-0 pointer-events-none aspect-square left-1/2 -translate-x-1/2 overflow-hidden translate-y-10 md:translate-y-40 xl:translate-y-60 xh-[70%] bg-[#f2f2f3]">
        <Image
          width={1400}
          height={1400}
          src="/images/ai/bg-ai-section.jpg"
          alt=""
          className="max-w-[1200px] lg:max-w-[1400px]"
        />
        <NoiseOverlay />
      </div>
      <Section
        className="z-10 py-12 md:pt-28 md:pb-32 "
        noPaddingOnSmallScreens={true}
      >
        <div className="mobile-padding-only">
          <div className="flex flex-col items-start">
            <SplitHeadingBlock
              isInView={isInView}
              className="text-left mb-16 max-w-[480px] md:max-w-none"
              headingClassName="font-serif text-5xl xs:text-6xl lg:text-7xl"
              heading={STEEP_COPY.aiSection.title}
              description={STEEP_COPY.aiSection.description}
              descriptionClassName="md:max-w-lg max-w-md "
            />
          </div>
        </div>
        <div className="pb-0 md:pb-10 lg:pb-16 xl:pb-24">
          <div className="relative sm:hidden pl-6 overflow-clip pb-12">
            <img
              src="/images/ai/hero-medium-long.png"
              alt=""
              className="block rounded-l-xl shadow-xl h-[120vw] object-top-left object-cover"
            />
          </div>
          <div className="relative sm:px-12 md:px-12 hidden sm:block lg:hidden pb-12 overflow-visible">
            <TabletPersonaOverlay />
            <img
              src="/images/ai/hero-medium-long.png"
              alt=""
              className="relative z-0 w-auto rounded-2xl shadow-2xl"
            />
          </div>
          <div className="relative px-20 max-w-[1360px] mx-auto hidden lg:block pb-16 overflow-visible">
            <DesktopPersonaOverlay />
            <img
              src="/images/ai/hero-medium-long.png"
              alt=""
              className="relative z-0 w-full rounded-[20px] xl:rounded-3xl shadow-2xl max-w-[788px] mx-auto"
            />
          </div>
        </div>
        <ThreeCardRow items={AI_FEATURES} />
      </Section>
    </div>
  );
}
