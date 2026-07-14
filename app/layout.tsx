import type { Metadata } from "next";
import { JetBrains_Mono, Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { JsonLd } from "@/components/json-ld";
import {
  OG_IMAGE,
  OG_IMAGE_ALT,
  PUBLISHER_NAME,
  PUBLISHER_URL,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_SAMEAS,
  SITE_URL,
} from "@/lib/site";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const HOME_TITLE =
  "Dalibi — Logiciel libre de gestion scolaire (Togo & Afrique de l'Ouest)";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: "%s | Dalibi",
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: PUBLISHER_NAME, url: PUBLISHER_URL }],
  creator: PUBLISHER_NAME,
  publisher: SITE_NAME,
  category: "education",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: SITE_NAME,
    url: "/",
    title: HOME_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: OG_IMAGE, alt: OG_IMAGE_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "ziFx0N8OItjDSbH7F0fChsvivigUR1PArGRpuSbOCo0",
  },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  description: SITE_DESCRIPTION,
  sameAs: SITE_SAMEAS,
};

const softwareLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE_NAME,
  applicationCategory: "EducationApplication",
  operatingSystem: "Web, Linux, Docker",
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: "fr",
  license: "https://www.gnu.org/licenses/gpl-3.0.html",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "XOF" },
  author: { "@type": "Organization", name: PUBLISHER_NAME, url: PUBLISHER_URL },
  sameAs: SITE_SAMEAS,
  featureList: [
    "Inscriptions et dossiers élèves",
    "Notes et bulletins (trimestre/semestre)",
    "Examens officiels (CEPD, BEPC, BAC)",
    "Écolage et paiements (Mobile Money)",
    "Présences et assiduité",
    "Statistiques MEPSTA",
    "Portail parents et élèves",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${sora.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <JsonLd data={organizationLd} />
        <JsonLd data={softwareLd} />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
