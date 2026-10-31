"use client";
/* eslint-disable @next/next/no-img-element, react-hooks/set-state-in-effect */

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SteepLayout } from "./layout-shell";
import {
  CarlPersonaCard,
  JosephinePersonaCard,
  MaryPersonaCard,
} from "./ai-section";
import {
  FeatureImageStack,
  HorizontalTabBar,
  type IconProps,
  NoiseOverlay,
  Section,
  SplitHeadingBlock,
  StaggerFeatureGrid,
  type StaggerFeatureGridItem,
  SteepButton,
  type ThreeCardItemData,
  ThreeCardRow,
  useInViewTrigger,
  useWindowSize,
  VerticalAccordionTabs,
} from "./shared";

gsap.registerPlugin(ScrollTrigger);

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

function SemanticCube36Icon(props: IconProps) {
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

function PuzzlePiece36Icon(props: IconProps) {
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

function CodeWindow48Icon(props: IconProps) {
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

function LockCircle36Icon(props: IconProps) {
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
        d="M18 31c7.18 0 13-5.82 13-13S25.18 5 18 5 5 10.82 5 18s5.82 13 13 13Z"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.8 16.927h8.4c.58 0 1.05.47 1.05 1.05v4.9c0 .58-.47 1.05-1.05 1.05h-8.4c-.58 0-1.05-.47-1.05-1.05v-4.9c0-.58.47-1.05 1.05-1.05ZM14.889 16.239V14.59c0-1.804 1.393-3.267 3.11-3.267 1.72 0 3.112 1.463 3.112 3.267v1.649"
      />
    </svg>
  );
}

function ShieldCheck36Icon(props: IconProps) {
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13.5 17.975 3.387 3.854a.25.25 0 0 0 .394-.025l5.91-8.708"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 7.917c5.5 0 11-2.75 11-2.75s5.5 2.75 11 2.75v11.295a8 8 0 0 1-3.57 6.662l-7.46 4.96-7.416-4.958A8 8 0 0 1 7 19.225z"
      />
    </svg>
  );
}

function DoubleSquareChart36Icon(props: IconProps) {
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

function KeySpark36Icon(props: IconProps) {
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
        d="M7.347 7.347a8.44 8.44 0 0 1 11.932 0 8.44 8.44 0 0 1 2.032 8.647l9.306 9.307a3.257 3.257 0 0 1-1.772 5.516l-2.858.472a1.694 1.694 0 0 1-1.954-1.896l.23-1.731a1.15 1.15 0 0 0-1.265-1.294l-2.107.234a1.984 1.984 0 0 1-2.186-2.213l.23-1.869a1.358 1.358 0 0 0-1.658-1.487l-1.647.392A8.438 8.438 0 0 1 7.347 7.347Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.3}
        d="M9.596 9.596a1.88 1.88 0 1 1 2.66 2.66 1.88 1.88 0 0 1-2.66-2.66Z"
      />
      <path
        fill="#000"
        d="M28.321 27.742a.65.65 0 1 0 .91-.928l-.455.464zm-9.224-9.957-.455.464 9.68 9.493.454-.464.456-.464-9.68-9.494z"
      />
    </svg>
  );
}

const AI_COPY = {
  hero: {
    title: (
      <>
        AI that understands
        <br />
        <em>your</em> business
      </>
    ),
    description:
      "Steep's AI is built on your governed metrics, so you get the right data every time. No guessing. No hallucinations.",
  },
  introSection: {
    title: (
      <>
        Deep analysis, <br className="lg:hidden" /> powered by AI
      </>
    ),
    description:
      "Ask one question. Get a full analysis. The Steep Agent finds all relevant metrics across your workspace, queries them together, and synthesizes the results into a complete picture.",
    features: {
      featureOne: {
        title: "Full-picture analysis",
        description:
          "One question, as many metrics as needed. The agent finds what's relevant and builds the complete picture.",
      },
      featureTwo: {
        title: "Results you can scan",
        description:
          "Key findings structured as clean tables – the fastest way to make sense of a complex analysis.",
      },
      featureThree: {
        title: "Ready-to-share summaries",
        description:
          "A written summary that ties the whole analysis together, clear enough to send straight to a stakeholder.",
      },
    },
  },
  threeCardsSection: {
    cardOne: {
      title: "Company-wide intelligence",
      description:
        "Generate comprehensive analysis using all your relevant metrics, targets, and tcontext.",
    },
    cardTwo: {
      title: "Actionable insights",
      description:
        "Get nicely formatted answers in the shape you want. Charts, tables, and clear bullet points.",
    },
    cardThree: {
      title: "Seamless workflows",
      description:
        "Work with Steep AI anywhere in the app. Add context from explore views, and save generated charts to reports.",
    },
  },
  capabilitiesSection: {
    title: (
      <>
        Answers you <br className="hidden md:block" />
        can trust
      </>
    ),
    description: "Every answer grounded in your semantic foundation.",
    capabilities: {
      capabilityOne: {
        title: "Consistent definitions everywhere",
        description:
          "No matter how you ask, you get answers built on the same metric logic your team agreed on.",
      },
      capabilityTwo: {
        title: "Transparent reasoning",
        description:
          "See the SQL, the metrics queried, and the logic behind every answer.",
      },
      capabilityThree: {
        title: "Clarifies instead of assumes",
        description:
          "When a question could mean multiple things, the agent asks which one you meant.",
      },
    },
  },
  bigImage: {
    title: "Reach your agent from anywhere",
    description: "Get analysis on the go with the Steep mobile app.",
    cta: "Download",
  },
  agentsSection: {
    title: (
      <>
        Power every agent
        <br className="lg:hidden" /> in your stack
      </>
    ),
    description:
      "Your custom agents, internal tools, and LLM applications can access Steep's metrics via API or MCP. Same governed definitions. Same validation. No rebuilding logic.",
    capabilities: {
      capabilityOne: {
        title: "One source of truth",
        description:
          "Use the same metric definitions in all downstream workflows.",
      },
      capabilityTwo: {
        title: "Full semantic access",
        description:
          "Access your whole model and run semantic queries with the Steep API and MCP.",
      },
      capabilityThree: {
        title: "Plugs into your stack",
        description:
          "Works with Claude, ChatGPT, or your agent framework of choice. ",
      },
      capabilityFour: {
        title: "Built for engineering",
        description:
          "Easy integration with modular tools and clear interfaces.",
      },
    },
  },
  channelsSection: {
    title: (
      <>
        Available in all <br className="md:hidden" />
        <img
          src="/images/ai/slack-logo.svg"
          alt="Slack Logo"
          width={60}
          height={60}
          className="inline-block size-10 md:size-12 pb-2"
        />
        channels
      </>
    ),
    description:
      "Ask Steep anything in Slack and get trusted answers in seconds. Right where your team works.",
  },
  safeGuardSection: {
    title: "Safeguarding your data",
    description: "Enterprise-grade security, built in from the start.",
    capabilities: {
      capabilityOne: {
        title: "No training",
        description:
          "Your data is never used to train, fine-tune, or improve any AI model.",
      },
      capabilityTwo: {
        title: "Permissions apply",
        description:
          "The AI agent only access data the requesting user is allowed to see.",
      },
      capabilityThree: {
        title: "Minimal data exposure",
        description:
          "Only what is needed to answer your question is shared with AI models.",
      },
      capabilityFour: {
        title: "Encrypted in transit",
        description:
          "All communication between Steep and AI providers is encrypted with industry standards..",
      },
    },
  },
  getStartedSection: {
    title: (
      <>
        Start using <br />
        AI-analytics today
      </>
    ),
    description:
      "Try Steep for free with up to 3 users. Connect your database or explore in demo mode.",
    cta: "Get started",
    ctaSecondary: "Book a demo",
  },
} as const;

export interface GalaxyShaderSettings {
  bgTop?: string;
  bgBottom?: string;
  armColorCenter?: string;
  armColorMid?: string;
  armColorTip?: string;
  coreColor?: string;
  coreIntensity?: number;
  coreSize?: number;
  armCount?: number;
  armMaxWidth?: number;
  armTaper?: number;
  twistAngle?: number;
  radius?: number;
  centerX?: number;
  centerY?: number;
  tilt?: number;
  rotation?: number;
  speed?: number;
  animate?: boolean;
  galaxyAlpha?: number;
  grain?: number;
  maxPixelRatio?: number;
  fps?: number;
}

type ResolvedGalaxySettings = Required<GalaxyShaderSettings>;

type NumericGalaxySettingKey = {
  [K in keyof ResolvedGalaxySettings]: ResolvedGalaxySettings[K] extends number
    ? K
    : never;
}[keyof ResolvedGalaxySettings];

type ColorGalaxySettingKey = {
  [K in keyof ResolvedGalaxySettings]: ResolvedGalaxySettings[K] extends string
    ? K
    : never;
}[keyof ResolvedGalaxySettings];

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

const GALAXY_UNIFORM_NAMES = [
  "u_resolution",
  "u_time",
  "u_bgTop",
  "u_bgBottom",
  "u_armColorCenter",
  "u_armColorMid",
  "u_armColorTip",
  "u_coreColor",
  "u_coreIntensity",
  "u_coreSize",
  "u_armCount",
  "u_armMaxWidth",
  "u_armTaper",
  "u_twistAngle",
  "u_radius",
  "u_centerX",
  "u_centerY",
  "u_tilt",
  "u_rotation",
  "u_speed",
  "u_galaxyAlpha",
  "u_grain",
] as const;

type GalaxyUniformName = (typeof GALAXY_UNIFORM_NAMES)[number];

const GALAXY_VERTEX_SHADER = `
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`;

const GALAXY_FRAGMENT_SHADER = `
precision highp float;

uniform vec2  u_resolution;
uniform float u_time;
uniform vec3  u_bgTop;
uniform vec3  u_bgBottom;

uniform vec3  u_armColorCenter;
uniform vec3  u_armColorMid;
uniform vec3  u_armColorTip;

uniform vec3  u_coreColor;
uniform float u_coreIntensity;
uniform float u_coreSize;

uniform float u_armCount;
uniform float u_armMaxWidth;
uniform float u_armTaper;
uniform float u_twistAngle;
uniform float u_radius;
uniform float u_centerX;
uniform float u_centerY;
uniform float u_tilt;
uniform float u_rotation;

uniform float u_speed;

uniform float u_galaxyAlpha;
uniform float u_grain;

varying vec2 v_uv;

const float PI = 3.14159265359;

float filmGrain(vec2 uv){
  vec2 s = uv * u_resolution + vec2(22.4, 7.8);
  return fract(sin(dot(s, vec2(12.9898, 78.233))) * 43758.5453) * 2.0 - 1.0;
}

// 3-stop gradient: center @ t=0, mid @ t=0.5, tip @ t=1
vec3 armGradient(float t){
  t = clamp(t, 0.0, 1.0);
  if (t < 0.5) {
    return mix(u_armColorCenter, u_armColorMid, smoothstep(0.0, 1.0, t * 2.0));
  }
  return mix(u_armColorMid, u_armColorTip, smoothstep(0.0, 1.0, (t - 0.5) * 2.0));
}

// Smallest signed angle between two angles.
float angleDelta(float a, float b){
  float d = mod(a - b + PI, 2.0 * PI) - PI;
  return d;
}

void main(){
  float aspect = u_resolution.x / u_resolution.y;

  // Center coords in screen space, aspect-corrected so the galaxy is a circle.
  vec2 uv = v_uv - vec2(0.5, 0.5);
  uv.x *= aspect;
  uv -= vec2(u_centerX * aspect, u_centerY);

  // ── Static rotation THEN tilt ───────────────────────────────────────────────
  // Order matters: rotating first means the tilt squash axis is along the
  // rotated Y direction, producing a diagonal ellipse on screen.
  // (Rotating after tilt has no visible effect — the orthogonal R cancels in
  // the distance metric.)
  float rotRad = radians(u_rotation);
  float cs = cos(rotRad);
  float sn = sin(rotRad);
  uv = vec2(uv.x * cs - uv.y * sn, uv.x * sn + uv.y * cs);

  float tiltRad = radians(u_tilt);
  uv.y /= max(cos(tiltRad), 0.01);

  // Normalize to galaxy radius (1.0 = edge of disc)
  vec2 p = uv / max(u_radius, 0.001);

  float r = length(p);
  float theta = atan(p.y, p.x);

  // ── Accumulate weighted colour from arms ────────────────────────────────────
  //
  // We use *alpha compositing* (not additive light), because the background
  // is near-white: additive blending would clamp every coloured arm to white.
  // Each arm deposits colour * coverage; we normalize at the end to get the
  // blended colour in overlap regions, then composite over the bg by coverage.
  vec3 weightedColor = vec3(0.0);
  float coverageSum = 0.0;

  // Log-spiral base with global rotation over time.
  float spin = -u_time * u_speed;
  float logR = log(max(r, 0.02));
  float twist = u_twistAngle * logR;

  int count = int(clamp(u_armCount, 1.0, 8.0));
  float n = u_armCount;

  for (int i = 0; i < 8; i++) {
    if (i >= count) break;
    float fi = float(i);

    // Each arm's ideal angle at this radius.
    // Subtract rotRad so that the static UV rotation only affects the
    // elliptical *shape* (from tilt), not the arm placement.
    float armAngle = fi * (2.0 * PI / n) + twist + spin - rotRad;
    float d = abs(angleDelta(theta, armAngle));

    // Width tapers with radius (never zero — keeps the tip soft).
    float width = u_armMaxWidth * (1.0 - u_armTaper * r);
    width = max(width, 0.02);

    // Gaussian falloff across the arm, radial falloff along the arm.
    float angFall = exp(-(d * d) / (width * width));
    float radFall = exp(-(r * 1.25) * (r * 1.25));

    float a = angFall * radFall;

    // Soften near the core to avoid a hard seam at r→0.
    a *= smoothstep(0.0, 0.12, r);

    // Colour along the arm (center → mid → tip).
    vec3 c = armGradient(r);

    weightedColor += c * a;
    coverageSum += a;
  }

  // ── Core: soft white-blue glow, participates in the same composite ─────────
  float coreR = max(u_coreSize, 0.01);
  float coreFall = exp(-(r / coreR) * (r / coreR));
  float coreWeight = coreFall * u_coreIntensity;
  weightedColor += u_coreColor * coreWeight;
  coverageSum += coreWeight;

  // Normalized galaxy colour — this is what the galaxy "looks like" at this
  // pixel, regardless of how opaque it is.
  vec3 galaxyColor = weightedColor / max(coverageSum, 0.0001);

  // Edge fade to transparent at the disc boundary (no dark vignette).
  float edgeFade = 1.0 - smoothstep(0.75, 1.15, r);

  // Alpha: how strongly the galaxy shows over the bg.
  float alpha = clamp(coverageSum * edgeFade * u_galaxyAlpha, 0.0, 1.0);

  // ── Background vertical gradient ───────────────────────────────────────────
  vec3 bg = mix(u_bgBottom, u_bgTop, v_uv.y);

  // Alpha-composite the galaxy colour over the bg.
  vec3 col = mix(bg, galaxyColor, alpha);

  col += filmGrain(v_uv) * u_grain;

  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`;

class GalaxyShader {
  private canvas: HTMLCanvasElement;
  private gl: WebGLRenderingContext;
  private prog: WebGLProgram;
  private buf: WebGLBuffer;
  private ro: ResizeObserver;
  private uniforms: Partial<Record<GalaxyUniformName, WebGLUniformLocation | null>> =
    {};
  private settings: ResolvedGalaxySettings;
  private maxPixelRatio: number;
  private fps: number;
  private rafId = 0;
  private startTime = 0;
  private lastFrameTime = 0;

  constructor(canvas: HTMLCanvasElement, initial: GalaxyShaderSettings = {}) {
    this.canvas = canvas;
    const gl = canvas.getContext("webgl", { alpha: false, antialias: false });
    if (!gl) {
      throw new Error("WebGL not supported");
    }
    this.gl = gl;
    this.settings = {
      bgTop: initial.bgTop ?? "#f0f1f2",
      bgBottom: initial.bgBottom ?? "#ffffff",
      armColorCenter: initial.armColorCenter ?? "#5695F1",
      armColorMid: initial.armColorMid ?? "#B9D5FF",
      armColorTip: initial.armColorTip ?? "#E9E0FC",
      coreColor: initial.coreColor ?? "#EAF2FF",
      coreIntensity: initial.coreIntensity ?? 1.1,
      coreSize: initial.coreSize ?? 0.18,
      armCount: initial.armCount ?? 4,
      armMaxWidth: initial.armMaxWidth ?? 0.55,
      armTaper: initial.armTaper ?? 0.55,
      twistAngle: initial.twistAngle ?? 3.2,
      radius: initial.radius ?? 0.3,
      centerX: initial.centerX ?? 0,
      centerY: initial.centerY ?? 0,
      tilt: initial.tilt ?? 25,
      rotation: initial.rotation ?? 0,
      speed: initial.speed ?? 0.14,
      animate: initial.animate ?? true,
      galaxyAlpha: initial.galaxyAlpha ?? 1,
      grain: initial.grain ?? 0.02,
      maxPixelRatio: initial.maxPixelRatio ?? 1.5,
      fps: initial.fps ?? 30,
    };
    this.maxPixelRatio = this.settings.maxPixelRatio;
    this.fps = this.settings.fps;

    const prog = gl.createProgram();
    if (!prog) {
      throw new Error("Unable to create WebGL program");
    }
    gl.attachShader(
      prog,
      compileShader(gl, gl.VERTEX_SHADER, GALAXY_VERTEX_SHADER),
    );
    gl.attachShader(
      prog,
      compileShader(gl, gl.FRAGMENT_SHADER, GALAXY_FRAGMENT_SHADER),
    );
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      throw new Error("Program link error: " + gl.getProgramInfoLog(prog));
    }
    this.prog = prog;
    gl.useProgram(this.prog);

    for (const name of GALAXY_UNIFORM_NAMES) {
      this.uniforms[name] = gl.getUniformLocation(this.prog, name);
    }

    const buf = gl.createBuffer();
    if (!buf) {
      throw new Error("Unable to create WebGL buffer");
    }
    this.buf = buf;
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );

    this.uploadAll();
    this.ro = new ResizeObserver(() => this.resize());
    this.ro.observe(canvas);
    this.resize();
  }

  private uploadAll() {
    const gl = this.gl;
    const s = this.settings;
    const setColor = (name: GalaxyUniformName, hex: string) => {
      const [r, g, b] = hexToRgbNormalized(hex);
      gl.uniform3f(this.uniforms[name] ?? null, r, g, b);
    };
    setColor("u_bgTop", s.bgTop);
    setColor("u_bgBottom", s.bgBottom);
    setColor("u_armColorCenter", s.armColorCenter);
    setColor("u_armColorMid", s.armColorMid);
    setColor("u_armColorTip", s.armColorTip);
    setColor("u_coreColor", s.coreColor);
    gl.uniform1f(this.uniforms.u_coreIntensity ?? null, s.coreIntensity);
    gl.uniform1f(this.uniforms.u_coreSize ?? null, s.coreSize);
    gl.uniform1f(this.uniforms.u_armCount ?? null, s.armCount);
    gl.uniform1f(this.uniforms.u_armMaxWidth ?? null, s.armMaxWidth);
    gl.uniform1f(this.uniforms.u_armTaper ?? null, s.armTaper);
    gl.uniform1f(this.uniforms.u_twistAngle ?? null, s.twistAngle);
    gl.uniform1f(this.uniforms.u_radius ?? null, s.radius);
    gl.uniform1f(this.uniforms.u_centerX ?? null, s.centerX);
    gl.uniform1f(this.uniforms.u_centerY ?? null, s.centerY);
    gl.uniform1f(this.uniforms.u_tilt ?? null, s.tilt);
    gl.uniform1f(this.uniforms.u_rotation ?? null, s.rotation);
    gl.uniform1f(this.uniforms.u_speed ?? null, s.speed);
    gl.uniform1f(this.uniforms.u_galaxyAlpha ?? null, s.galaxyAlpha);
    gl.uniform1f(this.uniforms.u_grain ?? null, s.grain);
  }

  update(partial: GalaxyShaderSettings) {
    const gl = this.gl;
    gl.useProgram(this.prog);
    Object.assign(this.settings, partial);
    const setColor = (name: GalaxyUniformName, hex: string) => {
      const [r, g, b] = hexToRgbNormalized(hex);
      gl.uniform3f(this.uniforms[name] ?? null, r, g, b);
    };
    if (partial.bgTop) setColor("u_bgTop", partial.bgTop);
    if (partial.bgBottom) setColor("u_bgBottom", partial.bgBottom);
    if (partial.armColorCenter) {
      setColor("u_armColorCenter", partial.armColorCenter);
    }
    if (partial.armColorMid) setColor("u_armColorMid", partial.armColorMid);
    if (partial.armColorTip) setColor("u_armColorTip", partial.armColorTip);
    if (partial.coreColor) setColor("u_coreColor", partial.coreColor);

    const setFloat = (
      uniformName: GalaxyUniformName,
      key: keyof GalaxyShaderSettings,
    ) => {
      const val = partial[key];
      if (typeof val === "number") {
        gl.uniform1f(this.uniforms[uniformName] ?? null, val);
      }
    };
    setFloat("u_coreIntensity", "coreIntensity");
    setFloat("u_coreSize", "coreSize");
    setFloat("u_armCount", "armCount");
    setFloat("u_armMaxWidth", "armMaxWidth");
    setFloat("u_armTaper", "armTaper");
    setFloat("u_twistAngle", "twistAngle");
    setFloat("u_radius", "radius");
    setFloat("u_centerX", "centerX");
    setFloat("u_centerY", "centerY");
    setFloat("u_tilt", "tilt");
    setFloat("u_rotation", "rotation");
    setFloat("u_speed", "speed");
    setFloat("u_galaxyAlpha", "galaxyAlpha");
    setFloat("u_grain", "grain");

    if (partial.animate != null) {
      if (partial.animate) {
        this.start();
      } else {
        this.stop();
        this.draw(0);
      }
    }
    if (!this.settings.animate && partial.animate == null) {
      this.draw(0);
    }
  }

  getSettings(): ResolvedGalaxySettings {
    return { ...this.settings };
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
      if (now - this.lastFrameTime < frameInterval) return;
      this.lastFrameTime = now;
      this.draw((now - this.startTime) / 1000);
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

  private resize() {
    const w = this.canvas.clientWidth;
    const h = this.canvas.clientHeight;
    if (w <= 0 || h <= 0) return;
    const dpr = Math.min(window.devicePixelRatio || 1, this.maxPixelRatio);
    const pixelW = Math.max(1, Math.round(w * dpr));
    const pixelH = Math.max(1, Math.round(h * dpr));
    if (this.canvas.width !== pixelW || this.canvas.height !== pixelH) {
      this.canvas.width = pixelW;
      this.canvas.height = pixelH;
      const elapsed =
        this.settings.animate && this.startTime > 0
          ? (performance.now() - this.startTime) / 1000
          : 0;
      this.draw(elapsed);
    }
  }

  private draw(timeSeconds: number) {
    const gl = this.gl;
    const w = this.canvas.width;
    const h = this.canvas.height;
    if (w <= 0 || h <= 0) return;
    gl.viewport(0, 0, w, h);
    gl.useProgram(this.prog);
    gl.uniform2f(this.uniforms.u_resolution ?? null, w, h);
    gl.uniform1f(this.uniforms.u_time ?? null, timeSeconds);
    const posLoc = gl.getAttribLocation(this.prog, "a_pos");
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buf);
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }
}

