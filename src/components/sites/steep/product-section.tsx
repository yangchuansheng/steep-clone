"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type Ref,
} from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RiveSectionCanvas } from "./rive-section-canvas";
import {
  CarouselFeatureCard,
  FeatureImageStack,
  HorizontalTabBar,
  NoiseOverlay,
  Section,
  SnapCarousel,
  SplitHeadingBlock,
  useInViewTrigger,
  useWindowSize,
  VerticalAccordionTabs,
} from "./shared";

gsap.registerPlugin(ScrollTrigger);

const PRODUCT_SECTIONS = [
  {
    id: "AI",
    label: "502 & OOM Diagnostics",
    artboard: "AI",
    duration: 15,
    description:
      "Correlates OOMKilled exit code 137 logs and memory spikes into a one-click memory and connection upgrade card.",
  },
  {
    id: "explore",
    label: "Hot Update & Rollback",
    artboard: "Explore-line",
    duration: 12,
    description:
      "Builds incremental images, verifies 200 OK across static assets, and rolls back in one click.",
  },
  {
    id: "reports",
    label: "DB Scaling & Local Tunnel",
    artboard: "Reports",
    duration: 17,
    description:
      "Expands volume storage online and opens an encrypted 127.0.0.1:15432 tunnel for local database tools.",
  },
  {
    id: "drilldown",
    label: "Config Mount & Batch Env",
    artboard: "Drill-down",
    duration: 13.16,
    description:
      "Mounts container config files like /etc/nginx/nginx.conf and parses batch environment variables.",
  },
  {
    id: "targets",
    label: "AI Gateway Tracing",
    artboard: "Targets",
    duration: 8,
    description:
      "Tracks 16-char Request IDs, TTFT latency, and model spend while rotating OpenAI or Anthropic keys.",
  },
  {
    id: "maps",
    label: "7 Service Health Hints",
    artboard: "Maps",
    duration: 6.14,
    description:
      "Surfaces runtime hints for active deploys, unhealthy replicas, restarts, memory limits, and backups.",
  },
];

interface LazyRiveViewportWrapperProps {
  src: string;
  artboard: string;
  instanceKey?: string;
  onSectionDone?: () => void;
  onPauseChange?: (isPaused: boolean) => void;
  rootMargin?: string;
}

function LazyRiveViewportWrapper({
  src,
  artboard,
  instanceKey,
  onSectionDone,
  onPauseChange,
  rootMargin = "300px",
}: LazyRiveViewportWrapperProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={containerRef} className="w-full min-h-0">
      {isVisible ? (
        <RiveSectionCanvas
          key={instanceKey}
          src={src}
          artboard={artboard}
          onSectionDone={onSectionDone}
          onPauseChange={onPauseChange}
        />
      ) : (
        <div className="w-full h-full bg-primary-background" />
      )}
    </div>
  );
}

const STACKED_MOBILE_FEATURES = [
  {
    title: PRODUCT_SECTIONS[0].label,
    description: PRODUCT_SECTIONS[0].description,
    image: "/images/home/product-mobile-medium.png",
    smallImage: "/images/home/product-mobile-square.png",
    shadow: false,
    border: false,
  },
  {
    title: PRODUCT_SECTIONS[1].label,
    description: PRODUCT_SECTIONS[1].description,
    image: "/images/home/product-explore-medium.png",
    smallImage: "/images/home/product-explore-square.png",
    shadow: false,
    border: true,
  },
];

const CAROUSEL_MOBILE_FEATURES = [
  {
    title: PRODUCT_SECTIONS[2].label,
    description: PRODUCT_SECTIONS[2].description,
    image: "/images/home/product-reports-square.png",
    border: true,
  },
  {
    title: PRODUCT_SECTIONS[3].label,
    description: PRODUCT_SECTIONS[3].description,
    image: "/images/home/product-drilldown-square.png",
    border: true,
  },
  {
    title: PRODUCT_SECTIONS[4].label,
    description: PRODUCT_SECTIONS[4].description,
    image: "/images/home/product-targets-square.png",
    border: true,
  },
  {
    title: PRODUCT_SECTIONS[5].label,
    description: PRODUCT_SECTIONS[5].description,
    image: "/images/home/product-maps-square.png",
    border: false,
  },
];

