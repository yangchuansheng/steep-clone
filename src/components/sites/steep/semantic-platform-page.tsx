"use client";
/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import gsap from "gsap";
import { SteepLayout } from "./layout-shell";
import { GetStartedSection } from "./get-started-section";
import {
  CarouselFeatureCard,
  ClockRefresh36Icon,
  type IconProps,
  Section,
  SEALOS_FAQ_ITEMS,
  SnapCarousel,
  SplitHeadingBlock,
  StaggerFeatureGrid,
  type StaggerFeatureGridItem,
  ThreeCardItem,
  type ThreeCardItemData,
  ThreeCardRow,
  useInViewTrigger,
  useStaggerReveal,
  useWindowSize,
  VerticalAccordionTabs,
} from "./shared";
import type { MarbleShaderSettings } from "./product-page";

function ModulesAndJoins36Icon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      fill="none"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.875 3.516a2.25 2.25 0 0 1 2.25 0l10.856 6.267a2.25 2.25 0 0 1 1.125 1.949v12.536a2.25 2.25 0 0 1-1.125 1.948l-10.856 6.269a2.25 2.25 0 0 1-2.25 0L6.019 26.216a2.25 2.25 0 0 1-1.125-1.948V11.732c0-.754.377-1.454.998-1.87l.127-.079z"
      />
      <path
        stroke="currentColor"
        strokeDasharray="1.5 3"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M18.022 14.938V5.75"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M18.022 32.256V17.804"
      />
      <path
        stroke="currentColor"
        strokeDasharray="1.5 3"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m28.345 23.907-7.877-4.448M7.634 23.907l7.703-4.448"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4.897 10.352 18 17.804l13.103-7.452"
      />
    </svg>
  );
}

function MetricsAndDimensions36Icon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      fill="none"
      {...props}
    >
      <g clipPath="url(#catalog_svg__a)">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M7.394 9.867a1.2 1.2 0 0 1 1.2-1.2h18.812a1.2 1.2 0 0 1 1.2 1.2v.3H7.394zM9.597 6.867a1.2 1.2 0 0 1 1.2-1.2h14.406a1.2 1.2 0 0 1 1.2 1.2v.3H9.597z"
          clipRule="evenodd"
        />
        <path
          stroke="currentColor"
          strokeWidth={1.5}
          d="M8.338 12.417h19.324a2.25 2.25 0 0 1 2.237 2.489L28.54 27.573a2.25 2.25 0 0 1-2.237 2.01H9.696a2.25 2.25 0 0 1-2.237-2.01L6.1 14.906a2.25 2.25 0 0 1 2.237-2.49Z"
        />
      </g>
      <defs>
        <clipPath id="catalog_svg__a">
          <path fill="#fff" d="M0 0h36v36H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

function Entities36Icon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      fill="none"
      {...props}
    >
      <circle
        cx={18}
        cy={9}
        r={4.5}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <circle
        cx={18}
        cy={27.001}
        r={4.496}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <circle
        cx={8.996}
        cy={18}
        r={4.504}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <circle
        cx={26.995}
        cy={18}
        r={4.5}
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  );
}

function Targets36Icon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      fill="none"
      {...props}
    >
      <circle
        cx={18}
        cy={18}
        r={13}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <circle
        cx={18}
        cy={18}
        r={7.719}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <circle cx={18} cy={18} r={2.971} fill="currentColor" />
    </svg>
  );
}

function AiPlatform36Icon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      fill="none"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11 11.75h14A3.25 3.25 0 0 1 28.25 15v12A3.25 3.25 0 0 1 25 30.25H11A3.25 3.25 0 0 1 7.75 27V15A3.25 3.25 0 0 1 11 11.75Z"
      />
      <circle
        cx={18}
        cy={6}
        r={2.25}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path fill="currentColor" d="M17.25 8.312h1.5V11h-1.5z" />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7 24a3 3 0 1 1 0-6M29 24a3 3 0 1 0 0-6"
      />
      <circle
        cx={13.5}
        cy={18}
        r={2.35}
        stroke="currentColor"
        strokeWidth={1.3}
      />
      <circle
        cx={22.5}
        cy={18}
        r={2.35}
        stroke="currentColor"
        strokeWidth={1.3}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M13.781 25s1.176 1.616 4.219 1.616S22.219 25 22.219 25"
      />
    </svg>
  );
}

function ExtendFunctionality36Icon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      fill="none"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.375 4.491a1.25 1.25 0 0 1 1.25 0l5.438 3.14c.386.223.625.636.625 1.083v6.278c0 .446-.239.86-.625 1.083l-5.438 3.139a1.25 1.25 0 0 1-1.25 0l-5.437-3.139a1.25 1.25 0 0 1-.626-1.083V8.714c0-.447.239-.86.626-1.083z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.3}
        d="M18.012 19.552v-7.804m-6.166-3.5 5.165 2.937a2 2 0 0 0 1.978 0l5.165-2.938"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.685 16.072a1.25 1.25 0 0 1 1.25 0l5.438 3.14c.386.223.625.636.625 1.082v6.279c0 .446-.239.86-.625 1.083l-5.438 3.139a1.25 1.25 0 0 1-1.25 0l-5.437-3.14a1.25 1.25 0 0 1-.625-1.082v-6.279c0-.446.238-.86.625-1.082z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.3}
        d="M11.322 30.133v-6.805m-6.166-3.5 5.165 2.938a2 2 0 0 0 1.978 0l5.165-2.938"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M24.065 16.072a1.25 1.25 0 0 1 1.25 0l5.437 3.14c.387.223.625.636.625 1.082v6.279c0 .446-.238.86-.625 1.083l-5.437 3.139a1.25 1.25 0 0 1-1.25 0l-5.438-3.14a1.25 1.25 0 0 1-.625-1.082v-6.279c0-.446.239-.86.625-1.082z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.3}
        d="M24.702 30.133v-6.805m-6.166-3.5 5.165 2.938a2 2 0 0 0 1.978 0l5.165-2.938"
      />
    </svg>
  );
}

function Embed36Icon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      fill="none"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.297 8.297a3 3 0 0 1 3-3h11.406a3 3 0 0 1 3 3v11.406a3 3 0 0 1-3 3H16.297a3 3 0 0 1-3-3z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M18.034 18.01v-2.04M22.034 18.01v-4.885M26 18.01V9.99"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.375 13.297H8.297a3 3 0 0 0-3 3v11.406a3 3 0 0 0 3 3h11.406a3 3 0 0 0 3-3v-5.015"
      />
    </svg>
  );
}

function ScriptAnything36Icon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      fill="none"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.88 9.42c0-.3.153-.573.37-.779.519-.493.834-1.145.834-1.86C19.085 5.245 17.63 4 15.834 4c-1.796 0-3.251 1.245-3.251 2.78 0 .716.315 1.368.834 1.861.217.206.37.48.37.779a.913.913 0 0 1-.912.913H8a2 2 0 0 0-2 2v4.028a1.005 1.005 0 0 0 1.005 1.002c.348 0 .66-.19.9-.443.43-.457.997-.735 1.62-.735 1.342 0 2.431 1.293 2.431 2.889s-1.088 2.889-2.432 2.889c-.622 0-1.19-.278-1.62-.735-.238-.253-.551-.444-.899-.444-.554 0-1.003.449-1.005 1.002V28a2 2 0 0 0 2 2h6.228c.547-.01.988-.456.988-1.005 0-.348-.19-.66-.444-.9-.457-.43-.735-.997-.735-1.62 0-1.342 1.294-2.431 2.89-2.431 1.595 0 2.888 1.089 2.888 2.432 0 .622-.277 1.19-.734 1.62-.254.238-.444.551-.444.9 0 .549.44.995.988 1.004h4.042a2 2 0 0 0 2-2v-4.875a.914.914 0 0 1 .913-.913c.3 0 .573.154.779.37.493.52 1.145.835 1.86.835 1.536 0 2.781-1.455 2.781-3.25 0-1.796-1.245-3.252-2.781-3.252-.715 0-1.367.316-1.86.835-.206.217-.48.37-.779.37a.913.913 0 0 1-.913-.91v-4.877a2 2 0 0 0-2-2h-4.875a.913.913 0 0 1-.912-.913Z"
      />
    </svg>
  );
}

