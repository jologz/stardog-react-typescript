import { Typography } from '@material-ui/core'
import { ColDef, DataGrid, RowsProp } from '@material-ui/data-grid'

export type CaseNumbersDataKey =
    | 'cases'
    | 'countyName'
    | 'percentCases'
    | 'population'
    | 'lat'
    | 'lng'

export type RowPropType = 'id' | CaseNumbersDataKey

export interface CaseNumbersTableProps {
    rows: RowsProp
    columns: ColDef[]
}

const CaseNumbersTable = ({ rows, columns }: CaseNumbersTableProps) => {
    return (
        <>
            <Typography component="h2">
                COVID19 Counties With Most Cases
            </Typography>
            <div style={{ width: 1010, height: 600 }}>
                <DataGrid rows={rows} columns={columns} />
            </div>
        </>
    )
}

export default CaseNumbersTable
