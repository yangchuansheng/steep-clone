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

interface OpsScenarioMeta {
  taskTitle: string;
  activeTab: "Architecture" | "Monitor" | "Logs" | "Settings" | "Browser";
  prompt: string;
  checks: readonly string[];
  planTitle: string;
  planSummary: string;
  actionLabel: string;
}

const OPS_SCENARIO_META: readonly OpsScenarioMeta[] = [
  {
    taskTitle: "acme-api · 502 & OOM Diagnostics",
    activeTab: "Monitor",
    prompt:
      "Why is acme-api returning 502s over the last 30 minutes? Fix it without downtime.",
    checks: [
      "Inspected Runtime log: container exited with OOMKilled (exit code 137)",
      "Correlated 6h Memory curve peaking at 96% (980 MiB / 1 GiB)",
      "Prepared rolling resource upgrade + Postgres pool timeout adjustment",
    ],
    planTitle: "Deploy Plan · Resource Upgrade",
    planSummary: "Memory 1 GiB → 2 GiB · PG_POOL_MAX=25 · Rolling restart",
    actionLabel: "1. Allow",
  },
  {
    taskTitle: "quote-deck-web · Hot Update & Rollback",
    activeTab: "Browser",
    prompt:
      "Update the hero CTA on quote-deck.sealos.run and verify all static assets before switching traffic.",
    checks: [
      "Selected 1 web element from built-in browser preview",
      "Built incremental image from Git diff (+24 -4)",
      "Verified Root 200 OK and 8/8 static CSS/JS/img assets 200 OK",
    ],
    planTitle: "Confirm before changes · Hot Rollout",
    planSummary: "Switch live traffic to build #b84e2a1 · Keep 1-click Rollback",
    actionLabel: "Confirm",
  },
  {
    taskTitle: "saas-pg · DB Scaling & Local Tunnel",
    activeTab: "Architecture",
    prompt:
      "Expand saas-pg storage to 40 GiB and open a local encrypted tunnel for Prisma Studio.",
    checks: [
      "Volume usage at 89% (17.8 GiB / 20 GiB) on Primary + Standby",
      "Verified Daily 12:00 Backup (14d retention) snapshot ready",
      "Mapped local encrypted tunnel 127.0.0.1:15432 ⇄ saas-pg.ns-prod.svc:5432",
    ],
    planTitle: "Deploy Plan · Online Volume Expansion",
    planSummary: "Expand PVC 20 GiB → 40 GiB online · Keep tunnel active",
    actionLabel: "1. Allow",
  },
  {
    taskTitle: "new-api · Config Mount & Batch Env",
    activeTab: "Settings",
    prompt:
      "Mount custom /etc/nginx/nginx.conf and batch-import Redis & Postgres environment references.",
    checks: [
      "Validated nginx.conf syntax and mounted read-only at /etc/nginx/nginx.conf",
      "Parsed 6 key-value pairs in Variables → Batch paste",
      "Resolved ${{new-api-redis.REDIS_URL}} internal service reference",
    ],
    planTitle: "Confirm before changes · Config & Env",
    planSummary: "Mount 1 config file + inject 6 variables · Rolling reload",
    actionLabel: "Confirm",
  },
  {
    taskTitle: "ai-gateway · AI Gateway Tracing",
    activeTab: "Logs",
    prompt:
      "Trace slow completions on /v1/chat/completions and rotate the primary OpenAI & Anthropic keys.",
    checks: [
      "Located Request ID: 8f2a9c1d4e7b3a10 · TTFT: 420ms · HTTP 200",
      "Aggregated 24h / 7d / 30d model spend across GPT-4.1 & Claude 3.7",
      "Rotated upstream provider keys with zero dropped requests",
    ],
    planTitle: "Deploy Plan · Gateway Key Rotation",
    planSummary: "Rotate OPENAI_API_KEY & ANTHROPIC_API_KEY · Keep rate limits",
    actionLabel: "1. Allow",
  },
  {
    taskTitle: "workspace-prod · 7 Service Health Hints",
    activeTab: "Monitor",
    prompt:
      "Run a full workspace health sweep and surface all non-blocking runtime service hints.",
    checks: [
      "Scanned 12 services and 4 replicated databases across ns-prod",
      "Verified old instance serving traffic safely during failed deploy",
      "Prepared remediation plan for unhealthy replica and failed backup",
    ],
    planTitle: "Confirm before changes · Auto-Remediation",
    planSummary: "Retry backup job + replace unhealthy pod replica",
    actionLabel: "Confirm",
  },
];