const GALAXY_SLIDER_CONTROLS: ReadonlyArray<{
  key: NumericGalaxySettingKey;
  label: string;
  min: number;
  max: number;
  step: number;
}> = [
  { key: "armCount", label: "arm_count", min: 1, max: 8, step: 1 },
  {
    key: "armMaxWidth",
    label: "arm_max_width",
    min: 0.05,
    max: 1.5,
    step: 0.01,
  },
  { key: "armTaper", label: "arm_taper", min: 0, max: 1, step: 0.01 },
  {
    key: "twistAngle",
    label: "twist_angle",
    min: 0,
    max: 15,
    step: 0.05,
  },
  { key: "tilt", label: "tilt (deg)", min: 0, max: 80, step: 1 },
  {
    key: "rotation",
    label: "rotation (deg)",
    min: 0,
    max: 360,
    step: 1,
  },
  { key: "speed", label: "speed", min: 0, max: 2, step: 0.01 },
  { key: "radius", label: "radius", min: 0.1, max: 1, step: 0.01 },
  {
    key: "centerX",
    label: "center_x",
    min: -0.8,
    max: 0.8,
    step: 0.01,
  },
  {
    key: "centerY",
    label: "center_y",
    min: -0.8,
    max: 0.8,
    step: 0.01,
  },
  {
    key: "coreIntensity",
    label: "core_intensity",
    min: 0,
    max: 3,
    step: 0.01,
  },
  {
    key: "coreSize",
    label: "core_size",
    min: 0.01,
    max: 0.5,
    step: 0.01,
  },
  {
    key: "galaxyAlpha",
    label: "galaxy_alpha",
    min: 0,
    max: 1,
    step: 0.01,
  },
  { key: "grain", label: "grain", min: 0, max: 0.15, step: 0.005 },
];

