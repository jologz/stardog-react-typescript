import { CaseNumbersDataKey } from 'pages/HomePage/components/CaseNumbersTable'
import { DataProps } from 'stardog/useQuery'
import { CaseNumbersDataActionTypes, CaseNumbersDataUpdate } from './types'

export const caseNumbersReducer = (
    state = [] as Record<CaseNumbersDataKey, DataProps>[],
    action: CaseNumbersDataActionTypes
): Record<CaseNumbersDataKey, DataProps>[] => {
    switch (action.type) {
        case CaseNumbersDataUpdate:
            return action.caseNumbersData
        default:
            return state
    }
}
