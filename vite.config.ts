import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/", // 👈 Set correct base path for Netlify, Vercel, etc. (adjust if deploying to subfolder)
  server: {
    host: "::", // Can also use '0.0.0.0' if IPv6 causes issues
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist", // default, but you can customize
    sourcemap: false, // set to true if you want debug maps
    minify: "esbuild", // default: fast production build
  },
}));
