import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import Sitemap from "vite-plugin-sitemap";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({
      hostname: "https://tripodis-legal.vercel.app/" // Replace with your actual domain
      // dynamicRoutes: ['/blog/:slug', '/products/:id'],
    })
  ]
});
