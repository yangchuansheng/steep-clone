"use client";

import { useState, type CSSProperties, type Ref } from "react";
import {
  AnimatedImage,
  CarouselFeatureCard,
  ClockRefresh36Icon,
  CubeLogo36Icon,
  DbtLogo36Icon,
  FeatureImageStack,
  HorizontalTabBar,
  Key36Icon,
  Section,
  SnapCarousel,
  SplitHeadingBlock,
  StaggerFeatureGrid,
  STEEP_COPY,
  useInViewTrigger,
  useWindowSize,
  VerticalAccordionTabs,
} from "./shared";

export const SEMANTIC_PLATFORM_SECTIONS = [
  {
    id: "Semantic platform",
    label: STEEP_COPY.semanticPlatform.featureSemanticModel.title,
    artboard: "Explore-line",
    duration: 12,
    description: STEEP_COPY.semanticPlatform.featureSemanticModel.description,
    image: "/images/home/model-start.jpg",
    mediumImage: "/images/home/model-start.jpg",
    smallImage: "/images/model/semantic-hero-ill.png",
    bordered: false,
  },
  {
    id: "Steep API",
    label: STEEP_COPY.semanticPlatform.featureSteepApi.title,
    artboard: "Maps",
    duration: 6.14,
    description: STEEP_COPY.semanticPlatform.featureSteepApi.description,
    image: "/images/home/model-api.jpg",
    smallImage: "/images/home/model-api-square.jpg",
    bordered: false,
  },
  {
    id: "Metrics catalog",
    label: STEEP_COPY.semanticPlatform.featureMetricsCatalog.title,
    artboard: "Drill-down",
    duration: 13.16,
    description: STEEP_COPY.semanticPlatform.featureMetricsCatalog.description,
    image: "/images/home/model-metric-catalog.png",
    smallImage: "/images/home/model-catalog-square.png",
    bordered: true,
  },
  {
    id: "Define in code",
    label: STEEP_COPY.semanticPlatform.featureDefineInCode.title,
    artboard: "Targets",
    duration: 8,
    description: STEEP_COPY.semanticPlatform.featureDefineInCode.description,
    image: "/images/home/model-code.png",
    smallImage: "/images/model/semantic-code.png",
    bordered: true,
  },
];

const SEMANTIC_PLATFORM_FEATURES = [
  {
    title: STEEP_COPY.semanticPlatform.featureFineGrainedPermissions.title,
    icon: <Key36Icon className="text-white fill-white shrink-0" />,
    description:
      STEEP_COPY.semanticPlatform.featureFineGrainedPermissions.description,
  },
  {
    title: STEEP_COPY.semanticPlatform.featureSmartCaching.title,
    description: STEEP_COPY.semanticPlatform.featureSmartCaching.description,
    icon: <ClockRefresh36Icon className="text-white fill-white shrink-0" />,
  },
  {
    title: STEEP_COPY.semanticPlatform.featureDbtCubeIntegrations.title,
    description:
      STEEP_COPY.semanticPlatform.featureDbtCubeIntegrations.description,
    icon: (
      <div className="flex items-center gap-2 text-white fill-white shrink-0">
        <DbtLogo36Icon className="md:size-9 size-8 shrink-0" />
        <CubeLogo36Icon className="md:size-9 size-8 shrink-0 hidden lg:block" />
      </div>
    ),
  },
];

