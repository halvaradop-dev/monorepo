/**
 * Default tsup configuration
 *
 * @type {import("tsup").Options}
 */
export const config = {
    entry: ["src"],
    clean: true,
    dts: true,
    outDir: "dist",
    external: ["tailwindcss", "vite"],
    format: ["esm", "cjs"],
    minify: true,
}
