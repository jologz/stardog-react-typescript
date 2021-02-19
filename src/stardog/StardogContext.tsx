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

export const StardogProvider: FC = ({ children }) => {
    const connection = new Connection({
        username: 'anonymous',
        password: 'anonymous',
        endpoint: 'https://express.stardog.cloud:5820',
    })
    const dbName = 'covid19nyt'

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
