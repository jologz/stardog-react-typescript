import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import AppConfig from './configuration/AppConfig'

ReactDOM.render(
    <React.StrictMode>
        <AppConfig>
            <App />
        </AppConfig>
    </React.StrictMode>,
    document.getElementById('root')
)
