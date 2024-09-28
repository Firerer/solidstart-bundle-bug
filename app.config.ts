import { defineConfig } from "@solidjs/start/config";
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

// config vite to use npm package sqlite-wasm at dev mode

export default defineConfig({
  ssr: false,
  // https://vitejs.dev/config
  vite: {
    // optimizeDeps: {
    //   exclude: ["@sqlite.org/sqlite-wasm"],
    // },
    plugins: [
      // https://github.com/Menci/vite-plugin-wasm#readme
      wasm(),
      topLevelAwait(),
    ],
  },
});
