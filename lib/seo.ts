import type { Metadata } from "next";
import { OG_IMAGE, OG_IMAGE_ALT, OG_IMAGE_HEIGHT, OG_IMAGE_WIDTH, SITE_NAME } from "@/lib/site";

/**
 * Construit les métadonnées d'une page : titre, description, URL canonique,
 * Open Graph et Twitter Card complets (l'image provient du fichier
 * `app/opengraph-image` / `app/twitter-image`, ajouté automatiquement).
 */
export function pageMeta(opts: {
  /** Titre court (le gabarit ajoute « | Dalibi »). */
  title: string;
  description: string;
  /** Chemin absolu du site, ex. "/tarifs". */
  path: string;
  /** Titre plus riche pour le partage social (défaut = title). */
  ogTitle?: string;
  keywords?: string[];
}): Metadata {
  const ogTitle = opts.ogTitle ?? opts.title;

  return {
    title: opts.title,
    description: opts.description,
    keywords: opts.keywords,
    alternates: { canonical: opts.path },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: SITE_NAME,
      url: opts.path,
      title: ogTitle,
      description: opts.description,
      images: [{ url: OG_IMAGE, alt: OG_IMAGE_ALT, width: OG_IMAGE_WIDTH, height: OG_IMAGE_HEIGHT, type: "image/png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: opts.description,
      images: [OG_IMAGE],
    },
  };
}
