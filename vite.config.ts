import { defineConfig } from "vite";
import path from "path";

import solid from "vite-plugin-solid";
import tsconfigPaths from "vite-tsconfig-paths";
// import visualizer from "vite-bundle-analyzer";
import { optimizeCssModules } from "vite-plugin-optimize-css-modules";

export default defineConfig({
  plugins: [
    solid(),
    tsconfigPaths(),
    // visualizer(),
    optimizeCssModules({
      apply: "build",
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@tma-solidjs/ui",
      formats: ["es", "cjs"],
      fileName: (format) => `ui.${format}.js`,
    },
    rollupOptions: {
      external: ["solid-js", "solid-js/web", "solid-js/store"],
      output: {
        globals: {
          "solid-js": "solidJs",
        },
      },
    },
    outDir: "dist",
    emptyOutDir: true,
    cssMinify: "lightningcss",
    cssCodeSplit: true,
    minify: "terser",
    terserOptions: {
      ecma: 2020,
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info", "console.debug"],
        passes: 3,
        keep_fargs: false,
        toplevel: true,
        unsafe: true,
        unsafe_arrows: true,
        unsafe_comps: true,
        unsafe_Function: true,
        unsafe_math: true,
        unsafe_methods: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true,
      },
      mangle: {
        toplevel: true,
        properties: {
          regex: /^_/,
        },
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
      "@": path.resolve(__dirname, "src"),
    },
  },
});