function HighEngagement36Icon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      fill="none"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.4}
        d="M30.82 20.063V8.37a4.074 4.074 0 0 0-4.074-4.074H9.254A4.074 4.074 0 0 0 5.18 8.37v17.492a4.074 4.074 0 0 0 4.074 4.075h8.527"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M10.71 22.563v-3.798M15.494 22.563v-6.775M24.927 15.188v-4.626M20.21 21.094v-8.192"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        stroke="currentColor"
        strokeWidth={0.4}
        d="M25.363 18c1.127 0 1.777 1.103 1.778 2.102v1.847c0 .054.051.093.105.093h.673q.046 0 .09.01c.667.102 1.004.457 1.165.928.03.086.128.132.22.132h.559q.047 0 .092.01c.774.119 1.102.58 1.228 1.165.008.034.04.056.074.056h.559a.4.4 0 0 1 .09.01c1.536.234 1.518 1.74 1.502 2.957l-.001.306v.009l.031 1.402v.044c-.06 1.193-.537 1.97-1.087 2.863-.092.148-.186.302-.309.511l-.008.017q-.431.744-.998 1.132a2.27 2.27 0 0 1-1.318.405l-4.795-.001c-.482.009-.857-.2-1.133-.607-.19-.28-.323-.657-.409-1.122a1.1 1.1 0 0 0-.18-.44l-2.872-4.055-.014-.015a5.4 5.4 0 0 1-.606-1.014 2.9 2.9 0 0 1-.261-.967c-.027-.386.029-.698.14-.941a1.15 1.15 0 0 1 .624-.607c.25-.1.529-.114.812-.058.339.066.689.236.988.48.245.2.653.53 1.048.848a.205.205 0 0 0 .333-.16v-5.22c0-1.486.933-2.12 1.88-2.12Zm-.001.798c-.532 0-1.07.345-1.07 1.321v7.41a.404.404 0 0 1-.406.4.404.404 0 0 1-.405-.4v-.74a1 1 0 0 1-.061-.042 102 102 0 0 1-.784-.626l-1.05-.852a1.5 1.5 0 0 0-.626-.312.63.63 0 0 0-.353.016.36.36 0 0 0-.19.192c-.06.129-.087.314-.072.563.015.22.092.462.195.694.153.342.36.656.513.858q.014.018.025.037l3.075 4.338a.4.4 0 0 1 .07.182c.06.501.17.877.33 1.112.115.17.265.258.45.253h.01V33.2h4.797q.018 0 .034.002.45-.007.825-.264.412-.281.753-.872l.014-.02c.088-.15.204-.339.318-.523.49-.799.918-1.492.97-2.48l-.033-1.363a.4.4 0 0 1-.004-.059c0-.018.003-.147.004-.32.012-.901.025-2.016-.81-2.156h-.539c-.002.253-.019.511-.035.762a10 10 0 0 0-.028.645.404.404 0 0 1-.406.401.404.404 0 0 1-.407-.401c0-.206.017-.445.033-.694.054-.847.117-1.822-.572-1.944h-.532a.4.4 0 0 1-.088-.009c.006.307-.015.626-.035.932a10 10 0 0 0-.027.644.404.404 0 0 1-.407.402.404.404 0 0 1-.406-.402c0-.205.016-.445.032-.693.054-.847.117-1.822-.57-1.944h-.648a.4.4 0 0 1-.105-.015v1.55a.404.404 0 0 1-.407.402.404.404 0 0 1-.406-.401v-4.278c0-.535-.295-1.304-.966-1.304Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function FineGrainedRetention36Icon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      fill="none"
      {...props}
    >
      <circle
        cx={27}
        cy={8.5}
        r={2.5}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <circle
        cx={27}
        cy={18}
        r={2.5}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <circle
        cx={27}
        cy={27.402}
        r={2.5}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path stroke="currentColor" strokeWidth={1.3} d="M13 8.5h11" />
      <circle
        cx={9.468}
        cy={8.5}
        r={3}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeWidth={1.3}
        d="M24 27.5h-4a2 2 0 0 1-2-2v-15a2 2 0 0 0-2-2h-3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.3}
        d="M13 8.5h3a2 2 0 0 1 2 2v5.744a2 2 0 0 0 2 2h4"
      />
    </svg>
  );
}

const SEMANTIC_PLATFORM_COPY = {
  hero: {
    title: (
      <>
        Ship metrics, <br />
        not dashboards
      </>
    ),
    description: (
      <>
        The metrics-first semantic platform that helps{" "}
        <br className="hidden xs:block" /> you get out of the mess and move
        faster.
      </>
    ),
  },
  semanticPlatformSection: {
    title: "Semantic platform",
    description:
      "The BI platform that makes it easy for all users to explore, analyze, and report.",
    hero: {
      title: "Semantic model",
      description: "Components to solve all your BI and analysis needs.",
    },
    capabilities: {
      modulesAndJoins: {
        title: "Modules & joins",
        description:
          "Semantic representation of your database tables that connect by join paths.",
      },
      metricsAndDimensions: {
        title: "Metrics & dimensions",
        description:
          "Define metrics  & dimensions centrally that power all content.",
      },
      entities: {
        title: "Entities",
        description:
          "Entities represent the row-level data allowing you to drill-down from metrics.",
      },
      targets: {
        title: "Targets",
        description:
          "Connect multiple targets directly to metrics that can be applied everywhere. ",
      },
    },
    features: {
      versionControl: {
        title: "Version-controlled code definitions",
        description:
          "Track changes, review via pull requests, and keep a full history log of updates.",
      },
      inAppEditor: {
        title: "In-app editor",
        description:
          "Define your semantic model using Steep intuitive in-app editor.",
      },
      integrations: {
        title: "Integrations",
        description: "OSI ready. Integrations to dbt Semantic Layer and Cube.",
      },
    },
  },
  metricsCatalogSection: {
    title: "Metrics catalog",
    description: "All your governed metrics available in one place.",
    features: {
      clearDefinitions: {
        title: "Ship clear definitions",
        description:
          "Every metric has an owner, so everyone knows who to go to if they have questions. ",
      },
      clarifyBusinessOwners: {
        title: "Clarify business owners",
        description: "Define your metrics in the app using an intuitive UI.",
      },
      quickAccessToExplore: {
        title: "Quick access to explore",
        description:
          "Just click on a metric and start analysing immediately.",
      },
    },
  },
  bigImage: {
    title: <>Empower all users with governed metrics</>,
    description:
      "Give your end users the freedom to answer their own questions.",
  },
  controlPermissionsSection: {
    title: "Control permissions",
    description: "Ship metrics with precision and control.",
    features: {
      userRoles: {
        title: "User roles",
        description:
          "Admins define the semantic model. Members analyze and create reports.",
      },
      metricLevelPermissions: {
        title: "Smart Metric-level permissions",
        description: "Control who can see what with private metrics.",
      },
      teamsAndGroups: {
        title: "Teams and groups",
        description:
          "Create public or private teams to share reports, metrics and team spaces. ",
      },
      rowLevelSecurity: {
        title: "Row-level security",
        description:
          "Set permissions on a row level so users only get their slice of the data.",
      },
    },
  },
  steepApiSection: {
    title: "Steep API",
    description: "Use your metrics anywhere.",
    imageText: {
      title: "Define once. Use anywhere.",
      description:
        "With the Steep API, teams can access the metrics and semantic model defined in Steep and use them anywhere, while governance remains centralized.\u00a0",
    },
    capabilities: {
      aiIntegration: {
        title: "Connect to AI platforms",
        description:
          "Power LLMs, agents, and custom AI use cases with your governed metrics.",
      },
      extendFunctionality: {
        title: "Extend functionality",
        description:
          "Build your own apps for exports, forecasting or integrations.",
      },
      embed: {
        title: "Embed",
        description:
          "Use the same metrics to power reporting in your own platform.",
      },
      scriptAnything: {
        title: "Script anything",
        description: "Programmatic control of your entire setup.",
      },
    },
  },
  enterpriseSection: {
    title: "For Enterprise",
    description:
      "Manage your single source of truth across geographies and business units.",
    features: {
      companySso: {
        title: "Company SSO",
        description: "Control authentication with Entra, Jumpcloud, Okta.",
      },
      userProvisioning: {
        title: "User provisioning",
        description: "Manage user access and permissions with SCIM.",
      },
      multiWorkspace: {
        title: "Audit logs",
        description: "Detailed user and query logs are available.",
      },
      multiDataSources: {
        title: "Multi-workspace setup",
        description:
          "Set up multiple workspaces with one set of core metrics.",
      },
    },
  },
  cachingLayerSection: {
    title: "Caching layer",
    description:
      "Deliver high speed to users with less load on your warehouse.",
    features: {
      globalMetrics: {
        title: "Global metrics-native cache",
        description:
          "Metric queries are cached for the entire workspace with high reusability.",
      },
      highEngagement: {
        title: "Made for high engagement",
        description:
          "Smart caching strategies that supports iterative analysis.",
      },
      fineGrainedControl: {
        title: "Fine-grained retention control",
        description:
          "Control cache time, from workspace default down to individual metrics.",
      },
    },
  },
} as const;

