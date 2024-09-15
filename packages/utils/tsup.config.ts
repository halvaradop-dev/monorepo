import { defineConfig } from "tsup"

export default defineConfig([
    {
        entry: ["src/*.ts"],
        format: ["esm"],
        outDir: "dist",
        dts: {
            only: true,
        },
        minify: true,
        splitting: false,
        clean: true,
    },
])
