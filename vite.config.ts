import { defineConfig } from "vite";
import path from "node:path";

import solidPlugin from "vite-plugin-solid";
import svgr from "vite-plugin-solid-svg";

import { compilerOptions } from "./tsconfig.json";

export default defineConfig({
  base: "/",
  appType: "spa",
  publicDir: "public",
  assetsInclude: ["**/*.tgs"],
  plugins: [solidPlugin(), svgr({ defaultAsComponent: true })],
  build: {
    sourcemap: false,
    cssCodeSplit: true,
    cssMinify: "lightningcss",
    outDir: compilerOptions.outDir,
    minify: "terser",
    manifest: false,
    terserOptions: {
      maxWorkers: 2,
      compress: {
        drop_debugger: true,
        drop_console: true,
      },
    },
  },
  server: {
    port: 3000,
    strictPort: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
