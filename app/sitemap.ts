import type { MetadataRoute } from "next";

const baseUrl = "https://novary.dev";

const portfolioSlugs = ["cutly", "veyra", "atlas", "orto", "lumen", "studio"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: `${baseUrl}/consulenza`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8
    },
    ...portfolioSlugs.map((slug) => ({
      url: `${baseUrl}/portfolio/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  ];
}
