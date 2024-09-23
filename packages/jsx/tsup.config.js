import { defineConfig } from "tsup"

const config = {
    entry: ["src/index.tsx"],
    clean: true,
    dts: true,
    outDir: "dist",
    external: ["tailwindcss"],
    format: ["esm", "cjs"],
    minify: true,
}

export default defineConfig(config)