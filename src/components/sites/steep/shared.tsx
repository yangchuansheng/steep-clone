"use client";
/* eslint-disable @next/next/no-img-element, react-hooks/set-state-in-effect */

import React, {
  forwardRef,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export type IconProps = React.SVGProps<SVGSVGElement>;

export function ArrowRight16Icon(props: IconProps) {
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
        d="M8.005 2.005a.7.7 0 0 1 .99 0l5.5 5.5a.7.7 0 0 1 0 .99l-5.5 5.5a.7.7 0 1 1-.99-.99L12.31 8.7H1.5a.7.7 0 1 1 0-1.4h10.81L8.005 2.995a.7.7 0 0 1 0-.99"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function AtSign16Icon(props: IconProps) {
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
        d="M9.407 8.276q.14-.672.156-.914.035-.259.035-.396 0-.57-.347-1-.348-.432-1.008-.432-.642 0-1.146.414-.487.414-.764 1.104a3.9 3.9 0 0 0-.278 1.5q0 .793.382 1.258.381.466 1.077.466.712 0 1.216-.552.503-.552.677-1.448m2.188 2.052q.522 0 .99-.38.47-.397.765-1.155.313-.758.313-1.862 0-1.466-.678-2.517a4.3 4.3 0 0 0-1.841-1.638q-1.164-.57-2.675-.57-1.268 0-2.38.466t-1.945 1.31a6.1 6.1 0 0 0-1.285 1.949 6.2 6.2 0 0 0-.47 2.431q0 1.69.747 2.914a5 5 0 0 0 2.067 1.845q1.32.638 2.988.638 1.18 0 2.171-.276a6.6 6.6 0 0 0 1.894-.88l.642 1.035a6.6 6.6 0 0 1-2.206 1.034A9.4 9.4 0 0 1 8.208 15a8.8 8.8 0 0 1-2.83-.448 6.8 6.8 0 0 1-2.294-1.31 6.04 6.04 0 0 1-1.546-2.087Q1 9.915 1 8.345q0-1.534.556-2.862a7.2 7.2 0 0 1 1.598-2.328A7.4 7.4 0 0 1 5.55 1.57 7.7 7.7 0 0 1 8.52 1q1.355 0 2.519.414a6.2 6.2 0 0 1 2.067 1.19 5.1 5.1 0 0 1 1.39 1.844Q15 5.518 15 6.845q0 1.535-.521 2.569-.52 1.035-1.338 1.552-.816.516-1.702.517-.799 0-1.285-.31a1.63 1.63 0 0 1-.678-.845q-.346.569-.972.896-.626.31-1.338.31-.765 0-1.372-.344a2.42 2.42 0 0 1-.955-1q-.348-.673-.348-1.604 0-1.155.452-2.12.469-.984 1.268-1.57a2.87 2.87 0 0 1 1.772-.603q.833 0 1.337.38.521.378.695.844l.226-1.086h1.407l-.851 4.638q-.123.69.104.983.226.276.694.276"
      />
    </svg>
  );
}

export function BellDot18Icon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 1.14q.435.001.843.053a4.3 4.3 0 0 0-.617 1.413A6 6 0 0 0 9 2.603c-1.314 0-2.278.44-2.978 1.218-.72.801-1.22 2.03-1.441 3.701l-.633 4.853h10.117l-.585-4.396c.505-.001.99-.09 1.442-.25l.618 4.646h.849a.731.731 0 0 1 0 1.462h-4.076c-.309 1.642-1.619 2.957-3.304 2.957-1.686 0-2.996-1.315-3.304-2.957H1.611a.732.732 0 0 1 0-1.462h.864l.656-5.044c.243-1.84.816-3.389 1.803-4.487C5.94 1.723 7.318 1.14 9 1.14M7.089 13.838c.276.968 1.074 1.607 1.92 1.607s1.645-.639 1.92-1.607z"
        clipRule="evenodd"
      />
      <path
        fill="#EB8080"
        d="M16.277 3.621a2.813 2.813 0 1 1-5.625 0 2.813 2.813 0 0 1 5.625 0"
      />
    </svg>
  );
}

export function ApiDoc16Icon(props: IconProps) {
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
        d="M6.85 1.648a.65.65 0 0 1 .65-.65h5.502a2 2 0 0 1 2 2v10.003a2 2 0 0 1-2 2H2.998a2 2 0 0 1-2-2V7.5a.65.65 0 0 1 1.3 0v5.502a.7.7 0 0 0 .7.7h10.003a.7.7 0 0 0 .7-.7V2.998a.7.7 0 0 0-.7-.7H7.5a.65.65 0 0 1-.65-.65"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3 .35a2.65 2.65 0 1 0 0 5.3 2.65 2.65 0 0 0 0-5.3"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.875 5c0-.345.28-.625.625-.625h4a.625.625 0 1 1 0 1.25h-4A.625.625 0 0 1 6.875 5M3.97 8c0-.345.28-.625.625-.625h6.8a.625.625 0 1 1 0 1.25h-6.8A.625.625 0 0 1 3.97 8M3.97 11c0-.345.28-.625.625-.625H9.6a.625.625 0 1 1 0 1.25H4.595A.625.625 0 0 1 3.97 11"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function QuestionCircle16Icon(props: IconProps) {
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
        d="M8 2.3a5.7 5.7 0 1 0 0 11.4A5.7 5.7 0 0 0 8 2.3M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.02 9.542c.346 0 .518-.208.57-.543.04-.462.202-.706.868-1.092.69-.411 1.076-.944 1.076-1.721 0-1.148-.944-1.93-2.32-1.93-1.047 0-1.839.427-2.154 1.117-.096.193-.142.381-.142.6 0 .34.208.553.559.553.279 0 .467-.127.579-.442.162-.513.538-.792 1.102-.792.624 0 1.056.386 1.056.94 0 .487-.213.766-.843 1.147-.635.376-.95.792-.95 1.422v.096c0 .371.213.645.6.645m.01 2.204c.412 0 .737-.32.737-.72a.72.72 0 0 0-.736-.717.724.724 0 0 0-.742.716c0 .401.33.721.742.721"
      />
    </svg>
  );
}

