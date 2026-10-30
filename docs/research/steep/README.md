# Steep (`https://steep.app/`) Reverse-Engineering Brief

## 1. Source-to-Local Route Map & File Ownership

| Source URL | Local Route | Owned Files |
|---|---|---|
| `https://steep.app/` | `/` (`src/app/page.tsx`) | `src/app/layout.tsx`, `src/app/globals.css`, `src/app/page.tsx`, `src/components/sites/steep/*`, `public/*` |
| `https://steep.app/product` | `/product` (`src/app/product/page.tsx`) | `src/app/product/page.tsx`, `src/components/sites/steep/product-page.tsx`, `public/images/product/*`, `public/images/og/product.png` |
| `https://steep.app/ai` | `/ai` (`src/app/ai/page.tsx`) | `src/app/ai/page.tsx`, `src/components/sites/steep/ai-page.tsx`, `public/images/ai/*`, `public/images/og/ai.jpg` |
| `https://steep.app/semantic-platform` | `/semantic-platform` (`src/app/semantic-platform/page.tsx`) | `src/app/semantic-platform/page.tsx`, `src/components/sites/steep/semantic-platform-page.tsx`, `public/images/model/*`, `public/images/og/platform.png` |

## 2. Typography & Theme Tokens

- **Fonts**:
  - `Sohne` (`font-sans`): Variable font `/fonts/sohne-vf.b7215353.woff2` (100-900) and italic `/fonts/sohne-vf-kursiv.2be2eb33.woff2`, static fallbacks `/fonts/soehne-buch.aa76bb7b.woff2` (400) and `/fonts/soehne-kraftig.d1166ba7.woff2` (500), plus `/fonts/SohneVF-Roman.ttf` for Rive canvas text rendering.
  - `Signifier` (`font-serif`): `/fonts/signifier-regular.f38fd10d.woff2` (400) and `/fonts/signifier-regular-italic.6293c227.woff2` (400 italic).
- **Font Weights**: `normal: 400`, `book: 430`, `medium: 500`, `semibold: 600`.
- **Custom Text Scale**:
  - `3xs`: `12px/18px`, `2xs`: `14px/20px`, `xs`: `16px/21px`, `sm`: `17px/23px`, `base`: `18px/25px`, `lg`: `20px/27px`, `xl`: `22px/29px`, `2xl`: `24px/32px`, `3xl`: `28px`, `4xl`: `32px/36px`, `5xl`: `36px/42px`, `6xl`: `40px/44px`, `7xl`: `64px/64px`.
- **Custom Breakpoints**: `xs: 480px`, `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`, `2xl: 1536px`.

## 3. Section Order & Motion Architecture

1. **Navbar (`SteepNav`)**:
   - Fixed top navigation (`h-16`), transitions to `bg-[#FFFFFFCC] backdrop-blur-lg` when `window.scrollY > 500` on home, or `shadow-lg bg-white` when a mega-menu (`Product`, `Resources`, `Customers`) is hovered/focused.
   - Mobile hamburger button morphs two SVG `<path>` lines (`M2.75 8 L21.25 8` / `M2.75 16 L21.25 16`) into an X (`M5.46 5.46 L18.54 18.54` / `M5.46 18.54 L18.54 5.46`) via GSAP `attr` tween (`0.15s`, `power2.inOut`).
2. **Hero Section (`HeroDesktop` / `HeroMobile`) + Brand Carousel (`BrandCarousel`)**:
   - Desktop (`>=1024px`): Pinned GSAP `ScrollTrigger` timeline (`start: "top top"`, `end: "+=" + 1.2 * containerHeight`, `scrub: 0.8`, `pin: true`).
   - 14 refs animate simultaneously: background image (`/images/backgrounds/bg-home.jpg`) + SVG fractal noise overlay, top changelog pill, SplitText heading (`For companies / that run on data`) + description + CTAs, main app shell (`/images/home-site-25/hero-desktop-clean.png`), initial dashboard content (`home-content-start.png`), final AI response content (`home-content.png`), 3 floating metric blocks (`hero-pink-block.svg`, `hero-blue-block.svg`, `hero-gray-block.svg`), 2 cursors (`hero-cursor-left.svg`, `hero-cursor-right.svg`), interactive AI input box (`Ask anything...` typing into `What’s the impact on subscriptions from the big launch this month?` and morphing into a `#F3F3F5` chat bubble), and the 17-logo infinite CSS marquee (`carousel-scroll 50s linear infinite`, pauses on hover).
   - Mobile/Tablet (`<1024px`): Responsive hero with `/images/backgrounds/bg-home-square.jpg`, `hero-medium.png` + `hero-mobile.png` layered previews, followed by `BrandCarousel`.
