import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Vite inlines assets under 4 KB as base64 data URIs. The project covers
    // sit just under that, and inlining them would bury ~30 KB in the main JS
    // bundle — downloaded up front, where `loading="lazy"` can't help. Emit
    // every asset as its own cacheable file instead.
    assetsInlineLimit: 0,
  },
});