export function ChartBar16Icon(props: IconProps) {
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
        d="M5.233 3.375c0-.91.739-1.65 1.65-1.65h2.234c.911 0 1.65.74 1.65 1.65V4.99q.17-.037.35-.037h2.234c.912 0 1.65.738 1.65 1.65v6.053a1.65 1.65 0 0 1-1.65 1.65H2.649a1.65 1.65 0 0 1-1.65-1.65V8.66c0-.912.74-1.65 1.65-1.65h2.235q.18 0 .35.037zm4.234 9.631v-9.63a.35.35 0 0 0-.35-.35H6.883a.35.35 0 0 0-.35.35v9.63zm1.3 0h2.585a.35.35 0 0 0 .35-.35V6.603a.35.35 0 0 0-.35-.35h-2.235a.35.35 0 0 0-.35.35zM5.233 8.66v4.345H2.648a.35.35 0 0 1-.35-.35V8.66a.35.35 0 0 1 .35-.35h2.235a.35.35 0 0 1 .35.35"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function CubeHex16Icon(props: IconProps) {
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
        d="m13.403 4.563-5.128-2.96a.55.55 0 0 0-.55 0l-5.128 2.96a.55.55 0 0 0-.275.476v5.922a.55.55 0 0 0 .275.476l5.128 2.96a.55.55 0 0 0 .55 0l5.128-2.96a.55.55 0 0 0 .275-.476V5.039a.55.55 0 0 0-.275-.476M8.9.52a1.8 1.8 0 0 0-1.8 0L1.972 3.48a1.8 1.8 0 0 0-.9 1.56v5.92a1.8 1.8 0 0 0 .9 1.56L7.1 15.48a1.8 1.8 0 0 0 1.8 0l5.128-2.96a1.8 1.8 0 0 0 .9-1.56V5.04a1.8 1.8 0 0 0-.9-1.56z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.01.862a.5.5 0 0 1 .5.5v.463a.5.5 0 1 1-1 0v-.463a.5.5 0 0 1 .5-.5m0 2.317a.5.5 0 0 1 .5.5v.926a.5.5 0 1 1-1 0V3.68a.5.5 0 0 1 .5-.5m0 2.78a.5.5 0 0 1 .5.5v.463a.5.5 0 1 1-1 0v-.463a.5.5 0 0 1 .5-.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.01 15.728a.6.6 0 0 1-.6-.6V7.902a.6.6 0 0 1 1.2 0v7.226a.6.6 0 0 1-.6.6"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.33 8.22a.5.5 0 0 1 .682-.19l.406.23a.5.5 0 1 1-.491.87L8.52 8.9a.5.5 0 0 1-.19-.68m2.034 1.147a.5.5 0 0 1 .68-.19l.814.46a.5.5 0 0 1-.492.87l-.813-.458a.5.5 0 0 1-.19-.682m2.44 1.378a.5.5 0 0 1 .68-.19l.407.23a.5.5 0 1 1-.492.87l-.406-.229a.5.5 0 0 1-.19-.681M7.67 8.22a.5.5 0 0 0-.682-.19l-.406.23a.5.5 0 1 0 .491.87l.407-.23a.5.5 0 0 0 .19-.68M5.636 9.366a.5.5 0 0 0-.68-.19l-.814.46a.5.5 0 0 0 .492.87l.813-.458a.5.5 0 0 0 .19-.682m-2.44 1.378a.5.5 0 0 0-.68-.19l-.407.23a.5.5 0 1 0 .492.87l.406-.229a.5.5 0 0 0 .19-.681"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m1.152 4.697.593-1.043L8 7.212l6.255-3.558.593 1.043L8 8.592z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Sparkles16Icon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      {...props}
    >
      <g fill="currentColor">
        <path d="M3.046 9.608c-.729-.203-.728-1.236.001-1.439l1.804-.5a4.27 4.27 0 0 0 2.962-2.94l.481-1.687C8.5 2.32 9.522 2.319 9.73 3.04l.488 1.7A4.27 4.27 0 0 0 13.17 7.67l1.785.499c.727.203.728 1.233.002 1.438L13.2 10.1a4.27 4.27 0 0 0-2.96 2.986l-.508 1.863c-.2.734-1.242.733-1.44-.001l-.502-1.852a4.27 4.27 0 0 0-2.97-2.994zM.42 3.49c-.56-.128-.56-.927 0-1.056l1.016-.232c.403-.092.718-.406.813-.81l.228-.974c.13-.557.923-.558 1.054 0l.23.977c.095.402.41.715.812.808l1.007.232c.56.128.56.926 0 1.056l-1.002.232c-.405.094-.72.411-.812.817l-.234 1.037c-.127.564-.93.564-1.056 0l-.232-1.035a1.08 1.08 0 0 0-.814-.819z" />
      </g>
    </svg>
  );
}

export function Clock16Icon(props: IconProps) {
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
        d="M7.996 2.3a5.7 5.7 0 1 0 0 11.4 5.7 5.7 0 0 0 0-11.4m-7 5.7a7 7 0 1 1 14 0 7 7 0 0 1-14 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 3.754a.65.65 0 0 1 .65.65v3.8a.65.65 0 0 1-.262.521L6.111 10.42a.65.65 0 1 1-.776-1.043l2.015-1.5V4.404a.65.65 0 0 1 .65-.65"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function ArrowRight12Icon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={12}
      fill="none"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        d="M6.375 1.875 10.5 6m0 0-4.125 4.125M10.5 6H1.125"
      />
    </svg>
  );
}

export function ArrowUp12Icon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={12}
      fill="none"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        d="M10.125 5.625 6 1.5m0 0L1.875 5.625M6 1.5v9.375"
      />
    </svg>
  );
}

export function ChevronDown12Icon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={12}
      fill="none"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        d="M10.125 3.938 6 8.061 1.875 3.939"
      />
    </svg>
  );
}

export function ChevronLeft12Icon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={12}
      fill="none"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        d="M8.063 1.875 3.936 6l4.126 4.125"
      />
    </svg>
  );
}

export function ChevronRight12Icon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={12}
      fill="none"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        d="M3.938 1.875 8.061 6l-4.124 4.125"
      />
    </svg>
  );
}

export function ClockRefresh36Icon(props: IconProps) {
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12.851 29.936 3.949 3.18v-6.232z"
      />
      <path
        fill="currentColor"
        d="M18 29.25h-.75v1.5H18v-1.5m0-24a.75.75 0 0 0 0 1.5v-1.5M30 18h-.75c0 6.213-5.037 11.25-11.25 11.25v1.5c7.042 0 12.75-5.708 12.75-12.75zM18 6v.75c6.213 0 11.25 5.037 11.25 11.25h1.5c0-7.042-5.708-12.75-12.75-12.75z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22.397 22.126 18 18.854v-7.337"
      />
      <circle
        cx={0.8}
        cy={0.8}
        r={0.8}
        fill="currentColor"
        transform="matrix(-1 0 0 1 14.6 5.76)"
      />
      <circle
        cx={0.8}
        cy={0.8}
        r={0.8}
        fill="currentColor"
        transform="matrix(-1 0 0 1 10.71 8.468)"
      />
      <circle
        cx={0.8}
        cy={0.8}
        r={0.8}
        fill="currentColor"
        transform="matrix(-1 0 0 1 8.14 12.399)"
      />
      <circle
        cx={0.8}
        cy={0.8}
        r={0.8}
        fill="currentColor"
        transform="matrix(-1 0 0 1 7.3 16.826)"
      />
      <circle
        cx={0.8}
        cy={0.8}
        r={0.8}
        fill="currentColor"
        transform="matrix(-1 0 0 1 8.11 21.254)"
      />
      <circle
        cx={0.8}
        cy={0.8}
        r={0.8}
        fill="currentColor"
        transform="matrix(-1 0 0 1 10.476 24.977)"
      />
    </svg>
  );
}