3. **Product Intro Section (`ProductIntroSection`)**:
   - SplitText heading `A new kind of / analytics platform`.
   - Desktop: 3 interactive cards (`Built on metrics`, `Powered by AI`, `Designed for engagement`) that scale (`scale-110` active vs `scale-90` inactive), shift horizontally, change color palettes (`#FBE1D1`/`#5D2A1A`, `#D3E3FC`/`#194168`, `#D8EFDF`/`#1F4720`), reveal descriptions, and play inline SVG GSAP animations (`#bottle`/`#tray`/`#platform`, `#lego-top`/`#lego-middle`/`#lego-bottom`, `#rocket`/`#fire`/`#star-1`/`#star-2`).
   - Mobile: Horizontal scroll-snap carousel with prev/next buttons.
4. **Product Section (`ProductSection` - "Engage everyone")**:
   - Background `#FAFAFB` with `/images/backgrounds/bg-home-showcase.jpg` + noise overlay.
   - Desktop (`>=1280px` vertical accordion tabs with `progressFill` bar; `768px-1279px` horizontal tab bar): 6 tabs (`AI`, `Explore`, `Reports`, `Drill down`, `Targets`, `Maps`) driving `@rive-app/react-webgl2` canvas (`/animations/global-animations.riv`, `stateMachines: "sectionMachine"`, custom font `/fonts/SohneVF-Roman.ttf` and `/animations/assets/*.png`). Auto-advances on Rive `EndEvent`, click canvas to pause/resume.
   - Mobile (`<=768px`): Stacked feature cards + horizontal snap carousel.
5. **Customer Story Section (`CustomerStorySection`)**:
   - Background `#D3E3FC`. 4 brands (`Voi`, `Juni`, `Bounce`, `Onceupon`).
   - Desktop: Left column quote (`SplitText`) + CTAs (`mix-blend-multiply`) + bottom 4-column brand selector with sliding top indicator bar; right column `AnimatedImage` (`mix-blend-multiply`) with GSAP cross-fade scale transition (`expo.out`).
   - Mobile: Horizontal scroll-snap portrait carousel with `IntersectionObserver` dynamic scale and synchronized quote switcher.
6. **Semantic Platform Section (`SemanticPlatformSection` - "Ship metrics, not dashboards")**:
   - Dark theme (`#121212`) with linear gradient + SVG noise overlay.
   - 5 tabs (`Semantic platform`, `Steep API`, `Metrics catalog`, `Define in code`, `Manage in app`) switching `AnimatedImage` previews, plus 4-column staggered feature grid (`Fine-grained permissions`, `Smart caching`, `dbt + Cube integrations`, `OSI ready`).
7. **AI Section (`AiSection` - "Unlock deep analysis")**:
   - Background `#f2f2f3` with `/images/ai/bg-ai-section.jpg` + noise overlay.
   - Center preview `/images/ai/hero-medium-long.png` with 3 floating persona cards (`Mary · Finance`, `Carl · Sales`, `Josephine · Marketing`), followed by 3 staggered feature cards (`Answers you can trust`, `Generate reports`, `Support teams where they work`).
8. **Get Started Section (`GetStartedSection`)**:
   - Mirrored (`-scale-x-100`) autoplay looping video `/videos/door.mp4` (with `/images/model/get-started-light-fallback.png` fallback on `<=640px`), SplitText heading `Get started for free`, and CTAs.
9. **Footer & Cookie Banner (`SteepFooter`, `CookieBanner`)**:
   - 5-column footer with external link diagonal arrows, social links, copyright, and `Cookie Settings` trigger; fixed bottom-left glassmorphic cookie consent banner.

## 4. `/product` Page Section Order & Motion Architecture

1. **Product Hero (`ProductHeroSection`)**:
   - WebGL1 Simplex noise + 3-octave FBM + nested domain-warp shader (`#marble` canvas) with responsive zoom/yOffset (`<480px`, `<1024px`, `>=1024px`), film grain, and first-frame opacity fade-in.
   - GSAP `SplitText` character-level rotating headline (`Built for` + `commercial`, `operations`, `product`, `marketing`, `finance`, `everyone`) with looping stagger timeline (`repeat: -1`, `delay: 1.5s`, 6s hold on `everyone`), followed by 3 responsive report preview breakpoints (`hero-report.png` and `hero-report-large.png`).
