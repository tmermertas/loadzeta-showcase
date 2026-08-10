import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "LoadZeta — Know Your Loads. Track Your Earnings.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Dynamically generated social share image — branded, on-message, no static asset.
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #050507 0%, #0b1220 55%, #0a2540 100%)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ display: "flex", width: 56, height: 56, borderRadius: 14, background: "linear-gradient(135deg,#38bdf8,#2563eb)" }} />
          <div style={{ display: "flex", fontSize: 40, fontWeight: 800, color: "#fff" }}>
            Load<span style={{ color: "#38bdf8", fontWeight: 300, letterSpacing: 2, marginLeft: 4 }}>ZETA</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 800, color: "#fff", lineHeight: 1.05 }}>
            Know your loads.
          </div>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 800, color: "#38bdf8", lineHeight: 1.05 }}>
            Track your earnings.
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 30, color: "#a1a1aa", maxWidth: 900 }}>
            Load parsing & income tracking for U.S. truckers. 30 days free, no card.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", padding: "10px 22px", borderRadius: 999, background: "#0a84ff", color: "#fff", fontSize: 26, fontWeight: 700 }}>
            Start free →
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#a1a1aa" }}>loadzeta.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