export function CubeLogo36Icon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      fill="none"
      {...props}
    >
      <g fill="currentColor" clipPath="url(#logo-cube_svg__a)">
        <path d="M30.209 10.837 18.003 3.625v4.99l12.206 7.18v-4.96z" />
        <path
          d="m30.209 15.795-3.662 2.176L18 12.93l-4.883 2.868-3.663-2.015 8.548-5.169z"
          opacity={0.2}
        />
        <path d="m13.117 15.8-3.663-2.016v4.187z" />
        <path
          d="M5.791 25.104 18 17.971l12.209 7.133-12.21 7.212z"
          opacity={0.2}
        />
        <path d="M30.209 20.153 18 12.853v5.118l12.209 7.133z" />
        <path
          d="M9.454 17.97v-4.186l8.548-5.169v-4.99L5.79 10.837v14.267L18 17.971v-5.119z"
          opacity={0.5}
        />
      </g>
      <defs>
        <clipPath id="logo-cube_svg__a">
          <path fill="#fff" d="M5.791 3.625h24.418v28.75H5.791z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function DbtLogo36Icon(props: IconProps) {
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
        d="M30.01 5.967a3.66 3.66 0 0 1 1.115 2.23c0 .356-.094.593-.308 1.043s-2.849 5.007-3.633 6.265a4.79 4.79 0 0 0 0 4.938c.784 1.258 3.42 5.84 3.633 6.29s.308.665.308 1.022a3.5 3.5 0 0 1-1.092 2.207c-.593.615-1.378 1.02-2.207 1.092-.357 0-.594-.094-1.021-.308-.428-.214-5.08-2.777-6.337-3.562-.094-.048-.191-.12-.308-.165l-6.22-3.678c.143 1.186.665 2.327 1.52 3.156.166.166.334.308.522.45-.142.072-.307.143-.45.237-1.258.784-5.84 3.42-6.291 3.633-.45.214-.665.308-1.044.308a3.5 3.5 0 0 1-2.207-1.092 3.66 3.66 0 0 1-1.115-2.23c.023-.356.12-.713.308-1.02.214-.451 2.849-5.033 3.633-6.29.45-.736.687-1.592.687-2.47s-.236-1.734-.687-2.47c-.784-1.306-3.442-5.885-3.633-6.335a2.2 2.2 0 0 1-.308-1.021 3.6 3.6 0 0 1 1.092-2.23 3.64 3.64 0 0 1 2.23-1.092c.357.023.713.12 1.044.308.379.165 3.727 2.113 5.507 3.156l.405.237q.214.14.356.214l.191.12 6.337 3.75a5.22 5.22 0 0 0-2.02-3.608c.143-.071.309-.142.451-.236 1.258-.785 5.84-3.442 6.291-3.633a2.2 2.2 0 0 1 1.044-.308 3.62 3.62 0 0 1 2.207 1.092M18.332 19.685l1.352-1.351a.456.456 0 0 0 0-.665l-1.352-1.35a.456.456 0 0 0-.664 0l-1.352 1.35a.456.456 0 0 0 0 .665l1.352 1.351c.165.166.473.166.664 0"
      />
    </svg>
  );
}

export function Key36Icon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      fill="none"
      {...props}
    >
      <circle
        cx={23.699}
        cy={11.342}
        r={4.217}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <circle
        cx={11.189}
        cy={13.156}
        r={4.24}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M32.45 27.616c-.974-4.134-4.264-7.485-8.751-7.485s-7.778 3.351-8.752 7.485"
      />
      <path
        fill="currentColor"
        d="M11.189 20.16c2.496 0 4.598 1.047 6.125 2.668a9 9 0 0 0-.907 1.23c-1.294-1.468-3.102-2.399-5.219-2.399-3.594 0-6.298 2.682-7.11 6.128a.75.75 0 0 1-1.46-.344c.932-3.96 4.125-7.284 8.57-7.284"
      />
    </svg>
  );
}

export function OsiHex36Icon(props: IconProps) {
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
        d="m28.558 11.552-9.28-5.524a2.5 2.5 0 0 0-2.557 0l-9.279 5.524a1 1 0 0 0 0 1.718l9.278 5.533a2.5 2.5 0 0 0 2.56 0l9.278-5.533a1 1 0 0 0 0-1.718Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m10.721 15.2-3.279 1.952a1 1 0 0 0 0 1.718l9.278 5.534a2.5 2.5 0 0 0 2.56 0l9.278-5.534a1 1 0 0 0 0-1.718l-3.28-1.952"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m10.665 20.8-3.223 1.918a1 1 0 0 0 0 1.718l9.278 5.534a2.5 2.5 0 0 0 2.56 0l9.278-5.534a1 1 0 0 0 0-1.718L25.335 20.8"
      />
    </svg>
  );
}

export const STEEP_COPY = {
  hero: {
    title: () => (
      <>
        For companies <br /> that run on data
      </>
    ),
    description: (
      <>
        Steep is an AI analytics platform that brings trusted metrics into
        everyday work, so every team knows what’s happening and can act on it.
      </>
    ),
    cta: "Get started",
    ctaSecondary: "Book a demo",
    banner: {
      label: "New in Steep: API, MCP and code updates",
      href: "/changelog/entities-api-mcp",
    },
  },
  productIntro: {
    title: (
      <>
        A new kind of
        <br />
        analytics platform
      </>
    ),
    description: "",
    cta: "Make the switch",
    cardOne: {
      title: "Built on metrics",
      description:
        "No more dashboards. With Steep, data teams ship governed metrics that power all your analysis and reporting.",
    },
    cardTwo: {
      title: "Powered by AI",
      description:
        "With AI-powered workflows in Steep, anyone can do deep analysis and generate reports. All using trusted metrics.",
    },
    cardThree: {
      title: "Designed for engagement",
      description:
        "Data teams work smarter. Users move faster. And your whole company builds a stronger data culture.",
    },
  },
  semanticPlatform: {
    title: (
      <>
        Ship metrics,
        <br />
        not dashboards
      </>
    ),
    description:
      "A complete semantic platform to govern and publish all your metrics. No more repeating yourself.",
    cta: "Learn more",
    featureSemanticModel: {
      title: "Semantic platform",
      description:
        "Define metrics, dimensions, entities and power all of your analysis and reporting with governed building blocks.",
    },
    featureMetricsCatalog: {
      title: "Metrics catalog",
      description:
        "Organize and publish all your metric in one place. No more documentation that no one looks at.",
    },
    featureDefineInCode: {
      title: "Define in code",
      description:
        "Manage your semantic model in code with peer reviews and strong version control.",
    },
    featureDefineInApp: {
      title: "Manage in app",
      description:
        "Manage your semantic model efficiently using the comprehensive admin interface.",
    },
    featureSteepApi: {
      title: "Steep API",
      description:
        "Use your metrics anywhere. Export data, connect to notebooks, or embed in your own application.",
    },
    featureFineGrainedPermissions: {
      title: "Fine-grained permissions",
      description: "Control who can access metrics and row-level data.",
    },
    featureSmartCaching: {
      title: "Smart caching",
      description:
        "Offload your data warehouse. Instant responses for users.",
    },
    featureDbtCubeIntegrations: {
      title: "dbt + Cube integrations",
      description: "Seamless integrations to stand-alone semantic layers.",
    },
    featureOsiReady: {
      title: "OSI ready",
      description:
        "Compatible with latest industry standards for interoperability.",
    },
  },
  productSection: {
    title: "Engage everyone",
    description:
      "AI-powered workflows that unlocks deep analysis and reporting for all users.",
    cta: "Learn more",
    featureAI: {
      title: "AI",
      description:
        "Ask complex questions and get deep, reliable insights. All powered by governed metrics.",
    },
    featureExplore: {
      title: "Explore",
      description:
        "Jump into metrics and explore visualizations in seconds. Go deeper with seamless AI support.",
    },
    featureReports: {
      title: "Reports",
      description:
        "Create or generate any type of content. From dashboards and business reviews to deep-dive analysis.",
    },
    featureDrilldown: {
      title: "Drill down",
      description:
        "Click on any metric and dive into the row-level details of your customers, transactions, or products.",
    },
    featureTargets: {
      title: "Targets",
      description:
        "Load target data centrally and have it be available for any metric, anywhere in your workspace.",
    },
    featureMaps: {
      title: "Maps",
      description:
        "Simple, intuitive maps made to be explored by everyone. Just open the map and dive into your metrics instantly.",
    },
    featureMobile: {
      title: "Mobile",
      description:
        "Make insights available everywhere with the powerful mobile experience. Use Steep AI with both text and voice.",
    },
  },
  aiSection: {
    title: "Unlock deep analysis",
    description:
      "Steep AI goes beyond simple answers to deliver deep, comprehensive analysis grounded in your semantic model.",
    cta: "Learn more",
    featureOne: {
      title: "Answers you can trust",
      description:
        "Steep AI is powered by your semantic model and answers reflect governed metrics.",
    },
    featureTwo: {
      title: "Generate reports",
      description:
        "Turn any chat into a shareable report, ready to share, edit and build on.",
    },
    featureThree: {
      title: "Support teams where they work",
      description:
        "Agents across your stack work from the same governed metrics, through Steep's API and MCP.",
    },
  },
  getStarted: {
    title: "Get started for free",
    description:
      "Try Steep for free with up to 3 users. Connect your database or explore in demo mode.",
    cta: "Get started",
    ctaSecondary: "Book a demo",
  },
  customerStorySection: {
    label: "Customer story",
    cta: "Read the story",
    ctaSecondary: "All stories",
    customerVoi: {
      quote: "“I have never seen BI adoption like this in my career.”",
      subhead: "Why Voi switched from Tableau to Steep",
    },
    customerJuni: {
      quote: "“Steep hits the perfect balance between power and usability.”",
      subhead: "From data-blind to insight-led at Juni",
    },
    customerBounce: {
      quote: "“We tested 20 tools before choosing Steep.”",
      subhead: "How Bounce moved from shipping dashboards to metrics",
    },
    customerOnceupon: {
      quote: "“There’s now one place where people can look for an answer.”",
      subhead: "Once Upon’s journey to metrics-first BI",
    },
  },
};

