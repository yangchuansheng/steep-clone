"use client";
/* eslint-disable @next/next/no-img-element, react-hooks/set-state-in-effect */

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import gsap from "gsap";
import {
  ApiDoc16Icon,
  ArrowRight12Icon,
  ArrowRight16Icon,
  ChartBar16Icon,
  type CookieConsentState,
  CubeHex16Icon,
  type IconProps,
  QuestionCircle16Icon,
  Section,
  Sparkles16Icon,
  SteepButton,
  useCookieConsent,
  useWindowSize,
} from "./shared";

export interface CookieBannerProps {
  cookieConsent: CookieConsentState;
  darkMode?: boolean;
}

export function CookieBanner({ cookieConsent, darkMode }: CookieBannerProps) {
  const { acceptAll, rejectAll, hideBanner } = cookieConsent;
  if (hideBanner) return null;

  return (
    <div className="fixed bottom-4 md:bottom-6 inset-x-4 md:inset-x-6 z-50 pointer-events-none">
      <div
        className={clsx(
          "pointer-events-auto backdrop-blur-lg p-5 md:p-6 rounded-2xl shadow-xl md:inline-block md:max-w-sm",
          darkMode
            ? "text-white bg-white/5 border border-white/7 shadow-black/40"
            : "text-primary-text bg-white/30 border border-trans-5 shadow-black/12 inset-shadow-white/30 inset-shadow-xs",
        )}
      >
        <div className="mb-4 text-2xs md:text-2xs">
          We use cookies on this website for performance, personalization, and
          marketing purposes. Read more in our{" "}
          <Link
            href="/cookies"
            className={clsx(
              "hover:underline",
              darkMode
                ? "text-white/50 hover:text-white"
                : "text-primary-gray hover:text-primary-text",
            )}
          >
            Cookie Policy
          </Link>
          .
        </div>
        <div className="flex gap-2">
          <SteepButton
            label="Reject"
            variant={darkMode ? "secondary-reverse" : "secondary"}
            size="small"
            onClick={rejectAll}
          />
          <SteepButton
            label="Accept"
            variant={darkMode ? "primary-reverse" : "primary"}
            size="small"
            onClick={acceptAll}
          />
        </div>
      </div>
    </div>
  );
}

function LinkedInIcon(props: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
        fill="currentColor"
      />
    </svg>
  );
}

function XTwitterIcon(props: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        fill="currentColor"
      />
    </svg>
  );
}

function YouTubeIcon(props: IconProps) {
  return (
    <svg
      width="16"
      height="13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.6 2c.4 1.4.4 4.4.4 4.4s0 3-.4 4.4c-.2.8-.8 1.4-1.5 1.6-1.4.4-6.1.4-6.1.4s-4.7 0-6-.4c-.8-.2-1.4-.8-1.6-1.6C0 9.4 0 6.4 0 6.4S0 3.4.4 2C.6 1.2 1.2.6 1.9.4 3.3 0 8 0 8 0s4.7 0 6 .4c.8.2 1.4.8 1.6 1.6zM6.4 9.2l4.8-2.8-4.8-2.8v5.6z"
        fill="currentColor"
      />
    </svg>
  );
}

