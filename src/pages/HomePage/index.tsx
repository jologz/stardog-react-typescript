import Link from '@material-ui/core/Link'
import { ColDef, RowsProp } from '@material-ui/data-grid'
import { caseNumbersQuery } from 'queries/caseNumbersQuery'
import { FC, useEffect, useMemo, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useQuery } from 'stardog/useQuery'
import CaseNumbersTable, {
    CaseNumbersDataKey,
    RowPropType,
} from './components/CaseNumbersTable'

const HomePage: FC = () => {
    const [
        runCaseNumbersQuery,
        { loading, error, data },
    ] = useQuery<CaseNumbersDataKey>()

    const columns = useMemo(
        (): ColDef[] => [
            {
                field: 'countyName' as CaseNumbersDataKey,
                headerName: 'County Name',
                width: 250,
            },
            {
                field: 'percentCases' as CaseNumbersDataKey,
                headerName: 'Percent Cases',
                width: 150,
            },
            {
                field: 'population' as CaseNumbersDataKey,
                headerName: 'Population',
                width: 150,
            },
            {
                field: 'cases' as CaseNumbersDataKey,
                headerName: 'Cases',
                width: 150,
            },
            {
                field: 'lat' as CaseNumbersDataKey,
                headerName: 'Latitude',
                width: 150,
            },
            {
                field: 'lng' as CaseNumbersDataKey,
                headerName: 'Longitude',
                width: 150,
            },
        ],
        []
    )

    const [caseNumbersRows, setCaseNumbersRows] = useState<RowsProp>([])

    // extract only the values from DataProps
    // and map it back to the CaseNumbersDataKey record.
    useEffect(() => {
        if (!data) return

        const rows = data.map((currentDataProp, idx) => {
            const currentKeys = Object.keys(
                currentDataProp
            ) as CaseNumbersDataKey[]
            const updatedObj = currentKeys.reduce(
                (accumObj: Record<RowPropType, string>, currentKey) => {
                    accumObj[currentKey] = currentDataProp[currentKey].value
                    return accumObj
                },
                {} as Record<RowPropType, string>
            )

            updatedObj.id = idx.toString()

            return updatedObj
        })

        setCaseNumbersRows(rows)
    }, [data])

    useEffect(() => {
        runCaseNumbersQuery({
            readQuery: caseNumbersQuery,
        })
    }, [runCaseNumbersQuery])

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error getting data...</div>

    return (
        <>
            <CaseNumbersTable rows={caseNumbersRows} columns={columns} />
            <Link component={RouterLink} to="/heatmap">
                Heatmap
            </Link>
        </>
    )
}

export default HomePage
