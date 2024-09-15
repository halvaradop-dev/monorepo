/**
 *
 * @param external
 */
export const externalAsync = async (external: (...args: any) => void) => {
    // fetching data
    external()
}
