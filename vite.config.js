import { defineConfig } from "vite";
import wasm from "vite-plugin-wasm";

export default defineConfig({
  plugins: [wasm()],
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
