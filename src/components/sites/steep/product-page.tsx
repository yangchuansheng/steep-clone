"use client";
/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { SteepLayout } from "./layout-shell";
import { GetStartedSection } from "./get-started-section";
import {
  CarouselFeatureCard,
  type IconProps,
  Section,
  SnapCarousel,
  SplitHeadingBlock,
  StaggerFeatureGrid,
  type StaggerFeatureGridItem,
  SteepButton,
  ThreeCardItem,
  type ThreeCardItemData,
  ThreeCardRow,
  useInViewTrigger,
  useStaggerReveal,
  useWindowSize,
} from "./shared";

gsap.registerPlugin(SplitText);

function Download16Icon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.7 8a.7.7 0 0 1 .7.7v4.103a.8.8 0 0 0 .8.8h9.6a.8.8 0 0 0 .8-.8V8.7a.7.7 0 1 1 1.4 0v4.103a2.2 2.2 0 0 1-2.2 2.2H3.2a2.2 2.2 0 0 1-2.2-2.2V8.7a.7.7 0 0 1 .7-.7"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.35 1.368a.65.65 0 1 1 1.3 0v6.788l2.39-2.39a.65.65 0 1 1 .92.919l-3.5 3.5a.65.65 0 0 1-.92 0l-3.5-3.5a.65.65 0 0 1 .92-.92l2.39 2.39z"
      />
    </svg>
  );
}

function SmartFilters48Icon(props: IconProps) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M33.5273 7.39746H40.0547C41.7115 7.39746 43.0547 8.74061 43.0547 10.3975V16.1748V33.7295V39.5068C43.0547 41.1637 41.7115 42.5068 40.0547 42.5068H33.5273H14.4727H7.94531C6.28846 42.5068 4.94531 41.1637 4.94531 39.5068V33.7295V30.2551"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.0313 20.0771L27.6563 14.4521L22.0312 8.82715"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.96875 20.0771L2.34375 14.4521L7.96875 8.82715"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.1289 25.1332L17.8711 3.77148"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PivotTables48Icon(props: IconProps) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <circle
        cx="32.5479"
        cy="14.9647"
        r="6.55002"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="13.7831"
        cy="17.6855"
        r="6.58431"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M45.6752 39.3761C44.2145 33.1752 39.2787 28.1484 32.5481 28.1484C25.8174 28.1484 20.8816 33.1752 19.4209 39.3761"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.8231 32.3645C20.5673 29.965 17.4643 28.4164 13.7832 28.4164C7.24283 28.4164 2.52753 33.3048 1.14609 39.1692C1.03212 39.6531 1.33194 40.1377 1.81576 40.2516C2.29957 40.3656 2.78417 40.0658 2.89814 39.582C4.13405 34.3353 8.26307 30.2164 13.7832 30.2164C17.0083 30.2164 19.7585 31.6224 21.7344 33.8377C22.0659 33.3206 22.4298 32.8285 22.8231 32.3645Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CohortAnalysis48Icon(props: IconProps) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M33.6071 15.4922H40.0351C41.6919 15.4922 43.0351 16.8353 43.0351 18.4922V40.9775C43.0351 42.6343 41.6919 43.9775 40.0351 43.9775H17.5498C15.8929 43.9775 14.5498 42.6343 14.5498 40.9775V34.3485"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <rect
        x="4.9502"
        y="5.90234"
        width="28.5"
        height="28.5"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M13.4414 14.458H19.2002M24.9589 14.458H19.2002M19.2002 14.458V27.1047"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Heatmaps48Icon(props: IconProps) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <circle
        cx="15"
        cy="15"
        r="14.1"
        transform="matrix(-1 0 0 1 48 9.95215)"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="15"
        cy="15"
        r="14.1"
        transform="matrix(-1 0 0 1 30 9.95215)"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function DeepDives36Icon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M18 0c9.941 0 18 8.059 18 18s-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0m-2.922 10.563a.797.797 0 0 0 0 1.593h.5v3.73l-4.52 7.102c-.674 1.061.088 2.45 1.345 2.45H23.6c1.256 0 2.019-1.388 1.345-2.449l-4.523-7.12v-3.713h.5a.797.797 0 1 0 0-1.594zM18 22.09a.85.85 0 1 1 0 1.699.85.85 0 0 1 0-1.7m-2.29-2.277a.85.85 0 1 1 0 1.7.85.85 0 0 1 0-1.7m4.58 0a.85.85 0 1 1 0 1.7.85.85 0 0 1 0-1.7m-1.493-7.657v4.107h.006l.91 1.596a.213.213 0 0 1-.185.319h-3.056a.213.213 0 0 1-.185-.319l.912-1.596h.004v-4.107z"
      />
    </svg>
  );
}

