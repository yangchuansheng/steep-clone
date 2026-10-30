"use client";

import { useState, type CSSProperties, type Ref } from "react";
import {
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
    image: "/images/sealos/workflow-4-canvas.png",
    mediumImage: "/images/sealos/workflow-4-canvas.png",
    smallImage: "/images/sealos/workflow-4-canvas-sq.png",
    bordered: false,
  },
  {
    id: "Steep API",
    label: STEEP_COPY.semanticPlatform.featureSteepApi.title,
    artboard: "Maps",
    duration: 6.14,
    description: STEEP_COPY.semanticPlatform.featureSteepApi.description,
    image: "/images/sealos/workflow-3-template.png",
    smallImage: "/images/sealos/workflow-3-template-sq.png",
    bordered: false,
  },
  {
    id: "Metrics catalog",
    label: STEEP_COPY.semanticPlatform.featureMetricsCatalog.title,
    artboard: "Drill-down",
    duration: 13.16,
    description: STEEP_COPY.semanticPlatform.featureMetricsCatalog.description,
    image: "/images/sealos/hero-deployed-canvas.png",
    smallImage: "/images/sealos/compare-2-network.png",
    bordered: true,
  },
  {
    id: "Define in code",
    label: STEEP_COPY.semanticPlatform.featureDefineInCode.title,
    artboard: "Targets",
    duration: 8,
    description: STEEP_COPY.semanticPlatform.featureDefineInCode.description,
    image: "/images/sealos/ops-3-database.png",
    smallImage: "/images/sealos/tier-3-cluster.png",
    bordered: true,
  },
];

interface CanvasNodeData {
  id: string;
  kind: "Service" | "PostgreSQL" | "Redis" | "AI Gateway";
  subtitle: string;
  badge: string;
  internalHost: string;
  backupPolicy: string;
  envRef: string;
}

interface CanvasStackData {
  projectName: string;
  nodes: readonly [
    CanvasNodeData,
    CanvasNodeData,
    CanvasNodeData,
    CanvasNodeData,
  ];
}