function SteepWordmarkSvg(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="196"
      height="60"
      viewBox="0 0 196 60"
      fill="none"
      {...props}
    >
      <path
        d="M162.541 40.5463C162.556 40.4673 162.489 40.3872 162.409 40.3792H157.124C156.308 43.2579 153.87 44.73 150.241 44.73C145.881 44.73 142.646 41.4772 142.166 36.6273H162.275C162.345 35.9958 162.398 35.1466 162.398 34.4452C162.398 27.3566 157.777 21.6457 149.717 21.6457C141.657 21.6457 136.828 27.5872 136.828 35.3969C136.828 43.2066 142.118 49.4668 150.239 49.4668C156.628 49.4668 161.459 45.9652 162.541 40.5463H162.541ZM156.906 32.5252H142.341C143.151 28.3281 145.701 26.1129 149.719 26.1129C153.737 26.1129 156.523 28.5672 156.906 32.5252ZM134.189 40.3814H128.904C128.088 43.2045 125.65 44.73 122.022 44.73C117.661 44.73 114.426 41.4772 113.946 36.6273H134.055C134.125 35.9937 134.178 35.145 134.178 34.4452C134.178 27.3684 129.547 21.6457 121.499 21.6457C113.451 21.6457 108.611 27.6096 108.611 35.3969C108.611 43.1842 113.9 49.4668 122.022 49.4668C128.41 49.4668 133.241 45.9652 134.323 40.5463C134.34 40.4561 134.281 40.3835 134.189 40.3814ZM128.686 32.5252H114.121C114.932 28.3281 117.481 26.1129 121.499 26.1129C125.517 26.1129 128.304 28.5672 128.686 32.5252ZM87.949 38.5654C87.949 30.5833 81.3387 28.9259 75.5035 27.4645C70.8692 26.3024 66.8664 25.2978 66.8664 21.4488C66.8664 18.3961 69.5321 16.4996 73.8226 16.4996C78.1131 16.4996 80.9539 18.6496 81.4844 22.3194H87.1798C86.5842 15.5847 81.2923 11.2883 73.8247 11.2883C66.3572 11.2883 61.0231 15.4662 61.0231 21.4488C61.0231 29.1261 67.5523 30.8886 73.3134 32.4446C77.9732 33.7017 81.9974 34.79 81.9974 38.6178C81.9974 42.1989 79.1353 44.2544 74.1413 44.2544C69.1472 44.2544 65.9189 41.3907 65.5314 36.4357H59.8515C60.2539 44.6986 66.0524 49.4641 74.1434 49.4641C82.2344 49.4641 87.949 45.1854 87.949 38.5654ZM179.207 21.6399C175.78 21.642 172.613 23.1574 170.877 25.6133V22.0632H165.403V59.8157H170.877V45.6951C172.55 48.0245 175.615 49.4609 178.943 49.4609C187.048 49.4609 192 43.6422 192 35.5288C192 27.4153 186.984 21.6399 179.207 21.6399ZM178.467 26.4818C183.26 26.4818 186.449 30.1376 186.449 35.5288C186.449 40.9199 183.26 44.6228 178.467 44.6228C173.674 44.6228 170.454 41.063 170.454 35.5523C170.454 30.0415 173.599 26.4818 178.467 26.4818ZM99.8779 22.1651V13.7181H94.404V22.1646H88.9632V26.9526H94.404V40.1502C94.404 45.6353 97.8511 49.0419 103.4 49.0419H107.749V44.2544H103.824C101.315 44.2544 99.8779 42.6996 99.8779 39.9912V26.9531H107.749V22.1651H99.8779ZM21.3511 9C9.55463 9 0 18.5546 0 30.3511C0 35.849 2.1554 40.9578 5.81551 45.0001C6.57455 45.8414 7.8001 45.8729 8.6013 45.0717L19.2955 34.3774C19.9206 33.7524 20.985 34.1917 20.985 35.0756L20.9769 49.7807C20.9769 50.8594 21.713 51.5955 22.7918 51.5955C31.0654 51.5955 42.7017 43.8557 42.7017 30.3511C42.7023 18.5546 33.1476 9 21.3511 9ZM4.69725 30.3511C4.69725 21.1701 12.1701 13.6972 21.3511 13.6972C30.5321 13.6972 38.005 21.1701 38.005 30.3511C38.005 33.5538 37.0608 36.7378 35.3206 39.4259C35.2795 39.4878 35.192 39.4958 35.1381 39.4451L22.685 26.9878C21.9372 26.24 20.7629 26.24 20.0161 26.9878L7.56204 39.4398C7.50972 39.4921 7.42058 39.4819 7.37948 39.4206C5.63937 36.7319 4.69618 33.5538 4.69618 30.3511H4.69725Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SteepMarkSvg(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="currentColor"
      {...props}
    >
      <path d="M32.0004 0C14.3202 0 0 14.32 0 32C0 40.24 3.23044 47.8968 8.71611 53.9552C9.85372 55.216 11.6905 55.2632 12.8914 54.0624L28.9196 38.0344C29.8564 37.0976 31.4516 37.756 31.4516 39.0808L31.4396 61.12C31.4396 62.7368 32.5428 63.84 34.1596 63.84C46.5598 63.84 64 52.24 64 32C64.0008 14.32 49.6806 0 32.0004 0ZM7.04009 32C7.04009 18.24 18.2402 7.04 32.0004 7.04C45.7606 7.04 56.9607 18.24 56.9607 32C56.9607 36.8 55.5455 41.572 52.9375 45.6008C52.8759 45.6936 52.7447 45.7056 52.6639 45.6296L33.9996 26.9592C32.8788 25.8384 31.1188 25.8384 29.9996 26.9592L11.3337 45.6216C11.2553 45.7 11.1217 45.6848 11.0601 45.5928C8.45211 41.5632 7.03849 36.8 7.03849 32H7.04009Z" />
    </svg>
  );
}

interface FooterColumnHeadingProps {
  mode?: "light" | "dark";
  children: React.ReactNode;
}

function FooterColumnHeading({ mode, children }: FooterColumnHeadingProps) {
  return (
    <div
      className={`mb-2.5 sm:mb-3 md:mb-4 font-[480] text-xs ${
        mode === "dark" ? "text-white/90" : "text-primary-text"
      }`}
    >
      {children}
    </div>
  );
}

