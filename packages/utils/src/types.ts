export type ArgsMethod = (...args: any) => void
export type ArgsAsyncMethod = Promise<ArgsMethod>
export type ReturnType<T extends ArgsMethod> = T extends (...args: any) => infer Return ? Return : never
