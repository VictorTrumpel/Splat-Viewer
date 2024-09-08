import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      enableBuild: false,
      typescript: {
        tsconfigPath: "./tsconfig.json",
      },
    }),
  ],
  resolve: {
    alias: {
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@entities": path.resolve(__dirname, "./src/entities"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@widgets": path.resolve(__dirname, "./src/widgets"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@gsplat/core": path.resolve(__dirname, "./src/gsplat/core"),
      "@gsplat/feature": path.resolve(__dirname, "./src/gsplat/feature"),
      "@gsplat/config": path.resolve(__dirname, "./src/gsplat/config"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
  test: {
    globals: true,
    cache: { dir: "./node_modules/.vitest" },
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    reporters: ["default"],
    coverage: {
      reportsDirectory: "./src",
      provider: "v8",
    },
  },
});
