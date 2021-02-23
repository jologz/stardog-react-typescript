import { CombinedState, combineReducers } from 'redux'
import { IAppState } from './appTypes'
import { caseNumbersReducer } from './caseNumbers/reducers'

export const appReducer = combineReducers<IAppState>({
    caseNumbersData: caseNumbersReducer,
})

export type AppState = CombinedState<IAppState>
