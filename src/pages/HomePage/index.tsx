import { RowsProp } from '@material-ui/data-grid'
import { FC, useEffect, useState } from 'react'
import { useQuery } from 'stardog/useQuery'
import CaseNumbersTable, {
    CaseNumbersDataKey,
    CaseNumbersTableProps,
    RowPropType,
} from './components/CaseNumbersTable'

const HomePage: FC = () => {
    const { loading, error, data } = useQuery<CaseNumbersDataKey>({
        query: `PREFIX wd: <http://www.wikidata.org/entity/>
        PREFIX wdt: <http://www.wikidata.org/prop/direct/>
        
        SELECT ?countyName ?cases ?population ?percentCases 
        {
            # get the latest date
            { SELECT (max(?d) as ?date) { ?r :date ?d } }
        
            # get all the reports for the latest date
            ?report
                :cases ?cases  ;
                :date ?date ;                
                :county [
                    rdfs:label ?countyName ;
                    :fips ?fips
                ]                
        
            # look up the population of the county from Wikidata using the FIPS code
            SERVICE <https://query.wikidata.org/sparql> 
            {
                [
                    wdt:P1082 ?population ;
                    wdt:P882 ?fips
                ]     
            }   
        
            # compute percentages
            BIND(roundHalfToEven((?cases / ?population) * 100, 2) AS ?percentCases)
        }
        ORDER BY desc(?percentCases)`,
    })

    const [
        caseNumbersTableProps,
        setCaseNumbersTableProps,
    ] = useState<CaseNumbersTableProps>({
        rows: [],
        columns: [
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
        ],
    })

    const rows: RowsProp = [{}]

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

        setCaseNumbersTableProps({
            ...caseNumbersTableProps,
            rows,
        })
    }, [data])

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error getting data...</div>

    return <CaseNumbersTable {...caseNumbersTableProps} />
}

export default HomePage
