import { defineConfig } from "vitest/config"

export default defineConfig({
    test: {
        include: ["**/test/**/*.test.ts"],
        coverage: {
            provider: "v8",
            reporter: ["text", "html"],
            include: ["packages/**/src/**/*.{ts,tsx}"],
            exclude: ["**/node_modules", "**/dist"],
        },
    },
})