type ResolvedMarbleSettings = Required<MarbleShaderSettings>;

function hexToRgbNormalized(hex: string): [number, number, number] {
  const match = /^#([0-9a-f]{6})$/i.exec(hex);
  return match
    ? [
        parseInt(match[1].slice(0, 2), 16) / 255,
        parseInt(match[1].slice(2, 4), 16) / 255,
        parseInt(match[1].slice(4, 6), 16) / 255,
      ]
    : [0, 0, 0];
}

function compileShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string,
): WebGLShader {
  const shader = gl.createShader(type);
  if (!shader) {
    throw new Error("Unable to create WebGL shader");
  }
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error("Shader compile error: " + gl.getShaderInfoLog(shader));
  }
  return shader;
}

const MARBLE_VERTEX_SHADER = `
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`;

const MARBLE_FRAGMENT_SHADER = `
precision highp float;

// ── Simplex noise (Ashima Arts / Stefan Gustavson, MIT) ──────────────────────
vec3 mod289_3(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289_4(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289_4(((x*34.0)+10.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}

float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0);
  const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy));
  vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);
  vec3 l=1.0-g;
  vec3 i1=min(g.xyz,l.zxy);
  vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;
  vec3 x2=x0-i2+C.yyy;
  vec3 x3=x0-D.yyy;
  i=mod289_3(i);
  vec4 p=permute(permute(permute(
    i.z+vec4(0.0,i1.z,i2.z,1.0))
    +i.y+vec4(0.0,i1.y,i2.y,1.0))
    +i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857;
  vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);
  vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy;
  vec4 y=y_*ns.x+ns.yyyy;
  vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);
  vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0;
  vec4 s1=floor(b1)*2.0+1.0;
  vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
  vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);
  vec3 p1=vec3(a0.zw,h.y);
  vec3 p2=vec3(a1.xy,h.z);
  vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;
  vec4 m=max(0.5-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
  m=m*m;
  return 105.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}

// ── Uniforms ─────────────────────────────────────────────────────────────────
uniform vec2  u_resolution;
uniform float u_time;
uniform vec2  u_seed;
uniform vec3  u_colorA;
uniform vec3  u_colorB;
uniform vec3  u_colorC;
uniform vec3  u_colorD;
uniform float u_scale;
uniform float u_swirl;
uniform float u_spread;
uniform float u_shift;
uniform float u_grain;
uniform vec3  u_colorE;
uniform float u_zoom;
uniform float u_yOffset;
uniform float u_xOffset;
uniform float u_speed;

varying vec2 v_uv;

float filmGrain(vec2 uv){
  vec2 seed=uv*u_resolution;
  return fract(sin(dot(seed,vec2(12.9898,78.233)))*43758.5453)*2.0-1.0;
}

// ── FBM ──────────────────────────────────────────────────────────────────────
float fbm3(vec3 p){
  float v=0.0;
  v+=0.50*snoise(p);
  v+=0.28*snoise(p*2.1+vec3(1.7,3.2,0.0));
  v+=0.15*snoise(p*4.3+vec3(5.1,0.8,2.4));
  return v;
}

// ── Nested domain warp ───────────────────────────────────────────────────────
vec2 marbleWarp(vec2 p){
  float t=u_time*(0.025*u_speed)+u_shift;
  vec2 sd=u_seed+vec2(u_shift*1.7,u_shift*2.3);
  vec2 q=vec2(
    fbm3(vec3(p*u_scale+sd,t)),
    fbm3(vec3(p*u_scale+sd+vec2(5.2,1.3),t*0.9))
  );
  vec2 r=vec2(
    fbm3(vec3(p*u_scale+u_swirl*q+vec2(1.7,9.2)+sd,t*0.8)),
    fbm3(vec3(p*u_scale+u_swirl*q+vec2(8.3,2.8)+sd,t*0.7))
  );
  vec2 s=vec2(
    fbm3(vec3(p*u_scale+u_swirl*0.6*r+vec2(3.4,6.1)+sd,t*0.6)),
    fbm3(vec3(p*u_scale+u_swirl*0.6*r+vec2(7.7,0.5)+sd,t*0.5))
  );
  return p+u_swirl*mix(r,s,0.4);
}

void main(){
  float aspect=u_resolution.x/u_resolution.y;
  vec2 uvAspect=vec2(v_uv.x*aspect,v_uv.y);
  vec2 center=vec2(aspect*0.5,0.5);
  vec2 centered=(uvAspect-center)/max(u_zoom,0.01);
  centered.y-=u_yOffset;
  centered.x-=u_xOffset*aspect;

  float dist=length(centered);
  float radial=exp(-dist*dist/max(u_spread*u_spread*0.5,0.01));

  vec2 sd=u_seed+vec2(u_shift*1.7,u_shift*2.3);
  float tShift=u_time*(0.02*u_speed)+u_shift;

  vec2 warped=marbleWarp(centered*1.2);

  float sc=u_scale*3.0;
  float f0=fbm3(vec3(warped*sc+sd,tShift));
  float f1=fbm3(vec3(warped*sc+sd+vec2(3.1,7.4),tShift*0.9));
  float f2=fbm3(vec3(warped*sc*1.2+sd+vec2(6.8,2.1),tShift*1.1));

  float w0=smoothstep(-0.3,0.5,f0)*radial;
  float w1=smoothstep(-0.2,0.6,f1)*radial;
  float w2=smoothstep(-0.1,0.4,f2)*radial;
  float w3=1.0-radial*0.7;

  float total=w0+w1+w2+w3+0.001;
  w0/=total; w1/=total; w2/=total; w3/=total;

  float bgY=clamp(centered.y+0.5,0.0,1.0);
  vec3 bgColor=mix(u_colorE,u_colorD,bgY);
  vec3 col=u_colorA*w0+u_colorB*w1+u_colorC*w2+bgColor*w3;
  col+=filmGrain(v_uv)*u_grain;
  gl_FragColor=vec4(clamp(col,0.0,1.0),1.0);
}`;

