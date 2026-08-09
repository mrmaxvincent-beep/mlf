"use client";

import { useEffect, useState } from "react";

const DAYS = ["CN", "Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7"];

const WEATHER_CODE_LABEL: Record<number, string> = {
  0: "trời quang",
  1: "ít mây",
  2: "mây rải rác",
  3: "nhiều mây",
  45: "sương mù",
  48: "sương mù",
  51: "mưa phùn",
  53: "mưa phùn",
  55: "mưa phùn",
  61: "mưa nhỏ",
  63: "mưa",
  65: "mưa to",
  71: "tuyết",
  80: "mưa rào",
  81: "mưa rào",
  82: "mưa rào to",
  95: "giông",
};

function pad(n: number) {
  return String(n).padStart(2, "0");
}

/** Live "dd.mm.yyyy Th X hh:mm · weather · temp°C" label for Măng Đen, matching the source's clock + Open-Meteo widget. */
export function HeroClock() {
  const [now, setNow] = useState<Date | null>(null);
  const [weather, setWeather] = useState<{ temp: number; label: string } | null>(null);

  useEffect(() => {
    setNow(new Date());
    const clockTimer = setInterval(() => setNow(new Date()), 30000);

    const fetchWeather = () => {
      fetch("https://api.open-meteo.com/v1/forecast?latitude=14.85&longitude=108.19&current=temperature_2m,weather_code")
        .then((r) => r.json())
        .then((data) => {
          const c = data?.current;
          if (!c) return;
          setWeather({ temp: Math.round(c.temperature_2m), label: WEATHER_CODE_LABEL[c.weather_code] ?? "mây" });
        })
        .catch(() => {});
    };
    fetchWeather();
    const weatherTimer = setInterval(fetchWeather, 15 * 60000);

    return () => {
      clearInterval(clockTimer);
      clearInterval(weatherTimer);
    };
  }, []);

  if (!now) return <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.06em", color: "var(--color-paper-dem)", opacity: 0.85 }}>—</span>;

  const date = `${pad(now.getDate())}.${pad(now.getMonth() + 1)}.${now.getFullYear()}`;
  const time = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
  const wLabel = weather ? `${weather.label} · ${weather.temp}°C` : "—";

  return (
    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.06em", color: "var(--color-paper-dem)", opacity: 0.85 }}>
      {date} {DAYS[now.getDay()]} {time} · {wLabel}
    </span>
  );
}
