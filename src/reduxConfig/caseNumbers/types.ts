import { CaseNumbersDataKey } from 'pages/HomePage/components/CaseNumbersTable'
import { DataProps } from 'stardog/useQuery'

export const CaseNumbersDataUpdate = 'CaseNumbersDataUpdate'

export interface CaseNumbersDataUpdateAction {
    type: typeof CaseNumbersDataUpdate
    caseNumbersData: Record<CaseNumbersDataKey, DataProps>[]
}

export type CaseNumbersDataActionTypes = CaseNumbersDataUpdateAction
