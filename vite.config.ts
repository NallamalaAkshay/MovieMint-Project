import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

const faviconVersion = Date.now();

export default defineConfig({
  plugins: [tailwindcss()],
  root: "src",              // Source code is inside src/
  publicDir: "../public",   // Static assets outside src
  base: "/MovieMint-Project/",   // 👈 Required for GitHub Pages deployment
  server: {
    port: 3000,
    open: "/",
    strictPort: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: "src/index.html",
        browse: "src/browse.html",
        single: "src/single.html",
        watch: "src/watch.html",
        about: "src/about.html",
        contact: "src/contact.html",
        privacy: "src/privacy.html",
        rtl: "src/rtl.html",
        404: "src/404.html",
      },
    },
    outDir: "../dist",
    emptyOutDir: true,
  },
  define: {
    __FAVICON_VERSION__: JSON.stringify(faviconVersion),
  },
});