/* shortcut: single-pass WebGL1 shader without context-loss restoration, upgrade if dynamic multi-pass shaders are added */
class MarbleShader {
  private canvas: HTMLCanvasElement;
  private gl: WebGLRenderingContext;
  private prog: WebGLProgram;
  private buf: WebGLBuffer | null;
  private uniforms: Record<string, WebGLUniformLocation | null> = {};
  private settings: ResolvedMarbleSettings;
  private maxPixelRatio: number;
  private fps: number;
  private seed: [number, number];
  private rafId = 0;
  private startTime = 0;
  private lastFrameTime = 0;
  private ro: ResizeObserver;

  constructor(
    canvas: HTMLCanvasElement,
    initialSettings: MarbleShaderSettings = {},
  ) {
    this.canvas = canvas;
    const gl = canvas.getContext("webgl", { alpha: false, antialias: false });
    if (!gl) {
      throw new Error("WebGL not supported");
    }
    this.gl = gl;
    this.settings = {
      colorA: initialSettings.colorA ?? "#e05d8c",
      colorB: initialSettings.colorB ?? "#5b8fa8",
      colorC: initialSettings.colorC ?? "#f2d0a4",
      colorD: initialSettings.colorD ?? "#1a1a2e",
      colorE: initialSettings.colorE ?? initialSettings.colorD ?? "#1a1a2e",
      scale: initialSettings.scale ?? 0.15,
      swirl: initialSettings.swirl ?? 0.7,
      spread: initialSettings.spread ?? 0.8,
      shift: initialSettings.shift ?? 0,
      grain: initialSettings.grain ?? 0.04,
      zoom: initialSettings.zoom ?? 1,
      yOffset: initialSettings.yOffset ?? 0,
      xOffset: initialSettings.xOffset ?? 0,
      speed: initialSettings.speed ?? 1,
      animate: initialSettings.animate ?? true,
      seed: initialSettings.seed ?? [100 * Math.random(), 100 * Math.random()],
      maxPixelRatio: initialSettings.maxPixelRatio ?? 1,
      fps: initialSettings.fps ?? 15,
    };
    this.maxPixelRatio = this.settings.maxPixelRatio;
    this.fps = this.settings.fps;
    this.seed = [...this.settings.seed];

    const prog = gl.createProgram();
    if (!prog) {
      throw new Error("Unable to create WebGL program");
    }
    gl.attachShader(
      prog,
      compileShader(gl, gl.VERTEX_SHADER, MARBLE_VERTEX_SHADER),
    );
    gl.attachShader(
      prog,
      compileShader(gl, gl.FRAGMENT_SHADER, MARBLE_FRAGMENT_SHADER),
    );
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      throw new Error("Program link error: " + gl.getProgramInfoLog(prog));
    }
    this.prog = prog;
    gl.useProgram(this.prog);

    const uniformNames = [
      "u_resolution",
      "u_time",
      "u_seed",
      "u_colorA",
      "u_colorB",
      "u_colorC",
      "u_colorD",
      "u_colorE",
      "u_scale",
      "u_swirl",
      "u_spread",
      "u_shift",
      "u_grain",
      "u_zoom",
      "u_yOffset",
      "u_xOffset",
      "u_speed",
    ];
    for (const name of uniformNames) {
      this.uniforms[name] = gl.getUniformLocation(this.prog, name);
    }

    this.buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );

    const [ar, ag, ab] = hexToRgbNormalized(this.settings.colorA);
    const [br, bg, bb] = hexToRgbNormalized(this.settings.colorB);
    const [cr, cg, cb] = hexToRgbNormalized(this.settings.colorC);
    const [dr, dg, db] = hexToRgbNormalized(this.settings.colorD);
    const [er, eg, eb] = hexToRgbNormalized(this.settings.colorE);

    gl.uniform3f(this.uniforms.u_colorA, ar, ag, ab);
    gl.uniform3f(this.uniforms.u_colorB, br, bg, bb);
    gl.uniform3f(this.uniforms.u_colorC, cr, cg, cb);
    gl.uniform3f(this.uniforms.u_colorD, dr, dg, db);
    gl.uniform3f(this.uniforms.u_colorE, er, eg, eb);
    gl.uniform1f(this.uniforms.u_scale, this.settings.scale);
    gl.uniform1f(this.uniforms.u_swirl, this.settings.swirl);
    gl.uniform1f(this.uniforms.u_spread, this.settings.spread);
    gl.uniform1f(this.uniforms.u_shift, this.settings.shift);
    gl.uniform1f(this.uniforms.u_grain, this.settings.grain);
    gl.uniform1f(this.uniforms.u_zoom, this.settings.zoom);
    gl.uniform1f(this.uniforms.u_yOffset, this.settings.yOffset);
    gl.uniform1f(this.uniforms.u_xOffset, this.settings.xOffset);
    gl.uniform1f(this.uniforms.u_speed, this.settings.speed);
    gl.uniform2f(this.uniforms.u_seed, this.seed[0], this.seed[1]);

    this.ro = new ResizeObserver(() => this.resize());
    this.ro.observe(canvas);
    this.resize();
  }

  update(next: MarbleShaderSettings) {
    const gl = this.gl;
    gl.useProgram(this.prog);
    Object.assign(this.settings, next);
    if (next.colorA) {
      const [r, g, b] = hexToRgbNormalized(next.colorA);
      gl.uniform3f(this.uniforms.u_colorA, r, g, b);
    }
    if (next.colorB) {
      const [r, g, b] = hexToRgbNormalized(next.colorB);
      gl.uniform3f(this.uniforms.u_colorB, r, g, b);
    }
    if (next.colorC) {
      const [r, g, b] = hexToRgbNormalized(next.colorC);
      gl.uniform3f(this.uniforms.u_colorC, r, g, b);
    }
    if (next.colorD) {
      const [r, g, b] = hexToRgbNormalized(next.colorD);
      gl.uniform3f(this.uniforms.u_colorD, r, g, b);
    }
    if (next.colorE) {
      const [r, g, b] = hexToRgbNormalized(next.colorE);
      gl.uniform3f(this.uniforms.u_colorE, r, g, b);
    }
    if (next.scale != null) gl.uniform1f(this.uniforms.u_scale, next.scale);
    if (next.swirl != null) gl.uniform1f(this.uniforms.u_swirl, next.swirl);
    if (next.spread != null) gl.uniform1f(this.uniforms.u_spread, next.spread);
    if (next.shift != null) gl.uniform1f(this.uniforms.u_shift, next.shift);
    if (next.grain != null) gl.uniform1f(this.uniforms.u_grain, next.grain);
    if (next.zoom != null) gl.uniform1f(this.uniforms.u_zoom, next.zoom);
    if (next.yOffset != null) {
      gl.uniform1f(this.uniforms.u_yOffset, next.yOffset);
    }
    if (next.xOffset != null) {
      gl.uniform1f(this.uniforms.u_xOffset, next.xOffset);
    }
    if (next.speed != null) gl.uniform1f(this.uniforms.u_speed, next.speed);
    if (next.animate != null) {
      if (next.animate) {
        this.start();
      } else {
        this.stop();
        this.draw(0);
      }
    }
    if (next.seed) {
      this.seed = [...next.seed];
      this.settings.seed = [...next.seed];
      gl.uniform2f(this.uniforms.u_seed, this.seed[0], this.seed[1]);
    }
  }

  getSeed(): [number, number] {
    return [this.seed[0], this.seed[1]];
  }

  start() {
    if (this.rafId) return;
    if (!this.settings.animate) {
      this.draw(0);
      return;
    }
    this.startTime = performance.now();
    this.draw(0);
    const frameInterval = 1000 / this.fps;
    const tick = (now: number) => {
      this.rafId = requestAnimationFrame(tick);
      if (now - this.lastFrameTime >= frameInterval) {
        this.lastFrameTime = now;
        this.draw((now - this.startTime) / 1000);
      }
    };
    this.rafId = requestAnimationFrame(tick);
  }

  stop() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = 0;
    }
  }

  destroy() {
    this.stop();
    this.ro.disconnect();
    this.gl.deleteProgram(this.prog);
    this.gl.deleteBuffer(this.buf);
  }

  resize() {
    const clientWidth = this.canvas.clientWidth;
    const clientHeight = this.canvas.clientHeight;
    if (clientWidth <= 0 || clientHeight <= 0) return;
    const dpr = Math.min(window.devicePixelRatio || 1, this.maxPixelRatio);
    const width = Math.max(1, Math.round(clientWidth * dpr));
    const height = Math.max(1, Math.round(clientHeight * dpr));
    if (this.canvas.width !== width || this.canvas.height !== height) {
      this.canvas.width = width;
      this.canvas.height = height;
      const elapsed =
        this.settings.animate && this.startTime > 0
          ? (performance.now() - this.startTime) / 1000
          : 0;
      this.draw(elapsed);
    }
  }

  draw(time: number) {
    const gl = this.gl;
    const width = this.canvas.width;
    const height = this.canvas.height;
    if (width <= 0 || height <= 0) return;
    gl.viewport(0, 0, width, height);
    gl.useProgram(this.prog);
    gl.uniform2f(this.uniforms.u_resolution, width, height);
    gl.uniform1f(this.uniforms.u_time, time);
    const posLoc = gl.getAttribLocation(this.prog, "a_pos");
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buf);
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }
}

