import { PROJECTS } from "@/lib/static_data/project-data";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.kesanglama.com.np";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  // Mapping to the /portfolio/[id] structure
  const projectPages: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${baseUrl}/portfolio/${project.id}`, 
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages];
}