2. **Explore and Analyze (`ExploreAndAnalyzeSection`)**:
   - Centered `SplitHeadingBlock`, split feature card (`Easy to learn. / Deep where it counts.` + `explore.png`), `ThreeCardRow` (`All numbers can be trusted`, `Powerful breakdowns`, `Easy compares`), and 4-column `StaggerFeatureGrid` (`Pivot tables`, `Cohort analysis`, `Heatmaps`, `Smart filters`) with custom 48x48 SVG icons.
3. **Data at Your Fingertips (`MobileAppBanner` / `ScaleInViewBanner`)**:
   - ScrollTrigger scale-in banner (`initialScale: 0.8 -> 1`, `duration: 1.2s`, `power2.out`) with desktop (`mobile-horizontal.jpg`) and mobile (`mobile-vertical.jpg`) photography and a glassmorphic overlay card linking to `/download`.
4. **Reports (`ReportsSection`)**:
   - Centered `SplitHeadingBlock`, responsive report showcase (`reports-hero-square.png` / `reports-hero-medium.png` on mobile, `reports-hero.png` on desktop), 4-column `StaggerFeatureGrid` (`Growth reports`, `Product engagement`, `Business reviews`, `Deep-dives`), and `ThreeCardRow` (`Rich building blocks`, `Global filters`, `Schedule to Slack`).
5. **Entities (`EntitiesSection`)**:
   - Two-column hero (`SplitHeadingBlock` + `entities-hero.png`) followed by `ThreeCardRow` (`Drill down from anywhere`, `Custom links`, `Export`).
6. **Maps (`MapsSection`)**:
   - Centered `SplitHeadingBlock` and responsive 3-image mosaic (`maps-red.png`, `maps-satellite.jpg`, `maps-blue.png`) with caption (`Maps made to be explored`).
7. **Scale with Steep (`ScaleWithSteepSection`)**:
   - Left-aligned `SplitHeadingBlock` and `FourCardRow` (mobile `SnapCarousel` + desktop 4-column staggered grid: `Customized home screen`, `A space for each team`, `Personal favorites`, `Collaborate at scale`).
8. **Get Started (`GetStartedSection`)**:
   - Shared CTA section with mirrored looping door video (`/videos/door.mp4`) and sign-up / demo actions.

## 5. `/ai` Page Section Order & Motion Architecture

1. **AI Hero (`AiHeroSection`)**:
   - WebGL1 log-spiral 7-arm galaxy shader (`#galaxy` canvas) with 3-stop arm color gradient (`#f6c5f7` -> `#e0c4fd` -> `#42adff`), core glow (`#ffb8b8`), static UV rotation (`135deg`) + tilt (`51deg`), time-based spin (`speed: 0.34`), film grain, responsive radius/centerX/centerY (`<640px`, `<1024px`, `>=1024px`), first-frame opacity fade-in (`duration-700`), and optional `?debug=galaxy` live control panel.
   - Centered `SplitHeadingBlock` (`AI that understands / your business`) and 3 responsive hero previews (`hero-small.png`, `hero-medium.png`, `hero-large.png`) with floating persona cards (`Mary · Finance`, `Carl · Sales`, `Josephine · Marketing`).
2. **Deep Analysis Intro (`AiIntroSection`)**:
   - Centered `SplitHeadingBlock` (`Deep analysis, powered by AI`).
   - 3 interactive tabs (`Full-picture analysis`, `Results you can scan`, `Ready-to-share summaries`) with 8s auto-advance timer and `ScrollTrigger` viewport reset (`start: "top 80%"`, `end: "bottom 20%"`).
   - Responsive presentation: mobile `FeatureImageStack` (`carousel-1/2/3-small.png`), tablet/laptop `HorizontalTabBar` + `animate-fade-in-y` description, and XL desktop `VerticalAccordionTabs` with `progressFill` bar + `/images/ai/bg-features.jpg` + `NoiseOverlay` and `animate-fade-in` preview (`carousel-1/2/3-large.png`).
3. **Analysis Three Cards (`AiThreeCardsSection`)**:
   - `ThreeCardRow` (mobile `SnapCarousel` with `expandInView` dynamic scale/opacity + desktop staggered 3-column grid): `Company-wide intelligence`, `Actionable insights`, `Seamless workflows`.
4. **Answers You Can Trust (`AiCapabilitiesSection`)**:
   - Two-column header (`Answers you can trust` + `/images/ai/ill-trust-large.png`) followed by `ThreeCardRow` (`Consistent definitions everywhere`, `Transparent reasoning`, `Clarifies instead of assumes`).
5. **Mobile Agent Banner (`AiMobileBannerSection`)**:
   - Full-width photography (`phone-small.jpg` on `<1024px`, `phone-large.jpg` on `>=1024px`) over `#121212` with a floating glassmorphic card (`Reach your agent from anywhere`) linking to `/download`.
