import type { Metadata } from "next";
import { Cormorant_Garamond, Crimson_Text, JetBrains_Mono } from "next/font/google";
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
  weight: ["300", "400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "mộc little farm — slow stay & retreat ở-yên, Măng Đen",
    template: "%s · mộc little farm",
  },
  description:
    "Retreat farm giữa Măng Đen, theo triết lý ở-yên — cho ai muốn một chuyến đi chậm (slow stay), không lịch trình dày.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
