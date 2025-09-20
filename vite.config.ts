import { defineConfig } from "vite";

import { extname, relative, resolve } from "path";
import { fileURLToPath } from "node:url";
import { glob } from "glob";

import solid from "vite-plugin-solid";
import solidSvg from "vite-plugin-solid-svg";
import tsconfigPaths from "vite-tsconfig-paths";
// import visualizer from "vite-bundle-analyzer";
// import { optimizeCssModules } from "vite-plugin-optimize-css-modules";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig({
  plugins: [
    solid(),
    tsconfigPaths(),
    solidSvg({
      defaultAsComponent: true,
      svgo: {
        enabled: true,
      },
    }),
    dts({ rollupTypes: true }),
    libInjectCss(),
    // visualizer(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "@tma-solidjs/ui",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["solid-js", "solid-js/web", "solid-js/store"],
      input: Object.fromEntries(
        glob
          .sync("src/**/*.{ts,tsx}", {
            ignore: ["src/**/*.d.ts", "src/**/*.stories.tsx"],
          })
          .map((file) => [
            relative("src", file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
    outDir: "dist",
    emptyOutDir: false,
    cssMinify: "lightningcss",
    cssCodeSplit: true,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info", "console.debug"],
      },
      format: {
        comments: false,
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        require("autoprefixer")({
          overrideBrowserslist: ["> 1%", "last 2 versions", "not dead"],
        }),
      ],
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
