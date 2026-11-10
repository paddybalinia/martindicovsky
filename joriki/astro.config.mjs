import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://joriki.martindicovsky.com.ar",
  trailingSlash: "never",
  build: {
    inlineStylesheets: "always",
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("404"),
      serialize(item) {
        const path = new URL(item.url).pathname.replace(/\/$/, "") || "/";
        item.changefreq = "monthly";
        item.priority = path === "/" ? 1.0 : 0.8;
        return item;
      },
    }),
  ],
});