const GALAXY_COLOR_CONTROLS: ReadonlyArray<{
  key: ColorGalaxySettingKey;
  label: string;
}> = [
  { key: "armColorCenter", label: "arm_center" },
  { key: "armColorMid", label: "arm_mid" },
  { key: "armColorTip", label: "arm_tip" },
  { key: "coreColor", label: "core_color" },
  { key: "bgTop", label: "bg_top" },
  { key: "bgBottom", label: "bg_bottom" },
];

function GalaxyDebugPanel({
  bgRef,
}: {
  bgRef: React.RefObject<GalaxyShader | null>;
}) {
  const [settings, setSettings] = useState<ResolvedGalaxySettings | null>(null);
  const [collapsed, setCollapsed] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let attempts = 0;
    const poll = () => {
      const inst = bgRef.current;
      if (inst) {
        setSettings(inst.getSettings());
        return;
      }
      if (attempts++ < 50) {
        requestAnimationFrame(poll);
      }
    };
    poll();
  }, [bgRef]);

  if (!settings) return null;

  const updateSetting = (partial: GalaxyShaderSettings) => {
    bgRef.current?.update(partial);
    setSettings((prev) => (prev ? { ...prev, ...partial } : prev));
  };

  const handleCopy = async () => {
    if (!bgRef.current) return;
    const s = bgRef.current.getSettings();
    const round3 = (v: number) => Math.round(1000 * v) / 1000;
    const payload = {
      bgTop: s.bgTop,
      bgBottom: s.bgBottom,
      armColorCenter: s.armColorCenter,
      armColorMid: s.armColorMid,
      armColorTip: s.armColorTip,
      coreColor: s.coreColor,
      coreIntensity: round3(s.coreIntensity),
      coreSize: round3(s.coreSize),
      armCount: s.armCount,
      armMaxWidth: round3(s.armMaxWidth),
      armTaper: round3(s.armTaper),
      twistAngle: round3(s.twistAngle),
      radius: round3(s.radius),
      centerX: round3(s.centerX),
      centerY: round3(s.centerY),
      tilt: round3(s.tilt),
      rotation: round3(s.rotation),
      speed: round3(s.speed),
      galaxyAlpha: round3(s.galaxyAlpha),
      grain: round3(s.grain),
    };
    try {
      await navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("galaxy copy failed", err);
    }
  };

  return (
    <div
      className="fixed top-20 right-2 z-50 w-44 max-h-[85vh] overflow-y-auto rounded-md bg-black/85 text-white font-mono shadow-2xl backdrop-blur-sm"
      style={{
        fontVariantNumeric: "tabular-nums",
        fontSize: "10px",
        lineHeight: "1.3",
      }}
    >
      <style>{`
        .galaxy-debug-slider {
          -webkit-appearance: none;
          appearance: none;
          background: transparent;
          cursor: pointer;
          height: 10px;
        }
        .galaxy-debug-slider::-webkit-slider-runnable-track {
          height: 2px;
          background: rgba(255,255,255,0.25);
          border-radius: 1px;
        }
        .galaxy-debug-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #60a5fa;
          margin-top: -3px;
        }
        .galaxy-debug-slider::-moz-range-track {
          height: 2px;
          background: rgba(255,255,255,0.25);
          border-radius: 1px;
          border: none;
        }
        .galaxy-debug-slider::-moz-range-thumb {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #60a5fa;
          border: none;
        }
      `}</style>
      <div className="flex items-center justify-between px-2 py-1 border-b border-white/10 sticky top-0 bg-black/85 backdrop-blur-sm">
        <span className="font-semibold">Galaxy debug</span>
        <div className="flex gap-1">
          <button
            onClick={handleCopy}
            className="px-1.5 py-px rounded bg-white/10 hover:bg-white/20 transition"
          >
            {copied ? "copied!" : "copy"}
          </button>
          <button
            onClick={() => setCollapsed((c) => !c)}
            className="px-1.5 py-px rounded bg-white/10 hover:bg-white/20 transition"
          >
            {collapsed ? "+" : "–"}
          </button>
        </div>
      </div>
      {!collapsed && (
        <div className="p-2 space-y-1.5">
          <div className="space-y-1">
            {GALAXY_SLIDER_CONTROLS.map((ctrl) => {
              const val = settings[ctrl.key];
              return (
                <label key={ctrl.key} className="block">
                  <div className="flex justify-between text-white/70">
                    <span>{ctrl.label}</span>
                    <span>{val.toFixed(ctrl.step < 1 ? 2 : 0)}</span>
                  </div>
                  <input
                    type="range"
                    min={ctrl.min}
                    max={ctrl.max}
                    step={ctrl.step}
                    value={val}
                    onChange={(e) =>
                      updateSetting({ [ctrl.key]: Number(e.target.value) })
                    }
                    className="w-full galaxy-debug-slider"
                  />
                </label>
              );
            })}
          </div>
          <div className="pt-1.5 border-t border-white/10 space-y-1">
            {GALAXY_COLOR_CONTROLS.map(({ key, label }) => {
              const hex = settings[key];
              return (
                <div
                  key={key}
                  className="flex justify-between items-center text-white/70"
                >
                  <span>{label}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-white/50">{hex}</span>
                    <input
                      type="color"
                      value={hex}
                      onChange={(e) => updateSetting({ [key]: e.target.value })}
                      className="w-8 h-5 rounded border border-white/20 bg-transparent cursor-pointer"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

const AI_GALAXY_SETTINGS: GalaxyShaderSettings = {
  bgTop: "#F0F1F2",
  bgBottom: "#FFFFFF",
  armColorCenter: "#f6c5f7",
  armColorMid: "#e0c4fd",
  armColorTip: "#42adff",
  coreColor: "#ffb8b8",
  coreIntensity: 0.91,
  coreSize: 0.25,
  armCount: 7,
  armMaxWidth: 0.62,
  armTaper: 0.49,
  twistAngle: 1.4,
  radius: 0.63,
  centerX: 0,
  centerY: 0.04,
  tilt: 51,
  rotation: 135,
  speed: 0.34,
  galaxyAlpha: 0.95,
  grain: 0.035,
  fps: 15,
  maxPixelRatio: 1.5,
};

function getResponsiveGalaxySettings(width: number): GalaxyShaderSettings {
  if (width < 640) {
    return { radius: 0.6, centerX: 0.18, centerY: 0 };
  }
  if (width < 1024) {
    return { radius: 0.4, centerX: 0.08, centerY: 0 };
  }
  return {
    radius: AI_GALAXY_SETTINGS.radius ?? 0.3,
    centerX: AI_GALAXY_SETTINGS.centerX ?? 0,
    centerY: AI_GALAXY_SETTINGS.centerY ?? 0,
  };
}

function useGalaxyCanvas({
  settings,
  getResponsiveSettings,
  fadeInOnFirstFrame = true,
}: {
  settings: GalaxyShaderSettings;
  getResponsiveSettings?: (width: number) => GalaxyShaderSettings;
  fadeInOnFirstFrame?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bgRef = useRef<GalaxyShader | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let instance: GalaxyShader | null = null;
    let handleResize: (() => void) | null = null;
    let rafId = 0;

    try {
      instance = new GalaxyShader(canvas, settings);
      bgRef.current = instance;
      if (getResponsiveSettings) {
        handleResize = () => {
          instance?.update(getResponsiveSettings(window.innerWidth));
        };
        handleResize();
        window.addEventListener("resize", handleResize);
      }
      if (fadeInOnFirstFrame) {
        canvas.style.opacity = "0";
      }
      instance.start();
      if (fadeInOnFirstFrame) {
        rafId = requestAnimationFrame(() => {
          canvas.style.opacity = "1";
        });
      }
    } catch {
      if (fadeInOnFirstFrame) {
        canvas.style.opacity = "1";
      }
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (handleResize) window.removeEventListener("resize", handleResize);
      instance?.destroy();
      bgRef.current = null;
    };
  }, [fadeInOnFirstFrame, getResponsiveSettings, settings]);

  return { canvasRef, bgRef };
}

function HeroDesktopPersonaOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 hidden lg:block">
      <MaryPersonaCard className="left-[2%] 2xl:left-[-4%] top-[20%] w-[300px]" />
      <CarlPersonaCard className="bottom-[12%] left-[2%] 2xl:left-[-4%] w-[340px]" />
      <JosephinePersonaCard className="right-[2%] 2xl:right-[-4%] top-[35%] w-[240px] sm:w-[380px]" />
    </div>
  );
}

function HeroTabletPersonaOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 hidden md:block lg:hidden">
      <MaryPersonaCard className="left-[2%] top-[58%] xl:right-0 w-[300px]" />
      <CarlPersonaCard className="right-[2%] top-[78%] w-[340px]" />
    </div>
  );
}

export function AiHeroSection({ debug = false }: { debug?: boolean }) {
  const { canvasRef, bgRef } = useGalaxyCanvas({
    settings: AI_GALAXY_SETTINGS,
    getResponsiveSettings: getResponsiveGalaxySettings,
  });
  const [showDebug, setShowDebug] = useState(debug);

  useEffect(() => {
    if (
      new URLSearchParams(window.location.search).get("debug") === "galaxy"
    ) {
      setShowDebug(true);
    }
  }, []);

  return (
    <div className="relative pt-16 bg-linear-to-b from-[#f0f1f2] to-white ">
      <canvas
        ref={canvasRef}
        id="galaxy"
        className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-700 "
      />
      <Section className="flex mt-15 sm:mt-30 xl:mt-40 sm:mb-20 mb-12 justify-start xs:justify-center">
        <SplitHeadingBlock
          isInView={true}
          centerAligned={true}
          heading={AI_COPY.hero.title}
          description={AI_COPY.hero.description}
          headingClassName="xs:text-[50px] sm:text-[60px] md:text-[70px] lg:text-[88px]! leading-[1.1] tracking-tight"
          descriptionClassName="text-base! md:text-xl! lg:text-2xl! leading-normal! xs:max-w-[630px]! max-w-[300px]! text-primary-text!"
        />
      </Section>
      <div className="relative xs:hidden pl-6 overflow-clip pb-12">
        <img
          src="/images/ai/hero-small.png"
          alt=""
          className="block rounded-l-xl shadow-xl h-[120vw] object-top-left object-cover"
        />
      </div>
      <div className="relative px-8 md:px-12 hidden xs:block lg:hidden pb-12 overflow-visible">
        <HeroTabletPersonaOverlay />
        <img
          src="/images/ai/hero-medium.png"
          alt=""
          className="relative z-0 w-auto rounded-xl sm:rounded-2xl shadow-2xl"
        />
      </div>
      <div className="relative px-20 max-w-[1360px] mx-auto hidden lg:block pb-16 overflow-visible">
        <HeroDesktopPersonaOverlay />
        <img
          src="/images/ai/hero-large.png"
          alt=""
          className="relative z-0 w-full rounded-[20px] xl:rounded-3xl shadow-2xl"
        />
      </div>
      {showDebug && <GalaxyDebugPanel bgRef={bgRef} />}
    </div>
  );
}

const INTRO_MOBILE_ITEMS = [
  {
    title: AI_COPY.introSection.features.featureOne.title,
    description: AI_COPY.introSection.features.featureOne.description,
    image: "/images/ai/carousel-1-large.png",
    smallImage: "/images/ai/carousel-1-small.png",
    shadow: false,
    border: true,
  },
  {
    title: AI_COPY.introSection.features.featureTwo.title,
    description: AI_COPY.introSection.features.featureTwo.description,
    image: "/images/ai/carousel-2-large.png",
    smallImage: "/images/ai/carousel-2-small.png",
    shadow: false,
    border: true,
  },
  {
    title: AI_COPY.introSection.features.featureThree.title,
    description: AI_COPY.introSection.features.featureThree.description,
    image: "/images/ai/carousel-3-large.png",
    smallImage: "/images/ai/carousel-3-small.png",
    shadow: false,
    border: false,
  },
] as const;

const INTRO_TABS = [
  {
    id: "full-picture",
    label: AI_COPY.introSection.features.featureOne.title,
    artboard: "full-picture",
    duration: 8,
    description: AI_COPY.introSection.features.featureOne.description,
    image: "/images/ai/carousel-1-large.png",
    smallImage: "/images/ai/carousel-1-small.png",
  },
  {
    id: "results",
    label: AI_COPY.introSection.features.featureTwo.title,
    artboard: "results",
    duration: 8,
    description: AI_COPY.introSection.features.featureTwo.description,
    image: "/images/ai/carousel-2-large.png",
    smallImage: "/images/ai/carousel-2-small.png",
  },
  {
    id: "ready-to-share",
    label: AI_COPY.introSection.features.featureThree.title,
    artboard: "ready-to-share",
    duration: 8,
    description: AI_COPY.introSection.features.featureThree.description,
    image: "/images/ai/carousel-3-large.png",
    smallImage: "/images/ai/carousel-3-small.png",
  },
] as const;

export interface AiIntroTabItem {
  id: string;
  label: string;
  artboard: string;
  duration: number;
  description: string;
  image: string;
  smallImage?: string;
}

export const SEALOS_CAPABILITIES_TABS: readonly AiIntroTabItem[] = [
  {
    id: "workflow-local-code",
    label: "Local Code & Web",
    artboard: "workflow-local-code",
    duration: 8,
    description:
      "Ship local folders, Vibe Coding projects, and interactive HTML decks with instant HTTPS links.",
    image: "/images/ai/carousel-1-large.png",
    smallImage: "/images/ai/carousel-1-small.png",
  },
  {
    id: "workflow-github-db",
    label: "GitHub & Databases",
    artboard: "workflow-github-db",
    duration: 8,
    description:
      "Connect repositories, detect branches and ports, and wire PostgreSQL automatically.",
    image: "/images/ai/carousel-2-large.png",
    smallImage: "/images/ai/carousel-2-small.png",
  },
  {
    id: "workflow-templates",
    label: "Template Auto-Fill",
    artboard: "workflow-templates",
    duration: 8,
    description:
      "Launch n8n, Dify, New API, and WordPress with one-click credential and secret generation.",
    image: "/images/ai/carousel-3-large.png",
    smallImage: "/images/ai/carousel-3-small.png",
  },
  {
    id: "workflow-canvas-gateway",
    label: "Canvas & AI Gateway",
    artboard: "workflow-canvas-gateway",
    duration: 8,
    description:
      "Expand any project canvas with replicated databases, Docker images, and OpenAI or Anthropic routing.",
    image: "/images/home/model-define-ui.png",
    smallImage: "/images/model/semantic-ui.png",
  },
];

function AiIntroMobileStack({
  items = INTRO_MOBILE_ITEMS,
}: {
  items?: readonly {
    title: string;
    description: string;
    image: string;
    smallImage: string;
    shadow?: boolean;
    border?: boolean;
  }[];
}) {
  return (
    <Section
      noPaddingOnSmallScreens={true}
      className="mb-7 xs:mb-8 lg:mb-10 bg-[#F7F7F8] py-10"
    >
      <div className="mobile-padding">
        {items.map((item, idx) => (
          <FeatureImageStack
            key={idx}
            title={item.title}
            description={item.description}
            largeImage={item.image}
            smallImage={item.smallImage}
            shadow={item.shadow}
            border={item.border}
          />
        ))}
      </div>
    </Section>
  );
}

export interface AiIntroSectionProps {
  id?: string;
  heading?: React.ReactNode;
  description?: React.ReactNode;
  tabs?: readonly AiIntroTabItem[];
}

export function AiIntroSection({
  id,
  heading = AI_COPY.introSection.title,
  description = AI_COPY.introSection.description,
  tabs = INTRO_TABS,
}: AiIntroSectionProps = {}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(1);
  const { triggerRef, isInView } = useInViewTrigger({
    start: "top bottom-=300",
  });
  const activeSection = tabs[activeIndex] ?? tabs[0];
  const { isSmall, isXLarge } = useWindowSize();

  useEffect(() => {
    if (!triggerRef.current) return;
    const resetTabs = () => {
      setActiveIndex(0);
      setAnimationKey((prev) => prev + 1);
    };
    const st = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: resetTabs,
      onEnterBack: resetTabs,
    });
    return () => st.kill();
  }, [triggerRef]);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    setAnimationKey((prev) => prev + 1);
  };

  useEffect(() => {
    if (activeIndex >= tabs.length - 1) return;
    const timer = window.setTimeout(() => {
      setActiveIndex((prev) =>
        prev < tabs.length - 1 ? prev + 1 : prev,
      );
      setAnimationKey((prev) => prev + 1);
    }, 1000 * activeSection.duration);
    return () => window.clearTimeout(timer);
  }, [activeIndex, animationKey, activeSection.duration, tabs.length]);

  const mobileItems = tabs.map((tab, idx) => ({
    title: tab.label,
    description: tab.description,
    image: tab.image,
    smallImage: tab.smallImage ?? tab.image,
    shadow: false,
    border: idx < tabs.length - 1,
  }));

  return (
    <div id={id} className="py-12 md:pt-20 relative md:pb-32 flex overflow-hidden">
      <Section className="z-10" noPaddingOnSmallScreens={true}>
        <div className="mobile-padding-only">
          <Section ref={triggerRef}>
            <div className="flex mt-15 sm:mt-30 xl:mt-40 mb-20 w-full justify-center">
              <SplitHeadingBlock
                isInView={isInView}
                centerAligned={true}
                heading={heading}
                description={description}
                descriptionClassName="max-w-[600px]"
              />
            </div>
          </Section>
        </div>
        {isSmall ? (
          <AiIntroMobileStack items={mobileItems} />
        ) : (
          <div className="relative flex flex-col bg-[#F7F7F8] w-full mt-4 rounded-2xl ring-1 ring-trans-5 overflow-hidden bg">
            {isXLarge && (
              <>
                <div className="absolute inset-0 z-0  pointer-events-none  -translate-y-1/3">
                  <Image
                    width={1400}
                    height={1400}
                    src="/images/ai/bg-features.jpg"
                    alt=""
                  />
                </div>
                <NoiseOverlay />
              </>
            )}
            {!isXLarge && (
              <div className="relative z-10 flex flex-col pl-16 pr-16">
                <HorizontalTabBar
                  itemWidth="full"
                  buttonsEnabled={false}
                  items={tabs}
                  activeIndex={activeIndex}
                  onSelect={handleTabClick}
                />
                <p
                  key={activeIndex}
                  className="max-w-lg text-primary-text/90 text-sm mb-12 animate-fade-in-y"
                >
                  {activeSection.description}
                </p>
              </div>
            )}
            <div className="relative z-10 flex flex-row w-full">
              {isXLarge && (
                <VerticalAccordionTabs
                  activeIndex={activeIndex}
                  animationKey={animationKey}
                  handleTabClick={handleTabClick}
                  sections={tabs}
                  className="pl-16 mr-0! min-w-[350px]"
                />
              )}
              <div className="ml-16 xl:mr-16 xl:mt-16 flex overflow-hidden rounded-tl-3xl xl:rounded-t-2xl w-full ring-1 ring-trans-5 shadow-xl">
                <Image
                  key={`${activeSection.id}-${animationKey}`}
                  src={activeSection.image}
                  alt="AI Features"
                  width={1480}
                  height={1120}
                  sizes="100vw"
                  className="w-full h-full object-cover animate-fade-in"
                />
              </div>
            </div>
          </div>
        )}
      </Section>
    </div>
  );
}

