import { CaseNumbersDataKey } from 'pages/HomePage/components/CaseNumbersTable'
import { DataProps } from 'stardog/useQuery'
import { CaseNumbersDataActionTypes } from './caseNumbers/types'

export type AppActionTypes = CaseNumbersDataActionTypes

export interface IAppState {
    caseNumbersData: Record<CaseNumbersDataKey, DataProps>[]
}
