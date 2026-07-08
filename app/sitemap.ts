import type { MetadataRoute } from "next";

import { blogPosts } from "@/lib/blog-posts";
import { productSlugs } from "@/lib/products";
import { siteUrl } from "@/lib/site-metadata";

const lastModified = new Date("2026-07-08T00:00:00.000Z");

function pageUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl.toString(),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: pageUrl("/clients"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: pageUrl("/contact"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: pageUrl("/request-quote"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: pageUrl("/downloads"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: pageUrl("/certification"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: pageUrl("/blog"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];

  const productRoutes = productSlugs.map((slug) => ({
    url: pageUrl(`/product/${slug}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: pageUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: post.featured ? 0.7 : 0.5,
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}
