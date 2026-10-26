import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { site, summary, skillGroups, projects } from "@/lib/content";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Mobile Developer in Mojokerto, Indonesia. 4 years building Flutter and Kotlin Multiplatform apps for Android and iOS, with 700K+ combined downloads on Google Play across logistics, F&B POS, property-tech, and messaging.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role} (${site.roleDetail})`,
    template: `%s — ${site.name}`,
  },
  description,
  applicationName: `${site.name} — Portfolio`,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  keywords: [
    "Vindy Bagus Prasetyo",
    "Mobile Developer",
    "Flutter Developer",
    "Kotlin Multiplatform",
    "Android Developer",
    "iOS Developer",
    "Dart",
    "Indonesia",
    "Mojokerto",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: site.url,
    siteName: `${site.name} — Portfolio`,
    title: `${site.name} — ${site.role} (${site.roleDetail})`,
    description,
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${site.name}, ${site.role} — 4 years experience, 700K+ downloads, 5 apps live`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role} (${site.roleDetail})`,
    description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#0b0f14",
  width: "device-width",
  initialScale: 1,
};

/**
 * Structured data for search engines. Built from the same content module the
 * page renders, so the markup cannot drift from what a visitor actually sees.
 */
function buildJsonLd() {
  const personId = `${site.url}/#person`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: site.name,
        jobTitle: `${site.role} (${site.roleDetail})`,
        email: `mailto:${site.email}`,
        telephone: site.phone,
        url: site.url,
        image: `${site.url}/og.png`,
        description: summary.lead,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mojokerto",
          addressRegion: "East Java",
          addressCountry: "ID",
        },
        sameAs: [site.github, site.linkedin],
        knowsLanguage: [
          { "@type": "Language", name: "Indonesian" },
          { "@type": "Language", name: "English" },
        ],
        knowsAbout: Array.from(new Set(skillGroups.flatMap((group) => group.items))).sort(),
        alumniOf: [
          {
            "@type": "CollegeOrUniversity",
            name: "Politeknik Negeri Madiun",
          },
          { "@type": "EducationalOrganization", name: "SMK TI Bali Global" },
        ],
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          name: "English Proficiency Test",
          educationalLevel: "Score 527 (TOEIC equivalent)",
        },
        worksFor: {
          "@type": "Organization",
          name: "BisChat (AIRSID LTD)",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: `${site.name} — Portfolio`,
        description,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "ItemList",
        name: "Mobile app projects",
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "SoftwareApplication",
            name: project.name,
            applicationCategory: "MobileApplication",
            operatingSystem: "Android, iOS",
            description: project.impact,
            author: { "@id": personId },
            ...(project.links.length > 0 ? { sameAs: project.links.map((link) => link.href) } : {}),
          },
        })),
      },
    ],
  };
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-white font-sans text-ink-950">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded focus:bg-ink-950 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildJsonLd()).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