const ARCHITECTURE_STACKS: readonly CanvasStackData[] = [
  {
    projectName: "new-api-gateway",
    nodes: [
      {
        id: "new-api",
        kind: "Service",
        subtitle: "api-hub.sealos.run ↗",
        badge: "1 vCPU / 2 GiB",
        internalHost: "new-api.ns-acme.svc:3000",
        backupPolicy: "Daily 12:00 Backup",
        envRef: "${{new-api-pg.DATABASE_URL}}",
      },
      {
        id: "new-api-pg",
        kind: "PostgreSQL",
        subtitle: "PostgreSQL 16 · Replicated · Backup 12:00",
        badge: "Replicated · 20 GiB",
        internalHost: "new-api-pg.ns-acme.svc:5432",
        backupPolicy: "Daily 12:00 Backup",
        envRef: "${{new-api-pg.DATABASE_URL}}",
      },
      {
        id: "new-api-redis",
        kind: "Redis",
        subtitle: "Redis 7.2 · 0.5 vCPU / 512 MiB",
        badge: "In-Memory Cache",
        internalHost: "new-api-redis.ns-acme.svc:6379",
        backupPolicy: "Daily 12:00 Backup",
        envRef: "${{new-api-redis.REDIS_URL}}",
      },
      {
        id: "ai-gateway",
        kind: "AI Gateway",
        subtitle: "Connected · OpenAI Protocol · OPENAI_API_KEY",
        badge: "Unified Router",
        internalHost: "ai-gateway.ns-acme.svc:4000",
        backupPolicy: "Key Rotation Active",
        envRef: "${{ai-gateway.OPENAI_API_KEY}}",
      },
    ],
  },
  {
    projectName: "dify-n8n-stack",
    nodes: [
      {
        id: "dify-web",
        kind: "Service",
        subtitle: "dify-studio.sealos.run ↗ · Auto-fill",
        badge: "1 vCPU / 2 GiB",
        internalHost: "dify-web.ns-acme.svc:3000",
        backupPolicy: "Daily 12:00 Backup",
        envRef: "${{dify-pg.DATABASE_URL}}",
      },
      {
        id: "dify-worker",
        kind: "Service",
        subtitle: "1 vCPU / 2 GiB",
        badge: "Celery Worker",
        internalHost: "dify-worker.ns-acme.svc:5001",
        backupPolicy: "Daily 12:00 Backup",
        envRef: "${{dify-redis.REDIS_URL}}",
      },
      {
        id: "dify-pg",
        kind: "PostgreSQL",
        subtitle: "PostgreSQL 16 · Replicated · Backup 12:00",
        badge: "Replicated · 20 GiB",
        internalHost: "dify-pg.ns-acme.svc:5432",
        backupPolicy: "Daily 12:00 Backup",
        envRef: "${{dify-pg.DATABASE_URL}}",
      },
      {
        id: "dify-redis",
        kind: "Redis",
        subtitle: "Redis 7.2 · Queue & Cache",
        badge: "0.5 vCPU / 1 GiB",
        internalHost: "dify-redis.ns-acme.svc:6379",
        backupPolicy: "Daily 12:00 Backup",
        envRef: "${{dify-redis.REDIS_URL}}",
      },
    ],
  },
  {
    projectName: "quote-deck-leads",
    nodes: [
      {
        id: "quote-deck-web",
        kind: "Service",
        subtitle: "quote-deck.sealos.run ↗",
        badge: "HTTPS Ready",
        internalHost: "quote-deck-web.ns-acme.svc:3000",
        backupPolicy: "Daily 12:00 Backup",
        envRef: "${{leads-pg.DATABASE_URL}}",
      },
      {
        id: "lead-worker",
        kind: "Service",
        subtitle: "0.5 vCPU / 512 MiB",
        badge: "Webhook Consumer",
        internalHost: "lead-worker.ns-acme.svc:8080",
        backupPolicy: "Daily 12:00 Backup",
        envRef: "${{leads-pg.DATABASE_URL}}",
      },
      {
        id: "leads-pg",
        kind: "PostgreSQL",
        subtitle: "PostgreSQL 16 · 0.5 vCPU / 1 GiB",
        badge: "Persistent Volume",
        internalHost: "leads-pg.ns-acme.svc:5432",
        backupPolicy: "Daily 12:00 Backup",
        envRef: "${{leads-pg.DATABASE_URL}}",
      },
      {
        id: "leads-redis",
        kind: "Redis",
        subtitle: "Redis 7.2 · Session Cache",
        badge: "0.5 vCPU / 512 MiB",
        internalHost: "leads-redis.ns-acme.svc:6379",
        backupPolicy: "Daily 12:00 Backup",
        envRef: "${{leads-redis.REDIS_URL}}",
      },
    ],
  },
  {
    projectName: "multi-client-saas",
    nodes: [
      {
        id: "acme-web",
        kind: "Service",
        subtitle: "acme-saas.sealos.run ↗",
        badge: "Next.js 16 · TLS",
        internalHost: "acme-web.ns-acme.svc:3000",
        backupPolicy: "Daily 12:00 Backup",
        envRef: "${{saas-pg.DATABASE_URL}}",
      },
      {
        id: "acme-api",
        kind: "Service",
        subtitle: "2 Replicas · Deploying update",
        badge: "Zero-Downtime Rollout",
        internalHost: "acme-api.ns-acme.svc:4000",
        backupPolicy: "Daily 12:00 Backup",
        envRef: "${{saas-pg.DATABASE_URL}}",
      },
      {
        id: "saas-pg",
        kind: "PostgreSQL",
        subtitle: "PostgreSQL 16 · Replicated · 14d Backup",
        badge: "Primary + Standby",
        internalHost: "saas-pg.ns-acme.svc:5432",
        backupPolicy: "Daily 12:00 Backup (14d)",
        envRef: "${{saas-pg.DATABASE_URL}}",
      },
      {
        id: "ai-gateway",
        kind: "AI Gateway",
        subtitle: "Connected · Anthropic Protocol",
        badge: "ANTHROPIC_API_KEY",
        internalHost: "ai-gateway.ns-acme.svc:4000",
        backupPolicy: "Key Rotation Active",
        envRef: "${{ai-gateway.ANTHROPIC_API_KEY}}",
      },
    ],
  },
];

