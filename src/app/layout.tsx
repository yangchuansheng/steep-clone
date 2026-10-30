import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sealos.io"),
  title: "Sealos — Ship Full-Stack Apps & Databases with Ops Agent",
  description:
    "Deploy local code, Vibe Coding apps, GitHub repos, open-source templates, and databases in minutes. Your dedicated natural-language Ops Agent runs it all.",
  openGraph: {
    title: "Sealos — Ship Any Project in Minutes with Your Dedicated Ops Agent",
    description:
      "Ops Agent + Cloud Hosting (Vercel/Railway) + Managed DB (Supabase/MongoCloud) + Storage & AI Gateway in one native workspace.",
    url: "https://sealos.io/",
    siteName: "Sealos",
    type: "website",
    images: [
      {
        url: "/images/og/home.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sealos — Ship Any Project in Minutes with Your Dedicated Ops Agent",
    description:
      "Ops Agent + Cloud Hosting (Vercel/Railway) + Managed DB (Supabase/MongoCloud) + Storage & AI Gateway in one native workspace.",
    images: ["/images/og/home.png"],
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
