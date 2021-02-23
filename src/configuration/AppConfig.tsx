import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import React, { FC } from 'react'
import { HashRouter } from 'react-router-dom'
import { StardogProvider } from 'stardog/StardogContext'
import { baseThemeOverride } from './baseThemeOverride'
import RouterConfig from './RouterConfig'

const AppConfig: FC = ({ children }) => {
    return (
        <StardogProvider
            dbName="covid19nyt"
            username="anonymous"
            password="anonymous"
            endpoint="https://express.stardog.cloud:5820"
        >
            <HashRouter>
                <RouterConfig>
                    <CssBaseline />
                    <ThemeProvider theme={baseThemeOverride}>
                        {children}
                    </ThemeProvider>
                </RouterConfig>
            </HashRouter>
        </StardogProvider>
    )
}

export default AppConfig
