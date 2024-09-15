/**
 *
 * @param external
 */
export const externalAsync = async (external: (...args: any) => void) => {
    // fetching data
    external()
}

export const config: Record<string, string> = {
    path: "./src",
    name: "utils",
}