const THREE_CARDS_ITEMS: readonly ThreeCardItemData[] = [
  {
    title: AI_COPY.threeCardsSection.cardOne.title,
    description: AI_COPY.threeCardsSection.cardOne.description,
    image: "/images/ai/analysis-company-wide.png",
  },
  {
    title: AI_COPY.threeCardsSection.cardTwo.title,
    description: AI_COPY.threeCardsSection.cardTwo.description,
    image: "/images/ai/analysis-actionable.png",
  },
  {
    title: AI_COPY.threeCardsSection.cardThree.title,
    description: AI_COPY.threeCardsSection.cardThree.description,
    image: "/images/ai/analysis-seamless.png",
    bordered: true,
  },
];

function AiThreeCardsSection() {
  const { isSmall } = useWindowSize();
  const { triggerRef } = useInViewTrigger({
    start: isSmall ? "top bottom-=200" : "top bottom-=300",
  });

  return (
    <Section
      ref={triggerRef}
      noPaddingOnSmallScreens={true}
      className="gap-8 md:gap-20 flex flex-col mb-16 md:mb-40"
    >
      <ThreeCardRow items={THREE_CARDS_ITEMS} />
    </Section>
  );
}

const CAPABILITIES_CARDS: readonly ThreeCardItemData[] = [
  {
    title: AI_COPY.capabilitiesSection.capabilities.capabilityOne.title,
    image: "/images/ai/trust-semantic-model.png",
    description:
      AI_COPY.capabilitiesSection.capabilities.capabilityOne.description,
    bordered: true,
  },
  {
    title: AI_COPY.capabilitiesSection.capabilities.capabilityTwo.title,
    description:
      AI_COPY.capabilitiesSection.capabilities.capabilityTwo.description,
    image: "/images/ai/trust-reasoning.png",
    bordered: true,
  },
  {
    title: AI_COPY.capabilitiesSection.capabilities.capabilityThree.title,
    description:
      AI_COPY.capabilitiesSection.capabilities.capabilityThree.description,
    image: "/images/ai/trust-questions.png",
    bordered: true,
  },
];

