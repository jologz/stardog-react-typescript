import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

export const baseThemeOverride = responsiveFontSizes(
    createMuiTheme({
        typography: {
            button: {
                textTransform: 'unset',
            },
        },
    })
)
