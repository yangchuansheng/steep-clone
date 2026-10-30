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
import { GetStartedSection } from "@/components/sites/steep/get-started-section";

export default function Home() {
  return (
    <SteepLayout className="relative">
      <div className="lg:hidden">
        <HeroMobile />
        <BrandCarousel className="mt-10 md:mt-0" />
      </div>
      <div className="hidden lg:block">
        <HeroDesktop carousel={<BrandCarousel />} />
      </div>
      <ProductIntroSection />
      <ProductSection />
      <CustomerStorySection />
      <SemanticPlatformSection />
      <AiSection />
      <GetStartedSection />
    </SteepLayout>
  );
}
