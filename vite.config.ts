import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  // Removed base path (deploy to root) or set explicitly
  base: process.env.VITE_BASE_PATH || "/",
  
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Optimize for Vercel
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,
  },
}));