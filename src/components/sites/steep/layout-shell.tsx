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

function SealosMarkPaths() {
  return (
    <>
      <path
        d="M40.0005 17.0891C39.9026 16.7771 39.7825 16.4725 39.641 16.1778V16.1588C38.9807 14.8106 37.8859 13.7258 36.5342 13.0804C35.1825 12.4351 33.6531 12.2669 32.1943 12.6032C30.7354 12.9396 29.4325 13.7607 28.497 14.9334C27.5614 16.1061 27.0481 17.5616 27.0403 19.0638C27.0404 19.5363 27.0912 20.0073 27.1917 20.4689C27.1921 20.4752 27.1921 20.4816 27.1917 20.4879C27.2295 20.6778 27.2863 20.8676 27.343 21.0575C27.6807 22.3951 27.7464 23.7872 27.5362 25.1508C27.3261 26.5144 26.8443 27.8215 26.1196 28.9942C25.395 30.1668 24.4424 31.1809 23.3187 31.976C22.195 32.771 20.9231 33.3307 19.5791 33.6217C18.2351 33.9126 16.8465 33.9288 15.4961 33.6693C14.1457 33.4099 12.8612 32.88 11.7194 32.1114C10.5775 31.3428 9.60164 30.3513 8.85001 29.1959C8.09839 28.0405 7.58642 26.745 7.34466 25.3866C7.68654 27.7412 8.51731 29.9974 9.78318 32.0093C11.0491 34.0212 12.7218 35.7439 14.6932 37.0659C16.6646 38.3879 18.8906 39.2796 21.2272 39.6835C23.5637 40.0873 25.9588 39.9942 28.2572 39.4102C30.5556 38.8262 32.7063 37.7643 34.5698 36.2932C36.4334 34.8222 37.9684 32.9748 39.0754 30.8707C40.1824 28.7665 40.8367 26.4525 40.9961 24.0785C41.1555 21.7044 40.8163 19.3233 40.0005 17.0891Z"
        fill="currentColor"
      />
      <path
        d="M13.1155 22.8042C15.3102 26.0131 19.851 25.7283 19.851 25.7283C18.7158 24.627 17.9779 23.6207 17.9022 20.7536C17.8266 17.8865 16.1994 17.127 16.1994 17.127C19.1131 15.2852 18.0725 13.2915 17.9779 11.07C17.9212 9.68394 18.7347 8.65862 19.378 8.07001C15.6755 8.6266 12.3299 10.5959 10.0388 13.5673C7.74765 16.5387 6.68774 20.283 7.08003 24.0194C7.34491 23.2789 11.0911 19.8422 13.1155 22.8042Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.1815 21.6651C37.1815 29.9389 30.4981 36.6461 22.2537 36.6461C17.8774 36.6461 13.9409 34.7562 11.2105 31.7453C11.3763 31.8723 11.5462 31.9944 11.7199 32.1114C12.8618 32.88 14.1463 33.4098 15.4966 33.6693C16.847 33.9288 18.2357 33.9125 19.5797 33.6216C20.9237 33.3306 22.1955 32.7709 23.3192 31.9759C24.443 31.1808 25.3956 30.1667 26.1202 28.9941C26.8448 27.8215 27.3266 26.5143 27.5368 25.1507C27.747 23.7871 27.6813 22.395 27.3436 21.0575C27.2868 20.8676 27.2301 20.6777 27.1922 20.4878C27.1927 20.4815 27.1927 20.4752 27.1922 20.4688C27.0917 20.0073 27.041 19.5362 27.0409 19.0638C27.0487 17.5616 27.562 16.1061 28.4975 14.9334C29.433 13.7606 30.7359 12.9395 32.1948 12.6032C32.7965 12.4645 33.4102 12.4116 34.0184 12.4426C36.0003 14.9852 37.1815 18.1867 37.1815 21.6651Z"
        fill="currentColor"
      />
    </>
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
      <g transform="translate(-4, 3) scale(1.15)">
        <SealosMarkPaths />
      </g>
      <text
        x="52"
        y="44"
        fill="currentColor"
        className="text-[38px] font-medium tracking-[-0.03em]"
      >
        Sealos
      </text>
    </svg>
  );
}

