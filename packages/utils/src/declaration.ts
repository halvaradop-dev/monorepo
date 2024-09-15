export interface Params {
    searchParams: URLSearchParams
    url: string
    query: string
}

export type PartialParams = Partial<Params>
