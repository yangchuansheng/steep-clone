import type { Metadata } from "next";
import { AiPage } from "@/components/sites/steep/ai-page";

export const metadata: Metadata = {
  title: "Steep AI",
  description:
    "The BI platform that makes it easy for all users to explore, analyze and report.",
  openGraph: {
    title: "Steep AI",
    description:
      "The BI platform that makes it easy for all users to explore, analyze and report.",
    url: "https://steep.app/ai",
    siteName: "Steep",
    type: "website",
    images: [
      {
        url: "https://steep.app/images/og/ai.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Steep AI",
    description:
      "The BI platform that makes it easy for all users to explore, analyze and report.",
    images: ["https://steep.app/images/og/ai.jpg"],
  },
};

export default function AiRoutePage() {
  return <AiPage />;
}