interface UseMarbleCanvasOptions {
  settings: MarbleShaderSettings;
  getResponsiveSettings?: (width: number) => MarbleShaderSettings;
  fadeInOnFirstFrame?: boolean;
  logSeed?: boolean;
}

function useMarbleCanvas({
  settings,
  getResponsiveSettings,
  fadeInOnFirstFrame = true,
  logSeed = false,
}: UseMarbleCanvasOptions) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let shader: MarbleShader | null = null;
    try {
      shader = new MarbleShader(canvas, settings);
    } catch {
      return;
    }
    let handleResize: (() => void) | null = null;
    if (getResponsiveSettings) {
      handleResize = () => {
        shader?.update(getResponsiveSettings(window.innerWidth));
      };
      handleResize();
      window.addEventListener("resize", handleResize);
    }
    if (fadeInOnFirstFrame) {
      canvas.style.opacity = "0";
    }
    shader.start();
    let rafId = 0;
    if (fadeInOnFirstFrame) {
      rafId = requestAnimationFrame(() => {
        canvas.style.opacity = "1";
      });
    }
    if (logSeed) {
      console.log("seed:", JSON.stringify(shader.getSeed()));
    }
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (handleResize) window.removeEventListener("resize", handleResize);
      shader?.destroy();
    };
  }, [fadeInOnFirstFrame, getResponsiveSettings, logSeed, settings]);

  return canvasRef;
}

const SEMANTIC_PLATFORM_MARBLE_SETTINGS: MarbleShaderSettings = {
  colorA: "#aa14f0",
  colorB: "#72ecee",
  colorC: "#ee7658",
  colorD: "#15101e",
  colorE: "#121212",
  scale: 0.07,
  swirl: 0,
  spread: 0.44,
  shift: 17.95,
  grain: 0.02,
  zoom: 0.85,
  yOffset: 0.13,
  xOffset: 0,
  speed: 3,
  animate: false,
  maxPixelRatio: 1,
  fps: 15,
  seed: [69.74, 75.32],
};

function getResponsiveMarbleSettings(width: number): MarbleShaderSettings {
  return width < 480
    ? { zoom: 0.9, xOffset: -0, yOffset: 0.1 }
    : width < 1024
      ? { zoom: 0.85, xOffset: -0.2, yOffset: 0.3 }
      : {
          zoom: SEMANTIC_PLATFORM_MARBLE_SETTINGS.zoom,
          xOffset: SEMANTIC_PLATFORM_MARBLE_SETTINGS.xOffset,
          yOffset: SEMANTIC_PLATFORM_MARBLE_SETTINGS.yOffset,
        };
}

function SemanticPlatformHeroSection() {
  const canvasRef = useMarbleCanvas({
    settings: SEMANTIC_PLATFORM_MARBLE_SETTINGS,
    getResponsiveSettings: getResponsiveMarbleSettings,
    logSeed: true,
  });

  return (
    <div className="relative pt-16 bg-linear-to-b from-[#15101e] to-[#121212]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-700"
      />
      <Section className="flex mt-15 sm:mt-30 xl:mt-40 sm:mb-20 mb-12 justify-start xs:justify-center ">
        <SplitHeadingBlock
          mode="dark"
          isInView={true}
          centerAligned={true}
          heading={SEMANTIC_PLATFORM_COPY.hero.title}
          description={SEMANTIC_PLATFORM_COPY.hero.description}
          headingClassName="xs:text-[50px] sm:text-[60px] md:text-[70px] lg:text-[88px]! leading-[1.1] tracking-tight "
          descriptionClassName="text-base! md:text-xl! lg:text-2xl! leading-normal! xs:max-w-[630px]! max-w-[300px]! "
        />
      </Section>
      <div className="mobile-padding w-full pb-16 overflow-hidden pr-0! lg:overflow-visible md:flex md:justify-center md:px-16!">
        <div className="relative w-full md:max-w-[1200px]">
          <Image
            src="/images/model/hero-modules.png"
            priority={true}
            width={0}
            height={0}
            sizes="100vw"
            alt=""
            className="border border-white/8 rounded-l-[12px] md:rounded-l-[16px] md:rounded-xl shadow-2xl h-[400px] xs:h-[460px] sm:h-[520px] md:h-auto w-auto md:w-full md:max-w-[1200px] object-cover object-left md:object-center"
          />
          <Image
            src="/images/model/hero-code.png"
            alt=""
            width={800}
            height={446}
            className="border border-[#2D3034] absolute left-auto right-4 xs:right-auto xs:left-[10%] md:left-[8%] -bottom-10 rounded-2xl xl:rounded-2xl shadow-3xl w-auto h-[270px] xs:h-[300px] md:h-[320px] lg:h-[380px] xl:h-[446px] object-cover object-center outline-1 outline-[#12121266]"
          />
        </div>
      </div>
    </div>
  );
}