function BusinessReviews36Icon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M18 0c9.941 0 18 8.059 18 18s-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0m4.158 10.994a3.1 3.1 0 0 0-2.81 1.795 17 17 0 0 0-1.88-.101c-2.113 0-4.269.576-5.597 2.06-.404-.187-.585-.414-.666-.594a.87.87 0 0 1-.01-.66.84.84 0 0 1 .382-.46.42.42 0 0 1 .373-.008l.139.07a.797.797 0 0 0 .705-1.428 2.02 2.02 0 0 0-1.929-.062c-.55.275-.958.775-1.165 1.332a2.46 2.46 0 0 0 .051 1.868c.238.53.665.976 1.265 1.295-.29.686-.453 1.491-.453 2.43 0 1.59.468 2.799 1.227 3.692l-.454 1.694a1.594 1.594 0 0 0 3.078.825l.205-.762c.903.273 1.88.395 2.85.395 1.036 0 2.006-.026 2.919-.138l.135.505a1.593 1.593 0 1 0 3.079-.825l-.15-.559c.91-.466 1.756-1.143 2.553-2.122.146-.18.222-.406.222-.638V17.84a.53.53 0 0 0-.35-.5l-1.104-.402c0-1.287-.66-2.345-1.892-3.083v-2.138a.723.723 0 0 0-.723-.723m-.067 4.881a.904.904 0 1 1 0 1.807.904.904 0 0 1 0-1.807m-4.354-1.64a.744.744 0 0 1-.032 1.487c-.833-.018-1.383.02-1.836.132-.437.107-.825.294-1.313.632a.744.744 0 0 1-.848-1.222c.594-.412 1.147-.692 1.806-.855.643-.158 1.348-.194 2.223-.175"
      />
    </svg>
  );
}

function ProductEngagement36Icon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M18 0c9.941 0 18 8.059 18 18s-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0m7.452 10.176c-1.146-.16-2.837.18-4.49.814-1.666.64-3.393 1.621-4.608 2.836q-.525.527-.95 1.073l-2.112.267a.53.53 0 0 0-.309.151l-2.543 2.544a.532.532 0 0 0 .444.903l2.615-.34a7 7 0 0 0-.259 1.01.53.53 0 0 0 .149.46l2.842 2.842a.53.53 0 0 0 .466.148c.25-.044.585-.129.98-.262l-.338 2.597a.533.533 0 0 0 .902.444l2.544-2.543a.53.53 0 0 0 .151-.31l.267-2.11c.363-.285.724-.601 1.074-.951 1.197-1.197 2.188-2.912 2.836-4.581.642-1.653.987-3.364.79-4.553a.53.53 0 0 0-.45-.44m-12.12 11.08a.53.53 0 0 0-.855.154l-1.204 2.586c-.21.45.26.918.71.705l2.584-1.223a.53.53 0 0 0 .146-.858zm7.307-7.576a1.268 1.268 0 1 1 1.793 1.793 1.268 1.268 0 0 1-1.793-1.793"
      />
    </svg>
  );
}

function GrowthReports36Icon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M18 0c9.941 0 18 8.059 18 18s-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0m1.153 11.03a2.13 2.13 0 0 0-1.566.621l-5.936 5.936c-.829.83-.83 2.175 0 3.005l3.757 3.757c.83.83 2.175.829 3.005 0l5.936-5.936c.414-.414.638-.981.62-1.566l-.11-3.647a2.124 2.124 0 0 0-2.06-2.06zm2.263 2.051a1.063 1.063 0 1 1 1.503 1.503 1.063 1.063 0 0 1-1.503-1.503"
      />
    </svg>
  );
}

