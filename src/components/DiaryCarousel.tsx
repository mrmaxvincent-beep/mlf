"use client";

import { useEffect, useState } from "react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const images = [
  { label: "ảnh · trang nhật ký 1", src: "/assets/bestill_khaitam1.webp" },
  { label: "ảnh · trang nhật ký 2", src: "/assets/bestill_khaitam2.webp" },
  { label: "ảnh · trang nhật ký 3", src: "/assets/bestill_khaitam3.webp" },
  { label: "ảnh · trang nhật ký 4", src: "/assets/bestill_khaitam4.webp" },
];

export function DiaryCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ maxWidth: "24rem", margin: "0 auto" }}>
      <ImagePlaceholder label={images[active].label} aspectRatio="3/4" src={images[active].src} style={{ width: "100%", height: "100%" }} objectFit="contain" />
    </div>
  );
}
