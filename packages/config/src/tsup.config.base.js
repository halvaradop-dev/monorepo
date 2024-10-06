/**
 * Default tsup configuration
 *
 * @type {import("tsup").Options}
 */
export const configTsup = {
    entry: ["src"],
    clean: true,
    dts: true,
    outDir: "dist/tsup",
    external: ["tailwindcss", "vite"],
    format: ["esm", "cjs"],
    minify: true,
}
