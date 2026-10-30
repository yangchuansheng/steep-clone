"use client";

import { SteepLayout } from "@/components/sites/steep/layout-shell";
import {
  BrandCarousel,
  HeroDesktop,
  HeroMobile,
} from "@/components/sites/steep/hero-section";
import { ProductIntroSection } from "@/components/sites/steep/product-intro-section";
import { ProductSection } from "@/components/sites/steep/product-section";
import { CustomerStorySection } from "@/components/sites/steep/customer-story-section";
import { SemanticPlatformSection } from "@/components/sites/steep/semantic-platform-section";
import { AiSection } from "@/components/sites/steep/ai-section";
import { OpsDayTwoSection } from "@/components/sites/steep/ai-page";
import { CloudPrimitivesSection } from "@/components/sites/steep/product-page";
import { FaqSection } from "@/components/sites/steep/semantic-platform-page";
import { SEALOS_FAQ_ITEMS } from "@/components/sites/steep/shared";
import { GetStartedSection } from "@/components/sites/steep/get-started-section";

const SOFTWARE_APPLICATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Sealos",
  operatingSystem: "macOS, Windows",
  applicationCategory: "DeveloperApplication",
  description:
    "Deploy local code, Vibe Coding apps, GitHub repos, open-source templates, and databases in minutes with a dedicated natural-language Ops Agent.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Claim $5 free cloud credit on first login.",
  },
};

const FAQ_PAGE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SEALOS_FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.label,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.description,
    },
  })),
};

export default function Home() {
  return (
    <SteepLayout className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(SOFTWARE_APPLICATION_JSON_LD),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(FAQ_PAGE_JSON_LD),
        }}
      />
      <div className="lg:hidden">
        <HeroMobile />
        <BrandCarousel className="mt-10 md:mt-0" />
      </div>
      <div className="hidden lg:block">
        <HeroDesktop carousel={<BrandCarousel />} />
      </div>
      <ProductSection />
      <ProductIntroSection />
      <AiSection />
      <CustomerStorySection />
      <SemanticPlatformSection />
      <OpsDayTwoSection />
      <CloudPrimitivesSection />
      <FaqSection />
      <GetStartedSection />
    </SteepLayout>
  );
}
