import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = process.env.PUBLIC_SITE_URL || undefined;

export default defineConfig({
  site,
  trailingSlash: "never",
  build: {
    inlineStylesheets: "always",
  },
  integrations: site
    ? [
        sitemap({
          filter: (page) => !page.includes("404"),
        }),
      ]
    : [],
});
