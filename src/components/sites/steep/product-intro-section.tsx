"use client";
/* eslint-disable @next/next/no-img-element */

import React, { forwardRef, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import gsap from "gsap";
import {
  Section,
  SnapCarousel,
  SplitHeadingBlock,
  STEEP_COPY,
  useInViewTrigger,
  useWindowSize,
} from "./shared";

interface ProductIntroIllustrationProps {
  className?: string;
  isPlaying?: boolean;
}

interface ProductIntroItem {
  id: number;
  title: string;
  description: string;
  image: string;
  ill?: React.ComponentType<ProductIntroIllustrationProps>;
  idleColors: string;
  activeColors: string;
}

const CardOneIllustration = ({
  className,
  isPlaying = false,
}: ProductIntroIllustrationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tweensRef = useRef<gsap.core.Tween[]>([]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const tray = el.querySelector("#tray");
    const bottle = el.querySelector("#bottle");
    const platform = el.querySelector("#platform");
    if (!tray || !bottle || !platform) return;

    gsap.set(tray, {
      scale: 1,
      y: -6,
      x: -6,
      transformOrigin: "center center",
    });

    const tweens: gsap.core.Tween[] = [];
    tweens.push(
      gsap.to(tray, {
        x: -20,
        y: 14,
        scale: 1,
        rotation: -3,
        duration: 0.8,
        ease: "power2.out",
        transformOrigin: "center center",
        paused: true,
      }),
    );
    tweens.push(
      gsap.to(bottle, {
        y: -10,
        x: -20,
        duration: 0.8,
        scale: 1,
        ease: "power2.out",
        transformOrigin: "center center",
        paused: true,
      }),
    );
    tweens.push(
      gsap.to(platform, {
        x: 8,
        y: 6,
        rotation: -1,
        duration: 0.8,
        ease: "power2.out",
        paused: true,
      }),
    );
    tweensRef.current = tweens;

    return () => {
      tweens.forEach((tween) => tween.kill());
    };
  }, []);

  useEffect(() => {
    tweensRef.current.forEach((tween) => {
      if (isPlaying) {
        tween.restart();
      } else {
        tween.pause().progress(0);
      }
    });
  }, [isPlaying]);

  return (
    <div ref={containerRef} className={className}>
      <svg
        viewBox="0 0 250 267"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <g>
          <g id="bottle">
            <path
              d="M184.1 30.5714C177.142 30.5714 171.502 28.3814 171.502 25.6798C171.502 22.9782 177.142 20.7881 184.1 20.7881C191.057 20.7881 196.697 22.9782 196.697 25.6798C196.697 28.3814 191.057 30.5714 184.1 30.5714Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M196.689 25.6797V33.4465C196.689 36.1484 191.053 38.3382 184.092 38.3382C177.131 38.3382 171.494 36.1484 171.494 33.4465V25.6797"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M171.424 32.0439C167.042 33.2176 164.251 34.99 164.251 36.9829C164.251 40.5197 173.101 43.387 184.013 43.387C194.925 43.387 203.776 40.5197 203.776 36.9829C203.776 35.0136 201.024 33.2491 196.697 32.0676"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M164.251 36.9834L147.099 102.403L146.895 117.834C146.895 117.834 150.635 128.468 171.385 131.186V122.844H186.326V131.186C186.326 131.186 207.084 130.563 216.004 118.669L216.208 105.01L203.776 36.9834"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M216.216 105.01C216.216 105.01 208.126 112.619 194.424 115.959"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M176.159 115.959C176.159 115.959 161.837 118.046 147.099 102.402"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="platform">
            <path
              d="M214.507 192.154V206.829L173.619 240.212L38.1678 221.142V207.562L61.536 191.421L100.237 202.426L136.744 171.611L109.362 159.874L130.904 143.363L214.507 192.154Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M214.507 192.154L173.109 228.184L46.9318 209.767"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M173.109 228.184V239.479"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M109.291 160.488V171.792L127.729 179.118"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M185.511 192.564C179.575 192.564 174.763 190.374 174.763 187.672C174.763 184.97 179.575 182.78 185.511 182.78C191.446 182.78 196.258 184.97 196.258 187.672C196.258 190.374 191.446 192.564 185.511 192.564Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M196.258 187.672V195.439C196.258 198.141 191.445 200.33 185.511 200.33C179.576 200.33 174.763 198.141 174.763 195.439V187.672"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M163.53 211.217C157.594 211.217 152.783 209.027 152.783 206.325C152.783 203.624 157.594 201.434 163.53 201.434C169.465 201.434 174.277 203.624 174.277 206.325C174.277 209.027 169.465 211.217 163.53 211.217Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M174.285 206.325V214.092C174.285 216.794 169.472 218.984 163.538 218.984C157.604 218.984 152.79 216.794 152.79 214.092V206.325"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M153.731 183.151C147.795 183.151 142.984 180.96 142.984 178.259C142.984 175.557 147.795 173.367 153.731 173.367C159.667 173.367 164.478 175.557 164.478 178.259C164.478 180.96 159.667 183.151 153.731 183.151Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M164.486 178.259V186.026C164.486 188.727 159.673 190.917 153.739 190.917C147.805 190.917 142.992 188.727 142.992 186.026V178.259"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M131.758 201.796C125.823 201.796 121.011 199.606 121.011 196.904C121.011 194.203 125.823 192.013 131.758 192.013C137.694 192.013 142.506 194.203 142.506 196.904C142.506 199.606 137.694 201.796 131.758 201.796Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M142.513 196.904V204.671C142.513 207.373 137.7 209.563 131.766 209.563C125.832 209.563 121.019 207.373 121.019 204.671V196.904"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="tray">
            <path
              d="M69.6259 103.962C63.6903 103.962 58.8785 101.772 58.8785 99.0704C58.8785 96.3688 63.6903 94.1787 69.6259 94.1787C75.5615 94.1787 80.3732 96.3688 80.3732 99.0704C80.3732 101.772 75.5615 103.962 69.6259 103.962Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M80.3811 99.0703V106.837C80.3811 109.539 75.5679 111.729 69.6337 111.729C63.6996 111.729 58.8864 109.539 58.8864 106.837V99.0703"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M36.5294 106.562C30.5938 106.562 25.7821 104.372 25.7821 101.67C25.7821 98.9684 30.5938 96.7783 36.5294 96.7783C42.465 96.7783 47.2768 98.9684 47.2768 101.67C47.2768 104.372 42.465 106.562 36.5294 106.562Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M47.2768 101.67V109.437C47.2768 112.139 42.4636 114.328 36.5294 114.328C30.5953 114.328 25.7821 112.139 25.7821 109.437V101.67"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M96.02 115.62V133.289L21.6431 139.078L14.7839 121.418V104.041L21.6431 121.418L96.02 115.62Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M96.02 115.62L85.4843 99.834H82.7798"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.6431 139.079V121.765"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.7839 104.04L22.9286 103.513"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M56.4641 100.843L50.1615 101.292"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

const CardTwoIllustration = ({
  className,
  isPlaying = false,
}: ProductIntroIllustrationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tweensRef = useRef<gsap.core.Tween[]>([]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const legoTop = el.querySelector("#lego-top");
    const legoMiddle = el.querySelector("#lego-middle");
    const legoBottom = el.querySelector("#lego-bottom");
    if (!legoTop || !legoMiddle || !legoBottom) return;

    const tweens: gsap.core.Tween[] = [];
    tweens.push(
      gsap.to(legoTop, {
        rotation: -20,
        x: -15,
        y: -4,
        duration: 0.8,
        ease: "power2.out",
        transformOrigin: "center center",
        paused: true,
      }),
    );
    tweens.push(
      gsap.to(legoMiddle, {
        rotation: -10,
        x: -10,
        y: 10,
        duration: 0.8,
        ease: "power2.out",
        transformOrigin: "center center",
        paused: true,
      }),
    );
    tweens.push(
      gsap.to(legoBottom, {
        rotation: 10,
        x: 6,
        duration: 0.8,
        ease: "power2.out",
        transformOrigin: "center center",
        paused: true,
      }),
    );
    tweensRef.current = tweens;

    return () => {
      tweens.forEach((tween) => tween.kill());
    };
  }, []);

  useEffect(() => {
    tweensRef.current.forEach((tween) => {
      if (isPlaying) {
        tween.restart();
      } else {
        tween.pause().progress(0);
      }
    });
  }, [isPlaying]);

  return (
    <div ref={containerRef} className={className}>
      <svg
        viewBox="0 0 250 267"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <g>
          <g id="lego-top">
            <path
              d="M219.067 21.8002C220.924 19.7885 218.224 14.2566 213.038 9.44443C207.852 4.63228 202.143 2.36215 200.287 4.37394C198.43 6.38572 201.129 11.9176 206.315 16.7298C211.501 21.5419 217.21 23.812 219.067 21.8002Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M200.277 4.37109L194.946 10.1428C193.087 12.1518 195.786 17.6852 200.973 22.4949C206.16 27.3047 211.865 29.5776 213.725 27.5686L219.056 21.7969"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M214.752 26.5811C217.214 30.4885 218.071 33.7319 216.705 35.2131C214.277 37.8436 205.711 33.8596 197.578 26.3087C189.444 18.7578 184.818 10.5089 187.237 7.87844C188.587 6.41423 191.856 7.00162 195.888 9.12131"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M171.744 20.3407L187.246 7.87793"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M216.705 35.2129L184.58 95.7391L174.138 107.368C174.138 107.368 164.052 112.697 146.716 100.353L152.447 94.1472L141.309 83.8127L135.578 90.0185C135.578 90.0185 120.534 75.1977 122.046 60.181L131.265 49.8805L141.716 42.0317"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M131.274 49.8799C131.274 49.8799 132.08 61.1338 140.001 73.0944"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M153.618 85.7275C153.618 85.7275 162.864 97.1858 184.588 95.7386"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M149.951 16.0586C149.297 16.1778 149.297 16.1437 148.643 16.2544"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M162.227 38.4473C162.6 40.5159 162.617 40.4138 163.959 42.2185C164.638 43.1294 165.674 43.6827 166.718 43.7082C167.762 43.7338 168.687 43.2571 169.18 41.9716C169.451 41.2821 169.418 40.0647 169.273 38.6601C169.163 37.5875 169.12 36.4042 168.917 35.3061C168.679 34.0206 168.356 32.8459 168.161 32.0286C168.076 31.6541 168.467 31.3221 168.806 31.5008C169.791 32.0371 171.362 32.5394 172.542 30.9986C173.416 29.8664 173.552 28.7597 173.144 27.6275C172.796 26.6485 172.015 25.6951 171.217 24.6225C170.632 23.8393 169.901 22.9114 169.069 21.9494C168.348 21.1067 167.55 20.2384 166.777 19.3956C166.005 18.5528 165.19 17.6249 164.468 16.8588C163.432 15.7606 162.592 14.8497 162.125 14.3645C161.887 14.1176 161.522 14.0495 161.183 14.1091C159.671 14.3815 159.68 14.4241 158.169 14.6965C156.658 14.9689 156.641 14.8923 155.13 15.1647C153.618 15.4371 153.61 15.3946 152.099 15.6585"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M149.866 41.9377C149.586 44.2277 149.509 44.9428 147.073 45.1045C146.105 45.1726 145.299 44.4405 144.535 43.2147C144.025 42.3974 143.507 41.3929 143.108 40.1841C142.777 39.1966 142.522 38.0899 142.276 36.9237C142.047 35.8596 141.877 34.7444 141.733 33.6037C141.589 32.463 141.402 31.3818 141.334 30.2581C141.266 29.1344 141.241 27.9852 141.258 26.887C141.275 25.7123 141.444 24.5886 141.572 23.533C141.716 22.3071 141.911 21.2005 142.208 20.2385C142.616 18.9446 143.108 17.8975 143.821 17.3186C144.815 16.9611 144.866 17.1484 145.901 16.9355"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M157.32 45.1388C156.726 47.3606 156.547 47.7267 154.136 48.1098C152.965 48.2971 152.107 47.5735 151.377 46.2284C150.885 45.3261 150.401 44.1854 150.07 42.8318C149.807 41.7337 149.688 40.4993 149.501 39.2139"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M163.789 45.181C163.695 45.811 163.39 46.9772 161.853 47.6583C160.843 48.1094 159.714 47.7689 158.763 46.7985C158.109 46.1345 157.617 45.1129 157.116 43.8786C156.734 42.9421 156.301 41.9036 156.063 40.6777"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="lego-middle">
            <path
              d="M63.5252 125.611C64.5125 123.176 60.9681 119.431 55.6085 117.246C50.249 115.06 45.1038 115.262 44.1164 117.696C43.1291 120.131 46.6735 123.876 52.0331 126.062C57.3927 128.247 62.5379 128.045 63.5252 125.611Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M44.1197 117.701L41.2842 124.69C40.2994 127.125 43.8395 130.871 49.1965 133.058C54.5534 135.246 59.6981 135.042 60.6914 132.607L63.5269 125.618"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M92.4473 140.131C93.4346 137.697 89.8902 133.952 84.5306 131.766C79.171 129.581 74.0258 129.782 73.0385 132.217C72.0511 134.651 75.5955 138.397 80.9551 140.582C86.3147 142.768 91.4599 142.566 92.4473 140.131Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M73.0437 132.225L70.2082 139.214C69.2234 141.648 72.7635 145.394 78.1205 147.582C83.4774 149.77 88.6221 149.565 89.6154 147.131L92.4509 140.142"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M52.2697 183.821L74.2492 194.36L102.851 166.208L117.461 131.561L88.9617 159.449L23.9569 126.854"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.9569 126.854L10.6367 161.986L18.4132 165.936"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.9569 126.853L56.9984 105.299"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M74.2492 194.361L88.8428 159.756"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M80.1369 111.229C81.1242 108.795 77.5798 105.049 72.2202 102.864C66.8607 100.678 61.7155 100.88 60.7281 103.315C59.7408 105.749 63.2852 109.494 68.6448 111.68C74.0043 113.865 79.1496 113.664 80.1369 111.229Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M60.7338 103.323L57.8982 110.312C56.9135 112.747 60.4536 116.493 65.8105 118.68C71.1675 120.868 76.3122 120.664 77.3054 118.229L80.141 111.24"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M109.067 125.753C110.054 123.318 106.51 119.573 101.15 117.387C95.7906 115.202 90.6454 115.403 89.658 117.838C88.6707 120.273 92.2151 124.018 97.5747 126.203C102.934 128.389 108.079 128.187 109.067 125.753Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M89.6578 117.847L86.8223 124.836C85.8375 127.27 89.3776 131.016 94.7346 133.204C100.091 135.392 105.236 135.187 106.229 132.753L109.065 125.764"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M117.461 131.561L110.958 128.471"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M81.6776 113.727L87.1958 116.442"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.7139 186.75C20.9855 187.354 21.0025 187.346 21.2742 187.95"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M39.3231 169.29C41.2332 168.422 41.1568 168.464 42.5661 166.719C43.2792 165.842 43.6697 164.651 43.4405 163.629C43.2113 162.608 42.3963 161.782 41.038 161.612C40.2994 161.518 39.0769 161.79 37.7525 162.276C36.7422 162.642 35.6725 163.152 34.6708 163.621C33.4907 164.174 32.4041 164.719 31.657 165.102C31.3174 165.281 30.9608 165.008 31.0542 164.642C31.3259 163.552 31.3768 161.875 29.6025 161.101C28.2951 160.53 27.2169 160.735 26.2151 161.407C25.3577 161.986 24.5597 162.905 23.7192 163.944C23.108 164.702 22.4033 165.664 21.6817 166.702C21.045 167.613 20.3488 168.558 19.7206 169.52C19.0924 170.482 18.4811 171.555 17.9208 172.44C17.1143 173.717 16.4776 174.781 16.121 175.36C15.9427 175.649 15.8663 176.015 16.0107 176.33C16.6389 177.735 16.6049 177.743 17.2332 179.148C17.8614 180.553 17.9123 180.527 18.5406 181.932C19.1688 183.336 19.1603 183.345 19.7885 184.741"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M45.7497 180.502C48.0334 180.212 48.721 180.085 49.4766 182.409C49.7738 183.328 49.3323 184.341 48.339 185.388C47.6768 186.086 46.7769 186.776 45.7072 187.465C44.8328 188.027 43.865 188.632 42.8038 189.159C41.836 189.645 40.8003 190.104 39.7306 190.53C38.6948 190.947 37.6252 191.313 36.5555 191.654C35.4858 191.994 34.3736 192.284 33.304 192.539C32.1663 192.811 31.0457 192.982 29.993 193.118C28.779 193.271 27.6414 193.424 26.6396 193.365C25.2898 193.288 24.1437 192.956 23.4136 192.403C22.8278 191.526 22.9551 191.441 22.4967 190.487"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M47.0062 172.508C49.2983 172.542 49.7398 172.533 50.6991 174.781C51.1661 175.87 50.6567 176.917 49.536 177.956C48.7805 178.654 47.7363 179.293 46.5053 179.948C45.512 180.476 44.4083 181.021 43.2113 181.506"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M45.4526 166.107C46.0808 166.038 47.2693 166.107 48.3051 167.435C48.9927 168.303 48.8654 169.41 48.1692 170.576C47.6938 171.376 46.9977 172.278 45.9365 173.07C45.13 173.666 44.1197 174.185 42.9991 174.713"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="lego-bottom">
            <path
              d="M185.278 238.98C194.186 241.312 203.304 235.962 205.642 227.029C207.981 218.096 202.655 208.964 193.747 206.632C184.838 204.3 175.721 209.651 173.382 218.583C171.044 227.516 176.37 236.648 185.278 238.98Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M186.819 233.092C192.485 234.575 198.283 231.173 199.77 225.492C201.257 219.811 197.87 214.004 192.205 212.52C186.54 211.037 180.742 214.44 179.255 220.121C177.767 225.802 181.154 231.609 186.819 233.092Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M161.684 184.874C167.039 182.668 170.575 178.91 169.581 176.48C168.588 174.05 163.441 173.867 158.086 176.073C152.731 178.278 149.195 182.037 150.188 184.467C151.182 186.897 156.329 187.079 161.684 184.874Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M150.182 184.481L153.033 191.458C154.028 193.892 159.177 194.07 164.529 191.863C169.881 189.656 173.418 185.901 172.422 183.466L169.572 176.49"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M192.487 174.921C197.842 172.715 201.378 168.957 200.385 166.527C199.391 164.097 194.245 163.914 188.89 166.12C183.534 168.325 179.999 172.083 180.992 174.514C181.986 176.944 187.132 177.126 192.487 174.921Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M180.984 174.533L183.835 181.51C184.83 183.944 189.978 184.121 195.33 181.915C200.682 179.708 204.219 175.952 203.224 173.518L200.373 166.542"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M228.878 196.03L225.998 177.835L212.262 142.85L211.359 182.767L142.151 205.171"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M142.151 205.171L167.846 261.854L235.894 240.264L234.458 232.171"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M142.151 205.171L150.726 166.585"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M217.563 199.897L211.489 183.074"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M163.521 162.945C168.876 160.74 172.412 156.982 171.419 154.551C170.425 152.121 165.279 151.939 159.924 154.144C154.568 156.35 151.033 160.108 152.026 162.538C153.019 164.969 158.166 165.151 163.521 162.945Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M152.019 162.549L154.87 169.525C155.865 171.959 161.014 172.137 166.366 169.93C171.717 167.723 175.254 163.968 174.259 161.534L171.408 154.557"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M194.322 152.99C199.677 150.785 203.213 147.027 202.219 144.596C201.226 142.166 196.079 141.984 190.724 144.189C185.369 146.395 181.833 150.153 182.826 152.583C183.82 155.013 188.967 155.196 194.322 152.99Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M182.82 152.6L185.671 159.577C186.666 162.011 191.815 162.189 197.167 159.982C202.518 157.775 206.055 154.02 205.06 151.586L202.209 144.609"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M212.262 142.85L205.456 145.213"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M174.242 155.264L180.085 153.327"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M243.332 215.304C243.469 215.955 243.498 215.945 243.634 216.597"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M218.097 212.34C216.045 212.771 216.119 212.623 213.953 212.047C212.86 211.761 211.942 211.01 211.527 210.048C211.127 209.098 211.256 208.067 212.258 207.124C212.803 206.616 213.871 206.024 215.22 205.629C216.248 205.326 217.423 205.159 218.515 204.943C219.793 204.688 220.984 204.463 221.816 204.338C222.191 204.278 222.312 203.816 222.016 203.572C221.151 202.853 220.121 201.527 221.094 199.854C221.811 198.625 222.822 198.213 224.02 198.165C225.048 198.127 226.238 198.306 227.534 198.654C228.478 198.901 229.587 199.324 230.779 199.733C231.825 200.094 232.941 200.457 234.012 200.86C235.082 201.264 236.23 201.705 237.208 202.093C238.608 202.645 239.756 203.121 240.373 203.379C240.69 203.507 240.873 203.783 240.951 204.12C241.267 205.629 241.399 205.593 241.715 207.101C242.031 208.609 242.023 208.607 242.339 210.116C242.655 211.624 242.636 211.628 242.954 213.128"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M219.44 225.011C217.427 226.129 216.811 226.505 217.564 228.823C217.866 229.747 218.823 230.349 220.241 230.597C221.189 230.766 222.333 230.819 223.601 230.738C224.644 230.676 225.776 230.541 226.944 230.337C228.011 230.15 229.1 229.81 230.212 229.52C231.323 229.231 232.395 228.992 233.464 228.629C234.533 228.267 235.629 227.903 236.634 227.48C237.711 227.022 238.708 226.465 239.641 225.952C240.719 225.355 241.677 224.743 242.459 224.103C243.501 223.241 244.126 222.331 244.391 221.45C244.352 220.392 244.241 220.416 244.057 219.374"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M213.788 219.413C211.951 220.798 211.487 221.028 212.04 223.408C212.307 224.569 213.393 225.179 214.909 225.356C215.931 225.474 217.173 225.324 218.551 225.122C219.665 224.956 220.875 224.727 222.132 224.414"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M211.236 213.271C210.689 213.585 209.842 214.375 209.781 216.049C209.745 217.157 210.391 218.074 211.639 218.603C212.492 218.967 213.631 219.107 214.953 219.119C215.96 219.127 217.08 219.042 218.299 218.807"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_lego">
            <rect width="250" height="267" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

const CardThreeIllustration = ({
  className,
  isPlaying = false,
}: ProductIntroIllustrationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tweensRef = useRef<gsap.core.Tween[]>([]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const star1 = el.querySelector("#star-1");
    const star2 = el.querySelector("#star-2");
    const rocket = el.querySelector("#rocket");
    const fire = el.querySelector("#fire");
    if (!star1 || !star2 || !rocket || !fire) return;

    const tweens: gsap.core.Tween[] = [];
    tweens.push(
      gsap.to(star1, {
        scale: 0,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        transformOrigin: "center center",
        paused: true,
      }),
    );
    tweens.push(
      gsap.to(star2, {
        scale: 0,
        duration: 1,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        repeatDelay: 1.5,
        transformOrigin: "center center",
        paused: true,
      }),
    );
    tweens.push(
      gsap.to(rocket, {
        x: 10,
        y: -10,
        duration: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        paused: true,
      }),
    );
    tweens.push(
      gsap.to(fire, {
        x: 10,
        y: -10,
        duration: 2,
        ease: "sine.inOut",
        transformOrigin: "center center",
        yoyo: true,
        repeat: -1,
        paused: true,
      }),
    );
    tweens.push(
      gsap.to(fire, {
        rotation: 1,
        duration: 0.2,
        scale: 0.95,
        ease: "none",
        yoyo: true,
        repeat: -1,
        transformOrigin: "top center",
        paused: true,
      }),
    );
    tweensRef.current = tweens;

    return () => {
      tweens.forEach((tween) => tween.kill());
    };
  }, []);

  useEffect(() => {
    tweensRef.current.forEach((tween) => {
      if (isPlaying) {
        tween.play();
      } else {
        tween.pause();
      }
    });
  }, [isPlaying]);

  return (
    <div ref={containerRef} className={className}>
      <svg
        viewBox="0 -15 250 282"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <g id="star-1">
          <path
            d="M235.7 113.645C237.624 113.645 237.481 113.269 239.397 113.269"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M242.568 113.921C244.492 113.921 244.492 113.818 246.409 113.818"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M240.952 117.13C240.834 119.667 241.07 119.963 240.952 122.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M241.268 104.82C241.268 108.148 240.915 107.44 240.915 110.76"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
        </g>
        <g id="star-2">
          <path
            d="M25.5914 62.5256C27.5154 62.5256 27.5154 62.0908 29.4315 62.0908"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M34.3932 62.0752C36.3172 62.0752 36.3172 62.5258 38.2333 62.5258"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M32.0958 63.9795C32.0958 66.535 32.5699 66.8637 32.0958 69.3529"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M32.3329 54.0625C32.3329 57.0045 32.5699 57.311 32.0958 59.791"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
        </g>
        <g id="rocket">
          <path
            d="M86.6071 168.225L83.1771 174.129L80.6775 192.997L77.4366 197.566C77.4366 197.566 82.3807 198.91 87.1197 205.012L91.1175 199.487L105.421 188.856L109.687 183.22C109.687 183.22 100.493 170.517 86.5914 168.217L86.6071 168.225Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M83.177 174.129C83.177 174.129 92.8837 173.971 100.698 183.986"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M80.6853 192.997C80.6853 192.997 86.2365 193.171 91.1332 199.495"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M202.788 58.6523L200.777 56.0596L122.603 180.105L180.496 215.249L176.199 164.265L205.421 66.3196L202.788 58.6523Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M176.199 164.264L172.934 145.578L200.162 67.75"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M83.1928 155.901L32.349 125.239L87.5927 104.759L167.769 37.8154"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M200.777 56.0591L167.769 37.8154L83.1927 155.901L122.603 180.105"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M170.711 39.1833L201.613 10.8061C202.567 9.92865 203.852 9.51762 205.137 9.69152C208.323 10.1263 214.316 11.7388 217.722 17.7778C218.329 18.8529 218.479 20.1334 218.109 21.3112L204.798 63.545"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M207.054 9.82569L208.284 7.89699C209.317 6.15799 212.51 6.1659 215.404 7.89699C218.298 9.62808 219.812 12.45 218.779 14.1811L217.391 16.7105"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M113.196 186.539L176.767 222.07L180.496 215.248"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32.349 125.24L29.9913 132.109L80.2595 166.81"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M158.828 96.38C165.717 96.38 171.302 90.7814 171.302 83.8751C171.302 76.9688 165.717 71.3701 158.828 71.3701C151.938 71.3701 146.353 76.9688 146.353 83.8751C146.353 90.7814 151.938 96.38 158.828 96.38Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M158.828 91.8277C163.209 91.8277 166.76 88.2675 166.76 83.8758C166.76 79.484 163.209 75.9238 158.828 75.9238C154.447 75.9238 150.895 79.484 150.895 83.8758C150.895 88.2675 154.447 91.8277 158.828 91.8277Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <g id="fire">
          <path
            d="M72.8158 198.665C57.8103 198.958 53.0003 214.387 53.0003 214.387C53.0003 214.387 56.1859 213.636 56.1938 216.284C56.2017 218.932 46.0456 216.355 44.8628 229.327C44.8628 229.327 50.5796 226.521 50.1222 229.524C49.6649 232.528 44.2714 233.666 42.8363 241.99C41.4012 250.313 44.7366 260.391 44.7366 260.391C44.7366 260.391 45.2965 247.657 50.4455 248.203C56.0361 248.796 52.9215 257.593 52.9215 257.593C52.9215 257.593 64.8754 252.519 65.0883 247.08C65.4274 238.535 66.9887 235.184 70.3162 235.8C75.7412 236.804 71.0495 244.559 71.7198 244.661C72.39 244.764 80.5591 238.219 79.3527 230.963C78.7218 227.185 78.6509 225.208 80.3383 224.813C83.5318 224.062 84.7777 229.556 84.7777 229.556C84.7777 229.556 93.9324 216.592 87.1906 208.403"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
};

const PRODUCT_INTRO_ITEMS: ProductIntroItem[] = [
  {
    id: 1,
    title: STEEP_COPY.productIntro.cardOne.title,
    description: STEEP_COPY.productIntro.cardOne.description,
    image: "/images/home/usp-1.svg",
    ill: CardOneIllustration,
    idleColors: "bg-[#F7F7F8] text-[#4C4C4C]",
    activeColors:
      "md:hover:bg-[#FBE1D1] hover:text-[#5D2A1A] bg-[#FBE1D1] text-[#5D2A1A]",
  },
  {
    id: 2,
    title: STEEP_COPY.productIntro.cardTwo.title,
    description: STEEP_COPY.productIntro.cardTwo.description,
    image: "/images/home/usp-2.svg",
    ill: CardTwoIllustration,
    idleColors: "bg-[#F7F7F8] text-[#4C4C4C]",
    activeColors:
      "md:hover:bg-[#D3E3FC] hover:text-[#194168] bg-[#D3E3FC] text-[#194168]",
  },
  {
    id: 3,
    title: STEEP_COPY.productIntro.cardThree.title,
    description: STEEP_COPY.productIntro.cardThree.description,
    image: "/images/home/usp-3.svg",
    ill: CardThreeIllustration,
    idleColors: "bg-[#F7F7F8] text-[#4C4C4C]",
    activeColors:
      "md:hover:bg-[#D8EFDF] hover:text-[#1F4720] bg-[#D8EFDF] text-[#1F4720] ",
  },
];

const CarouselCard = forwardRef<
  HTMLDivElement,
  { item: ProductIntroItem; isActive: boolean }
>(({ item, isActive }, ref) => {
  const colors = isActive ? item.activeColors : item.idleColors;
  const opacityClass =
    "transition-all duration-500 ease-out " +
    (isActive ? "opacity-100" : "opacity-40");
  return (
    <div
      ref={ref}
      className="shrink-0 w-[88%] max-w-[440px] snap-center snap-always @container relative"
    >
      <div
        className={`${colors} rounded-3xl h-[110vw] @sm:h-[540px] p-[9%] flex flex-col justify-between transition-all duration-500 ease-out`}
      >
        <span
          className={`w-40 @sm:w-55 text-lg @sm:text-3xl font-[450] leading-tight ${opacityClass}`}
        >
          {item.title}
        </span>
        <div
          className={clsx(
            "flex items-center justify-center mb-4 transition-all duration-500 ease-out",
            isActive ? "opacity-100 scale-100" : "opacity-40 scale-90",
          )}
        >
          <img src={item.image} alt={item.title} className="w-[75%] h-auto " />
        </div>
        <p className={`text-xs @sm:text-base leading-tight ${opacityClass}`}>
          {item.description}
        </p>
      </div>
    </div>
  );
});
CarouselCard.displayName = "CarouselCard";

function DesktopCard({
  item,
  index,
  activeIndex,
  totalItems,
  isActive,
  onMouseEnter,
}: {
  item: ProductIntroItem;
  index: number;
  activeIndex: number;
  totalItems: number;
  isActive: boolean;
  onMouseEnter: () => void;
}) {
  const translateClass = (() => {
    if (isActive) return "";
    const mid = Math.floor(totalItems / 2);
    if (activeIndex === mid) return "";
    const isLeftActive = activeIndex < mid;
    const distance = Math.abs(index - activeIndex);
    if (distance === 1) {
      return isLeftActive ? "translate-x-[2%]" : "-translate-x-[2%]";
    }
    if (distance > 1) {
      return isLeftActive ? "-translate-x-[6%]" : "translate-x-[6%]";
    }
    return "";
  })();

  const colors = (isActive ? item.activeColors : item.idleColors)
    .replace(/\b(?:md:)?hover:\S+/g, "")
    .trim();

  const Illustration = item.ill;

  return (
    <div className="@container flex-1" onMouseEnter={onMouseEnter}>
      <div
        className={clsx(
          "relative aspect-3/4 @3xs:aspect-4/5 transition-transform duration-300 ease-out origin-bottom rounded-2xl @2xs:rounded-3xl",
          isActive ? "scale-110" : "scale-90",
          translateClass,
        )}
      >
        <div
          className={clsx(
            "absolute inset-0 rounded-2xl @2xs:rounded-3xl",
            colors,
          )}
        />
        <div
          className={clsx(
            "absolute inset-0 p-4.5 @3xs:p-5 @2xs:p-6 @xs:p-8 flex flex-col rounded-2xl @2xs:rounded-3xl",
            colors,
          )}
        >
          <span className="text-[20px] @2xs:text-[24px] @xs:text-[26px] tracking-[-0.015rem] font-[450] leading-[1.18em] w-4/5 @3xs:w-2/3 @xs:w-2/3 @sm:w-2/3">
            {item.title}
          </span>
          <div
            className={clsx(
              "absolute right-0 left-0 flex items-center justify-center transition-all duration-500 ease-out",
              isActive ? "top-[24%]" : "top-[35%]",
            )}
          >
            {Illustration ? (
              <Illustration isPlaying={isActive} className="w-[56%]" />
            ) : (
              <img src={item.image} alt={item.title} className="w-[56%]" />
            )}
          </div>
          <p
            className={`mt-auto text-3xs @3xs:text-2xs @2xs:text-xs @sm:text-sm leading-tight transition-all duration-500 ease-out delay-100 ${
              isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

const ProductIntroCards = ({ items }: { items: ProductIntroItem[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const rowShift =
    activeIndex < 1
      ? "translate-x-[3%]"
      : activeIndex > 1
        ? "-translate-x-[3%]"
        : "";

  return (
    <div>
      <div className="md:hidden">
        <SnapCarousel
          showArrowButtons
          items={items}
          renderItem={({
            item,
            isActive,
            setRef,
          }: {
            item: ProductIntroItem;
            isActive: boolean;
            setRef: (el: HTMLDivElement | null) => void;
          }) => (
            <CarouselCard
              key={item.id}
              ref={setRef}
              item={item}
              isActive={isActive}
            />
          )}
        />
      </div>
      <div
        className={`hidden md:flex flex-row gap-6 transition-transform duration-300 ease-out ${rowShift}`}
      >
        {items.map((item, index) => (
          <DesktopCard
            key={item.id}
            item={item}
            index={index}
            activeIndex={activeIndex}
            totalItems={items.length}
            isActive={activeIndex === index}
            onMouseEnter={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export const ProductIntroSection = () => {
  const { isSmall } = useWindowSize();
  const { triggerRef, isInView } = useInViewTrigger({
    start: isSmall ? "top bottom-=200" : "top bottom-=300",
  });

  return (
    <>
      <Section ref={triggerRef} className="mt-16 lg:mt-0">
        <SplitHeadingBlock
          isInView={isInView}
          centerAligned
          heading={STEEP_COPY.productIntro.title}
        />
      </Section>
      <Section noPaddingOnSmallScreens className="mb-20">
        <div className="mt-4 md:mt-24">
          <ProductIntroCards items={PRODUCT_INTRO_ITEMS} />
        </div>
      </Section>
    </>
  );
};