export function useWindowSize() {
  const [size, setSize] = useState<{ width: number; height: number } | null>(
    null,
  );

  useEffect(() => {
    const updateSize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const width = size?.width ?? 1200;
  const height = size?.height ?? 800;

  return {
    width,
    height,
    hasMeasured: size !== null,
    isXSmall: width <= 640,
    isSmall: width <= 768,
    isMedium: width > 768,
    isLarge: width > 1024,
    isBetweenMediumAndLarge: width > 768 && width < 1024,
    isXLarge: width >= 1200,
  };
}

let refreshTimer: ReturnType<typeof setTimeout> | null = null;
let bodyResizeObserverInitialized = false;
let lastObservedBodyHeight = 0;

function scheduleScrollTriggerRefresh() {
  if (refreshTimer) {
    clearTimeout(refreshTimer);
  }
  refreshTimer = setTimeout(() => {
    ScrollTrigger.refresh();
    refreshTimer = null;
  }, 100);
}

function ensureBodyResizeRefreshObserver() {
  if (
    bodyResizeObserverInitialized ||
    typeof window === "undefined" ||
    typeof document === "undefined"
  ) {
    return;
  }
  bodyResizeObserverInitialized = true;
  lastObservedBodyHeight = document.body.scrollHeight;

  if (typeof ResizeObserver !== "undefined") {
    const observer = new ResizeObserver(() => {
      const nextHeight = document.body.scrollHeight;
      if (nextHeight !== lastObservedBodyHeight) {
        lastObservedBodyHeight = nextHeight;
        scheduleScrollTriggerRefresh();
      }
    });
    observer.observe(document.body);
  }

  window.addEventListener("load", scheduleScrollTriggerRefresh);
}

export interface UseInViewTriggerOptions {
  start?: string;
  markers?: boolean;
  once?: boolean;
}

export function useInViewTrigger(options: UseInViewTriggerOptions = {}) {
  const { start = "top 80%", markers = false, once = false } = options;
  const triggerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const pathname = usePathname();

  useLayoutEffect(() => {
    const element = triggerRef.current;
    if (!element) return;

    const isReducedOrFirefox =
      typeof window !== "undefined" &&
      (navigator.userAgent.toLowerCase().includes("firefox") ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    if (isReducedOrFirefox) {
      setIsInView(true);
      return;
    }

    ensureBodyResizeRefreshObserver();

    const ctx = gsap.context(() => {
      let active = false;
      const syncState = (self: ScrollTrigger) => {
        if (!active && self.progress > 0) {
          active = true;
          setIsInView(true);
        }
        if (!once && active && self.progress === 0) {
          active = false;
          setIsInView(false);
        }
      };
      ScrollTrigger.create({
        trigger: element,
        start,
        end: "bottom top",
        markers,
        onUpdate: syncState,
        onRefresh: syncState,
      });

      scheduleScrollTriggerRefresh();
    });

    return () => {
      ctx.revert();
    };
  }, [start, markers, once, pathname]);

  return { triggerRef, isInView };
}

export interface UseStaggerRevealOptions {
  itemCount: number;
  isInView: boolean;
  yOffset?: number;
  duration?: number;
  stagger?: number;
  ease?: string;
}

export function useStaggerReveal({
  itemCount,
  isInView,
  yOffset = 60,
  duration = 0.7,
  stagger = 0.15,
  ease = "power3.out",
}: UseStaggerRevealOptions) {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const elements = itemsRef.current.filter(
      (el): el is HTMLDivElement => el !== null,
    );
    if (elements.length === 0) return;

    gsap.set(elements, { y: yOffset, opacity: 0 });
    const tl = gsap.timeline({ paused: true });
    tl.to(elements, {
      y: 0,
      opacity: 1,
      duration,
      stagger,
      ease,
    });
    timelineRef.current = tl;

    return () => {
      tl.kill();
      timelineRef.current = null;
    };
  }, [itemCount, yOffset, duration, stagger, ease]);

  useEffect(() => {
    if (!timelineRef.current) return;
    if (isInView) {
      timelineRef.current.play();
    } else if (timelineRef.current.progress() > 0) {
      timelineRef.current.reverse();
    }
  }, [isInView]);

  return {
    setItemRef: (index: number) => (el: HTMLDivElement | null) => {
      itemsRef.current[index] = el;
    },
  };
}

export interface CookieConsentState {
  acceptAll: () => void;
  rejectAll: () => void;
  hideBanner: boolean;
  reset: (e?: React.MouseEvent) => void;
}

export function useCookieConsent(): CookieConsentState {
  const [consent, setConsentState] = useState<string | null | undefined>(
    undefined,
  );
  const [hideBanner, setHideBanner] = useState(true);

  useEffect(() => {
    const match = document.cookie.match(/steep_cookie_consent=([^;]+)/);
    setConsentState(match?.[1]?.trim() || null);
  }, []);

  const setConsent = useCallback((value: string | null) => {
    setConsentState(value);
    if (typeof document !== "undefined") {
      if (value) {
        document.cookie = `steep_cookie_consent=${value}; path=/; max-age=31536000; SameSite=Lax`;
      } else {
        document.cookie =
          "steep_cookie_consent=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
    }
  }, []);

  useEffect(() => {
    if (consent !== undefined) {
      setHideBanner(consent !== null);
    }
  }, [consent]);

  return {
    acceptAll: () => setConsent("accept-all"),
    rejectAll: () => setConsent("reject-all"),
    hideBanner,
    reset: (e?: React.MouseEvent) => {
      e?.preventDefault();
      setConsent(null);
    },
  };
}

export interface SectionProps {
  id?: string;
  size?: "regular" | "large";
  noPaddingOnSmallScreens?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const Section = forwardRef<HTMLDivElement, SectionProps>(
  (props, ref) => (
    <div
      ref={ref}
      id={props.id}
      className={clsx(
        "w-full md:mx-auto md:px-12! lg:px-20!",
        props.size === "large" ? "max-w-[1560px]" : "max-w-[1360px]",
        props.noPaddingOnSmallScreens ? "px-0" : "mobile-padding",
        props.className,
      )}
    >
      {props.children}
    </div>
  ),
);
Section.displayName = "Section";

export interface SteepButtonProps {
  variant?:
    | "primary"
    | "secondary"
    | "outlined"
    | "tertiary"
    | "primary-reverse"
    | "secondary-reverse";
  size?: "regular" | "small";
  label?: React.ReactNode;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  arrow?: boolean;
  isDisabled?: boolean;
  isSubmit?: boolean;
  backgroundColor?: string;
  textColor?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  tooltip?: string;
  className?: string;
}

export function SteepButton(props: SteepButtonProps) {
  const variant = props.variant ?? "primary";
  let bgClass = "";
  let textClass = "";
  let hoverClass = "";

  switch (variant) {
    case "secondary":
      hoverClass = "hover:bg-trans-10 active:bg-trans-15 bg-trans-5";
      bgClass = props.backgroundColor || "bg-none";
      textClass = props.textColor || "text-primary-text";
      break;
    case "outlined":
      hoverClass =
        "hover:border-trans-20 active:border-trans-20 border-[1.5px] border-trans-10";
      bgClass = props.backgroundColor || "bg-none";
      textClass = props.textColor || "text-primary-text";
      break;
    case "tertiary":
      hoverClass = "hover:bg-trans-5 active:bg-trans-15";
      bgClass = props.backgroundColor || "bg-none";
      textClass = props.textColor || "text-primary-text";
      break;
    case "primary-reverse":
      hoverClass = "hover:opacity-90 active:opacity-80";
      bgClass = props.backgroundColor || "bg-white";
      textClass = props.textColor || "text-black";
      break;
    case "secondary-reverse":
      hoverClass = "hover:bg-white/10 active:bg-white/15 bg-white/5";
      bgClass = props.backgroundColor || "bg-none";
      textClass = props.textColor || "text-white";
      break;
    default:
      hoverClass = "hover:opacity-90 active:opacity-80";
      bgClass = props.backgroundColor || "bg-primary-text";
      textClass = props.textColor || "text-white";
  }

  const size = props.size ?? "regular";

  return (
    <button
      className={clsx(
        "group leading-none font-book focus:outline-none whitespace-nowrap cursor-pointer select-none rounded-full",
        "inline-flex items-center justify-center gap-2",
        "transition-colors duration-200",
        props.isDisabled ? "text-secondary-text bg-light-gray" : hoverClass,
        bgClass,
        textClass,
        size === "regular"
          ? "px-4 md:px-5 h-10 md:h-11 md:text-[18px] text-xs"
          : "px-3 md:px-3 h-8 md:h-8 text-[15px]",
        props.className,
      )}
      type={props.isSubmit ? "submit" : "button"}
      onClick={props.isDisabled ? undefined : props.onClick}
      title={props.tooltip}
    >
      {props.icon}
      {props.label && <span className="pb-0.5">{props.label}</span>}
      {props.rightIcon}
      {props.arrow && (
        <span
          className={clsx(
            "relative overflow-hidden inline-block w-4 font-normal",
            variant === "primary"
              ? "opacity-40 group-hover:opacity-60"
              : "opacity-25 group-hover:opacity-50",
          )}
        >
          <span className="inline-block group-hover:animate-arrow-slide ">
            →
          </span>
        </span>
      )}
    </button>
  );
}

export interface IconButtonProps {
  darkMode?: boolean;
  size?: "small" | "medium";
  isDisabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  tooltip?: string;
  "aria-label"?: string;
  className?: string;
  children?: React.ReactNode;
}

export function IconButton(props: IconButtonProps) {
  const isDark = Boolean(props.darkMode);
  const activeBg = isDark ? "bg-white/10" : "bg-trans-10";
  const size = props.size ?? "medium";

  return (
    <button
      className={clsx(
        isDark ? "text-white/50" : "text-primary-text/50",
        isDark ? "bg-white/5 border border-white/3" : "bg-trans-5",
        "focus:outline-none transition-all duration-150",
        "rounded-full inline-flex items-center justify-center",
        size === "small" ? "size-8" : "size-10",
        props.isDisabled
          ? "opacity-50"
          : `hover:${isDark ? "text-white" : "text-primary-text"} hover:${activeBg} active:${activeBg} cursor-pointer`,
        props.className,
      )}
      type="button"
      onClick={props.isDisabled ? undefined : props.onClick}
      title={props.tooltip}
      aria-label={props["aria-label"] || props.tooltip}
    >
      {props.children}
    </button>
  );
}

export interface NoiseOverlayProps
  extends React.HTMLAttributes<HTMLDivElement> {
  blendMode?: React.CSSProperties["mixBlendMode"];
}

export function NoiseOverlay({
  className,
  blendMode = "overlay",
  style,
  ...rest
}: NoiseOverlayProps) {
  return (
    <div
      {...rest}
      className={clsx("absolute inset-0 pointer-events-none z-0", className)}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.91' numOctaves='2' seed='10' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='0 1'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        backgroundSize: "180px 180px",
        mixBlendMode: blendMode,
        opacity: 0.6,
        ...style,
      }}
    />
  );
}

export interface SectionBadgeLinkProps {
  text: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
}

export function SectionBadgeLink({
  text,
  className,
  variant,
}: SectionBadgeLinkProps) {
  return (
    <div
      className={clsx(
        "text-2xs flex items-center gap-1 group cursor-pointer text-insets",
        variant === "dark" ? "text-white" : "text-primary-text",
        className,
      )}
    >
      {text}
      <ChevronRight12Icon className="w-3 h-3 opacity-25 mt-[3px] group-hover:opacity-50 duration-150 group-hover:translate-x-1" />
    </div>
  );
}

export interface SplitHeadingBlockProps {
  mode?: "light" | "dark";
  centerAligned?: boolean;
  heading: React.ReactNode;
  description?: React.ReactNode;
  cta?: React.ReactNode;
  headingClassName?: string;
  descriptionClassName?: string;
  ctaClassName?: string;
  className?: string;
  stagger?: number;
  duration?: number;
  isInView?: boolean;
}

export function SplitHeadingBlock({
  mode = "light",
  centerAligned = false,
  heading,
  description,
  cta,
  headingClassName = "",
  descriptionClassName = "",
  ctaClassName = "",
  className = "",
  stagger = 0.08,
  duration = 0.6,
  isInView = false,
}: SplitHeadingBlockProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const splitRef = useRef<SplitText | null>(null);

  useLayoutEffect(() => {
    const headingEl = headingRef.current;
    const descEl = descriptionRef.current;
    const ctaEl = ctaRef.current;
    if (!headingEl) return;

    const split = SplitText.create(headingEl, {
      type: "words,lines",
      mask: "lines",
    });
    splitRef.current = split;

    if (split.masks) {
      gsap.set(split.masks, {
        overflow: "visible",
        marginBottom: "-0.15em",
      });
    }
    gsap.set(split.words, {
      yPercent: 100,
      opacity: 0,
      textShadow: "0 0 1em transparent",
    });
    headingEl.classList.remove("invisible");

    if (descEl) {
      gsap.set(descEl, { y: 40, opacity: 0 });
    }
    if (ctaEl) {
      gsap.set(ctaEl, { y: 15, opacity: 0 });
    }

    const tl = gsap.timeline({ paused: true });
    tl.to(split.words, {
      yPercent: 0,
      opacity: 1,
      duration,
      stagger,
      ease: "power3.out",
    });
    if (descEl) {
      tl.to(
        descEl,
        {
          y: 0,
          opacity: 1,
          duration: 1.2 * duration,
          ease: "power3.out",
        },
        stagger * split.words.length * 0.4,
      );
    }
    if (ctaEl) {
      tl.to(
        ctaEl,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        descEl ? "-=0.4" : stagger * split.words.length * 0.4,
      );
    }
    timelineRef.current = tl;

    return () => {
      tl.kill();
      splitRef.current?.revert();
      splitRef.current = null;
      timelineRef.current = null;
    };
  }, [stagger, duration]);

  useEffect(() => {
    if (!timelineRef.current) return;
    if (isInView) {
      timelineRef.current.play();
    } else if (timelineRef.current.progress() > 0) {
      timelineRef.current.reverse();
    }
  }, [isInView]);

  return (
    <div
      className={clsx(
        className,
        "flex flex-col text-insets",
        centerAligned ? "text-left xs:text-center xs:items-center" : "text-left",
        mode === "dark" ? "text-white/90" : "text-primary-text",
      )}
    >
      <h2
        ref={headingRef}
        className={clsx(
          headingClassName,
          "invisible font-serif text-[40px] sm:text-[48px] md:text-[60px] xl:text-7xl leading-[1.3] overflow-visible tracking-[-0.015em]",
        )}
      >
        {heading}
      </h2>
      {description && (
        <div
          ref={descriptionRef}
          className={clsx(
            descriptionClassName,
            "max-w-[580px] text-lg md:text-xl",
            mode === "dark" ? "text-white/50" : "text-primary-text/60",
          )}
        >
          {description}
        </div>
      )}
      {cta && (
        <div ref={ctaRef} className={clsx(ctaClassName, "mt-6")}>
          {cta}
        </div>
      )}
    </div>
  );
}

export interface AnimatedImageProps {
  src: string;
  alt?: string;
  className?: string;
  imageClassName?: string;
  initialScale?: number;
  duration?: number;
  ease?: string;
}

export function AnimatedImage({
  src,
  alt = "",
  className = "",
  imageClassName = "",
  initialScale = 0.9,
  duration = 0.4,
  ease = "expo.out",
}: AnimatedImageProps) {
  const currentImgRef = useRef<HTMLImageElement>(null);
  const prevImgRef = useRef<HTMLImageElement>(null);
  const [prevSrc, setPrevSrc] = useState<string | null>(null);
  const [currentSrc, setCurrentSrc] = useState(src);
  const { isInView, triggerRef } = useInViewTrigger({
    start: "top bottom-=200",
  });

  useEffect(() => {
    if (src !== currentSrc) {
      setPrevSrc(currentSrc);
      setCurrentSrc(src);
    }
  }, [src, currentSrc]);

  useLayoutEffect(() => {
    if (currentImgRef.current) {
      gsap.set(currentImgRef.current, { scale: initialScale });
    }
  }, [initialScale]);

  useEffect(() => {
    if (currentImgRef.current) {
      gsap.to(currentImgRef.current, {
        scale: isInView ? 1 : initialScale,
        duration: isInView ? duration : 0.5 * duration,
        ease,
      });
    }
  }, [isInView, duration, ease, initialScale]);

  useEffect(() => {
    if (!prevSrc) return;
    const tl = gsap.timeline();
    if (currentImgRef.current) {
      gsap.set(currentImgRef.current, { scale: initialScale, opacity: 0 });
    }
    if (prevImgRef.current) {
      tl.to(
        prevImgRef.current,
        {
          scale: initialScale,
          opacity: 0,
          duration: 0.6 * duration,
          ease: "power2.in",
        },
        0,
      );
    }
    if (currentImgRef.current) {
      tl.to(
        currentImgRef.current,
        {
          scale: 1,
          opacity: 1,
          duration,
          ease,
        },
        0.3 * duration,
      );
    }
    tl.call(() => setPrevSrc(null));
    return () => {
      tl.kill();
    };
  }, [currentSrc, prevSrc, initialScale, duration, ease]);

  return (
    <div ref={triggerRef} className={clsx("relative overflow-hidden", className)}>
      {prevSrc && (
        <img
          ref={prevImgRef}
          src={prevSrc}
          alt=""
          className={clsx(imageClassName, "absolute inset-0")}
        />
      )}
      <img
        ref={currentImgRef}
        src={currentSrc}
        alt={alt}
        className={imageClassName}
      />
    </div>
  );
}

export interface HorizontalTabBarItem {
  id: string;
  label: string;
}

export interface HorizontalTabBarProps {
  items: readonly HorizontalTabBarItem[];
  activeIndex: number;
  onSelect: (index: number) => void;
  mode?: "light" | "dark";
  itemWidth?: number | "full";
  buttonsEnabled?: boolean;
}

export function HorizontalTabBar({
  items,
  activeIndex,
  onSelect,
  mode = "light",
  itemWidth = 100,
  buttonsEnabled = true,
}: HorizontalTabBarProps) {
  const isFullWidth = itemWidth === "full";
  const numericWidth = isFullWidth ? 100 : itemWidth;

  return (
    <div className="relative my-8 w-full">
      <div className={clsx("flex", isFullWidth && "w-full")}>
        {items.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => onSelect(idx)}
            className={clsx(
              "py-4.5 text-sm cursor-pointer transition-colors text-center duration-200 font-book",
              isFullWidth && "min-w-0 flex-1",
              idx === activeIndex
                ? mode === "dark"
                  ? "text-white"
                  : "text-primary-text"
                : mode === "dark"
                  ? "text-white/60 hover:text-white"
                  : "text-primary-text/50 hover:text-primary-text",
            )}
            style={
              isFullWidth
                ? undefined
                : { width: `${itemWidth}px`, marginRight: "20px" }
            }
          >
            {item.label}
          </button>
        ))}
        {buttonsEnabled && (
          <div className="flex flex-1 items-center justify-end gap-2">
            <IconButton
              size="small"
              darkMode={mode === "dark"}
              className="group"
              onClick={() => onSelect(activeIndex - 1)}
              isDisabled={activeIndex === 0}
              aria-label="Previous tab"
            >
              <ChevronLeft12Icon className="scale-110" />
            </IconButton>
            <IconButton
              size="small"
              darkMode={mode === "dark"}
              className="group"
              onClick={() => onSelect(activeIndex + 1)}
              isDisabled={activeIndex === items.length - 1}
              aria-label="Next tab"
            >
              <ChevronRight12Icon className="scale-110" />
            </IconButton>
          </div>
        )}
      </div>
      <div
        className={`absolute bottom-0 left-0 right-0 h-px ${
          mode === "dark" ? "bg-white/10" : "bg-black/10"
        }`}
      />
      <div
        className={`absolute bottom-0 left-0 h-0.5 ${
          mode === "dark" ? "bg-white" : "bg-primary-text/50"
        } transition-transform duration-300 ease-in-out`}
        style={
          isFullWidth
            ? {
                width: `${100 / items.length}%`,
                transform: `translateX(${100 * activeIndex}%)`,
              }
            : {
                width: `${itemWidth}px`,
                transform: `translateX(${activeIndex * (numericWidth + 20)}px)`,
              }
        }
      />
    </div>
  );
}