interface FooterLinkProps {
  mode?: "light" | "dark";
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  className?: string;
  opensInNewWindow?: boolean;
  children: React.ReactNode;
}

function FooterLink({
  mode,
  href,
  onClick,
  className,
  opensInNewWindow,
  children,
}: FooterLinkProps) {
  return (
    <div className="pb-2.5 sm:pb-3 md:pb-4">
      <Link
        href={href}
        onClick={onClick}
        className={
          `  hover:underline underline-offset-4 transition-all duration-200 ${
            mode === "dark"
              ? "text-[#9E9E9E] hover:text-white"
              : "text-primary-gray hover:text-primary-text"
          }` + (className ?? "")
        }
        target={opensInNewWindow ? "_blank" : ""}
        rel={opensInNewWindow ? "noreferrer" : ""}
      >
        {children}
        {opensInNewWindow && (
          <ArrowRight12Icon className="-translate-y-px ml-1 inline-block opacity-50 size-4 -rotate-45" />
        )}
      </Link>
    </div>
  );
}

export interface SteepFooterProps {
  mode?: "light" | "dark";
  className?: string;
  cookieConsent: CookieConsentState;
}

export function SteepFooter({
  mode = "light",
  className,
  cookieConsent,
}: SteepFooterProps) {
  return (
    <div
      className={clsx(
        mode === "dark" ? "bg-[#1A1A1A]" : "bg-[#F7F7F8]",
        className,
      )}
    >
      <Section className="py-10 xs:py-12 md:py-10 lg:py-20 xl:py-24">
        <div className=" md:max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">
          <div className="mb-4 md:mb-6 hidden md:block">
            <Link href="/" aria-label="Steep home">
              <SteepMarkSvg
                className={`cursor-pointer w-8 h-8 ${
                  mode === "dark" ? "text-white" : "text-primary-text"
                }`}
              />
            </Link>
          </div>
          <div>
            <FooterColumnHeading mode={mode}>Explore</FooterColumnHeading>
            <FooterLink mode={mode} href="/">
              Overview
            </FooterLink>
            <FooterLink mode={mode} href="/product">
              Explore &amp; analyze
            </FooterLink>
            <FooterLink mode={mode} href="/semantic-platform">
              Semantic platform
            </FooterLink>
            <FooterLink mode={mode} href="/pricing">
              Pricing
            </FooterLink>
            <FooterLink mode={mode} href="/download">
              Download
            </FooterLink>
            <FooterLink
              mode={mode}
              href="https://help.steep.app/get-started/connect-data-source"
              opensInNewWindow
            >
              Databases
            </FooterLink>
            <FooterLink
              mode={mode}
              href="https://help.steep.app/using-steep/slack-subscriptions"
              opensInNewWindow
            >
              Integrations
            </FooterLink>
            <FooterLink
              mode={mode}
              href="https://help.steep.app/introduction/try-with-demo-data"
              opensInNewWindow
            >
              Demo mode
            </FooterLink>
          </div>
          <div>
            <FooterColumnHeading mode={mode}>Resources</FooterColumnHeading>
            <FooterLink
              mode={mode}
              href="https://help.steep.app"
              opensInNewWindow
            >
              Help center
            </FooterLink>
            <FooterLink
              mode={mode}
              href="https://help.steep.app/api"
              opensInNewWindow
            >
              API reference
            </FooterLink>
            <FooterLink mode={mode} href="/blog">
              Blog
            </FooterLink>
            <FooterLink mode={mode} href="/changelog">
              Product updates
            </FooterLink>
            <FooterLink mode={mode} href="/security">
              Security
            </FooterLink>
            <FooterLink mode={mode} href="/dpa">
              DPA
            </FooterLink>
            <FooterLink mode={mode} href="/terms">
              Terms of service
            </FooterLink>
          </div>
          <div>
            <FooterColumnHeading mode={mode}>Company</FooterColumnHeading>
            <FooterLink mode={mode} href="/about">
              About
            </FooterLink>
            <FooterLink mode={mode} href="/customers">
              Customer stories
            </FooterLink>
            <FooterLink
              mode={mode}
              href="https://careers.steep.app/"
              opensInNewWindow
            >
              Careers
            </FooterLink>
          </div>
          <div>
            <FooterColumnHeading mode={mode}>Contact</FooterColumnHeading>
            <FooterLink mode={mode} href="mailto:hello@steep.app">
              hello@steep.app
            </FooterLink>
            <FooterLink mode={mode} href="/support">
              Support
            </FooterLink>
            <FooterLink mode={mode} href="/contact">
              Contact sales
            </FooterLink>
            <FooterLink mode={mode} href="/demo">
              Book a demo
            </FooterLink>
            <FooterLink
              mode={mode}
              href="https://linkedin.com/company/steep-app"
              opensInNewWindow
            >
              LinkedIn
            </FooterLink>
            <FooterLink
              mode={mode}
              href="https://www.youtube.com/@SteepAnalytics"
              opensInNewWindow
            >
              YouTube
            </FooterLink>
            <FooterLink
              mode={mode}
              href="https://x.com/steepapp"
              opensInNewWindow
            >
              X (Twitter)
            </FooterLink>
          </div>
          <div className="h-px border-t border-trans-10 col-span-2 md:col-span-5" />
          <div className="col-span-2 md:hidden">
            <SteepWordmarkSvg
              className={`w-full h-auto ${
                mode === "dark" ? "text-white" : "text-primary-text"
              }`}
            />
          </div>
          <div className="flex gap-4 items-center">
            <Link
              href="https://linkedin.com/company/steep-app"
              target="_new"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-primary-text/50 hover:text-primary-text"
            >
              <LinkedInIcon />
            </Link>
            <Link
              href="https://www.youtube.com/@SteepAnalytics"
              target="_new"
              rel="noreferrer"
              aria-label="YouTube"
              className="text-primary-text/50 hover:text-primary-text"
            >
              <YouTubeIcon />
            </Link>
            <Link
              href="https://x.com/steepapp"
              target="_new"
              rel="noreferrer"
              aria-label="X (Twitter)"
              className="text-primary-text/50 hover:text-primary-text"
            >
              <XTwitterIcon className="w-4 h-4" />
            </Link>
          </div>
          <div
            className={`text-[15px] ${
              mode === "dark" ? "text-[#9E9E9E]" : "text-primary-gray"
            }`}
          >
            &copy; Steep Analytics
          </div>
          <div
            className={`text-[15px] ${
              mode === "dark" ? "text-[#9E9E9E]" : "text-primary-gray"
            }`}
          >
            Stockholm, Sweden
          </div>
          <div className="text-[15px] text-primary-gray">
            <FooterLink mode={mode} href="" onClick={cookieConsent.reset}>
              Cookie Settings
            </FooterLink>
          </div>
        </div>
      </Section>
    </div>
  );
}