function AiCapabilitiesSection() {
  const { isSmall } = useWindowSize();
  const { triggerRef } = useInViewTrigger({
    start: isSmall ? "top bottom-=200" : "top bottom-=300",
  });

  return (
    <>
      <Section
        noPaddingOnSmallScreens={true}
        className="mb-7 xs:mb-8 lg:mb-20"
      >
        <div className="h-auto flex md:items-center flex-col md:flex-row overflow-hidden mobile-padding-only md:justify-center">
          <div
            ref={triggerRef}
            className="flex-col flex pr-4 md:pr-8 lg:mr-20 pb-20 md:pb-0 md:w-[360px]"
          >
            <p className="text-6xl font-medium leading-none mb-3 text-insets font-serif">
              {AI_COPY.capabilitiesSection.title}
            </p>
            <p className="text-primary-text/60 text-lg md:text-xl text-md font-normal leading-tight text-insets">
              {AI_COPY.capabilitiesSection.description}
            </p>
          </div>
          <div className="md:max-w-[360px] xl:max-w-[462px]">
            <Image
              height={378}
              width={462}
              src="/images/ai/ill-trust-large.png"
              alt="Laptop running the Steep app"
              className="w-full mobile-padding-only"
            />
          </div>
        </div>
      </Section>
      <Section
        noPaddingOnSmallScreens={true}
        className="gap-8 md:gap-20 flex flex-col mb-16 md:mb-40"
      >
        <ThreeCardRow items={CAPABILITIES_CARDS} />
      </Section>
    </>
  );
}

