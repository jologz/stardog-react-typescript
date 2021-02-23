import { applyMiddleware, compose, createStore } from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import { appReducer, AppState } from './appState'

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}

const middlewares = [reduxImmutableStateInvariant()]

const configureStore = (initialState?: AppState) => {
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    return createStore(
        appReducer,
        initialState,
        composeEnhancers(applyMiddleware(...middlewares))
    )
}

export default configureStore
