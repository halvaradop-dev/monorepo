import { UserConfig } from "vite"

export const config = {
    build: {
        lib: {
            entry: "src/index.ts",
            formats: ["es", "cjs"],
            name: "index"
        },
        rollupOptions: {
            external: ["tailwind-merge"],
        },
    },
} as UserConfig