const FEATURED_BLOG_POST = {
  id: "metrics-onion",
  title: "The metrics onion",
  image: "/images/blog/metrics-onion/metrics-onion-hero.webp",
  topic: "Data culture",
};

const CUSTOMER_NAV_CARDS = [
  {
    id: "ai-insights-powered-by-metrics",
    title: "AI insights powered by metrics",
    image: "/images/customers/instabee/hero.jpg",
  },
  {
    id: "voi-ditching-dashboards-for-scalable-analytics",
    title: "Ditching dashboards for scalable analytics",
    image: "/images/customers/voi/hero.jpg",
  },
  {
    id: "cdon-company-wide-adoption-in-weeks",
    title: "Smooth, company-wide adoption within weeks",
    image: "/images/customers/cdon/hero.jpg",
  },
];

interface MobilePrimaryLinkProps {
  href: string;
  text: string;
  opensInNewWindow?: boolean;
}

function MobilePrimaryLink({
  href,
  text,
  opensInNewWindow,
}: MobilePrimaryLinkProps) {
  const pathname = usePathname();
  const labelEl = <span className="group-hover:opacity-60">{text}</span>;

  return (
    <Link
      href={href}
      className="block py-2 px-9 text-xl group"
      target={opensInNewWindow ? "_blank" : ""}
      rel={opensInNewWindow ? "noreferrer" : ""}
    >
      {href === pathname ? (
        <span className="before:content-['•'] before:inline-block before:w-6 before:-ml-6 before:relative before:-top-px">
          {labelEl}
        </span>
      ) : (
        labelEl
      )}
    </Link>
  );
}

interface MobileSecondaryLinkProps {
  href: string;
  text: string;
  opensInNewWindow?: boolean;
}

function MobileSecondaryLink({
  href,
  text,
  opensInNewWindow,
}: MobileSecondaryLinkProps) {
  return (
    <Link
      href={href}
      className="block py-1.5 text-primary-gray"
      target={opensInNewWindow ? "_blank" : ""}
      rel={opensInNewWindow ? "noreferrer" : ""}
    >
      {text}
    </Link>
  );
}

interface MobileMenuDrawerProps {
  isOpen: boolean;
  onCloseRequest: () => void;
  isDark: boolean;
}

