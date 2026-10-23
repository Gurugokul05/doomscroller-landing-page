import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { seo, site } from "./src/content.js";

const tokens = {
  SITE_NAME: site.name,
  SITE_VERSION: site.version,
  SITE_URL: seo.url,
  SITE_TITLE: seo.title,
  SITE_DESCRIPTION: seo.description,
  SITE_GITHUB: site.github,
  SITE_NPM: site.npm,
  SITE_LICENSE: site.licenseUrl,
  SITE_OG_IMAGE: seo.image,
  SITE_THEME_COLOR: site.themeColor,
};

/**
 * Replaces %TOKEN% placeholders in index.html using values from src/content.js,
 * so links and metadata stay editable in one file.
 * Runs pre-Vite so Vite's own %..% handling never sees these tokens.
 */
function htmlContent() {
  return {
    name: "doomscroller-html-content",
    transformIndexHtml: {
      order: "pre",
      handler(html) {
        return html.replace(/%([A-Z_]+)%/g, (match, key) =>
          key in tokens ? tokens[key] : match
        );
      },
    },
  };
}

export default defineConfig({
  plugins: [htmlContent(), react(), tailwindcss()],
  build: {
    target: "es2020",
    cssCodeSplit: true,
  },
});
