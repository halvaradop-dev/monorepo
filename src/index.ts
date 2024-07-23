import { ArgsFunction, Prettify } from "@halvaradop/ts-utility-types"


export const executeAsync = (fun: ArgsFunction) => {
    // EXECUTE
}

export interface Store {
    storage: any[],
    index: number
}

export interface Config {
    plugins: any[]
}

export type StoreConfig = Prettify<Store & Config>

const config: StoreConfig = {
    index: 0,
    plugins: [],
    storage: []
}

console.log(config)