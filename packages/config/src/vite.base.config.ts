import { resolve } from "path"
import { UserConfig } from "vite"
import dts from "vite-plugin-dts"

export const viteDefaultConfig: UserConfig = {
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