interface AiMobileBannerSectionProps {
  image: string;
  smallImage?: string;
  cta: string;
  title: string;
  description: string;
  bgColor?: string;
}

function AiMobileBannerSection({
  image,
  smallImage,
  cta,
  title,
  description,
  bgColor = "bg-[#EFEFEF]/60",
}: AiMobileBannerSectionProps) {
  return (
    <div className="relative overflow-visible pb-56 xs:pb-52 sm:pb-24 md:pb-0 bg-[#121212]">
      {smallImage && (
        <img src={smallImage} alt="" className="w-full lg:hidden" />
      )}
      <img src={image} alt="" className="w-full hidden lg:block" />
      <div className="z-10 absolute xl:bottom-20 xl:left-20 sm:left-12 md:bottom-14 left-7 right-7 xs:right-auto bottom-0 md:top-auto flex flex-col gap-4 p-11 sm:p-12 lg:max-w-[384px] max-w-sm ">
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
    </div>
  );
}

const AGENTS_CAPABILITIES: readonly StaggerFeatureGridItem[] = [
  {
    title: AI_COPY.agentsSection.capabilities.capabilityOne.title,
    icon: <SemanticCube36Icon className="text-white" />,
    description: AI_COPY.agentsSection.capabilities.capabilityOne.description,
  },
  {
    title: AI_COPY.agentsSection.capabilities.capabilityTwo.title,
    description: AI_COPY.agentsSection.capabilities.capabilityTwo.description,
    icon: <SemanticCube36Icon className="text-white" />,
  },
  {
    title: AI_COPY.agentsSection.capabilities.capabilityThree.title,
    description: AI_COPY.agentsSection.capabilities.capabilityThree.description,
    icon: <PuzzlePiece36Icon className="text-white" />,
  },
  {
    title: AI_COPY.agentsSection.capabilities.capabilityFour.title,
    description: AI_COPY.agentsSection.capabilities.capabilityFour.description,
    icon: <CodeWindow48Icon className="text-white" />,
  },
];

