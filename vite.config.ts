import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    outDir: "dist/utils",
    emptyOutDir: false,
    rollupOptions: {
      input: {
        dexieHelpers: resolve(__dirname, "ts/utils/dexieHelpers.ts"),
        historyStorageService: resolve(
          __dirname,
          "ts/utils/historyStorageService.ts",
        ),
        sharedStructureService: resolve(
          __dirname,
          "ts/utils/sharedStructureService.ts",
        ),
      },
      output: {
        format: "es",
        entryFileNames: "[name].js",
        chunkFileNames: "[name]-[hash].js",
      },
    },
  },
});