const SEMANTIC_MODEL_CAPABILITIES: readonly StaggerFeatureGridItem[] = [
  {
    title:
      SEMANTIC_PLATFORM_COPY.semanticPlatformSection.capabilities
        .modulesAndJoins.title,
    icon: <ModulesAndJoins36Icon className="text-white" />,
    description:
      SEMANTIC_PLATFORM_COPY.semanticPlatformSection.capabilities
        .modulesAndJoins.description,
  },
  {
    title:
      SEMANTIC_PLATFORM_COPY.semanticPlatformSection.capabilities
        .metricsAndDimensions.title,
    description:
      SEMANTIC_PLATFORM_COPY.semanticPlatformSection.capabilities
        .metricsAndDimensions.description,
    icon: <MetricsAndDimensions36Icon className="text-white" />,
  },
  {
    title:
      SEMANTIC_PLATFORM_COPY.semanticPlatformSection.capabilities.entities
        .title,
    description:
      SEMANTIC_PLATFORM_COPY.semanticPlatformSection.capabilities.entities
        .description,
    icon: <Entities36Icon className="text-white" />,
  },
  {
    title:
      SEMANTIC_PLATFORM_COPY.semanticPlatformSection.capabilities.targets.title,
    description:
      SEMANTIC_PLATFORM_COPY.semanticPlatformSection.capabilities.targets
        .description,
    icon: <Targets36Icon className="text-white" />,
  },
];

const SEMANTIC_PLATFORM_FEATURES: readonly ThreeCardItemData[] = [
  {
    title:
      SEMANTIC_PLATFORM_COPY.semanticPlatformSection.features.versionControl
        .title,
    description:
      SEMANTIC_PLATFORM_COPY.semanticPlatformSection.features.versionControl
        .description,
    image: "/images/model/semantic-code.png",
  },
  {
    title:
      SEMANTIC_PLATFORM_COPY.semanticPlatformSection.features.inAppEditor.title,
    description:
      SEMANTIC_PLATFORM_COPY.semanticPlatformSection.features.inAppEditor
        .description,
    image: "/images/model/semantic-ui.png",
  },
  {
    title:
      SEMANTIC_PLATFORM_COPY.semanticPlatformSection.features.integrations
        .title,
    description:
      SEMANTIC_PLATFORM_COPY.semanticPlatformSection.features.integrations
        .description,
    image: "/images/model/semantic-integrations.png",
  },
];

function SemanticModelShowcaseCard() {
  return (
    <div className="lg:mb-10 mb-8 bg-[#1A1A1A] md:rounded-3xl px-7 xs:px-8 md:px-20 pt-20 pb-4 border-white/5 md:border">
      <div className="sm:mx-7 md:mx-0 h-auto flex flex-col lg:flex-row sm:rounded-2xl justify-between">
        <div className="flex flex-col max-w-[270px] mb-8">
          <span className="text-white text-3xl font-medium lg:leading-tight leading-8 mb-3">
            {SEMANTIC_PLATFORM_COPY.semanticPlatformSection.hero.title}
          </span>
          <span className="text-white/60 text-lg font-normal leading-tight">
            {SEMANTIC_PLATFORM_COPY.semanticPlatformSection.hero.description}
          </span>
        </div>
        <div className="lg:w-2/3 w-full pl-6 md:pl-3 flex items-end justify-end overflow-hidden  pb-10 ">
          <Image
            src="/images/model/semantic-hero-ill.png"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      <div className="mb-20 border-t border-white/5 pt-10">
        <StaggerFeatureGrid items={SEMANTIC_MODEL_CAPABILITIES} mode="dark" />
      </div>
    </div>
  );
}

function SemanticPlatformOverviewSection() {
  const { isSmall } = useWindowSize();
  const { triggerRef, isInView } = useInViewTrigger({
    start: isSmall ? "top bottom-=200" : "top bottom-=300",
  });

  return (
    <Section
      className="pt-20 mb-2!"
      noPaddingOnSmallScreens={true}
      ref={triggerRef}
    >
      <div className="flex mt-15 sm:mt-30 xl:mt-40 mb-20 w-full justify-center mobile-padding-only">
        <SplitHeadingBlock
          mode="dark"
          centerAligned={true}
          isInView={isInView}
          className="text-center mobile-padding-only"
          heading={SEMANTIC_PLATFORM_COPY.semanticPlatformSection.title}
          description={
            SEMANTIC_PLATFORM_COPY.semanticPlatformSection.description
          }
        />
      </div>
      <SemanticModelShowcaseCard />
      <ThreeCardRow items={SEMANTIC_PLATFORM_FEATURES} mode="dark" />
    </Section>
  );
}

const METRICS_CATALOG_FEATURES: readonly ThreeCardItemData[] = [
  {
    title:
      SEMANTIC_PLATFORM_COPY.metricsCatalogSection.features.clearDefinitions
        .title,
    description:
      SEMANTIC_PLATFORM_COPY.metricsCatalogSection.features.clearDefinitions
        .description,
    image: "/images/model/catalog-define.png",
  },
  {
    title:
      SEMANTIC_PLATFORM_COPY.metricsCatalogSection.features
        .clarifyBusinessOwners.title,
    description:
      SEMANTIC_PLATFORM_COPY.metricsCatalogSection.features
        .clarifyBusinessOwners.description,
    image: "/images/model/catalog-owners.png",
  },
  {
    title:
      SEMANTIC_PLATFORM_COPY.metricsCatalogSection.features.quickAccessToExplore
        .title,
    description:
      SEMANTIC_PLATFORM_COPY.metricsCatalogSection.features.quickAccessToExplore
        .description,
    image: "/images/model/catalog-explore.png",
  },
];

function MetricsCatalogSection() {
  const { isSmall } = useWindowSize();
  const { triggerRef, isInView } = useInViewTrigger({
    start: isSmall ? "top bottom-=200" : "top bottom-=300",
  });

  return (
    <>
      <Section className="mt-20 sm:mt-40 lg:mt-80" ref={triggerRef}>
        <div className="flex lg:flex-row flex-col gap-x-4">
          <div className="flex flex-col flex-1 lg:pt-10">
            <SplitHeadingBlock
              mode="dark"
              isInView={isInView}
              className="mr-8"
              headingClassName="sm:text-[56px]! text-[40px]!"
              heading={SEMANTIC_PLATFORM_COPY.metricsCatalogSection.title}
              description={
                SEMANTIC_PLATFORM_COPY.metricsCatalogSection.description
              }
            />
          </div>
          <div className="flex-2 lg:mt-0 mt-20 border border-white/5 rounded-2xl overflow-hidden">
            <Image
              src="/images/model/catalog-hero.jpg"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>
      <Section
        className="mt-4 md:mt-20 lg:mt-10 pb-20 lg:pb-30"
        noPaddingOnSmallScreens={true}
      >
        <ThreeCardRow items={METRICS_CATALOG_FEATURES} mode="dark" />
      </Section>
    </>
  );
}

interface ScaleInViewBannerProps {
  src: string;
  smallSrc?: string;
  alt?: string;
  className?: string;
  imageClassName?: string;
  smallImageClassName?: string;
  initialScale?: number;
  duration?: number;
  ease?: string;
  children?: React.ReactNode;
}

