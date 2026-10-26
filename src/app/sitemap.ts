import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

/**
 * Single-page site. Anchors are not separate URLs, so the sitemap lists the
 * canonical root only.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
