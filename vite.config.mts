import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite configuration for the anniversary site
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    hmr: {
      overlay: false
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
});