const SERVICE_HEALTH_HINTS = [
  {
    label: "Deploying update",
    detail: "acme-api · rolling out v2.4.1 (1/2 ready)",
    tone: "bg-sky-500/10 text-sky-700 border-sky-500/20",
    dot: "bg-sky-500",
  },
  {
    label: "Last deploy failed · old instance serving",
    detail: "billing-worker · image pull timeout, v2.3.9 still online",
    tone: "bg-amber-500/10 text-amber-800 border-amber-500/20",
    dot: "bg-amber-500",
  },
  {
    label: "Some instances unhealthy",
    detail: "search-indexer · 1 of 3 pods failing readiness probe",
    tone: "bg-amber-500/10 text-amber-800 border-amber-500/20",
    dot: "bg-amber-500",
  },
  {
    label: "Recently restarted",
    detail: "acme-api · restarted 14m ago (exit code 137)",
    tone: "bg-rose-500/10 text-rose-700 border-rose-500/20",
    dot: "bg-rose-500",
  },
  {
    label: "Near resource limit",
    detail: "acme-api · Memory at 96% of 1 GiB limit",
    tone: "bg-rose-500/10 text-rose-700 border-rose-500/20",
    dot: "bg-rose-500",
  },
  {
    label: "Backup in progress",
    detail: "saas-pg · snapshot #2026-10-31-1200 streaming (68%)",
    tone: "bg-indigo-500/10 text-indigo-700 border-indigo-500/20",
    dot: "bg-indigo-500",
  },
  {
    label: "Last backup failed",
    detail: "analytics-pg · S3 bucket quota reached, retry queued",
    tone: "bg-amber-500/10 text-amber-800 border-amber-500/20",
    dot: "bg-amber-500",
  },
] as const;

interface SealosOpsWorkbenchProps {
  activeIndex: number;
  duration: number;
  onSectionDone?: () => void;
  onPauseChange?: (isPaused: boolean) => void;
}

