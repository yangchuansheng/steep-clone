import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Steep: AI analytics for faster insights and zero chaos",
  description:
    "Steep is an AI analytics platform built on governed metrics that powers analysis, reporting and company-wide engagement.",
  openGraph: {
    title: "Steep: AI analytics for faster insights and zero chaos",
    description:
      "Steep is an AI analytics platform built on governed metrics that powers analysis, reporting and company-wide engagement.",
    url: "https://steep.app/",
    siteName: "Steep",
    type: "website",
    images: [
      {
        url: "https://steep.app/images/og/home.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Steep: AI analytics for faster insights and zero chaos",
    description:
      "Steep is an AI analytics platform built on governed metrics that powers analysis, reporting and company-wide engagement.",
    images: ["https://steep.app/images/og/home.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
