import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dalibi — Logiciel de gestion scolaire",
    short_name: "Dalibi",
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    lang: "fr",
    categories: ["education", "productivity", "business"],
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any", purpose: "any" },
    ],
  };
}