function MobileMenuDrawer({ isOpen, isDark }: MobileMenuDrawerProps) {
  return (
    <div
      className={clsx(
        "z-40 transition-all ease-in-out duration-300 sm:hidden md:pointer-events-none w-full",
        isDark ? "text-white" : "text-primary-text",
        isOpen
          ? "opacity-100"
          : "pointer-events-none -translate-y-2/3 opacity-0",
      )}
    >
      <div
        className={clsx(
          "flex flex-col h-dvh pb-28 gap-10 pt-4",
          isDark ? "text-white" : "text-primary-text",
        )}
      >
        <div className="flex flex-col">
          <MobilePrimaryLink href="/product" text="Explore & analyze" />
          <MobilePrimaryLink
            href="/semantic-platform"
            text="Semantic platform"
          />
          <MobilePrimaryLink href="/ai" text="Steep AI" />
          <MobilePrimaryLink href="/customers" text="Customers" />
          <MobilePrimaryLink href="/pricing" text="Pricing" />
        </div>
        <div className="columns-2 px-9">
          <MobileSecondaryLink href="/blog" text="Blog" />
          <MobileSecondaryLink href="/changelog" text="Product updates" />
          <MobileSecondaryLink href="/download" text="Download" />
          <MobileSecondaryLink href="/support" text="Contact support" />
          <MobileSecondaryLink
            href="https://help.steep.app/"
            text="Help center"
            opensInNewWindow
          />
          <MobileSecondaryLink
            href="https://help.steep.app/api"
            text="API reference"
            opensInNewWindow
          />
          <MobileSecondaryLink
            href="https://careers.steep.app/"
            text="Careers"
            opensInNewWindow
          />
          <MobileSecondaryLink href="/about" text="About" />
          <MobileSecondaryLink href="/terms" text="Legal" />
          <MobileSecondaryLink
            href="https://help.steep.app/introduction/try-with-demo-data"
            text="Demo data"
            opensInNewWindow
          />
        </div>
        <div className="flex flex-col xs:flex-row px-9 gap-3 mt-auto">
          <a className="block" href="https://web.steep.app/sign-up">
            <SteepButton
              className="w-full!"
              label="Get started"
              variant={isDark ? "primary-reverse" : "primary"}
            />
          </a>
          <Link className="block" href="/demo">
            <SteepButton
              className="w-full!"
              variant={isDark ? "secondary-reverse" : "secondary"}
              label="Book a demo"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

const HAMBURGER_EASE = "power2.inOut";
const HAMBURGER_TOP_CLOSED = "M2.75 8 L21.25 8";
const HAMBURGER_BOTTOM_CLOSED = "M2.75 16 L21.25 16";

interface HamburgerButtonProps {
  className?: string;
  state?: "open" | "closed";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function HamburgerButton({
  className,
  state = "closed",
  onClick,
}: HamburgerButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const topPathRef = useRef<SVGPathElement>(null);
  const bottomPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const topPath = topPathRef.current;
    const bottomPath = bottomPathRef.current;
    if (!topPath || !bottomPath) return;

    const isOpen = state === "open";
    gsap.to(topPath, {
      attr: { d: isOpen ? "M5.46 5.46 L18.54 18.54" : HAMBURGER_TOP_CLOSED },
      duration: 0.15,
      ease: HAMBURGER_EASE,
    });
    gsap.to(bottomPath, {
      attr: {
        d: isOpen ? "M5.46 18.54 L18.54 5.46" : HAMBURGER_BOTTOM_CLOSED,
      },
      duration: 0.15,
      ease: HAMBURGER_EASE,
    });
  }, [state]);

  return (
    <button
      ref={buttonRef}
      type="button"
      aria-label={state === "open" ? "Close menu" : "Open menu"}
      aria-expanded={state === "open"}
      className={clsx(
        "size-10 flex items-center justify-center cursor-pointer",
        className,
      )}
      onClick={onClick}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={topPathRef}
          d={HAMBURGER_TOP_CLOSED}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          ref={bottomPathRef}
          d={HAMBURGER_BOTTOM_CLOSED}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}

const DARK_TEXT_PRIMARY = "text-white/80";
const DARK_TEXT_SECONDARY = "text-white/50";

interface NavTopItemProps {
  label: string;
  mode?: "light" | "dark";
  href?: string;
  active?: boolean;
  opensInNewWindow?: boolean;
  onHoverMenu?: () => void;
}

function NavTopItem({
  label,
  mode,
  href,
  active,
  opensInNewWindow,
  onHoverMenu,
}: NavTopItemProps) {
  return (
    <Link
      className={clsx(
        "pt-1 pb-1.5 px-3.5 lg:mx-1 text-xs inline-flex items-center gap-1 font-book rounded-full transition-colors duration-150",
        active
          ? mode === "dark"
            ? "bg-white/5"
            : "bg-trans-5"
          : "hover:text-[#888]",
        mode === "dark" ? DARK_TEXT_PRIMARY : "text-primary-text",
      )}
      href={href ?? ""}
      target={opensInNewWindow ? "_blank" : ""}
      rel={opensInNewWindow ? "noreferrer" : ""}
      onMouseEnter={onHoverMenu}
      onFocus={onHoverMenu}
    >
      {label}
    </Link>
  );
}

function MegaMenuContainer({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={clsx(
        "flex max-w-[1200px] w-full mx-auto overflow-hidden transition-all duration-500 ease-out pt-8",
        isOpen
          ? "opacity-100 translate-y-0 h-[300px]"
          : "opacity-0 -translate-y-4 h-0 pointer-events-none",
      )}
    >
      <div
        className={clsx(
          "w-full flex transition-all duration-200 ease-out delay-75 h-[180px]",
          isOpen ? "opacity-100" : "opacity-0",
        )}
      >
        {children}
      </div>
    </div>
  );
}

function MegaMenuColumn({
  large,
  children,
}: {
  large?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col shrink-0",
        large ? "w-[220px] py-2 gap-1.5" : "w-[160px] py-2.5 gap-1 mr-6",
      )}
    >
      {children}
    </div>
  );
}

