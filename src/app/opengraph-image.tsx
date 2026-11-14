import { ImageResponse } from "next/og";
import { getContent } from "@/content";
import { site } from "@/content/site";
import { defaultLocale } from "@/i18n/config";
import { OG_IMAGE_SIZE } from "@/lib/seo";

export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";
export const alt = getContent(defaultLocale).meta.ogImageAlt;

export default function OpenGraphImage() {
  const { footer } = getContent(defaultLocale);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(180deg,#0b1f4b 0%,#06122e 100%)",
          color: "#fff",
        }}
      >
        <div style={{ display: "flex", width: 120, height: 4, background: "#c9a13b" }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: 4 }}>ATLAS</div>
          <div style={{ fontSize: 34, letterSpacing: 10, color: "#c9a13b" }}>AFRICA GROUP SARL</div>
          <div style={{ marginTop: 48, fontSize: 36, lineHeight: 1.35, maxWidth: 900, color: "rgba(255,255,255,0.85)" }}>
            {footer.tagline}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "rgba(255,255,255,0.7)" }}>
          {`${site.contact.locality}, ${site.contact.region} — RDC`}
        </div>
      </div>
    ),
    size,
  );
}