function ScaleInViewBanner({
  src,
  smallSrc,
  alt = "",
  className = "",
  imageClassName = "",
  smallImageClassName = "",
  initialScale = 0.8,
  duration = 1.2,
  ease = "power2.out",
  children,
}: ScaleInViewBannerProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const smallImageRef = useRef<HTMLImageElement>(null);
  const { isInView, triggerRef } = useInViewTrigger({
    start: "top bottom-=200",
  });

  useLayoutEffect(() => {
    if (imageRef.current) gsap.set(imageRef.current, { scale: initialScale });
    if (smallImageRef.current) {
      gsap.set(smallImageRef.current, { scale: initialScale });
    }
  }, [initialScale]);

  useEffect(() => {
    const targets = [imageRef.current, smallImageRef.current].filter(
      (el): el is HTMLImageElement => el !== null,
    );
    if (targets.length === 0) return;
    if (isInView) {
      gsap.to(targets, { scale: 1, duration, ease });
    } else {
      gsap.set(targets, { scale: initialScale });
    }
  }, [isInView, initialScale, duration, ease]);

  return (
    <div
      ref={triggerRef}
      className={clsx("relative overflow-visible", className)}
    >
      {smallSrc && (
        <img
          ref={smallImageRef}
          src={smallSrc}
          alt={alt}
          className={smallImageClassName}
        />
      )}
      <img ref={imageRef} src={src} alt={alt} className={imageClassName} />
      {children}
    </div>
  );
}

function EmpowerUsersBannerSection() {
  return (
    <ScaleInViewBanner
      src="/images/model/photo-laptop-grad.jpg"
      className="lg:pb-16 z-5 pb-48 sm:pb-28"
      imageClassName="w-full h-[440px] object-cover object-center sm:h-[630px] md:h-[940px] lg:h-full"
    >
      <div className="z-10 absolute xl:left-20 md:left-12 left-7 right-7 xs:right-auto bottom-0 md:top-auto flex flex-col gap-4 p-10 sm:p-12 pb-16 sm:pb-20 rounded-3xl lg:max-w-[400px] max-w-sm backdrop-blur-md shadow-xl bg-[#1A1A1Aaa] border border-white/5">
        <p className="text-white sm:text-[30px] md:text-[38px] text-3xl font-book leading-tight">
          {SEMANTIC_PLATFORM_COPY.bigImage.title}
        </p>
        <p className="text-white/60 text-base lg:text-lg">
          {SEMANTIC_PLATFORM_COPY.bigImage.description}
        </p>
      </div>
    </ScaleInViewBanner>
  );
}

function FourCardRow({
  items,
  mode = "light",
}: {
  items: readonly ThreeCardItemData[];
  mode?: "light" | "dark";
}) {
  const { isSmall } = useWindowSize();
  const { triggerRef, isInView } = useInViewTrigger({
    start: isSmall ? "top bottom-=200" : "top bottom-=300",
  });
  const { setItemRef } = useStaggerReveal({
    itemCount: items.length,
    isInView,
  });

  return (
    <>
      <div className="md:hidden">
        <SnapCarousel
          darkMode={mode === "dark"}
          showArrowButtons
          items={items}
          expandInView
          renderItem={({ item, setRef, scaleStyle, opacityStyle }) => (
            <CarouselFeatureCard
              key={item.title}
              ref={setRef}
              title={item.title ?? ""}
              description={item.description ?? ""}
              image={item.image}
              bordered={item.bordered}
              scaleStyle={scaleStyle}
              opacityStyle={opacityStyle}
              mode={mode}
            />
          )}
        />
      </div>
      <div
        className="hidden flex-row gap-10 md:grid grid-cols-2 lg:grid-cols-4"
        ref={triggerRef}
      >
        {items.map((item, idx) => (
          <div key={idx} className="flex-1" ref={setItemRef(idx)}>
            <ThreeCardItem item={item} mode={mode} />
          </div>
        ))}
      </div>
    </>
  );
}

const CONTROL_PERMISSIONS_FEATURES: readonly ThreeCardItemData[] = [
  {
    title:
      SEMANTIC_PLATFORM_COPY.controlPermissionsSection.features.userRoles.title,
    description:
      SEMANTIC_PLATFORM_COPY.controlPermissionsSection.features.userRoles
        .description,
    image: "/images/model/permissions-user.png",
  },
  {
    title:
      SEMANTIC_PLATFORM_COPY.controlPermissionsSection.features
        .metricLevelPermissions.title,
    description:
      SEMANTIC_PLATFORM_COPY.controlPermissionsSection.features
        .metricLevelPermissions.description,
    image: "/images/model/permissions-metric.png",
  },
  {
    title:
      SEMANTIC_PLATFORM_COPY.controlPermissionsSection.features.teamsAndGroups
        .title,
    description:
      SEMANTIC_PLATFORM_COPY.controlPermissionsSection.features.teamsAndGroups
        .description,
    image: "/images/model/permissions-team.png",
  },
  {
    title:
      SEMANTIC_PLATFORM_COPY.controlPermissionsSection.features.rowLevelSecurity
        .title,
    description:
      SEMANTIC_PLATFORM_COPY.controlPermissionsSection.features.rowLevelSecurity
        .description,
    image: "/images/model/permissions-row-level.png",
  },
];

function ControlPermissionsSection() {
  const { isSmall } = useWindowSize();
  const { triggerRef, isInView } = useInViewTrigger({
    start: isSmall ? "top bottom-=200" : "top bottom-=300",
  });

  return (
    <Section
      className="mt-20 sm:mt-30 xl:mt-40 sm:pb-60 pb-30"
      ref={triggerRef}
      noPaddingOnSmallScreens={true}
    >
      <div className="flex mb-16 lg:mb-24 w-full mobile-padding md:px-20! lg:px-0!">
        <SplitHeadingBlock
          mode="dark"
          isInView={isInView}
          heading={SEMANTIC_PLATFORM_COPY.controlPermissionsSection.title}
          description={
            SEMANTIC_PLATFORM_COPY.controlPermissionsSection.description
          }
        />
      </div>
      <div className="md:px-20 lg:px-0">
        <FourCardRow items={CONTROL_PERMISSIONS_FEATURES} mode="dark" />
      </div>
    </Section>
  );
}

const STEEP_API_CAPABILITIES: readonly StaggerFeatureGridItem[] = [
  {
    title:
      SEMANTIC_PLATFORM_COPY.steepApiSection.capabilities.aiIntegration.title,
    description:
      SEMANTIC_PLATFORM_COPY.steepApiSection.capabilities.aiIntegration
        .description,
    icon: <AiPlatform36Icon className="text-white" />,
  },
  {
    title:
      SEMANTIC_PLATFORM_COPY.steepApiSection.capabilities.extendFunctionality
        .title,
    description:
      SEMANTIC_PLATFORM_COPY.steepApiSection.capabilities.extendFunctionality
        .description,
    icon: <ExtendFunctionality36Icon className="text-white" />,
  },
  {
    title: SEMANTIC_PLATFORM_COPY.steepApiSection.capabilities.embed.title,
    description:
      SEMANTIC_PLATFORM_COPY.steepApiSection.capabilities.embed.description,
    icon: <Embed36Icon className="text-white" />,
  },
  {
    title:
      SEMANTIC_PLATFORM_COPY.steepApiSection.capabilities.scriptAnything.title,
    description:
      SEMANTIC_PLATFORM_COPY.steepApiSection.capabilities.scriptAnything
        .description,
    icon: <ScriptAnything36Icon className="text-white" />,
  },
];