const PRODUCT_COPY = {
  hero: {
    title: "Built for",
    titleRotatingWords: [
      "commercial",
      "operations",
      "product",
      "marketing",
      "finance",
      "everyone",
    ],
    description: (
      <>
        The BI platform that makes it easy for all users{" "}
        <br className="hidden xs:block" /> to explore, analyze and report.
      </>
    ),
  },
  exploreAndAnalyzeSection: {
    title: "Explore and analyze",
    description: "Give power to teams to answer their own questions.",
    features: {
      exploreView: {
        title: (
          <>
            Easy to learn.
            <br />
            Deep where it counts.
          </>
        ),
        description:
          "With Steep’s intuitive Explore view, everyone can analyze without  analyst support.",
      },
      numbersCanBeTrusted: {
        title: "All numbers can be trusted",
        description:
          "Everyone uses the same metrics defined by the data team. ",
      },
      breakdowns: {
        title: "Powerful breakdowns",
        description: "Breakdown metrics by centrally defined dimensions.",
      },
      compares: {
        title: "Easy compares",
        description:
          "With just one click, overlay metrics. previous periods, targets and forecasts.",
      },
      pivotTables: {
        title: "Pivot tables",
        description:
          "Breakdown metrics by\u00a0two dimensions or dimension and time.",
      },
      cohorts: {
        title: "Cohort analysis",
        description: "Easily track how different groups behave overtime.",
      },
      heatmaps: {
        title: "Heatmaps",
        description:
          "Built-in color themes, where you can fine-tune thresholds.",
      },
      smartFilters: {
        title: "Smart filters",
        description: "Apply filters across multiple metrics.",
      },
    },
  },
  reportsSection: {
    title: "Reports",
    description:
      "Communicate insights, collaborate seamlessly, and make sense of your data together.",
    reportsHero: {
      title: "Create any type of content",
      description: "From all-hands updates to in-depth driver analysis.",
    },
    capabilities: {
      sales: {
        title: "Growth reports",
        description:
          "Custom sales reports to track pipeline, deals, and conversons.",
      },
      product: {
        title: "Product engagement",
        description:
          "Understand new feature launches and product engagement.",
      },
      finance: {
        title: "Business reviews",
        description:
          "Track transactons, revenue, expenses and export tables to CSV.",
      },
      deepDives: {
        title: "Deep-dives",
        description: "Dive into metric performance with adhoc deepdives. ",
      },
    },
    features: {
      buildingBlocks: {
        title: "Rich building blocks",
        description:
          "Combine charts, tables, big numbers and text in one dynamic document.",
      },
      globalFilters: {
        title: "Global filters",
        description:
          "Update the entire report centrally by time period, time grain or dimension.",
      },
      slack: {
        title: "Schedule to Slack",
        description: "Automatically deliver reports to Slack channels.",
      },
    },
  },
  mapsSection: {
    title: "Maps",
    description: "Create rich, location-based visualizations in seconds",
    imageTitle: "Maps made to be explored",
    imageDescription:
      "Simple, intuitive, and made to be explored by everyone. Just open the map and dive into your metrics instantly.",
  },
  bigImage: {
    title: "Data at your fingertips",
    description: "Steep’s mobile app keeps your data always within reach.",
    cta: "Download",
  },
  entitiesSection: {
    title: "Entities",
    description:
      "Drill-down from any metric to your row-level customers, transactions, or products",
    features: {
      drilldown: {
        title: "Drill down from anywhere",
        description:
          "Click on any visualization to see the row-level details behind the metric.",
      },
      links: {
        title: "Custom links",
        description: "Navigate seamlessly to relevant web pages.",
      },
      export: {
        title: "Export",
        description:
          "Export your filtered and sorted entity list to use anywhere.",
      },
    },
  },
  scaleWithSteepSection: {
    title: "Scale with Steep",
    description: "The platform designed to be used by the whole company.",
    features: {
      customization: {
        title: "Customized home screen",
        description: "Lift up key metrics and targets to create alignment.",
      },
      spaceForEachTeam: {
        title: "A space for each team",
        description: "Customized widgets and content to suit all functions.",
      },
      favorites: {
        title: "Personal favorites",
        description: "Quick access to the things that matter to you.",
      },
      speed: {
        title: "Collaborate at scale",
        description: "Analyze, comment and create reports together.",
      },
    },
  },
} as const;

export interface MarbleShaderSettings {
  colorA?: string;
  colorB?: string;
  colorC?: string;
  colorD?: string;
  colorE?: string;
  scale?: number;
  swirl?: number;
  spread?: number;
  shift?: number;
  grain?: number;
  zoom?: number;
  yOffset?: number;
  xOffset?: number;
  speed?: number;
  animate?: boolean;
  seed?: [number, number];
  maxPixelRatio?: number;
  fps?: number;
}

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

  constructor(canvas: HTMLCanvasElement, initialSettings: MarbleShaderSettings = {}) {
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
    gl.attachShader(prog, compileShader(gl, gl.VERTEX_SHADER, MARBLE_VERTEX_SHADER));
    gl.attachShader(prog, compileShader(gl, gl.FRAGMENT_SHADER, MARBLE_FRAGMENT_SHADER));
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
    if (next.yOffset != null) gl.uniform1f(this.uniforms.u_yOffset, next.yOffset);
    if (next.xOffset != null) gl.uniform1f(this.uniforms.u_xOffset, next.xOffset);
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

const MARBLE_SETTINGS: MarbleShaderSettings = {
  colorA: "#4b9bd8",
  colorB: "#d1c194",
  colorC: "#64c978",
  colorD: "#f0f1f2",
  colorE: "#ffffff",
  scale: 0.15,
  swirl: 0,
  spread: 0.41,
  shift: 1.1,
  grain: 0.03,
  zoom: 0.78,
  yOffset: -0.05,
  xOffset: 0,
  speed: 3,
  animate: false,
  maxPixelRatio: 1.5,
  seed: [15.64, 42.1],
  fps: 15,
};

function getMarbleResponsiveSettings(width: number): MarbleShaderSettings {
  if (width < 480) {
    return { zoom: 0.8, xOffset: 0, yOffset: -0.1 };
  }
  if (width < 1024) {
    return { zoom: 0.8, xOffset: 0, yOffset: -0.05 };
  }
  return {
    zoom: MARBLE_SETTINGS.zoom,
    xOffset: MARBLE_SETTINGS.xOffset,
    yOffset: MARBLE_SETTINGS.yOffset,
  };
}

function RotatingHeroWords() {
  const containerRef = useRef<HTMLSpanElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const splitsRef = useRef<SplitText[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const elements = wordRefs.current.filter(
      (el): el is HTMLSpanElement => el !== null,
    );
    if (!container || elements.length === 0) return;

    const splits = elements.map((el) => SplitText.create(el, { type: "chars" }));
    splitsRef.current = splits;

    splits.forEach((split) => {
      gsap.set(split.chars, {
        yPercent: 100,
        opacity: 0,
        padding: "0 0.25em",
        margin: "0 -0.25em",
        force3D: true,
      });
    });

    gsap.timeline().to(splits[0].chars, {
      yPercent: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.025,
      ease: "power3.out",
    });

    const loopTl = gsap.timeline({ repeat: -1, delay: 1.5 });
    splits.forEach((currentSplit, idx) => {
      const nextIdx = (idx + 1) % splits.length;
      const nextSplit = splits[nextIdx];
      const isLast = idx === splits.length - 1;

      loopTl.to({}, { duration: isLast ? 6 : 0.5 });
      loopTl.to(currentSplit.chars, {
        yPercent: -100,
        opacity: 0,
        duration: 0.5,
        stagger: 0.01,
        ease: "power2.inOut",
      });
      loopTl.fromTo(
        nextSplit.chars,
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.01,
          ease: "power2.inOut",
        },
        "<0.2",
      );
    });
    timelineRef.current = loopTl;

    return () => {
      loopTl.kill();
      splitsRef.current.forEach((split) => split.revert());
      splitsRef.current = [];
      timelineRef.current = null;
    };
  }, []);

  return (
    <span
      ref={containerRef}
      className="inline-block overflow-hidden align-bottom pb-[0.1em] translate-y-[0.1em] relative -ml-2.5 xs:ml-0"
      style={{
        fontKerning: "none",
        WebkitFontSmoothing: "antialiased",
        textRendering: "optimizeSpeed",
      }}
    >
      <span
        className="invisible italic pl-[0.15em] pr-[0.1em]"
        aria-hidden={true}
      >
        abcdefghijkl
      </span>
      {PRODUCT_COPY.hero.titleRotatingWords.map((word, idx) => (
        <span
          key={word}
          ref={(el) => {
            if (el) wordRefs.current[idx] = el;
          }}
          className="absolute inset-y-0 left-[0.25em]  inline-block italic text-left"
        >
          {word}
        </span>
      ))}
    </span>
  );
}

