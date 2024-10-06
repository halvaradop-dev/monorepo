import { resolve } from "path"
import dts from "vite-plugin-dts"

/**
 * Default Vite configuration
 * @returns {import("vite").UserConfig}
 */
export const configVite = (entry = "src/index.ts", inputRollup = "src/index.ts") => ({
    plugins: [
        dts({
            outDir: "dist/vite",
            tsconfigPath: "./tsconfig.json",
        }),
    ],
    build: {
        lib: {
            entry: resolve(entry),
            formats: ["es", "cjs"],
            fileName: "index",
        },
        outDir: "dist/vite",
        copyPublicDir: false,
        rollupOptions: {
            external: ["tailwind-merge", "tailwindcss", "postcss"],
            input: resolve(inputRollup),
        },
    },
})
