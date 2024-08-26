import { defineConfig } from "vite";
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig({
  plugins: [wasm(), topLevelAwait()],
  build: {
    outDir: "./docs",
    emptyOutDir: true, // also necessary
    rollupOptions: {
      external: [],
      plugins: [wasm()],
    },
    minify: false,
  },
});
