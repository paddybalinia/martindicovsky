import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.martindicovsky.com.ar",
  build: {
    inlineStylesheets: "always",
  },
});
