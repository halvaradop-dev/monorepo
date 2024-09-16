import { resolve } from "path"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import excludeFromBundle from "rollup-plugin-exclude-dependencies-from-bundle"

export default defineConfig({
    plugins: [
        dts({
            outDir: "dist",
            tsconfigPath: "./tsconfig.json",
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            formats: ["cjs", "es"],
            fileName: "index",
        },
        outDir: "dist",
        copyPublicDir: false,
        rollupOptions: {
            external: ["clsx", "tw-merge", "tailwindcss"],
            plugins: [
                excludeFromBundle({
                    dependencies: ["clsx", "tw-merge", "tailwindcss"],
                    peerDependencies: true,
                }),
            ],
        },
    },
})