function ProductHeroHeadline() {
  return (
    <>
      <div className="text-[44px] sm:text-[52px] md:text-[70px] lg:text-[88px] leading-tight tracking-none font-serif text-primary-text mb-4 animate-fade-in-y xs:-mr-10 flex xs:block flex-col pt-3 sm:pt-0 transition-all duration-300">
        <span className="whitespace-nowrap leading-none tracking-[-0.015em] -mb-2 xs:mb-0">
          {PRODUCT_COPY.hero.title}
        </span>
        <RotatingHeroWords />
      </div>
      <div className="text-sm md:text-xl lg:text-2xl leading-tight md:leading-normal animate-fade-in-y animation-delay-300 w-60 xs:w-full">
        {PRODUCT_COPY.hero.description}
      </div>
    </>
  );
}

function ProductHeroSection() {
  const canvasRef = useMarbleCanvas({
    settings: MARBLE_SETTINGS,
    getResponsiveSettings: getMarbleResponsiveSettings,
  });

  return (
    <div className="relative pt-16 bg-linear-to-b from-[#f0f1f2] to-white">
      <canvas
        ref={canvasRef}
        id="marble"
        className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-700"
      />
      <div className="xs:text-center h-64 md:h-112 flex flex-col xs:items-center justify-center px-7">
        <ProductHeroHeadline />
      </div>
      <div className="relative xs:hidden pl-6 overflow-clip pb-12">
        <img
          src="/images/product/hero-report.png"
          alt=""
          className="block rounded-l-xl shadow-xl h-[103vw] object-top-left object-cover"
        />
      </div>
      <div className="relative px-8 md:px-12 hidden xs:block lg:hidden pb-12">
        <img
          src="/images/product/hero-report.png"
          alt=""
          className="w-auto rounded-xl sm:rounded-2xl shadow-2xl"
        />
      </div>
      <div className="relative px-20 max-w-[1360px] mx-auto hidden lg:block pb-16">
        <img
          src="/images/product/hero-report-large.png"
          alt=""
          className="w-full rounded-[20px] xl:rounded-3xl shadow-2xl"
        />
      </div>
    </div>
  );
}

const EXPLORE_CARDS: readonly ThreeCardItemData[] = [
  {
    title: PRODUCT_COPY.exploreAndAnalyzeSection.features.numbersCanBeTrusted.title,
    description:
      PRODUCT_COPY.exploreAndAnalyzeSection.features.numbersCanBeTrusted.description,
    image: "/images/product/explore-trust.png",
  },
  {
    title: PRODUCT_COPY.exploreAndAnalyzeSection.features.breakdowns.title,
    description:
      PRODUCT_COPY.exploreAndAnalyzeSection.features.breakdowns.description,
    image: "/images/product/explore-breakdowns.png",
  },
  {
    title: PRODUCT_COPY.exploreAndAnalyzeSection.features.compares.title,
    description:
      PRODUCT_COPY.exploreAndAnalyzeSection.features.compares.description,
    image: "/images/product/explore-compare.png",
  },
];

