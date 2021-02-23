import { CaseNumbersDataKey } from 'pages/HomePage/components/CaseNumbersTable'
import { DataProps } from 'stardog/useQuery'
import { CaseNumbersDataUpdate, CaseNumbersDataUpdateAction } from './types'

export const caseNumbersDataUpdateData = (
    caseNumbersData: Record<CaseNumbersDataKey, DataProps>[]
): CaseNumbersDataUpdateAction => ({
    type: CaseNumbersDataUpdate,
    caseNumbersData,
})