function MobileProductShowcase() {
  return (
    <>
      <div className="mobile-padding">
        {STACKED_MOBILE_FEATURES.map((feature) => (
          <FeatureImageStack
            key={feature.title}
            title={feature.title}
            description={feature.description}
            largeImage={feature.image}
            smallImage={feature.smallImage}
            shadow={feature.shadow}
            border={feature.border}
          />
        ))}
      </div>
      <SnapCarousel
        showArrowButtons={true}
        items={CAROUSEL_MOBILE_FEATURES}
        expandInView={true}
        renderItem={({
          item,
          setRef,
          scaleStyle,
          opacityStyle,
        }: {
          item: (typeof CAROUSEL_MOBILE_FEATURES)[number];
          setRef: Ref<HTMLDivElement>;
          scaleStyle?: CSSProperties;
          opacityStyle?: CSSProperties;
        }) => (
          <CarouselFeatureCard
            key={item.title}
            ref={setRef}
            title={item.title}
            description={item.description}
            image={item.image}
            scaleStyle={scaleStyle}
            opacityStyle={opacityStyle}
            bordered={item.border}
          />
        )}
      />
    </>
  );
}

export function ProductSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(1);
  const [isProgressPaused, setIsProgressPaused] = useState(false);
  const activeIndexRef = useRef(activeIndex);
  const { triggerRef, isInView } = useInViewTrigger({
    start: "top bottom-=300",
  });
  const activeSection = PRODUCT_SECTIONS[activeIndex] ?? PRODUCT_SECTIONS[0];
  const { isSmall, isXLarge } = useWindowSize();

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    if (!triggerRef.current) return;
    const resetAndRestart = () => {
      activeIndexRef.current = 0;
      setActiveIndex(0);
      setAnimationKey((prev) => prev + 1);
    };
    const trigger = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        if (activeIndexRef.current !== 0) resetAndRestart();
      },
      onEnterBack: resetAndRestart,
    });
    return () => trigger.kill();
  }, [triggerRef]);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    setAnimationKey((prev) => prev + 1);
  };

  return (
    <div
      id="ops"
      ref={triggerRef}
      className="py-12 md:pt-20 relative md:pb-32 flex overflow-hidden"
      style={{ background: "#FAFAFB" }}
    >
      {!isSmall && (
        <div className="absolute h-[80%] xl:h-[95%] z-0 pointer-events-none aspect-square -translate-x-1/2 left-1/2 xl:left-[63%] -translate-y-1/2 top-[68%] xl:top-[61%] opacity-80 xl:opacity-100">
          <Image
            width={1440}
            height={1440}
            src="/images/backgrounds/bg-home-showcase.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <NoiseOverlay />
        </div>
      )}
      <Section className="z-10" noPaddingOnSmallScreens={true}>
        <div className="mobile-padding-only">
          <div className="flex flex-col items-start">
            <SplitHeadingBlock
              isInView={isInView}
              className="text-left mb-16 max-w-[480px] md:max-w-none"
              headingClassName="font-serif text-5xl xs:text-6xl lg:text-7xl"
              heading={
                <>
                  Autonomous Day-2
                  <br />
                  operations
                </>
              }
              description=""
              descriptionClassName="md:max-w-lg max-w-md "
            />
          </div>
        </div>
        {isSmall ? (
          <MobileProductShowcase />
        ) : (
          <div className="flex flex-col w-full mt-4">
            {!isXLarge && (
              <>
                <HorizontalTabBar
                  itemWidth="full"
                  buttonsEnabled={false}
                  items={PRODUCT_SECTIONS}
                  activeIndex={activeIndex}
                  onSelect={handleTabClick}
                />
                <p
                  key={activeIndex}
                  className="max-w-lg text-primary-text/90 text-sm px-3 mb-12 animate-fade-in-y"
                >
                  {PRODUCT_SECTIONS[activeIndex]?.description}
                </p>
              </>
            )}
            <div className="flex flex-row w-full">
              {isXLarge && (
                <VerticalAccordionTabs
                  activeIndex={activeIndex}
                  animationKey={animationKey}
                  isProgressPaused={isProgressPaused}
                  handleTabClick={handleTabClick}
                  sections={PRODUCT_SECTIONS}
                  className="pl-2"
                />
              )}
              <div className="flex justify-center mx-auto w-full 2xl:w-[960px] max-w-[1280px] 2xl:shrink-0">
                <div
                  className="flex bg-primary-background overflow-hidden rounded-2xl shadow-xl w-full ring-1 ring-trans-5"
                  style={{ aspectRatio: "20 / 13" }}
                >
                  <LazyRiveViewportWrapper
                    src="/animations/global-animations.riv"
                    artboard={activeSection.artboard}
                    instanceKey={`${activeSection.artboard}-${animationKey}`}
                    rootMargin="-100px"
                    onSectionDone={() => {
                      if (activeIndex < PRODUCT_SECTIONS.length - 1) {
                        setActiveIndex((prev) => prev + 1);
                        setAnimationKey((prev) => prev + 1);
                      }
                    }}
                    onPauseChange={(paused) => {
                      setIsProgressPaused(paused);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </Section>
    </div>
  );
}
