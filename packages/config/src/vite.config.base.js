import { resolve } from "path"
import dts from "vite-plugin-dts"

/**
 * Default Vite configuration
 * @type {import("vite").UserConfig}
 */
export const config = {
    plugins: [
        dts({
            outDir: "dist",
            tsconfigPath: "./tsconfig.json",
        }),
    ],
    build: {
        lib: {
            entry: resolve("src/index.ts"),
            formats: ["es", "cjs"],
            fileName: "index",
        },
        outDir: "dist",
        copyPublicDir: false,
        rollupOptions: {
            external: ["tailwind-merge", "tailwindcss", "postcss", "react", "react-dom"],
        },
    },
}