function SealosArchitectureCanvas({ activeIndex }: { activeIndex: number }) {
  const [selectedNodeByStack, setSelectedNodeByStack] = useState<
    Record<number, number>
  >({});
  const stack = ARCHITECTURE_STACKS[activeIndex] ?? ARCHITECTURE_STACKS[0];
  const selectedNodeIdx = selectedNodeByStack[activeIndex] ?? 0;
  const inspectedNode = stack.nodes[selectedNodeIdx] ?? stack.nodes[0];

  return (
    <div className="w-full aspect-960/640 rounded-2xl lg:rounded-3xl bg-[#F9F9FB] text-[#18181B] border border-white/10 shadow-2xl overflow-hidden flex flex-col select-none">
      <div className="h-12 px-4 bg-white border-b border-black/6 flex items-center justify-between text-xs shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-medium text-[#18181B]">
            <span className="inline-flex size-5 items-center justify-center rounded-md bg-[#18181B] text-white text-[11px] font-semibold">
              S
            </span>
            <span>Sealos</span>
            <span className="text-black/30">/</span>
            <span className="font-mono text-[11px] text-black/70">
              {stack.projectName}
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-1 bg-[#F4F4F6] p-1 rounded-lg">
            <span className="px-2.5 py-1 rounded-md bg-white text-[#18181B] font-medium shadow-2xs">
              Architecture
            </span>
            <span className="px-2.5 py-1 text-black/50">Monitor</span>
            <span className="px-2.5 py-1 text-black/50">Logs</span>
            <span className="px-2.5 py-1 text-black/50">Settings</span>
          </div>
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
          <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>● Running · 4/4 online</span>
        </div>
      </div>

      <div className="flex-1 flex min-h-0">
        <div
          className="flex-1 relative p-5 lg:p-6 flex flex-col justify-between overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(rgba(24, 24, 27, 0.12) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        >
          <svg
            className="pointer-events-none absolute inset-0 w-full h-full"
            viewBox="0 0 600 480"
            preserveAspectRatio="none"
          >
            <path
              d="M 175 135 C 275 135, 315 135, 415 135"
              fill="none"
              stroke="#10B981"
              strokeWidth="1.75"
              strokeDasharray="5 5"
              className="animate-pulse"
            />
            <path
              d="M 175 145 C 285 180, 305 295, 415 320"
              fill="none"
              stroke="#6366F1"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <path
              d="M 175 320 C 275 320, 315 160, 415 145"
              fill="none"
              stroke="#10B981"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <path
              d="M 175 325 C 275 325, 315 325, 415 325"
              fill="none"
              stroke="#0EA5E9"
              strokeWidth="1.75"
              strokeDasharray="5 5"
              className="animate-pulse"
            />
          </svg>

          <div className="relative z-10 grid grid-cols-2 gap-4 lg:gap-5 my-auto">
            {stack.nodes.map((node, idx) => {
              const isSelected = idx === selectedNodeIdx;
              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() =>
                    setSelectedNodeByStack((prev) => ({
                      ...prev,
                      [activeIndex]: idx,
                    }))
                  }
                  className={`canvas-node text-left rounded-2xl bg-white p-3.5 lg:p-4 transition-all cursor-pointer border ${
                    isSelected
                      ? "border-[#18181B] ring-2 ring-black/8 shadow-lg"
                      : "border-black/8 hover:border-black/25 shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-black/55">
                      <span className="size-2 rounded-full bg-emerald-500" />
                      {node.kind}
                    </span>
                    <span className="rounded-md bg-[#F4F4F6] px-1.5 py-0.5 text-[10px] font-medium text-black/65">
                      {node.badge}
                    </span>
                  </div>
                  <div className="font-mono text-xs lg:text-sm font-semibold text-[#18181B] truncate">
                    {node.id}
                  </div>
                  <div className="mt-1 text-[11px] text-black/60 truncate">
                    {node.subtitle}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="relative z-10 flex items-center justify-between pt-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-black/10 px-3 py-1.5 text-xs font-medium text-[#18181B] shadow-xs">
              <span>+ Add service</span>
            </span>
            <span className="text-[11px] text-black/45 font-mono">
              Private K8s DNS · Auto-injected env
            </span>
          </div>
        </div>

        <div className="w-[250px] xl:w-[300px] bg-white border-l border-black/6 p-4 lg:p-5 flex flex-col justify-between shrink-0">
          <div>
            <div className="flex items-center justify-between gap-2 pb-3 border-b border-black/6">
              <div>
                <div className="text-[11px] text-black/45 font-medium">
                  Inspector · {inspectedNode.kind}
                </div>
                <div className="font-mono text-sm font-semibold text-[#18181B]">
                  {inspectedNode.id}
                </div>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
                ● Running
              </span>
            </div>

            <div className="mt-3 flex flex-wrap gap-1 text-[11px] text-black/55 border-b border-black/6 pb-2.5">
              <span className="font-semibold text-[#18181B]">Overview</span>
              <span>·</span>
              <span>Logs</span>
              <span>·</span>
              <span>Metrics</span>
              <span>·</span>
              <span>Variables</span>
              <span>·</span>
              <span>Settings</span>
            </div>

            <div className="mt-3.5 space-y-2.5 text-xs">
              <div className="rounded-xl bg-[#F9F9FB] p-2.5 border border-black/5">
                <div className="text-[10px] uppercase tracking-wider text-black/45">
                  Internal DNS Host
                </div>
                <div className="mt-0.5 font-mono text-[11px] text-[#18181B] truncate">
                  {inspectedNode.internalHost}
                </div>
              </div>

              <div className="rounded-xl bg-[#F9F9FB] p-2.5 border border-black/5">
                <div className="text-[10px] uppercase tracking-wider text-black/45">
                  Backup & Recovery
                </div>
                <div className="mt-0.5 text-[11px] font-medium text-[#18181B]">
                  {inspectedNode.backupPolicy}
                </div>
              </div>

              <div className="rounded-xl bg-[#F9F9FB] p-2.5 border border-black/5">
                <div className="text-[10px] uppercase tracking-wider text-black/45">
                  Injected Variable Reference
                </div>
                <div className="mt-0.5 font-mono text-[11px] text-emerald-700 truncate">
                  {inspectedNode.envRef}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-black/6 flex items-center justify-between text-[11px] text-black/55">
            <span>*.ns-acme.svc:5432</span>
            <span className="font-mono text-[#18181B] font-medium">
              TLS 1.3 Ready
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

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
                <SealosArchitectureCanvas activeIndex={activeIndex} />
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