interface ProgressBarProps {
  isActive: boolean;
  id: string;
  duration: number;
  isProgressPaused?: boolean;
  animationKey?: number;
  mode?: "light" | "dark";
}

function AccordionProgressBar({
  isActive,
  id,
  duration,
  isProgressPaused,
  animationKey,
  mode = "light",
}: ProgressBarProps) {
  return (
    <span
      className={`pointer-events-none absolute inset-x-0 bottom-0 h-px ${
        mode === "dark" ? "bg-white/10" : "bg-black/10"
      }`}
    >
      <span
        key={isActive ? `progress-${animationKey}` : id}
        className={`block rounded-full ${
          mode === "dark" ? "bg-white" : "bg-primary-text"
        } h-[2px] -translate-y-[0.5px]`}
        style={{
          width: "0%",
          animation:
            isActive && animationKey
              ? `progressFill ${duration}s linear forwards`
              : "none",
          animationPlayState: isProgressPaused ? "paused" : "running",
        }}
      />
    </span>
  );
}

export interface VerticalAccordionSection {
  id: string;
  label: string;
  description: React.ReactNode;
  duration: number;
}

export interface VerticalAccordionTabsProps {
  activeIndex: number;
  animationKey?: number;
  isProgressPaused?: boolean;
  handleTabClick: (index: number) => void;
  sections: readonly VerticalAccordionSection[];
  className?: string;
  mode?: "light" | "dark";
}