6. **Power Every Agent (`AiAgentsSection`)**:
   - Dark theme (`#121212`) with centered `SplitHeadingBlock`, `#232323` showcase card (`overview-large.jpg` / `overview-medium.jpg`), and 4-column `StaggerFeatureGrid` (`One source of truth`, `Full semantic access`, `Plugs into your stack`, `Built for engineering`).
7. **Available in All Channels (`AiChannelsSection`)**:
   - Dark theme (`#121212`) with centered `SplitHeadingBlock` containing inline `/images/ai/slack-logo.svg`, followed by responsive Slack preview (`slack-small.png` / `slack-large.png`).
8. **Safeguarding Your Data (`AiSafeguardSection`)**:
   - Dark theme (`#121212`) with left-aligned `SplitHeadingBlock` and 4-column `StaggerFeatureGrid` (`No training`, `Permissions apply`, `Minimal data exposure`, `Encrypted in transit`).
9. **Start Using AI-Analytics Today (`AiGetStartedSection`)**:
   - `#1A1A1A` CTA section with `/images/ai/ill-robot-large.png`, `SplitHeadingBlock`, and `Get started` / `Book a demo` buttons, followed by dark `SteepFooter`.

## 6. `/semantic-platform` Page Section Order & Motion Architecture

1. **Semantic Platform Hero (`SemanticPlatformHeroSection`)**:
   - WebGL1 Simplex noise + 3-octave FBM + nested domain-warp shader (`#marble` canvas) with dark palette (`#aa14f0`, `#72ecee`, `#ee7658`, `#15101e`, `#121212`), responsive zoom/xOffset/yOffset (`<480px`, `<1024px`, `>=1024px`), film grain, and first-frame opacity fade-in (`duration-700`).
   - Centered `SplitHeadingBlock` (`Ship metrics, / not dashboards`) and layered hero previews (`/images/model/hero-modules.png` + `/images/model/hero-code.png`).
2. **Semantic Platform Overview (`SemanticPlatformOverviewSection`)**:
   - Centered `SplitHeadingBlock` (`Semantic platform`), dark showcase card (`#1A1A1A`) with `/images/model/semantic-hero-ill.png` and 4-column `StaggerFeatureGrid` (`Modules & joins`, `Metrics & dimensions`, `Entities`, `Targets`), followed by `ThreeCardRow` (`Version-controlled code definitions`, `In-app editor`, `Integrations`).
3. **Metrics Catalog (`MetricsCatalogSection`)**:
   - Two-column header (`SplitHeadingBlock` + `/images/model/catalog-hero.jpg`) followed by `ThreeCardRow` (`Ship clear definitions`, `Clarify business owners`, `Quick access to explore`).
4. **Empower All Users Banner (`EmpowerUsersBannerSection` / `ScaleInViewBanner`)**:
   - ScrollTrigger scale-in banner (`initialScale: 0.8 -> 1`, `duration: 1.2s`, `power2.out`) with `/images/model/photo-laptop-grad.jpg` and a floating glassmorphic card (`Empower all users with governed metrics`).
5. **Control Permissions (`ControlPermissionsSection`)**:
   - Left-aligned `SplitHeadingBlock` and `FourCardRow` (mobile `SnapCarousel` + desktop 4-column staggered grid: `User roles`, `Smart Metric-level permissions`, `Teams and groups`, `Row-level security`).
6. **Steep API (`SteepApiSection`)**:
   - `#1A1A1A` showcase section with `SplitHeadingBlock` (`Steep API`), `/images/model/api-hero.png`, caption (`Define once. Use anywhere.`), and 4-column `StaggerFeatureGrid` (`Connect to AI platforms`, `Extend functionality`, `Embed`, `Script anything`).
7. **Caching Layer (`CachingLayerSection`)**:
   - Two-column layout (`SplitHeadingBlock` with 3 inline feature items on `>=1280px` + `/images/model/cache.svg`) and a responsive 1/2/3-column feature grid below `1280px` (`Global metrics-native cache`, `Made for high engagement`, `Fine-grained retention control`).
8. **For Enterprise (`ForEnterpriseSection`)**:
   - Left-aligned `SplitHeadingBlock` and `FourCardRow` (`Company SSO`, `User provisioning`, `Audit logs`, `Multi-workspace setup`).
9. **Get Started (`GetStartedSection`)**:
   - Dark mode CTA section (`mode="dark"`) with mirrored `/images/model/get-started.png`, `SplitHeadingBlock` (`Get started for free`), and sign-up / demo buttons.
