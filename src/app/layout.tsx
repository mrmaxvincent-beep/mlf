import type { Metadata } from "next";
import { Cormorant_Garamond, Crimson_Text, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import "@/styles/tokens.css";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Crimson_Text({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "mộc little farm — slow stay & retreat ở-yên, Măng Đen",
    template: "%s · mộc little farm",
  },
  description:
    "Retreat farm giữa Măng Đen, theo triết lý ở-yên — cho ai muốn một chuyến đi chậm (slow stay), không lịch trình dày.",
  keywords: "retreat, slow stay, farm, ở-yên, Măng Đen, yoga, mindfulness, wellness",
  openGraph: {
    title: "mộc little farm — slow stay & retreat ở-yên, Măng Đen",
    description: "Retreat farm giữa Măng Đen, theo triết lý ở-yên — cho ai muốn một chuyến đi chậm (slow stay), không lịch trình dày.",
    type: "website",
    locale: "vi_VN",
    url: "https://moclittlefarm.com",
    images: [
      {
        url: "https://moclittlefarm.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "mộc little farm — slow stay & retreat ở-yên, Măng Đen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "mộc little farm — slow stay & retreat ở-yên, Măng Đen",
    description: "Retreat farm giữa Măng Đen, theo triết lý ở-yên — cho ai muốn một chuyến đi chậm (slow stay), không lịch trình dày.",
    images: ["https://moclittlefarm.com/og-image.jpg"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://moclittlefarm.com",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" data-scroll-behavior="smooth" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <head>
        <GoogleAnalytics />
      </head>
      <body>{children}</body>
    </html>
  );
}
