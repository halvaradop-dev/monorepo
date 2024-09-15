import postcss from "postcss"
import tailwindcss from "tailwindcss"
import { test, expect } from "vitest"

const TAILWIND_UTILITIES_DIRECTIVE = "@tailwind utilities;"

export const generateClasses = async (className: string) => {
    const result = await postcss([
        tailwindcss({
            content: [{ raw: className }],
            corePlugins: { preflight: false },
            plugins: [],
        }),
    ]).process(TAILWIND_UTILITIES_DIRECTIVE, { from: undefined })
    return result.css
}

export const testing = async () => {
    const values = await generateClasses("<div class='bg-red-500 scroll:w-2'></div>")
}

test("testing", async () => {
    expect(true).toBe(true)
    const values = await generateClasses("<div class='bg-red-500 scroll:w-2'></div>")
    expect(values).contains("::webkit-scrollbar")
})
