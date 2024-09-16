
type Args = (...args: any) => void

/**
 * 
 */
export const externalAsync = async (args: Args) => {
    args()
}