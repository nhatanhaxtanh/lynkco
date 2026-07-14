import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} — Bảng giá xe Lynk & Co mới nhất`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 96,
            fontWeight: 900,
            letterSpacing: "0.15em",
            display: "flex",
          }}
        >
          LYNK & CO
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 34,
            color: "rgba(255,255,255,0.65)",
            display: "flex",
          }}
        >
          Bảng giá xe mới nhất — Đăng ký lái thử miễn phí
        </div>
        <div
          style={{
            marginTop: 48,
            padding: "14px 40px",
            borderRadius: 9999,
            background: "#ffffff",
            color: "#0a0a0a",
            fontSize: 28,
            fontWeight: 700,
            display: "flex",
          }}
        >
          Hotline {siteConfig.hotlineDisplay}
        </div>
      </div>
    ),
    size
  );
}
