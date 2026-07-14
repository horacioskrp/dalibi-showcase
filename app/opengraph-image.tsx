import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
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
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#0b1220",
          backgroundImage:
            "radial-gradient(1000px 500px at 80% -10%, rgba(37,99,235,0.55), transparent 60%), radial-gradient(800px 500px at 0% 120%, rgba(6,182,212,0.35), transparent 55%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "72px",
              height: "72px",
              borderRadius: "18px",
              background: "linear-gradient(135deg, #3b82f6, #2563eb)",
              fontSize: "44px",
              fontWeight: 800,
            }}
          >
            D
          </div>
          <div style={{ fontSize: "56px", fontWeight: 800, letterSpacing: "-1px" }}>Dalibi</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div style={{ fontSize: "62px", fontWeight: 800, lineHeight: 1.1, maxWidth: "980px" }}>
            Logiciel libre de gestion scolaire
          </div>
          <div style={{ fontSize: "34px", color: "#cbd5e1", maxWidth: "900px" }}>
            Application open source complète pour le Togo et l&apos;Afrique de l&apos;Ouest
          </div>
        </div>

        <div style={{ display: "flex", gap: "16px", fontSize: "26px" }}>
          {["Gratuit", "Open source · GPL v3", "Auto-hébergeable"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                padding: "10px 22px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.25)",
                background: "rgba(255,255,255,0.08)",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
