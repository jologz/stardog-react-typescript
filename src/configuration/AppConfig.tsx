import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import React, { FC } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import configureStore from 'reduxConfig/configureStore'
import { StardogProvider } from 'stardog/StardogContext'
import { baseThemeOverride } from './baseThemeOverride'
import RouterConfig from './RouterConfig'

export const store = configureStore()

const AppConfig: FC = ({ children }) => {
    return (
        <ReduxProvider store={store}>
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
        </ReduxProvider>
    )
}

export default AppConfig