function MegaMenuDivider({ mode }: { mode?: "light" | "dark" }) {
  return (
    <div className="w-px px-4 py-2.5 ">
      <div
        className={clsx(
          "w-[0.5px] h-full",
          mode === "dark" ? "bg-white/10" : "bg-trans-15",
        )}
      />
    </div>
  );
}

interface MegaMenuLinkProps {
  href: string;
  external?: boolean;
  icon?: React.ReactNode;
  label: string;
  subtitle?: string;
  large?: boolean;
  mode?: "light" | "dark";
}

function MegaMenuLink({
  href,
  external,
  icon,
  label,
  subtitle,
  large,
  mode,
}: MegaMenuLinkProps) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : ""}
      rel={external ? "noreferrer" : ""}
      className={clsx(
        "font-book  cursor-pointer px-3.5 rounded-lg flex items-center text-xs gap-3 leading-tight",
        mode === "dark" ? DARK_TEXT_PRIMARY : "text-primary-text",
        mode === "dark" ? "hover:bg-white/5" : "hover:bg-trans-5",
        large ? "h-[60px] " : "h-[34px]",
      )}
    >
      {icon && <div className="pb-[18px]">{icon}</div>}
      <div className="pb-0.5">
        <div>
          {label}
          {external && (
            <ArrowRight12Icon className="-translate-y-px ml-1 inline-block opacity-30 size-4 -rotate-45" />
          )}
        </div>
        {subtitle && (
          <span
            className={clsx(
              "text-[14px]",
              mode === "dark" ? DARK_TEXT_SECONDARY : "text-primary-text/40",
            )}
          >
            {subtitle}
          </span>
        )}
      </div>
    </Link>
  );
}

interface MegaMenuCardProps {
  href: string;
  image: string;
  label?: string;
  topic?: string;
  wideImage?: boolean;
  mode?: "light" | "dark";
}

function MegaMenuCard({
  href,
  image,
  label,
  topic,
  wideImage,
  mode,
}: MegaMenuCardProps) {
  return (
    <Link
      href={href}
      className={clsx(
        mode === "dark"
          ? `${DARK_TEXT_SECONDARY} hover:text-white`
          : "text-primary-text/60 hover:text-primary-text",
        "text-2xs hover:underline underline-offset-2",
        wideImage ? "w-[240px] xl:w-[280px]" : "w-[240px] xl:w-[260px]",
      )}
    >
      <div className="overflow-hidden h-[162px] rounded-xl mb-1">
        <img
          src={image}
          alt={label ?? ""}
          width={0}
          height={0}
          sizes="100vw"
          className={clsx(
            wideImage ? "w-full" : "w-auto",
            "h-full object-cover hover:scale-105 transition-all duration-300",
          )}
        />
      </div>
      {label && (
        <p>
          {topic && (
            <span
              className={
                mode === "dark" ? DARK_TEXT_PRIMARY : "text-primary-text"
              }
            >
              {topic}:
            </span>
          )}{" "}
          {label} →
        </p>
      )}
    </Link>
  );
}

export interface SteepNavProps {
  activePage?: string;
  mode?: "light" | "dark";
}

type MegaMenuType = "product" | "resources" | "customers";

