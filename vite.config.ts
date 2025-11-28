import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";



// IMPORTANT: Replace 'my-portfolio' with the EXACT name of your GitHub repository!
const repoName = '/fragrance-frame/';

export default defineConfig({
  base: repoName,
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});