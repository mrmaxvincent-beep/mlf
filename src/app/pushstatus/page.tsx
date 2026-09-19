import type { Metadata } from "next";
import { PushStatus } from "@/components/PushStatus";

export const metadata: Metadata = {
  title: "pushstatus",
  robots: { index: false, follow: false },
};

/** Trang trong nhà: không có Header/Footer, không nằm trong menu, không cho bot đánh chỉ mục. */
export default function PushStatusPage() {
  return (
    <main className="wrap" style={{ maxWidth: "34rem", paddingTop: "4rem", paddingBottom: "4rem" }}>
      <PushStatus />
    </main>
  );
}