export function VerticalAccordionTabs({
  activeIndex,
  animationKey,
  isProgressPaused,
  handleTabClick,
  sections,
  className,
  mode = "light",
}: VerticalAccordionTabsProps) {
  return (
    <div
      className={clsx(
        "flex flex-col mr-10 2xl:mr-16 justify-center w-full lg:w-[282px] shrink-0",
        className,
      )}
    >
      {sections.map((section, index) => {
        const isActive = index === activeIndex;
        return (
          <div key={section.id} className="flex flex-col">
            <button
              onClick={() => handleTabClick(index)}
              className={`text-left relative py-5 transition-opacity w-full ${
                mode === "dark" ? "text-white" : "text-primary-text"
              } cursor-pointer ${
                isActive ? "opacity-100" : "opacity-60 hover:opacity-100"
              }`}
            >
              <p className="text-sm pb-0.5">{section.label}</p>
              <div
                className={`grid transition-[grid-template-rows] duration-450 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                  isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <span
                    className={`max-w-3xl text-[16px] leading-snug block pt-1 transition-opacity duration-350 delay-100 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                      isActive ? "opacity-50" : "opacity-0"
                    }`}
                  >
                    {section.description}
                  </span>
                </div>
              </div>
              <AccordionProgressBar
                isActive={isActive}
                id={section.id}
                duration={section.duration}
                isProgressPaused={isProgressPaused}
                animationKey={animationKey}
                mode={mode}
              />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export interface FeatureImageStackProps {
  title: string;
  description: string;
  largeImage: string;
  mediumImage?: string;
  smallImage: string;
  mode?: "light" | "dark";
  shadow?: boolean;
  border?: boolean;
}

export function FeatureImageStack({
  title,
  description,
  largeImage,
  mediumImage,
  smallImage,
  mode = "light",
  shadow = false,
  border = false,
}: FeatureImageStackProps) {
  const borderClass = border
    ? mode === "dark"
      ? "border border-white/5"
      : "border border-trans-5"
    : "";
  const shadowClass = shadow ? "shadow-xl" : "";

  return (
    <div className="flex flex-col w-full gap-y-6 mb-16">
      <Image
        src={largeImage}
        alt={description}
        width={0}
        height={0}
        sizes="100vw"
        className={clsx(
          "w-full h-auto rounded-2xl hidden lg:block",
          shadowClass,
          borderClass,
        )}
      />
      <Image
        src={mediumImage ?? largeImage}
        alt={description}
        width={0}
        height={0}
        sizes="100vw"
        className={clsx(
          "w-full h-auto rounded-2xl hidden xs:block",
          shadowClass,
          borderClass,
        )}
      />
      <Image
        src={smallImage}
        alt={description}
        width={0}
        height={0}
        sizes="100vw"
        className={clsx(
          "w-full h-auto rounded-2xl lg:rounded-3xl xs:hidden",
          shadowClass,
          borderClass,
        )}
      />
      <div className="flex flex-col text-insets">
        <div
          className={`text-base font-medium mb-1 ${
            mode === "light" ? "text-primary-text" : "text-white"
          }`}
        >
          {title}
        </div>
        <span
          className={`text-sm ${
            mode === "light" ? "text-primary-text/60" : "text-white/60"
          }`}
        >
          {description}
        </span>
      </div>
    </div>
  );
}

export interface CarouselFeatureCardProps {
  title: string;
  description: string;
  image: string;
  scaleStyle?: React.CSSProperties;
  opacityStyle?: React.CSSProperties;
  bordered?: boolean;
  mode?: "light" | "dark";
}

export const CarouselFeatureCard = forwardRef<
  HTMLDivElement,
  CarouselFeatureCardProps
>(
  (
    {
      title,
      description,
      image,
      scaleStyle,
      opacityStyle,
      bordered = false,
      mode,
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "shrink-0 w-[85%] max-w-[400px] snap-start snap-always",
        )}
      >
        <div style={scaleStyle} className="mb-6 relative">
          <div
            className={
              (bordered
                ? mode === "dark"
                  ? "inset-shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
                  : "border border-black/7"
                : "") + " absolute inset-0 rounded-2xl lg:rounded-3xl"
            }
          />
          <Image
            src={image}
            alt={title}
            width={0}
            height={0}
            sizes="(max-width: 768px) 85vw, 400px"
            className={clsx(
              "w-full h-auto -z-1 relative rounded-2xl lg:rounded-3xl",
            )}
          />
        </div>
        <div
          style={opacityStyle}
          className={clsx(
            "text-base font-medium mb-1 text-insets",
            mode === "dark" ? "text-white" : "text-primary-text",
          )}
        >
          {title}
        </div>
        <p
          style={opacityStyle}
          className={clsx(
            "text-sm text-insets min-h-[70px]",
            mode === "dark" ? "text-white/60" : "text-primary-text/60",
          )}
        >
          {description}
        </p>
      </div>
    );
  },
);
CarouselFeatureCard.displayName = "CarouselFeatureCard";

export interface SnapCarouselRenderArgs<T> {
  item: T;
  index: number;
  isActive: boolean;
  setRef: (el: HTMLDivElement | null) => void;
  scaleStyle?: React.CSSProperties;
  opacityStyle?: React.CSSProperties;
}

export interface SnapCarouselProps<T> {
  items: readonly T[];
  showArrowButtons?: boolean;
  expandInView?: boolean;
  onActiveIndexChange?: (index: number) => void;
  renderItem: (args: SnapCarouselRenderArgs<T>) => React.ReactNode;
  darkMode?: boolean;
}

function useCarouselObserver<T>(items: readonly T[] = []) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemRatios, setItemRatios] = useState<number[]>(() =>
    items.map((_, idx) => (idx === 0 ? 1 : 0)),
  );

  const setItemRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      itemRefs.current[index] = el;
    },
    [],
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container || items.length === 0) return;

    const ratioMap = new Map<number, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = itemRefs.current.indexOf(entry.target as HTMLDivElement);
          if (idx !== -1) {
            ratioMap.set(idx, entry.intersectionRatio);
          }
        });

        setItemRatios(items.map((_, idx) => ratioMap.get(idx) ?? 0));

        let maxRatio = 0;
        let bestIndex = 0;
        ratioMap.forEach((ratio, idx) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            bestIndex = idx;
          }
        });
        setActiveIndex((prev) => (prev !== bestIndex ? bestIndex : prev));
      },
      {
        root: container,
        threshold: [
          0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.85, 0.9, 0.92, 0.94,
          0.96, 0.98, 1,
        ],
      },
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollTo = useCallback((index: number) => {
    itemRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, []);

  const next = useCallback(() => {
    scrollTo(Math.min(activeIndex + 1, items.length - 1));
  }, [activeIndex, items.length, scrollTo]);

  const prev = useCallback(() => {
    scrollTo(Math.max(activeIndex - 1, 0));
  }, [activeIndex, scrollTo]);

  return {
    containerRef,
    setItemRef,
    activeIndex,
    itemRatios,
    scrollTo,
    next,
    prev,
  };
}

export function SnapCarousel<T>({
  items,
  showArrowButtons = false,
  expandInView = false,
  onActiveIndexChange,
  renderItem,
  darkMode = false,
}: SnapCarouselProps<T>) {
  const {
    containerRef,
    setItemRef,
    activeIndex,
    itemRatios,
    next,
    prev,
  } = useCarouselObserver(items);
  const prevActiveRef = useRef(activeIndex);

  useEffect(() => {
    if (activeIndex !== prevActiveRef.current) {
      prevActiveRef.current = activeIndex;
      onActiveIndexChange?.(activeIndex);
    }
  }, [activeIndex, onActiveIndexChange]);

  const isFirst = activeIndex === 0;
  const isLast = activeIndex === items.length - 1;

  return (
    <div className="overflow-visible">
      <div
        ref={containerRef}
        className={clsx(
          "flex items-end overflow-x-auto overflow-y-visible pt-4 md:pt-8 pb-4 snap-x snap-mandatory scroll-smooth",
          expandInView ? "gap-[1.5%] sm:gap-[3.5%]" : "gap-5",
          "overscroll-x-contain scrollbar-hide mobile-padding scroll-px-6 xs:scroll-px-8",
        )}
      >
        {items.map((item, idx) => {
          const isActive = idx === activeIndex;
          const ratio = itemRatios[idx] ?? 0;
          const scaleStyle: React.CSSProperties | undefined = expandInView
            ? {
                transform: `scale(${0.85 + 0.15 * ratio})`,
                transformOrigin: "bottom",
                transition: "transform 0.1s ease-out",
              }
            : undefined;
          const opacityStyle: React.CSSProperties | undefined = expandInView
            ? {
                opacity: Math.max(0, Math.min(1, (ratio - 0.5) / 0.4)),
                transition: "opacity 0.1s ease-out",
              }
            : undefined;

          return renderItem({
            item,
            index: idx,
            isActive,
            setRef: setItemRef(idx),
            scaleStyle,
            opacityStyle,
          });
        })}
      </div>
      {showArrowButtons && (
        <div className="flex gap-2 mobile-padding-only">
          <IconButton
            onClick={prev}
            isDisabled={isFirst}
            darkMode={darkMode}
            aria-label="Previous"
          >
            <ChevronLeft12Icon className="scale-110" />
          </IconButton>
          <IconButton
            onClick={next}
            isDisabled={isLast}
            darkMode={darkMode}
            aria-label="Next"
          >
            <ChevronRight12Icon className="scale-110" />
          </IconButton>
        </div>
      )}
    </div>
  );
}

export interface StaggerFeatureGridItem {
  title: React.ReactNode;
  description: React.ReactNode;
  icon: React.ReactNode;
}

export interface StaggerFeatureGridProps {
  items: readonly StaggerFeatureGridItem[];
  mode?: "light" | "dark";
  className?: string;
}

export function StaggerFeatureGrid({
  items,
  mode = "light",
  className,
}: StaggerFeatureGridProps) {
  const { triggerRef, isInView } = useInViewTrigger({
    start: "top bottom-=200",
  });
  const { setItemRef } = useStaggerReveal({
    itemCount: items.length,
    isInView,
  });

  return (
    <div
      ref={triggerRef}
      className={clsx(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:divide-x gap-x-10 lg:gap-x-8 xl:gap-x-8 gap-y-2 lg:gap-y-0",
        className,
        mode === "dark"
          ? "fill-white text-white divide-white/5"
          : "fill-black text-black divide-trans-5",
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          ref={setItemRef(idx)}
          className="flex flex-row lg:flex-col max-w-full leading-snug py-2 sm:py-4 xl:pr-4"
        >
          <div className="shrink-0 mr-5 mb-7 flex items-center justify-start gap-3 size-9 md:scale-100 scale-85 [&>svg]:size-full">
            {item.icon}
          </div>
          <div className="font-medium">
            {item.title}
            <div
              className={clsx(
                mode === "dark" ? "text-white/60" : "text-black/60",
                "font-normal",
              )}
            >
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export interface ThreeCardItemData {
  title?: string;
  description?: string;
  image: string;
  bordered?: boolean;
}

export interface ThreeCardItemProps {
  item: ThreeCardItemData;
  mode?: "light" | "dark";
}

export function ThreeCardItem({ item, mode }: ThreeCardItemProps) {
  return (
    <>
      <div
        className={clsx(
          "rounded-2xl aspect-square origin-bottom overflow-hidden relative",
          item.bordered
            ? mode === "dark"
              ? "border border-white/5"
              : "border  border-trans-5"
            : "",
        )}
      >
        <Image
          src={item.image}
          alt={item.title || ""}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      {item.title && (
        <p
          className={`text-base xl:text-lg ${
            mode === "dark" ? "text-white" : "text-primary-text"
          } pt-5 font-medium text-insets`}
        >
          {item.title}
        </p>
      )}
      {item.description && (
        <p
          className={`text-xs xl:text-base ${
            mode === "dark" ? "text-white/60" : "text-primary-text/60"
          } text-insets`}
        >
          {item.description}
        </p>
      )}
    </>
  );
}

export interface ThreeCardRowProps {
  items: readonly ThreeCardItemData[];
  mode?: "light" | "dark";
}

export function ThreeCardRow({ items, mode = "light" }: ThreeCardRowProps) {
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
        ref={triggerRef}
        className="hidden md:flex flex-row gap-7 lg:gap-10"
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
