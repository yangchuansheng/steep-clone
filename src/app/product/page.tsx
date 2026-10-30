import type { Metadata } from "next";
import { ProductPage } from "@/components/sites/steep/product-page";

export const metadata: Metadata = {
  title: "Explore and analyze | Steep",
  description:
    "The BI platform that makes it easy for all users to explore, analyze and report.",
  openGraph: {
    title: "Explore and analyze | Steep",
    description:
      "The BI platform that makes it easy for all users to explore, analyze and report.",
    url: "https://steep.app/product",
    siteName: "Steep",
    type: "website",
    images: [
      {
        url: "https://steep.app/images/og/product.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore and analyze | Steep",
    description:
      "The BI platform that makes it easy for all users to explore, analyze and report.",
    images: ["https://steep.app/images/og/product.png"],
  },
};

export default function ProductRoutePage() {
  return <ProductPage />;
}
