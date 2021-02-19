import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import React, { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { StardogProvider } from 'stardog/StardogContext'
import { baseThemeOverride } from './baseThemeOverride'
import RouterConfig from './RouterConfig'

const AppConfig: FC = ({ children }) => {
    return (
        <StardogProvider>
            <Router>
                <RouterConfig>
                    <CssBaseline />
                    <ThemeProvider theme={baseThemeOverride}>
                        {children}
                    </ThemeProvider>
                </RouterConfig>
            </Router>
        </StardogProvider>
    )
}

export default AppConfig
