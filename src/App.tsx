import NotFoundPage from 'pages/NotFoundPage'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { mainRouting } from './mainRouting'

const App = () => {
    return (
        <Switch>
            {mainRouting().map(({ ChildComponent, ...rest }) => (
                <Route {...rest}>
                    <ChildComponent />
                </Route>
            ))}
            <Route>
                <NotFoundPage />
            </Route>
        </Switch>
    )
}

export default App
