import { ColDef, DataGrid, RowsProp } from '@material-ui/data-grid'

export type CaseNumbersDataKey =
    | 'cases'
    | 'countyName'
    | 'percentCases'
    | 'population'

export type RowPropType = 'id' | CaseNumbersDataKey

export interface CaseNumbersTableProps {
    rows: RowsProp
    columns: ColDef[]
}

const CaseNumbersTable = ({ rows, columns }: CaseNumbersTableProps) => {
    return (
        <div style={{ width: 710, height: 600 }}>
            <DataGrid rows={rows} columns={columns} />
        </div>
    )
}

export default CaseNumbersTable
