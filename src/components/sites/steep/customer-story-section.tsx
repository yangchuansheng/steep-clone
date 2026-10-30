"use client";

import React, { forwardRef, useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import {
  AnimatedImage,
  Section,
  SnapCarousel,
  SplitHeadingBlock,
  STEEP_COPY,
  useInViewTrigger,
} from "./shared";

interface CustomerStoryItem {
  quote: string;
  label: string;
  image: string;
  url: string;
  logo: string;
  logoWidth: number;
  alt: string;
  active: boolean;
}

const CUSTOMER_STORIES: CustomerStoryItem[] = [
  {
    quote: STEEP_COPY.customerStorySection.customerVoi.quote,
    label: STEEP_COPY.customerStorySection.customerVoi.subhead,
    image: "/images/sealos/compare-1-control.png",
    url: "/customers/voi-ditching-dashboards-for-scalable-analytics",
    logo: "/images/customers/logos/voi.svg",
    logoWidth: 70,
    alt: "Control Surface",
    active: true,
  },
  {
    quote: STEEP_COPY.customerStorySection.customerJuni.quote,
    label: STEEP_COPY.customerStorySection.customerJuni.subhead,
    image: "/images/sealos/compare-2-network.png",
    url: "/customers/juni-from-data-blind-to-insight-led-confidence",
    logo: "/images/customers/logos/juni.svg",
    logoWidth: 80,
    alt: "Private Network",
    active: false,
  },
  {
    quote: STEEP_COPY.customerStorySection.customerBounce.quote,
    label: STEEP_COPY.customerStorySection.customerBounce.subhead,
    image: "/images/sealos/compare-3-safety.png",
    url: "/customers/data-made-accessible-with-intuitive-BI",
    logo: "/images/customers/logos/bounce.svg",
    logoWidth: 105,
    alt: "Change Safety",
    active: false,
  },
  {
    quote: STEEP_COPY.customerStorySection.customerOnceupon.quote,
    label: STEEP_COPY.customerStorySection.customerOnceupon.subhead,
    image: "/images/sealos/compare-4-ops.png",
    url: "/customers/fueling-strategic-data-use-across-the-business",
    logo: "/images/customers/logos/onceupon.svg",
    logoWidth: 115,
    alt: "Day-2 Operations",
    active: false,
  },
];

const BrandTabBar = ({
  brands,
  activeIndex,
  onSelect,
}: {
  brands: CustomerStoryItem[];
  activeIndex: number;
  onSelect: (index: number) => void;
}) => {
  const tabWidth = 100 / brands.length;
  return (
    <div className="hidden md:flex relative w-full border-t border-trans-blue-10 pt-4 lg:scale-100 origin-top-left">
      <div
        className="absolute top-0 h-[2px] bg-black transition-all duration-300 ease-out"
        style={{
          left: `${activeIndex * tabWidth}%`,
          width: `${tabWidth}%`,
          transform: "translateY(-1px)",
        }}
      />
      {brands.map((brand, index) => (
        <button
          key={`brand-triplicate-${index}`}
          type="button"
          onClick={() => onSelect(index)}
          className={clsx(
            "flex-1 flex items-center justify-center transition-opacity duration-200 cursor-pointer scale-80 lg:scale-100",
            activeIndex === index
              ? "opacity-100"
              : "opacity-40 hover:opacity-100",
          )}
        >
          <span className="text-sm font-medium text-primary-text">
            {brand.alt}
          </span>
        </button>
      ))}
    </div>
  );
};

const MobilePortraitCard = forwardRef<
  HTMLDivElement,
  { image: string; scaleStyle?: React.CSSProperties }
>(function MobilePortraitCard({ image, scaleStyle }, ref) {
  const cardStyle: React.CSSProperties = {
    ...scaleStyle,
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#D3E3FC",
  };
  return (
    <div
      ref={ref}
      className="shrink-0 w-[85%] max-w-[440px] snap-start snap-always"
    >
      <div
        style={cardStyle}
        className="w-full h-full aspect-square overflow-hidden rounded-2xl sm:rounded-3xl"
        aria-label="Customer portrait"
        role="img"
      />
    </div>
  );
});

export const CustomerStorySection = () => {
  const { triggerRef, isInView } = useInViewTrigger({
    start: "top bottom-=300",
  });
  const initialIndex = useMemo(
    () => Math.max(0, CUSTOMER_STORIES.findIndex((item) => item.active)),
    [],
  );
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [displayedIndex, setDisplayedIndex] = useState(initialIndex);
  const isFading = activeIndex !== displayedIndex;

  useEffect(() => {
    if (activeIndex === displayedIndex) return;
    const timer = setTimeout(() => {
      setDisplayedIndex(activeIndex);
    }, 300);
    return () => clearTimeout(timer);
  }, [activeIndex, displayedIndex]);

  return (
    <div className="bg-[#D3E3FC]">
      <Section
        className="relative"
        ref={triggerRef}
        noPaddingOnSmallScreens
      >
        <div className="py-8 md:py-24 lg:py-40">
          <div className="flex flex-col md:flex-row justify-between gap-x-4 w-full">
            <div className="flex flex-col md:w-[50%] flex-1 xl:pt-8 md:pr-10 xl:pr-20 justify-between">
              <div className="md:hidden">
                <SnapCarousel
                  items={CUSTOMER_STORIES}
                  expandInView
                  onActiveIndexChange={setActiveIndex}
                  renderItem={({
                    item,
                    setRef,
                    scaleStyle,
                    index,
                  }: {
                    item: CustomerStoryItem;
                    setRef: (el: HTMLDivElement | null) => void;
                    scaleStyle?: React.CSSProperties;
                    index: number;
                  }) => (
                    <MobilePortraitCard
                      key={index}
                      ref={setRef}
                      image={item.image}
                      scaleStyle={scaleStyle}
                    />
                  )}
                />
              </div>
              <div className="mt-2 mobile-padding-only mb-8 md:mb-16">
                <div className="min-h-[200px] md:min-h-[220px] lg:min-h-[240px]">
                  <div
                    className={clsx(
                      "transition-opacity duration-300",
                      isFading ? "opacity-0" : "opacity-100",
                    )}
                  >
                    <span className="block mb-3 md:hidden text-insets text-sm font-medium text-primary-text">
                      {CUSTOMER_STORIES[displayedIndex].alt}
                    </span>
                    <SplitHeadingBlock
                      isInView={isInView}
                      className="text-left"
                      heading={CUSTOMER_STORIES[displayedIndex].quote}
                      headingClassName="text-left text-4xl! md:text-[36px]! lg:text-[44px]!"
                      description={CUSTOMER_STORIES[displayedIndex].label}
                      descriptionClassName="text-sm! lg:text-lg!"
                    />
                  </div>
                </div>
              </div>
              <BrandTabBar
                brands={CUSTOMER_STORIES}
                activeIndex={activeIndex}
                onSelect={setActiveIndex}
              />
            </div>
            <AnimatedImage
              src={CUSTOMER_STORIES[activeIndex].image}
              alt="Customer story"
              className="hidden md:block w-[45%] h-auto max-w-[480px] max-h-[480px] aspect-square rounded-3xl shadow-xl"
              imageClassName="w-full h-full object-cover rounded-3xl"
              duration={0.6}
              initialScale={0.8}
            />
          </div>
        </div>
      </Section>
    </div>
  );
};
