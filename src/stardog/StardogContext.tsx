import { createContext, FC } from 'react'
import { Connection } from 'stardog'

export interface StardogContextProps {
    connection: Connection
    dbName: string
}

export const StardogContext = createContext<StardogContextProps>({
    connection: {} as Connection,
    dbName: '',
})

export interface StardogProviderProps {
    username: string
    password: string
    endpoint: string
    dbName: string
}

export const StardogProvider: FC<StardogProviderProps> = ({
    username,
    password,
    endpoint,
    dbName,
    children,
}) => {
    const connection = new Connection({
        username,
        password,
        endpoint,
    })

    return (
        <StardogContext.Provider
            value={{
                connection,
                dbName,
            }}
        >
            {children}
        </StardogContext.Provider>
    )
}
