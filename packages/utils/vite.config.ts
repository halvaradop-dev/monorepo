import { config } from "@halvaradop/repo-config/vite.base.config"
import { defineConfig } from "vite"
export default defineConfig({
    ...config,
    build: {
        lib: {
            entry: "src/index.ts"
        }
    }
})