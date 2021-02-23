import { mainRouting } from 'mainRouting'
import NotFoundPage from 'pages/NotFoundPage'
import React from 'react'
import { Route, Switch } from 'react-router-dom'

const App = () => {
    return (
        <Switch>
            {mainRouting().map(({ ChildComponent, computedPath, ...rest }) => (
                <Route path={computedPath} {...rest}>
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