function MobileSemanticPlatformShowcase({
  mode = "light",
}: {
  mode?: "light" | "dark";
}) {
  return (
    <>
      <div className="mobile-padding">
        {SEMANTIC_PLATFORM_SECTIONS.slice(0, 2).map((section, index) => (
          <FeatureImageStack
            key={index}
            title={section.label}
            description={section.description}
            smallImage={section.smallImage}
            mediumImage={section.mediumImage}
            largeImage={section.image}
            mode={mode}
          />
        ))}
      </div>
      <SnapCarousel
        showArrowButtons={true}
        darkMode={mode === "dark"}
        items={SEMANTIC_PLATFORM_SECTIONS.slice(2)}
        expandInView={true}
        renderItem={({
          item,
          setRef,
          scaleStyle,
          opacityStyle,
        }: {
          item: (typeof SEMANTIC_PLATFORM_SECTIONS)[number];
          setRef: Ref<HTMLDivElement>;
          scaleStyle?: CSSProperties;
          opacityStyle?: CSSProperties;
        }) => (
          <CarouselFeatureCard
            key={item.label}
            ref={setRef}
            title={item.label}
            description={item.description}
            image={item.smallImage ?? item.image}
            scaleStyle={scaleStyle}
            opacityStyle={opacityStyle}
            mode="dark"
            bordered={true}
          />
        )}
      />
    </>
  );
}

export function SemanticPlatformSection() {
  const { isSmall, isXLarge } = useWindowSize();
  const [activeIndex, setActiveIndex] = useState(0);
  const { triggerRef, isInView } = useInViewTrigger({
    start: isSmall ? "top bottom-=200" : "top bottom-=300",
  });

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  const activeSection =
    SEMANTIC_PLATFORM_SECTIONS[activeIndex] ?? SEMANTIC_PLATFORM_SECTIONS[0];

  return (
    <div
      id="canvas"
      ref={triggerRef}
      className="relative py-16 md:pt-30 lg:pb-40 bg-[#121212] flex justify-center "
    >
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-50 lg:opacity-50"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 10%, rgba(255, 255, 255, 0.10) 100%), #121212",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.25' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='0 1'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          backgroundSize: "80px 80px",
          mixBlendMode: "overlay",
          opacity: 0.3,
        }}
      />
      <Section className="relative z-10" noPaddingOnSmallScreens={true}>
        <div className="flex flex-col items-start mb-12 lg:mb-20 gap-8">
          <div className="mobile-padding-only">
            <div className="flex flex-col items-start">
              <SplitHeadingBlock
                isInView={isInView}
                className="mb-8 text-white/80"
                heading={STEEP_COPY.semanticPlatform.title}
                description={STEEP_COPY.semanticPlatform.description}
                descriptionClassName="text-white/60 max-w-2xl"
              />
            </div>
          </div>
          {isSmall ? (
            <MobileSemanticPlatformShowcase mode="dark" />
          ) : (
            <div
              className={`flex w-full mt-4 ${isXLarge ? "flex-row" : "flex-col"}`}
            >
              {isXLarge && (
                <VerticalAccordionTabs
                  activeIndex={activeIndex}
                  handleTabClick={handleTabClick}
                  sections={SEMANTIC_PLATFORM_SECTIONS}
                  mode="dark"
                />
              )}
              {!isXLarge && (
                <div className="flex flex-col items-start">
                  <HorizontalTabBar
                    itemWidth={124}
                    items={SEMANTIC_PLATFORM_SECTIONS}
                    activeIndex={activeIndex}
                    onSelect={handleTabClick}
                    mode="dark"
                  />
                  <p
                    key={activeIndex}
                    className="max-w-lg text-white/60 text-sm mb-4 animate-fade-in-y"
                  >
                    {activeSection.description}
                  </p>
                </div>
              )}
              <div
                className={`flex justify-center mx-auto w-full 2xl:w-[960px] max-w-[1280px] 2xl:shrink-0 ${isXLarge ? "mt-0" : "mt-16"}`}
              >
                <AnimatedImage
                  src={activeSection.mediumImage ?? activeSection.image}
                  alt={activeSection.label}
                  className="w-full"
                  imageClassName={
                    "w-full object-fit aspect-960/640 rounded-2xl lg:rounded-3xl" +
                    (activeSection.bordered ? " border border-white/5" : "")
                  }
                  duration={0.6}
                  ease="expo.out"
                  initialScale={0.8}
                />
              </div>
            </div>
          )}
        </div>
        <StaggerFeatureGrid
          items={SEMANTIC_PLATFORM_FEATURES}
          mode="dark"
          className="text-insets lg:grid-cols-3"
        />
      </Section>
    </div>
  );
}