const EXPLORE_CAPABILITIES: readonly StaggerFeatureGridItem[] = [
  {
    title: PRODUCT_COPY.exploreAndAnalyzeSection.features.pivotTables.title,
    icon: <PivotTables48Icon className="text-primary-text" />,
    description:
      PRODUCT_COPY.exploreAndAnalyzeSection.features.pivotTables.description,
  },
  {
    title: PRODUCT_COPY.exploreAndAnalyzeSection.features.cohorts.title,
    description:
      PRODUCT_COPY.exploreAndAnalyzeSection.features.cohorts.description,
    icon: <CohortAnalysis48Icon className="text-primary-text" />,
  },
  {
    title: PRODUCT_COPY.exploreAndAnalyzeSection.features.heatmaps.title,
    description:
      PRODUCT_COPY.exploreAndAnalyzeSection.features.heatmaps.description,
    icon: <Heatmaps48Icon className="text-primary-text" />,
  },
  {
    title: PRODUCT_COPY.exploreAndAnalyzeSection.features.smartFilters.title,
    description:
      PRODUCT_COPY.exploreAndAnalyzeSection.features.smartFilters.description,
    icon: <SmartFilters48Icon className="text-primary-text" />,
  },
];

function ExploreAndAnalyzeSection() {
  const { isSmall } = useWindowSize();
  const { triggerRef, isInView } = useInViewTrigger({
    start: isSmall ? "top bottom-=200" : "top bottom-=300",
  });

  return (
    <>
      <Section ref={triggerRef}>
        <div className="flex mt-15 sm:mt-30 xl:mt-40 mb-20 w-full justify-center">
          <SplitHeadingBlock
            isInView={isInView}
            centerAligned
            heading={PRODUCT_COPY.exploreAndAnalyzeSection.title}
            description={PRODUCT_COPY.exploreAndAnalyzeSection.description}
          />
        </div>
      </Section>
      <Section
        noPaddingOnSmallScreens
        className="mb-7 xs:mb-8 lg:mb-10"
      >
        <div className="h-auto flex flex-col-reverse md:flex-col lg:relative md:bg-light-gray md:rounded-3xl overflow-hidden">
          <div
            className={clsx(
              "mobile-padding xs:mx-auto xs:text-center",
              "sm:mb-10 xs:max-w-[480px] sm:w-2/3",
              "mb-4 md:mb-0 md:pl-12! md:pt-14 md:w-2/3 md:mx-0 md:text-left",
              "lg:w-[40%] h-auto lg:absolute lg:top-0 lg:left-0 lg:pl-20! lg:py-32 lg:flex-1",
            )}
          >
            <p className="lg:text-3xl xs:text-xl sm:text-2xl text-base font-medium leading-tight mb-3 text-insets">
              {PRODUCT_COPY.exploreAndAnalyzeSection.features.exploreView.title}
            </p>
            <p className="text-primary-text/60 text-sm lg:text-xl text-md font-normal leading-tight text-insets">
              {
                PRODUCT_COPY.exploreAndAnalyzeSection.features.exploreView
                  .description
              }
            </p>
          </div>
          <div className=" w-full overflow-hidden xs:px-8 lg:px-0 md:flex lg:relative lg:-right-[35%] md:px-12">
            <div className="md:w-[931px] overflow-clip mb-7 sm:mb-10 md:my-18 w-[125%] xs:w-full lg:content-center">
              <Image
                height={931}
                width={563}
                src="/images/product/explore.png"
                alt="Laptop running the Steep app"
                className="relative -left-[24%] xs:left-0 w-full max-w-[563px] sm:max-w-full md:max-w-[931px]"
              />
            </div>
          </div>
        </div>
      </Section>
      <Section
        noPaddingOnSmallScreens
        className="gap-8 md:gap-20 flex flex-col mb-16 md:mb-40"
      >
        <ThreeCardRow items={EXPLORE_CARDS} />
        <StaggerFeatureGrid
          items={EXPLORE_CAPABILITIES}
          className="px-10 lg:px-2"
        />
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
    <div ref={triggerRef} className={clsx("relative overflow-visible", className)}>
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

interface MobileAppBannerProps {
  image: string;
  smallImage: string;
  cta: string;
  title: string;
  description: string;
  bgColor?: string;
}

function MobileAppBanner({
  image,
  smallImage,
  cta,
  title,
  description,
  bgColor = "bg-[#EFEFEF]/60",
}: MobileAppBannerProps) {
  return (
    <ScaleInViewBanner
      src={image}
      smallSrc={smallImage}
      className="mb-20 sm:mb-30 md:mb-40 pb-56 xs:pb-52 sm:pb-24 md:pb-0"
      imageClassName="w-full hidden lg:block"
      smallImageClassName="w-full lg:hidden"
    >
      <div
        className={clsx(
          "z-10 absolute xl:bottom-20 xl:left-20 sm:left-12 md:bottom-14 left-7 right-7 xs:right-auto bottom-0 md:top-auto flex flex-col gap-4 p-11 sm:p-12 lg:max-w-[384px] max-w-sm ",
          "",
        )}
      >
        <div
          className={clsx(
            "absolute inset-0 before:w-full before:h-full backdrop-blur-md z-0 rounded-3xl shadow-xl border border-white/20",
            bgColor,
          )}
        />
        <div className="z-5 flex flex-col gap-4">
          <p className="text-primary-text text-[30px] font-book leading-tight">
            {title}
          </p>
          <p className="text-primary-text/60 text-base lg:text-lg">
            {description}
          </p>
          <div className=" mt-4">
            <Link href="/download">
              <SteepButton
                label={cta}
                variant="secondary"
                icon={<Download16Icon className="opacity-40" />}
              />
            </Link>
          </div>
        </div>
      </div>
    </ScaleInViewBanner>
  );
}

const REPORTS_CAPABILITIES: readonly StaggerFeatureGridItem[] = [
  {
    title: PRODUCT_COPY.reportsSection.capabilities.sales.title,
    description: PRODUCT_COPY.reportsSection.capabilities.sales.description,
    icon: <GrowthReports36Icon className="text-primary-text" />,
  },
  {
    title: PRODUCT_COPY.reportsSection.capabilities.product.title,
    description: PRODUCT_COPY.reportsSection.capabilities.product.description,
    icon: <ProductEngagement36Icon className="text-primary-text" />,
  },
  {
    title: PRODUCT_COPY.reportsSection.capabilities.finance.title,
    description: PRODUCT_COPY.reportsSection.capabilities.finance.description,
    icon: <BusinessReviews36Icon className="text-primary-text" />,
  },
  {
    title: PRODUCT_COPY.reportsSection.capabilities.deepDives.title,
    description: PRODUCT_COPY.reportsSection.capabilities.deepDives.description,
    icon: <DeepDives36Icon className="text-primary-text" />,
  },
];

const REPORTS_FEATURES: readonly ThreeCardItemData[] = [
  {
    title: PRODUCT_COPY.reportsSection.features.buildingBlocks.title,
    description: PRODUCT_COPY.reportsSection.features.buildingBlocks.description,
    image: "/images/product/reports-building-blocks.png",
  },
  {
    title: PRODUCT_COPY.reportsSection.features.globalFilters.title,
    description: PRODUCT_COPY.reportsSection.features.globalFilters.description,
    image: "/images/product/reports-filters.png",
    bordered: true,
  },
  {
    title: PRODUCT_COPY.reportsSection.features.slack.title,
    description: PRODUCT_COPY.reportsSection.features.slack.description,
    image: "/images/product/reports-slack.png",
    bordered: true,
  },
];

function ReportsSection() {
  const { isSmall } = useWindowSize();
  const { triggerRef, isInView } = useInViewTrigger({
    start: isSmall ? "top bottom-=200" : "top bottom-=300",
  });

  return (
    <div>
      <Section ref={triggerRef}>
        <div className="flex mt-15 sm:mt-30 xl:mt-40 mb-8 md:mb-20 w-full justify-center">
          <SplitHeadingBlock
            isInView={isInView}
            centerAligned
            heading={PRODUCT_COPY.reportsSection.title}
            description={PRODUCT_COPY.reportsSection.description}
          />
        </div>
      </Section>
      {isSmall ? (
        <div className="flex flex-col gap-6">
          <Image
            width={393}
            height={360}
            src="/images/product/reports-hero-square.png"
            alt="Example report"
            className="w-full xs:hidden"
          />
          <Image
            width={768}
            height={478}
            src="/images/product/reports-hero-medium.png"
            alt="Example report"
            className="w-full xs:block hidden"
          />
          <div className="mobile-padding mt-4 leading-tight text-base max-w-[500px]">
            <p className="text-primary-text  font-medium text-insets mb-1">
              {PRODUCT_COPY.reportsSection.reportsHero.title}
            </p>
            <p className="text-primary-text/60 text-insets">
              {PRODUCT_COPY.reportsSection.reportsHero.description}
            </p>
          </div>
        </div>
      ) : (
        <Section>
          <div className=" bg-light-gray rounded-2xl justify-between h-160 relative overflow-hidden">
            <div className="absolute left-0 right-0 bottom-0 h-[80%] lg:h-[85%] xl:h-[90%]">
              <Image
                fill
                src="/images/product/reports-hero.png"
                alt="Example report"
                className="object-cover xl:object-bottom-right"
              />
            </div>
            <div className="absolute z-10 left-15 lg:left-20 top-15 lg:top-20 w-[220px]">
              <p className="text-3xl font-[450] leading-tight mb-3">
                {PRODUCT_COPY.reportsSection.reportsHero.title}
              </p>
              <p className="text-primary-text/60 lg:text-base leading-normal">
                {PRODUCT_COPY.reportsSection.reportsHero.description}
              </p>
            </div>
          </div>
        </Section>
      )}
      <Section
        className="mt-8 md:mt-20 md:gap-20 flex flex-col mb-16 md:mb-40"
        noPaddingOnSmallScreens
      >
        <StaggerFeatureGrid
          items={REPORTS_CAPABILITIES}
          className="px-10 lg:px-2 mb-10 md:mb-0"
        />
        <ThreeCardRow items={REPORTS_FEATURES} />
      </Section>
    </div>
  );
}

const ENTITIES_FEATURES: readonly ThreeCardItemData[] = [
  {
    title: PRODUCT_COPY.entitiesSection.features.drilldown.title,
    description: PRODUCT_COPY.entitiesSection.features.drilldown.description,
    image: "/images/product/entities-drilldown.png",
    bordered: true,
  },
  {
    title: PRODUCT_COPY.entitiesSection.features.links.title,
    description: PRODUCT_COPY.entitiesSection.features.links.description,
    image: "/images/product/entities-links.png",
  },
  {
    title: PRODUCT_COPY.entitiesSection.features.export.title,
    description: PRODUCT_COPY.entitiesSection.features.export.description,
    image: "/images/product/entities-export.png",
    bordered: true,
  },
];

interface EntitiesHeroProps {
  title: string;
  description: string;
  image: string;
}

function EntitiesHero({ title, description, image }: EntitiesHeroProps) {
  const { isSmall } = useWindowSize();
  const { triggerRef, isInView } = useInViewTrigger({
    start: isSmall ? "top bottom-=200" : "top bottom-=300",
  });

  return (
    <div
      className="h-auto flex flex-col md:flex-row gap-6 justify-between"
      ref={triggerRef}
    >
      <div className="mobile-padding-only flex flex-col md:mt-50 mt-10 md:w-1/3 w-full">
        <SplitHeadingBlock
          isInView={isInView}
          heading={title}
          headingClassName="text-6xl! md:text-[56px]! mb-3 "
          description={description}
          descriptionClassName="lg:text-xl! text-base! sm:text-md! font-normal leading-tight"
        />
      </div>
      <div className="md:w-2/3 w-full flex bg-light-gray md:rounded-2xl gap-6  overflow-hidden">
        <div className="flex-1 overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={0}
            height={0}
            sizes="100vw"
            className="object-cover w-full "
          />
        </div>
      </div>
    </div>
  );
}

function EntitiesSection() {
  return (
    <Section className="gap-10 flex flex-col" noPaddingOnSmallScreens>
      <EntitiesHero
        title={PRODUCT_COPY.entitiesSection.title}
        description={PRODUCT_COPY.entitiesSection.description}
        image="/images/product/entities-hero.png"
      />
      <ThreeCardRow items={ENTITIES_FEATURES} />
    </Section>
  );
}

const MAPS_IMAGES = [
  { src: "/images/product/maps-red.png" },
  { src: "/images/product/maps-satellite.jpg" },
  { src: "/images/product/maps-blue.png" },
] as const;

function MapsCaption({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col mt-4 shrink-0 text-insets">
      {title && (
        <span className="text-primary-text text-base lg:text-lg font-medium">
          {title}
        </span>
      )}
      {description && (
        <p className="text-primary-text/60 text-xs lg:text-base  max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}

function MapsMosaic({
  title,
  description,
  images,
  isSmall,
}: {
  title?: string;
  description?: string;
  images: readonly { src: string }[];
  isSmall: boolean;
}) {
  if (isSmall) {
    return (
      <div className="flex flex-col gap-6 lg:gap-10 ">
        <img
          src={images[2].src}
          alt=""
          className="w-full object-cover object-top-left bg-light-gray rounded-2xl flex-1 aspect-4/3"
        />
        {(title || description) && (
          <MapsCaption title={title} description={description} />
        )}
        <div className="relative mt-10 pb-[17%]">
          <img
            src={images[1].src}
            alt=""
            className="relative ml-auto w-[55%] aspect-square object-cover bg-light-gray rounded-2xl z-5"
          />
          <img
            src={images[0].src}
            alt=""
            className="absolute top-[25%] left-0 w-[55%] aspect-square object-cover bg-light-gray rounded-2xl lg:rounded-3xl"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-row gap-6 lg:gap-10 h-[500px] md:h-[640px] lg:h-[800px]">
      <div className="flex flex-col gap-6 lg:gap-10 w-1/2 overflow-hidden">
        <img
          src={images[0].src}
          alt=""
          className="w-full object-cover bg-light-gray rounded-2xl flex-1 min-h-0"
        />
        <img
          src={images[1].src}
          alt=""
          className="w-full object-cover bg-light-gray rounded-2xl flex-1 min-h-0"
        />
      </div>
      <div className="flex flex-col gap-2 w-1/2">
        <img
          src={images[2].src}
          alt=""
          className="w-full flex-1 min-h-0 object-cover object-top-right bg-light-gray rounded-2xl "
        />
        {(title || description) && (
          <MapsCaption title={title} description={description} />
        )}
      </div>
    </div>
  );
}

function MapsSection() {
  const { isSmall } = useWindowSize();
  const { triggerRef, isInView } = useInViewTrigger({
    start: isSmall ? "top bottom-=200" : "top bottom-=300",
  });

  return (
    <Section
      ref={triggerRef}
      className="mb-20 xs:mb-30 sm:mb-40 lg:mb-50"
    >
      <div className="flex mt-15 sm:mt-30 xl:mt-40 mb-20 w-full justify-center">
        <SplitHeadingBlock
          isInView={isInView}
          centerAligned
          heading={PRODUCT_COPY.mapsSection.title}
          description={PRODUCT_COPY.mapsSection.description}
        />
      </div>
      <MapsMosaic
        title={PRODUCT_COPY.mapsSection.imageTitle}
        description={PRODUCT_COPY.mapsSection.imageDescription}
        images={MAPS_IMAGES}
        isSmall={isSmall}
      />
    </Section>
  );
}

const SCALE_FEATURES: readonly ThreeCardItemData[] = [
  {
    title: PRODUCT_COPY.scaleWithSteepSection.features.customization.title,
    description:
      PRODUCT_COPY.scaleWithSteepSection.features.customization.description,
    image: "/images/product/scale-homescreen.png",
  },
  {
    title: PRODUCT_COPY.scaleWithSteepSection.features.spaceForEachTeam.title,
    description:
      PRODUCT_COPY.scaleWithSteepSection.features.spaceForEachTeam.description,
    image: "/images/product/scale-teams.png",
    bordered: true,
  },
  {
    title: PRODUCT_COPY.scaleWithSteepSection.features.favorites.title,
    description:
      PRODUCT_COPY.scaleWithSteepSection.features.favorites.description,
    image: "/images/product/scale-favorites.png",
  },
  {
    title: PRODUCT_COPY.scaleWithSteepSection.features.speed.title,
    description: PRODUCT_COPY.scaleWithSteepSection.features.speed.description,
    image: "/images/product/scale-speed.png",
    bordered: true,
  },
];

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

export const SEALOS_CLOUD_PRIMITIVES: readonly ThreeCardItemData[] = [
  {
    title: "High-Availability Databases",
    description:
      "Standalone and replicated PostgreSQL, MySQL, MongoDB, and Redis with internal DNS and 14-day backups.",
    image: "/images/product/scale-homescreen.png",
  },
  {
    title: "Object Storage Buckets",
    description:
      "S3-compatible private and public buckets with folder uploads and 1-hour temporary share links.",
    image: "/images/product/scale-teams.png",
    bordered: true,
  },
  {
    title: "Unified AI Gateway",
    description:
      "Route Chat, Embedding, Rerank, Audio, and PDF models with automatic OpenAI and Anthropic env mapping.",
    image: "/images/product/scale-favorites.png",
  },
  {
    title: "Desktop Preview & Workspaces",
    description:
      "Click live web or PPTX elements in the built-in browser to edit via chat across team workspaces.",
    image: "/images/product/scale-speed.png",
    bordered: true,
  },
];

export interface ScaleWithSteepSectionProps {
  id?: string;
  heading?: React.ReactNode;
  description?: React.ReactNode;
  items?: readonly ThreeCardItemData[];
}

export function ScaleWithSteepSection({
  id,
  heading = PRODUCT_COPY.scaleWithSteepSection.title,
  description = PRODUCT_COPY.scaleWithSteepSection.description,
  items = SCALE_FEATURES,
}: ScaleWithSteepSectionProps = {}) {
  const { isSmall } = useWindowSize();
  const { triggerRef, isInView } = useInViewTrigger({
    start: isSmall ? "top bottom-=200" : "top bottom-=300",
  });

  return (
    <>
      <Section id={id} ref={triggerRef}>
        <div className="flex mt-15 sm:mt-30 xl:mt-40 mb-20 md:px-20 lg:px-0">
          <SplitHeadingBlock
            isInView={isInView}
            heading={heading}
            description={description}
          />
        </div>
      </Section>
      <Section
        noPaddingOnSmallScreens
        className="sm:mb-16 md:mb-24 xl:mb-40"
      >
        <div className="md:px-20 lg:px-0">
          <FourCardRow items={items} />
        </div>
      </Section>
    </>
  );
}

export function CloudPrimitivesSection() {
  return (
    <ScaleWithSteepSection
      heading="Built-in cloud primitives"
      description=""
      items={SEALOS_CLOUD_PRIMITIVES}
    />
  );
}

export function ProductPage() {
  return (
    <SteepLayout activePage="product">
      <ProductHeroSection />
      <ExploreAndAnalyzeSection />
      <MobileAppBanner
        image="/images/product/mobile-horizontal.jpg"
        smallImage="/images/product/mobile-vertical.jpg"
        title={PRODUCT_COPY.bigImage.title}
        description={PRODUCT_COPY.bigImage.description}
        cta={PRODUCT_COPY.bigImage.cta}
      />
      <ReportsSection />
      <EntitiesSection />
      <MapsSection />
      <ScaleWithSteepSection />
      <GetStartedSection />
    </SteepLayout>
  );
}