function SteepApiSection() {
  const { isSmall } = useWindowSize();
  const { triggerRef, isInView } = useInViewTrigger({
    start: isSmall ? "top bottom-=200" : "top bottom-=300",
  });

  return (
    <div className="pt-10 bg-[#1A1A1A] pb-10 sm:pb-20 lg:pb-40">
      <Section ref={triggerRef}>
        <div className="flex mt-15 sm:mt-30 xl:mt-40 mb-20">
          <SplitHeadingBlock
            mode="dark"
            isInView={isInView}
            heading={SEMANTIC_PLATFORM_COPY.steepApiSection.title}
            description={SEMANTIC_PLATFORM_COPY.steepApiSection.description}
          />
        </div>
      </Section>
      <Section noPaddingOnSmallScreens={true}>
        <div className="flex flex-col gap-4 md:rounded-2xl overflow-hidden h-[500px] sm:h-full relative">
          <Image
            src="/images/model/api-hero.png"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="h-[670px] w-auto object-cover object-left"
          />
        </div>
      </Section>
      <Section>
        <div className="text-white text-lg font-medium mb-10 md:mb-16 pt-8 flex flex-col gap-2 text-insets max-w-[800px]">
          {SEMANTIC_PLATFORM_COPY.steepApiSection.imageText.title}
          <div className="text-white/60 text-base lg:text-lg font-normal">
            {SEMANTIC_PLATFORM_COPY.steepApiSection.imageText.description}
          </div>
        </div>
        <StaggerFeatureGrid
          items={STEEP_API_CAPABILITIES}
          mode="dark"
          className="text-insets"
        />
      </Section>
    </div>
  );
}

const CACHING_LAYER_FEATURES = [
  {
    title:
      SEMANTIC_PLATFORM_COPY.cachingLayerSection.features.globalMetrics.title,
    description:
      SEMANTIC_PLATFORM_COPY.cachingLayerSection.features.globalMetrics
        .description,
    icon: <ClockRefresh36Icon className="text-white shrink-0" />,
  },
  {
    title:
      SEMANTIC_PLATFORM_COPY.cachingLayerSection.features.highEngagement.title,
    description:
      SEMANTIC_PLATFORM_COPY.cachingLayerSection.features.highEngagement
        .description,
    icon: <HighEngagement36Icon className="text-white shrink-0" />,
  },
  {
    title:
      SEMANTIC_PLATFORM_COPY.cachingLayerSection.features.fineGrainedControl
        .title,
    description:
      SEMANTIC_PLATFORM_COPY.cachingLayerSection.features.fineGrainedControl
        .description,
    icon: <FineGrainedRetention36Icon className="text-white shrink-0" />,
  },
] as const;

function CachingLayerSection() {
  const { isSmall } = useWindowSize();
  const { triggerRef, isInView } = useInViewTrigger({
    start: isSmall ? "top bottom-=200" : "top bottom-=300",
  });

  return (
    <>
      <Section className="gap-20 flex flex-col mt-40 mb-8" ref={triggerRef}>
        <div className="flex lg:flex-row flex-col gap-8">
          <div className="flex flex-col lg:w-1/3 lg:pt-10">
            <SplitHeadingBlock
              mode="dark"
              isInView={isInView}
              headingClassName="sm:text-[46px]! text-[40px]!"
              heading={SEMANTIC_PLATFORM_COPY.cachingLayerSection.title}
              description={
                SEMANTIC_PLATFORM_COPY.cachingLayerSection.description
              }
              cta={
                <>
                  {CACHING_LAYER_FEATURES.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex-row mt-7 hidden xl:flex gap-5"
                    >
                      {item.icon}
                      <div className="flex flex-col  text-white text-md font-medium">
                        {item.title}
                        <span className="text-white/60  font-normal">
                          {item.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </>
              }
            />
          </div>
          <div className="xl:flex-1 lg:w-2/3 lg:mt-0 mt-8 border border-white/5 rounded-2xl overflow-hidden ">
            <img
              src="/images/model/cache.svg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>
      <Section className="px-10! mt-12 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:hidden mb-30 md:mb-40 md:px-20! gap-8 md:gap-y-10">
        {CACHING_LAYER_FEATURES.map((item, idx) => (
          <div
            key={idx}
            className="flex-row md:flex-row sm:flex-col flex gap-4 md:gap-6"
          >
            <div className="size-9 scale-85 md:scale-100">{item.icon}</div>
            <div className="flex flex-col  text-white text-md font-medium">
              {item.title}
              <span className="text-white/60 font-normal">
                {item.description}
              </span>
            </div>
          </div>
        ))}
      </Section>
    </>
  );
}

const ENTERPRISE_FEATURES: readonly ThreeCardItemData[] = [
  {
    title: SEMANTIC_PLATFORM_COPY.enterpriseSection.features.companySso.title,
    description:
      SEMANTIC_PLATFORM_COPY.enterpriseSection.features.companySso.description,
    image: "/images/model/enterprise-sso.png",
  },
  {
    title:
      SEMANTIC_PLATFORM_COPY.enterpriseSection.features.userProvisioning.title,
    description:
      SEMANTIC_PLATFORM_COPY.enterpriseSection.features.userProvisioning
        .description,
    image: "/images/model/enterprise-scim.png",
  },
  {
    title:
      SEMANTIC_PLATFORM_COPY.enterpriseSection.features.multiWorkspace.title,
    description:
      SEMANTIC_PLATFORM_COPY.enterpriseSection.features.multiWorkspace
        .description,
    image: "/images/model/enterprise-audit-logs.png",
  },
  {
    title:
      SEMANTIC_PLATFORM_COPY.enterpriseSection.features.multiDataSources.title,
    description:
      SEMANTIC_PLATFORM_COPY.enterpriseSection.features.multiDataSources
        .description,
    image: "/images/model/enterprise-multi-workspace.png",
  },
];

function ForEnterpriseSection() {
  const { isSmall } = useWindowSize();
  const { triggerRef, isInView } = useInViewTrigger({
    start: isSmall ? "top bottom-=200" : "top bottom-=300",
  });

  return (
    <>
      <Section
        className="mt-15 sm:mt-30 xl:mt-40 mb-16 lg:mb-30"
        ref={triggerRef}
      >
        <SplitHeadingBlock
          mode="dark"
          isInView={isInView}
          heading={SEMANTIC_PLATFORM_COPY.enterpriseSection.title}
          description={SEMANTIC_PLATFORM_COPY.enterpriseSection.description}
        />
      </Section>
      <Section noPaddingOnSmallScreens={true} className="mb-20">
        <FourCardRow items={ENTERPRISE_FEATURES} mode="dark" />
      </Section>
    </>
  );
}

export function SemanticPlatformPage() {
  return (
    <>
      <style>{"body { background-color: #222222; }"}</style>
      <SteepLayout
        className="bg-[#121212]"
        activePage="product"
        mode="dark"
        cookieConsentMode="dark"
      >
        <SemanticPlatformHeroSection />
        <SemanticPlatformOverviewSection />
        <MetricsCatalogSection />
        <EmpowerUsersBannerSection />
        <ControlPermissionsSection />
        <SteepApiSection />
        <CachingLayerSection />
        <ForEnterpriseSection />
        <GetStartedSection mode="dark" />
      </SteepLayout>
    </>
  );
}

export function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { isSmall } = useWindowSize();
  const { triggerRef, isInView } = useInViewTrigger({
    start: isSmall ? "top bottom-=200" : "top bottom-=300",
  });

  return (
    <Section id="faq" ref={triggerRef} className="py-16 md:py-24 lg:py-32">
      <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
        <div className="lg:w-1/3">
          <SplitHeadingBlock
            isInView={isInView}
            heading="Frequently asked questions"
          />
        </div>
        <div className="lg:w-2/3">
          <VerticalAccordionTabs
            activeIndex={activeIndex}
            handleTabClick={setActiveIndex}
            sections={SEALOS_FAQ_ITEMS}
            className="w-full lg:w-full mr-0!"
          />
        </div>
      </div>
    </Section>
  );
}
