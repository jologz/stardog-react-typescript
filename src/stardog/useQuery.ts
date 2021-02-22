import { useCallback, useContext, useState } from 'react'
import { query } from 'stardog'
import { StardogContext, StardogContextProps } from './StardogContext'

export interface ErrorResponse {
    status: number
    statusText: string
}

export interface DataProps {
    datatype?: string
    type: string
    value: string
}

export type RowDataType<TKey extends string> = Record<TKey, DataProps>

export interface UseQueryResultProps<TKey extends string> {
    error?: ErrorResponse
    loading: boolean
    data: RowDataType<TKey>[] | null
}

export interface RunQueryProps {
    readQuery: string
}

export const useQuery = <TKey extends string>(): [
    (runQueryProps: RunQueryProps) => Promise<void>,
    UseQueryResultProps<TKey>
] => {
    const { connection, dbName } = useContext<StardogContextProps>(
        StardogContext
    )
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<ErrorResponse>()
    const [data, setData] = useState<RowDataType<TKey>[] | null>(null)

    const runQuery = useCallback(
        async ({ readQuery }: RunQueryProps) => {
            setLoading(true)
            const response = await query.execute(connection, dbName, readQuery)

            if (!response.ok) {
                setError({
                    status: response.status,
                    statusText: response.statusText,
                })
                setLoading(false)
                return
            }

            const { bindings } = response.body.results
            setData(bindings as RowDataType<TKey>[])
            setLoading(false)
        },
        [connection, dbName]
    )

    return [
        runQuery,
        {
            error,
            loading,
            data,
        },
    ]
}
