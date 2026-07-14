import type { MetadataRoute } from "next";
import { cars } from "@/lib/cars";
import { newsPosts } from "@/lib/news";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...cars.map((car) => ({
      url: `${siteConfig.url}/xe/${car.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...newsPosts.map((post) => ({
      url: `${siteConfig.url}/tin-tuc/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