function AiAgentsSection() {
  const { isSmall, isLarge } = useWindowSize();
  const { triggerRef, isInView } = useInViewTrigger({
    start: isSmall ? "top bottom-=200" : "top bottom-=300",
  });

  return (
    <div
      ref={triggerRef}
      className="relative lg:pb-40 bg-[#121212] flex justify-center"
    >
      <Section className="pt-8 bg-[#121212]" noPaddingOnSmallScreens={true}>
        <div className="flex mt-15 sm:mt-30 xl:mt-40 mb-20 w-full justify-center mobile-padding-only">
          <SplitHeadingBlock
            mode="dark"
            centerAligned={true}
            isInView={isInView}
            className="text-center mobile-padding-only"
            heading={AI_COPY.agentsSection.title}
            description={AI_COPY.agentsSection.description}
          />
        </div>
        <div className="lg:mb-10 bg-[#232323] md:rounded-3xl overflow-hidden pb-4 border-white/5 md:border">
          <div className="h-auto flex flex-col lg:flex-row sm:rounded-2xl justify-between">
            {isLarge ? (
              <Image
                src="/images/ai/overview-large.jpg"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto object-cover"
              />
            ) : (
              <Image
                src="/images/ai/overview-medium.jpg"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto object-cover"
              />
            )}
          </div>
          <div className="my-16 px-6 md:px-20">
            <StaggerFeatureGrid items={AGENTS_CAPABILITIES} mode="dark" />
          </div>
        </div>
      </Section>
    </div>
  );
}