function SteepMarkSvg(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <SealosMarkPaths />
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
            <Link href="/" aria-label="Sealos home">
              <SteepMarkSvg
                className={`cursor-pointer w-8 h-8 ${
                  mode === "dark" ? "text-white" : "text-primary-text"
                }`}
              />
            </Link>
          </div>
          <div>
            <FooterColumnHeading mode={mode}>Product</FooterColumnHeading>
            <FooterLink mode={mode} href="/">
              Overview
            </FooterLink>
            <FooterLink mode={mode} href="/#capabilities">
              Capabilities
            </FooterLink>
            <FooterLink mode={mode} href="/#equation">
              Why Sealos
            </FooterLink>
            <FooterLink mode={mode} href="/#canvas">
              Stack Canvas
            </FooterLink>
            <FooterLink mode={mode} href="/#ops">
              Ops &amp; Primitives
            </FooterLink>
            <FooterLink
              mode={mode}
              href="https://sealos.run/downloads"
              opensInNewWindow
            >
              Download
            </FooterLink>
          </div>
          <div>
            <FooterColumnHeading mode={mode}>Resources</FooterColumnHeading>
            <FooterLink
              mode={mode}
              href="https://sealos.io/docs"
              opensInNewWindow
            >
              Documentation
            </FooterLink>
            <FooterLink
              mode={mode}
              href="https://github.com/labring/sealos"
              opensInNewWindow
            >
              GitHub
            </FooterLink>
            <FooterLink mode={mode} href="/#faq">
              FAQ
            </FooterLink>
            <FooterLink mode={mode} href="/security">
              Security
            </FooterLink>
            <FooterLink mode={mode} href="/terms">
              Terms of service
            </FooterLink>
          </div>
          <div>
            <FooterColumnHeading mode={mode}>Capabilities</FooterColumnHeading>
            <FooterLink mode={mode} href="/#equation">
              Cloud App Platform
            </FooterLink>
            <FooterLink mode={mode} href="/#equation">
              Managed Databases
            </FooterLink>
            <FooterLink mode={mode} href="/#equation">
              Storage &amp; AI Gateway
            </FooterLink>
          </div>
          <div>
            <FooterColumnHeading mode={mode}>Contact</FooterColumnHeading>
            <FooterLink
              mode={mode}
              href="https://sealos.run/downloads"
              opensInNewWindow
            >
              Download Sealos
            </FooterLink>
            <FooterLink
              mode={mode}
              href="https://discord.gg/sealos"
              opensInNewWindow
            >
              Discord
            </FooterLink>
            <FooterLink
              mode={mode}
              href="https://x.com/sealos_io"
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
              href="https://linkedin.com/company/sealos"
              target="_new"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-primary-text/50 hover:text-primary-text"
            >
              <LinkedInIcon />
            </Link>
            <Link
              href="https://www.youtube.com/@sealos"
              target="_new"
              rel="noreferrer"
              aria-label="YouTube"
              className="text-primary-text/50 hover:text-primary-text"
            >
              <YouTubeIcon />
            </Link>
            <Link
              href="https://x.com/sealos_io"
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
            &copy; 2026 Sealos
          </div>
          <div
            className={`text-[15px] ${
              mode === "dark" ? "text-[#9E9E9E]" : "text-primary-gray"
            }`}
          >
            Cloud Operating System
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
          <MobilePrimaryLink href="#capabilities" text="Capabilities" />
          <MobilePrimaryLink href="#equation" text="Why Sealos" />
          <MobilePrimaryLink href="#canvas" text="Stack Canvas" />
          <MobilePrimaryLink href="#ops" text="Ops & Primitives" />
          <MobilePrimaryLink href="#faq" text="FAQ" />
        </div>
        <div className="columns-2 px-9">
          <MobileSecondaryLink
            href="https://sealos.run/downloads"
            text="Download"
            opensInNewWindow
          />
          <MobileSecondaryLink
            href="https://sealos.io/docs"
            text="Documentation"
            opensInNewWindow
          />
          <MobileSecondaryLink
            href="https://github.com/labring/sealos"
            text="GitHub"
            opensInNewWindow
          />
          <MobileSecondaryLink
            href="https://discord.gg/sealos"
            text="Discord"
            opensInNewWindow
          />
          <MobileSecondaryLink href="/security" text="Security" />
          <MobileSecondaryLink href="/terms" text="Legal" />
        </div>
        <div className="flex flex-col xs:flex-row px-9 gap-3 mt-auto">
          <a className="block" href="https://sealos.run/downloads">
            <SteepButton
              className="w-full!"
              label="Download Sealos"
              variant={isDark ? "primary-reverse" : "primary"}
            />
          </a>
          <Link className="block" href="https://sealos.run/downloads">
            <SteepButton
              className="w-full!"
              variant={isDark ? "secondary-reverse" : "secondary"}
              label="Claim $5 Credit"
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
          aria-label="Sealos home"
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
            label="Capabilities"
            mode={mode}
            href="#capabilities"
            active={activePage === "capabilities"}
            onHoverMenu={() => setHoveredMenu(null)}
          />
          <NavTopItem
            label="Why Sealos"
            mode={mode}
            href="#equation"
            active={activePage === "equation"}
            onHoverMenu={() => setHoveredMenu(null)}
          />
          <NavTopItem
            label="Stack Canvas"
            mode={mode}
            href="#canvas"
            active={activePage === "canvas"}
            onHoverMenu={() => setHoveredMenu(null)}
          />
          <NavTopItem
            href="#ops"
            mode={mode}
            label="Ops & Primitives"
            active={activePage === "ops"}
            onHoverMenu={() => setHoveredMenu(null)}
          />
          <NavTopItem
            href="#faq"
            mode={mode}
            label="FAQ"
            active={activePage === "faq"}
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
          <Link href="https://sealos.run/downloads" className="hidden lg:block">
            <SteepButton
              variant="tertiary"
              textColor={mode === "dark" ? "text-white" : "text-primary-text"}
              size="small"
              label="Claim $5 Credit"
            />
          </Link>
          <a
            href="https://sealos.run/downloads"
            target="_blank"
            rel="noreferrer"
            className="contents"
          >
            <SteepButton
              size="small"
              label="Download Sealos"
              variant={mode === "dark" ? "secondary-reverse" : "secondary"}
              className="xs:hidden!"
            />
            <SteepButton
              size="small"
              label="Download Sealos"
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