export function SteepNav({ activePage, mode = "light" }: SteepNavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<MegaMenuType | null>(null);
  const [renderedMenu, setRenderedMenu] = useState<MegaMenuType | null>(null);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const isElevated = isScrolled || isMegaMenuOpen;
  const { isLarge, isMedium } = useWindowSize();
  const visibleCustomerCards = CUSTOMER_NAV_CARDS.slice(
    0,
    isLarge ? 3 : isMedium ? 2 : 1,
  );

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 500 * Number(activePage === "home");
      setIsScrolled(window.scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activePage]);

  useEffect(() => {
    if (hoveredMenu) {
      setRenderedMenu(hoveredMenu);
      requestAnimationFrame(() => setIsMegaMenuOpen(true));
      return;
    }
    setIsMegaMenuOpen(false);
    const timer = window.setTimeout(() => setRenderedMenu(null), 200);
    return () => window.clearTimeout(timer);
  }, [hoveredMenu]);

  return (
    <nav
      className={clsx(
        "flex flex-col items-center fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-5",
        isElevated
          ? isMegaMenuOpen
            ? mode === "dark"
              ? "shadow-lg bg-[#222222]"
              : "shadow-lg bg-white"
            : mode === "dark"
              ? "bg-[#222222CC] backdrop-blur-lg"
              : "bg-[#FFFFFFCC] backdrop-blur-lg"
          : isMobileMenuOpen
            ? mode === "dark"
              ? "bg-[#222222]"
              : "bg-primary-background"
            : "bg-transparent",
        isMobileMenuOpen ? "h-screen" : "h-16 overflow-hidden sm:h-auto",
      )}
      onMouseLeave={() => setHoveredMenu(null)}
    >
      <div className="relative z-10 h-16 max-w-[1200px] w-full flex items-center shrink-0">
        <Link
          href="/"
          aria-label="Steep home"
          className={clsx(
            "flex-1 sm:flex-none sm:w-28 pb-1 pl-1 transition-opacity duration-300",
            isMobileMenuOpen
              ? "opacity-0 pointer-events-none"
              : "opacity-100 pointer-events-auto",
          )}
        >
          <SteepWordmarkSvg
            className={clsx(
              "h-[28px] w-[90px] cursor-pointer relative",
              mode === "dark" ? DARK_TEXT_PRIMARY : "text-primary-text",
            )}
          />
        </Link>
        <div className="hidden sm:flex justify-center items-center flex-1">
          <NavTopItem
            label="Product"
            mode={mode}
            href="/"
            active={activePage === "product"}
            onHoverMenu={() => setHoveredMenu("product")}
          />
          <NavTopItem
            label="Resources"
            mode={mode}
            active={activePage === "resources"}
            onHoverMenu={() => setHoveredMenu("resources")}
          />
          <NavTopItem
            label="Customers"
            mode={mode}
            href="/customers"
            active={activePage === "customers"}
            onHoverMenu={() => setHoveredMenu("customers")}
          />
          <NavTopItem
            href="/pricing"
            mode={mode}
            label="Pricing"
            active={activePage === "pricing"}
            onHoverMenu={() => setHoveredMenu(null)}
          />
        </div>
        <div
          className={clsx(
            "flex items-center justify-end gap-1",
            isMobileMenuOpen
              ? "opacity-0 pointer-events-none"
              : "opacity-100 pointer-events-auto",
          )}
        >
          <Link href="/demo" className="hidden lg:block">
            <SteepButton
              variant="tertiary"
              textColor={mode === "dark" ? "text-white" : "text-primary-text"}
              size="small"
              label="Book a demo"
            />
          </Link>
          <a
            href="https://web.steep.app/sign-up"
            target="_blank"
            rel="noreferrer"
            className="contents"
          >
            <SteepButton
              size="small"
              label="Get started"
              variant={mode === "dark" ? "secondary-reverse" : "secondary"}
              className="xs:hidden!"
            />
            <SteepButton
              size="small"
              label="Get started"
              variant={mode === "dark" ? "primary-reverse" : "primary"}
              className="hidden! xs:inline-flex!"
            />
          </a>
        </div>
        <div className="sm:hidden pl-1.5 justify-end">
          <HamburgerButton
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={mode === "dark" ? "text-white" : "text-primary-text"}
            state={isMobileMenuOpen ? "open" : "closed"}
          />
        </div>
      </div>
      <MobileMenuDrawer
        isOpen={isMobileMenuOpen}
        onCloseRequest={() => setIsMobileMenuOpen(false)}
        isDark={mode === "dark"}
      />
      {renderedMenu && (
        <MegaMenuContainer
          isOpen={isMegaMenuOpen && hoveredMenu === renderedMenu}
        >
          {renderedMenu === "product" && (
            <>
              <MegaMenuColumn large>
                <MegaMenuLink
                  icon={<ChartBar16Icon />}
                  label="Explore & analyze"
                  subtitle="Built for everyone"
                  href="/product"
                  mode={mode}
                  large
                />
                <MegaMenuLink
                  icon={<CubeHex16Icon />}
                  label="Semantic platform"
                  subtitle="Centralized metrics"
                  href="/semantic-platform"
                  mode={mode}
                  large
                />
                <MegaMenuLink
                  icon={<Sparkles16Icon />}
                  label="Steep AI"
                  subtitle="AI-powered analytics"
                  href="/ai"
                  mode={mode}
                  large
                />
              </MegaMenuColumn>
              <MegaMenuDivider mode={mode} />
              <MegaMenuColumn>
                <MegaMenuLink label="Download" href="/download" mode={mode} />
                <MegaMenuLink
                  label="Databases"
                  href="https://help.steep.app/get-started/connect-data-source"
                  external
                  mode={mode}
                />
                <MegaMenuLink
                  label="Integrations"
                  href="https://help.steep.app/using-steep/slack-subscriptions"
                  external
                  mode={mode}
                />
                <MegaMenuLink
                  label="Try demo data"
                  href="https://help.steep.app/introduction/try-with-demo-data"
                  external
                  mode={mode}
                />
              </MegaMenuColumn>
              <div className="flex-1 justify-end items-top hidden md:flex">
                <MegaMenuCard
                  image="/images/download/download-apps-banner.png"
                  href="/download"
                  mode={mode}
                />
              </div>
            </>
          )}
          {renderedMenu === "resources" && (
            <>
              <MegaMenuColumn large>
                <MegaMenuLink
                  href="https://help.steep.app/"
                  external
                  icon={<QuestionCircle16Icon />}
                  label="Help center"
                  subtitle="Help, guides and support"
                  large
                  mode={mode}
                />
                <MegaMenuLink
                  href="https://help.steep.app/api/"
                  external
                  icon={<ApiDoc16Icon />}
                  label="API docs"
                  subtitle="Reference and docs"
                  large
                  mode={mode}
                />
              </MegaMenuColumn>
              <MegaMenuDivider mode={mode} />
              <MegaMenuColumn>
                <MegaMenuLink label="Blog" href="/blog" mode={mode} />
                <MegaMenuLink
                  label="Product updates"
                  href="/changelog"
                  mode={mode}
                />
                <MegaMenuLink
                  label="Contact support"
                  href="/support"
                  mode={mode}
                />
              </MegaMenuColumn>
              <MegaMenuColumn>
                <MegaMenuLink label="Legal" href="/terms" mode={mode} />
                <MegaMenuLink label="Security" href="/security" mode={mode} />
              </MegaMenuColumn>
              <div className="hidden lg:flex flex-1 justify-end items-top ">
                <MegaMenuCard
                  mode={mode}
                  label={FEATURED_BLOG_POST.title}
                  image={FEATURED_BLOG_POST.image}
                  topic={FEATURED_BLOG_POST.topic}
                  href={`/blog/${FEATURED_BLOG_POST.id}`}
                  wideImage
                />
              </div>
            </>
          )}
          {renderedMenu === "customers" && (
            <>
              <div className="flex gap-6 flex-1 pt-2 mr-4">
                {visibleCustomerCards.map((item) => (
                  <MegaMenuCard
                    key={item.id}
                    mode={mode}
                    label={item.title}
                    image={item.image}
                    href={`/customers/${item.id}`}
                  />
                ))}
              </div>
              <MegaMenuColumn large>
                <MegaMenuLink
                  icon={<ArrowRight16Icon />}
                  label="All stories"
                  subtitle="Customer stories"
                  href="/customers"
                  large
                  mode={mode}
                />
              </MegaMenuColumn>
            </>
          )}
        </MegaMenuContainer>
      )}
    </nav>
  );
}

export interface SteepLayoutProps {
  children: React.ReactNode;
  className?: string;
  mode?: "light" | "dark";
  footerMode?: "light" | "dark";
  activePage?: string;
  cookieConsentMode?: "light" | "dark";
}

export function SteepLayout({
  children,
  className,
  mode = "light",
  footerMode,
  activePage,
  cookieConsentMode,
}: SteepLayoutProps) {
  const cookieConsent = useCookieConsent();
  const resolvedFooterMode = footerMode ?? mode;

  return (
    <div
      className={clsx(
        mode === "dark" ? "bg-[#121212]" : "bg-[#ffffff]",
        className,
      )}
    >
      {children}
      <SteepNav mode={mode} activePage={activePage} />
      <SteepFooter cookieConsent={cookieConsent} mode={resolvedFooterMode} />
      <CookieBanner
        cookieConsent={cookieConsent}
        darkMode={cookieConsentMode === "dark"}
      />
    </div>
  );
}
