"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import {
  Section,
  SplitHeadingBlock,
  STEEP_COPY,
  SteepButton,
  useInViewTrigger,
  useWindowSize,
} from "./shared";

export interface GetStartedSectionProps {
  mode?: "light" | "dark";
}

export function GetStartedSection({ mode = "light" }: GetStartedSectionProps) {
  const { isSmall, isXSmall, hasMeasured } = useWindowSize();
  const { triggerRef, isInView } = useInViewTrigger({
    start: isSmall ? "top bottom-=300" : "top bottom-=400",
  });

  return (
    <Section
      ref={triggerRef}
      className="pb-32 md:pb-40 pt-8 md:pt-16 lg:pt-32 lg:pb-50"
    >
      <div className="flex justify-center flex-col lg:flex-row-reverse text-insets lg:gap-16">
        {mode === "dark" ? (
          <Image
            className="max-w-[250px] md:max-w-[400px] mx-auto mb-2 -scale-x-100"
            id="door"
            src="/images/model/get-started.png"
            alt=""
            width={506}
            height={436}
          />
        ) : (
          <div className="w-[240px] sm:w-[360px] mx-auto mb-2 -scale-x-100 shrink-0">
            {hasMeasured && !isXSmall ? (
              <video
                aria-hidden="true"
                className="size-full object-cover"
                id="door"
                poster="/images/model/get-started-light-fallback.png"
                autoPlay
                loop
                playsInline
                muted
                preload="auto"
                style={{ clipPath: "fill-box", borderRadius: "0.01px" }}
              >
                <source src="/videos/door.mp4" type="video/mp4" />
              </video>
            ) : (
              <Image
                className="size-full"
                src="/images/model/get-started-light-fallback.png"
                alt=""
                width={506}
                height={436}
              />
            )}
          </div>
        )}
        <div className="flex flex-col items-center lg:items-start justify-center">
          <SplitHeadingBlock
            isInView={isInView}
            heading={STEEP_COPY.getStarted.title}
            headingClassName={clsx(
              "text-center lg:text-left text-[36px]! sm:text-[42px]! md:text-[50px]! xl:text-[64px]!",
              mode === "dark" ? "text-white" : "text-primary-text",
            )}
            description={STEEP_COPY.getStarted.description}
            descriptionClassName={clsx(
              "text-center lg:text-left max-w-3xl text-base! md:text-lg! max-w-[480px]!",
              mode === "dark" ? "text-white/50" : "text-primary-gray",
            )}
          />
          <div className="flex items-center justify-center gap-x-4 mt-8 md:mt-6">
            <Link href="https://sealos.run/downloads">
              <SteepButton
                label={STEEP_COPY.getStarted.cta}
                variant={mode === "dark" ? "primary-reverse" : "primary"}
              />
            </Link>
            <Link href="https://sealos.run/downloads">
              <SteepButton
                variant="tertiary"
                label={STEEP_COPY.getStarted.ctaSecondary}
                arrow={true}
                textColor={mode === "dark" ? "text-white" : "text-primary-text"}
              />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