function AiChannelsSection() {
  const { isSmall } = useWindowSize();

  return (
    <div className="lg:pb-10 bg-[#121212] justify-center flex pt-20 sm:pt-30 lg:pt-4">
      <Section>
        <div className="flex pb-10 sm:pb-20 w-full justify-center px-0 md:px-6 ">
          <SplitHeadingBlock
            mode="dark"
            centerAligned={true}
            isInView={true}
            heading={AI_COPY.channelsSection.title}
            description={AI_COPY.channelsSection.description}
          />
        </div>
        <div className="lg:mb-10 mb-8 md:rounded-3xl">
          {isSmall ? (
            <Image
              src="/images/ai/slack-small.png"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto rounded-2xl border border-white/10"
            />
          ) : (
            <Image
              src="/images/ai/slack-large.png"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto object-cover rounded-2xl border border-white/10"
            />
          )}
        </div>
      </Section>
    </div>
  );
}

const SAFEGUARD_CAPABILITIES: readonly StaggerFeatureGridItem[] = [
  {
    title: AI_COPY.safeGuardSection.capabilities.capabilityOne.title,
    description:
      AI_COPY.safeGuardSection.capabilities.capabilityOne.description,
    icon: <LockCircle36Icon className="text-white" />,
  },
  {
    title: AI_COPY.safeGuardSection.capabilities.capabilityTwo.title,
    description:
      AI_COPY.safeGuardSection.capabilities.capabilityTwo.description,
    icon: <ShieldCheck36Icon className="text-white" />,
  },
  {
    title: AI_COPY.safeGuardSection.capabilities.capabilityThree.title,
    description:
      AI_COPY.safeGuardSection.capabilities.capabilityThree.description,
    icon: <DoubleSquareChart36Icon className="text-white" />,
  },
  {
    title: AI_COPY.safeGuardSection.capabilities.capabilityFour.title,
    description:
      AI_COPY.safeGuardSection.capabilities.capabilityFour.description,
    icon: <KeySpark36Icon className="text-white" />,
  },
];

function AiSafeguardSection() {
  const { isSmall } = useWindowSize();
  const { triggerRef, isInView } = useInViewTrigger({
    start: isSmall ? "top bottom-=200" : "top bottom-=300",
  });

  return (
    <div className="pt-10 bg-[#121212] pb-20 sm:pb-30 lg:pb-50">
      <Section ref={triggerRef}>
        <div className="flex mt-4 sm:mt-10 xl:mt-30 mb-20 w-[300px] sm:w-full">
          <SplitHeadingBlock
            mode="dark"
            isInView={isInView}
            heading={AI_COPY.safeGuardSection.title}
            description={AI_COPY.safeGuardSection.description}
          />
        </div>
      </Section>
      <Section>
        <StaggerFeatureGrid
          items={SAFEGUARD_CAPABILITIES}
          mode="dark"
          className="text-insets"
        />
      </Section>
    </div>
  );
}

export interface AiGetStartedSectionProps {
  heading?: React.ReactNode;
  description?: React.ReactNode;
  cta?: string;
  ctaHref?: string;
  ctaSecondary?: string;
  ctaSecondaryHref?: string;
}

export function AiGetStartedSection({
  heading = AI_COPY.getStartedSection.title,
  description = AI_COPY.getStartedSection.description,
  cta = AI_COPY.getStartedSection.cta,
  ctaHref = "https://web.steep.app/sign-up",
  ctaSecondary = AI_COPY.getStartedSection.ctaSecondary,
  ctaSecondaryHref = "/contact",
}: AiGetStartedSectionProps = {}) {
  const { isSmall } = useWindowSize();
  const { triggerRef, isInView } = useInViewTrigger({
    start: isSmall ? "top bottom-=300" : "top bottom-=400",
  });

  return (
    <div className=" bg-[#1A1A1A] pb-32 md:pb-40 pt-24 lg:pt-50 border-b border-white/10">
      <Section ref={triggerRef}>
        <div className="flex justify-center flex-col lg:flex-row text-insets lg:gap-16 gap-10">
          <Image
            className="max-w-[210px] md:max-w-[320px] xl:max-w-[400px] mx-auto sm:mb-2 mb-8"
            id="robot"
            src="/images/ai/ill-robot-large.png"
            alt=""
            width={473}
            height={601}
          />
          <div className="flex flex-col items-center lg:items-start justify-center">
            <SplitHeadingBlock
              isInView={isInView}
              heading={heading}
              headingClassName={clsx(
                "text-center lg:text-left text-[36px]! sm:text-[42px]! md:text-[50px]! xl:text-[64px]!",
                "text-white",
              )}
              description={description}
              descriptionClassName={clsx(
                "text-center lg:text-left max-w-3xl text-base! md:text-lg! max-w-[480px]!",
                "text-white/50",
              )}
            />
            <div className="flex items-center justify-center gap-x-4 mt-8 md:mt-6">
              <Link href={ctaHref}>
                <SteepButton
                  label={cta}
                  variant="primary-reverse"
                />
              </Link>
              <Link href={ctaSecondaryHref}>
                <SteepButton
                  variant="tertiary"
                  label={ctaSecondary}
                  arrow={true}
                  textColor="text-white"
                />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export function AiPage() {
  return (
    <SteepLayout activePage="ai" footerMode="dark">
      <AiHeroSection />
      <AiIntroSection />
      <AiThreeCardsSection />
      <AiCapabilitiesSection />
      <AiMobileBannerSection
        image="/images/ai/phone-large.jpg"
        smallImage="/images/ai/phone-small.jpg"
        title={AI_COPY.bigImage.title}
        description={AI_COPY.bigImage.description}
        cta={AI_COPY.bigImage.cta}
      />
      <AiAgentsSection />
      <AiChannelsSection />
      <AiSafeguardSection />
      <AiGetStartedSection />
    </SteepLayout>
  );
}
