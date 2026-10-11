import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/paket", priority: 0.9 },
    { path: "/about", priority: 0.7 },
  ];
  return routes.map((r) => ({
    url: `${siteUrl}${r.path}`,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