function SealosOpsWorkbench({
  activeIndex,
  duration,
  onSectionDone,
  onPauseChange,
}: SealosOpsWorkbenchProps) {
  const [isPaused, setIsPaused] = useState(false);
  const elapsedMsRef = useRef(0);
  const onSectionDoneRef = useRef(onSectionDone);

  useEffect(() => {
    onSectionDoneRef.current = onSectionDone;
  }, [onSectionDone]);

  useEffect(() => {
    if (isPaused) return;
    const totalMs = duration * 1000;
    let lastTick = performance.now();
    const interval = window.setInterval(() => {
      const now = performance.now();
      elapsedMsRef.current += now - lastTick;
      lastTick = now;
      if (elapsedMsRef.current >= totalMs) {
        window.clearInterval(interval);
        onSectionDoneRef.current?.();
      }
    }, 100);
    return () => window.clearInterval(interval);
  }, [isPaused, duration]);

  const togglePause = () => {
    const nextPaused = !isPaused;
    setIsPaused(nextPaused);
    onPauseChange?.(nextPaused);
  };

  const meta = OPS_SCENARIO_META[activeIndex] ?? OPS_SCENARIO_META[0];
  const tabs = [
    "Architecture",
    "Monitor",
    "Logs",
    "Settings",
    "Browser",
  ] as const;

  return (
    <div
      onClick={togglePause}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          togglePause();
        }
      }}
      className="w-full h-full bg-white flex flex-col text-[#18181B] select-none cursor-pointer"
    >
      <div className="h-11 px-4 border-b border-black/6 flex items-center justify-between text-xs shrink-0 bg-white">
        <div className="flex items-center gap-3 min-w-0">
          <span className="font-mono text-xs font-semibold text-[#18181B] truncate">
            {meta.taskTitle}
          </span>
          <div className="hidden xl:flex items-center gap-1 bg-[#F4F4F6] p-0.5 rounded-lg">
            {tabs.map((tab) => (
              <span
                key={tab}
                className={`px-2 py-0.5 rounded-md text-[11px] ${
                  meta.activeTab === tab
                    ? "bg-white text-[#18181B] font-medium shadow-2xs"
                    : "text-black/50"
                }`}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 text-[11px] font-medium text-amber-800">
            ✋ Confirm before changes
          </span>
        </div>
      </div>

      <div className="flex-1 flex min-h-0">
        <div className="w-[44%] border-r border-black/6 p-4 lg:p-5 flex flex-col justify-between bg-[#FAFAFA]">
          <div className="space-y-3">
            <div className="rounded-2xl bg-white border border-black/8 p-3 shadow-2xs">
              <div className="text-[10px] font-medium uppercase tracking-wider text-black/40 mb-1">
                Operator Prompt
              </div>
              <p className="text-xs leading-relaxed text-[#18181B]">
                {meta.prompt}
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-black/6 p-3 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[#18181B]">
                  Ops Agent Diagnosis
                </span>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                  3/3 verified
                </span>
              </div>
              <ul className="space-y-1.5 text-[11px] text-black/70 leading-snug">
                {meta.checks.map((check) => (
                  <li key={check} className="flex items-start gap-1.5">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{check}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-black/10 p-3.5 shadow-sm">
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-xs font-semibold text-[#18181B]">
                {meta.planTitle}
              </span>
              <span className="text-[10px] font-mono text-amber-800 bg-amber-500/10 px-1.5 py-0.5 rounded">
                Confirm before changes
              </span>
            </div>
            <p className="text-[11px] text-black/60 font-mono mb-3">
              {meta.planSummary}
            </p>
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center rounded-full bg-[#18181B] text-white px-3 py-1 text-[11px] font-medium">
                {meta.actionLabel}
              </span>
              <span className="text-[11px] text-black/45">
                {isPaused ? "Paused · Click to resume" : "Auto-playing · Click to pause"}
              </span>
            </div>
          </div>
        </div>

        <div className="w-[56%] p-4 lg:p-5 flex flex-col justify-between bg-white overflow-hidden">
          {activeIndex === 0 && (
            <>
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold text-[#18181B]">
                    Service Hints & 6h Memory Curve
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="rounded-full bg-rose-500/10 border border-rose-500/20 px-2 py-0.5 text-[10px] font-medium text-rose-700">
                      Recently restarted
                    </span>
                    <span className="rounded-full bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 text-[10px] font-medium text-amber-800">
                      Near limit · Memory 96%
                    </span>
                  </div>
                </div>
                <div className="rounded-xl bg-[#F9F9FB] border border-black/6 p-3">
                  <div className="flex items-center justify-between text-[11px] text-black/55 mb-2">
                    <span>Memory Usage (6h)</span>
                    <span className="font-mono font-semibold text-rose-600">
                      Peak 96% · 980 MiB / 1 GiB
                    </span>
                  </div>
                  <svg viewBox="0 0 360 90" className="w-full h-20">
                    <path
                      d="M 0 72 L 60 68 L 120 64 L 180 55 L 240 42 L 290 12 L 330 8 L 360 36"
                      fill="none"
                      stroke="#E11D48"
                      strokeWidth="2.5"
                    />
                    <circle
                      cx="330"
                      cy="8"
                      r="4"
                      className="fill-rose-600 animate-ping"
                    />
                  </svg>
                </div>
              </div>
              <div className="rounded-xl bg-[#18181B] text-white p-3 font-mono text-[11px] space-y-1">
                <div className="text-white/50 text-[10px]">
                  Runtime log · acme-api-7d9c8b-x2k
                </div>
                <div className="text-rose-400">
                  [FATAL] container killed: OOMKilled (exit code 137)
                </div>
                <div className="text-amber-300">
                  [WARN] pg-pool: connection pool timeout after 5000ms
                </div>
              </div>
            </>
          )}

          {activeIndex === 1 && (
            <>
              <div className="rounded-xl border border-black/8 bg-[#F9F9FB] overflow-hidden">
                <div className="px-3 py-2 bg-white border-b border-black/6 flex items-center justify-between text-[11px]">
                  <span className="font-mono text-[#18181B]">
                    https://quote-deck.sealos.run
                  </span>
                  <span className="rounded-md bg-indigo-500/10 text-indigo-700 px-2 py-0.5 font-medium">
                    1 web element
                  </span>
                </div>
                <div className="p-3.5 space-y-2">
                  <div className="rounded-lg border-2 border-indigo-500 bg-white p-2.5 flex items-center justify-between">
                    <span className="text-xs font-medium">
                      Hero CTA · Request Custom Quote
                    </span>
                    <span className="font-mono text-[11px] text-emerald-700 bg-emerald-500/10 px-2 py-0.5 rounded">
                      Git diff +24 -4
                    </span>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-black/8 p-3.5 bg-white flex items-center justify-between">
                <div className="space-y-1">
                  <div className="text-[11px] font-semibold text-emerald-700">
                    ✓ Root 200 OK · ✓ 8/8 static CSS/JS/img assets 200 OK
                  </div>
                  <div className="text-[11px] text-black/55 font-mono">
                    Zero broken bundles detected on post-deploy probe
                  </div>
                </div>
                <span className="rounded-lg border border-black/15 px-2.5 py-1 text-xs font-medium text-[#18181B]">
                  Rollback
                </span>
              </div>
            </>
          )}

          {activeIndex === 2 && (
            <>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-[#18181B]">
                    saas-pg · PostgreSQL 16 (Replicated)
                  </span>
                  <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
                    ● Healthy
                  </span>
                </div>
                <div className="rounded-xl bg-[#F9F9FB] border border-black/6 p-3.5 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-black/60">Volume Storage</span>
                    <span className="font-mono font-semibold text-[#18181B]">
                      17.8 GiB / 20 GiB → 40 GiB
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-black/8 overflow-hidden">
                    <div className="h-full w-[45%] bg-emerald-500 rounded-full" />
                  </div>
                  <div className="text-[11px] text-black/60">
                    Daily 12:00 Backup (14d retention) · PITR Enabled
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-[#18181B] text-white p-3.5 font-mono text-xs space-y-1">
                <div className="text-[10px] uppercase tracking-wider text-emerald-400">
                  Local Encrypted Tunnel Active
                </div>
                <div>127.0.0.1:15432 ⇄ saas-pg.ns-prod.svc:5432</div>
              </div>
            </>
          )}

          {activeIndex === 3 && (
            <>
              <div className="rounded-xl bg-[#F9F9FB] border border-black/6 p-3.5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#18181B]">
                    Service settings → Config file
                  </span>
                  <span className="font-mono text-[11px] text-emerald-700">
                    Mounted
                  </span>
                </div>
                <div className="rounded-lg bg-white border border-black/8 px-3 py-2 font-mono text-[11px] text-[#18181B]">
                  /etc/nginx/nginx.conf · proxy_read_timeout 120s;
                </div>
              </div>
              <div className="rounded-xl bg-[#F9F9FB] border border-black/6 p-3.5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#18181B]">
                    Variables → Batch paste
                  </span>
                  <span className="text-[11px] text-black/50">6 variables</span>
                </div>
                <div className="rounded-lg bg-[#18181B] text-emerald-300 px-3 py-2 font-mono text-[11px]">
                  REDIS_URL=${"{{new-api-redis.REDIS_URL}}"}
                </div>
              </div>
            </>
          )}

          {activeIndex === 4 && (
            <>
              <div className="rounded-xl bg-[#F9F9FB] border border-black/6 p-3.5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#18181B]">
                    AI Gateway → Logs
                  </span>
                  <span className="font-mono text-[11px] text-emerald-700">
                    ● 200 · TTFT: 420ms
                  </span>
                </div>
                <div className="rounded-lg bg-white border border-black/8 p-2.5 font-mono text-[11px] space-y-1">
                  <div>Request ID: 8f2a9c1d4e7b3a10</div>
                  <div className="text-black/60">
                    POST /v1/chat/completions · OpenAI / Anthropic mapped
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-[#F9F9FB] border border-black/6 p-3.5">
                <div className="flex items-center justify-between text-[11px] mb-2">
                  <span className="font-semibold text-[#18181B]">
                    Model Spend
                  </span>
                  <span className="font-mono text-black/55">24h / 7d / 30d</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center font-mono text-[11px]">
                  <div className="rounded-lg bg-white p-2 border border-black/6">
                    <div className="text-black/45">24h</div>
                    <div className="font-semibold">$14.20</div>
                  </div>
                  <div className="rounded-lg bg-white p-2 border border-black/6">
                    <div className="text-black/45">7d</div>
                    <div className="font-semibold">$92.80</div>
                  </div>
                  <div className="rounded-lg bg-white p-2 border border-black/6">
                    <div className="text-black/45">30d</div>
                    <div className="font-semibold">$384.50</div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeIndex === 5 && (
            <div className="space-y-1.5 my-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-[#18181B]">
                  0.9.18 Service Hints Radar
                </span>
                <span className="text-[11px] font-mono text-black/50">
                  7 runtime signals
                </span>
              </div>
              {SERVICE_HEALTH_HINTS.map((hint) => (
                <div
                  key={hint.label}
                  className="flex items-center justify-between gap-2 rounded-lg border border-black/6 bg-[#F9F9FB] px-2.5 py-1.5 text-[11px]"
                >
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 font-medium ${hint.tone}`}
                  >
                    <span className={`size-1.5 rounded-full ${hint.dot}`} />
                    {hint.label}
                  </span>
                  <span className="font-mono text-[10px] text-black/55 truncate">
                    {hint.detail}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const STACKED_MOBILE_FEATURES = [
  {
    title: PRODUCT_SECTIONS[0].label,
    description: PRODUCT_SECTIONS[0].description,
    image: "/images/sealos/ops-1-metrics.png",
    smallImage: "/images/sealos/ops-1-metrics-sq.png",
    shadow: false,
    border: false,
  },
  {
    title: PRODUCT_SECTIONS[1].label,
    description: PRODUCT_SECTIONS[1].description,
    image: "/images/sealos/ops-2-browser.png",
    smallImage: "/images/sealos/ops-2-browser-sq.png",
    shadow: false,
    border: true,
  },
];

const CAROUSEL_MOBILE_FEATURES = [
  {
    title: PRODUCT_SECTIONS[2].label,
    description: PRODUCT_SECTIONS[2].description,
    image: "/images/sealos/ops-3-database.png",
    smallImage: "/images/sealos/ops-3-database-sq.png",
    border: true,
  },
  {
    title: PRODUCT_SECTIONS[3].label,
    description: PRODUCT_SECTIONS[3].description,
    image: "/images/sealos/ops-4-config-sq.png",
    smallImage: "/images/sealos/ops-4-config-sq.png",
    border: true,
  },
  {
    title: PRODUCT_SECTIONS[4].label,
    description: PRODUCT_SECTIONS[4].description,
    image: "/images/sealos/ops-5-gateway-sq.png",
    smallImage: "/images/sealos/ops-5-gateway-sq.png",
    border: true,
  },
  {
    title: PRODUCT_SECTIONS[5].label,
    description: PRODUCT_SECTIONS[5].description,
    image: "/images/sealos/ops-6-logs-sq.png",
    smallImage: "/images/sealos/ops-6-logs-sq.png",
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
            image={item.smallImage ?? item.image}
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
                  <SealosOpsWorkbench
                    key={`${activeSection.artboard}-${animationKey}`}
                    activeIndex={activeIndex}
                    duration={activeSection.duration}
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
