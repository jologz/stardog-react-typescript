import { envConfig } from 'envConfig'
import GoogleMapReact, { Coords, Position } from 'google-map-react'
import { CaseNumbersDataKey } from 'pages/HomePage/components/CaseNumbersTable'
import { caseNumbersQuery } from 'queries/caseNumbersQuery'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from 'reduxConfig/appState'
import { caseNumbersDataUpdateData } from 'reduxConfig/caseNumbers/actions'
import { useQuery } from 'stardog/useQuery'

const HeatMapPage = () => {
    const { caseNumbersData } = useSelector((state: AppState) => state)
    const dispatch = useDispatch()
    const [
        runCaseNumbersQuery,
        { loading, error, data },
    ] = useQuery<CaseNumbersDataKey>()

    const [positions, setPositions] = useState<Position[]>([])

    const defaultCenter: Coords = {
        lat: 39.8283,
        lng: -98.5795,
    }
    const defaultZoom = 5

    useEffect(() => {
        if (!caseNumbersData.length) {
            runCaseNumbersQuery({
                readQuery: caseNumbersQuery,
            })
            return
        }

        const computedPositions = caseNumbersData.map(
            (currentDataProp, idx) => {
                const currentKeys = Object.keys(
                    currentDataProp
                ) as CaseNumbersDataKey[]

                const position = currentKeys
                    .filter((currentKey) =>
                        ['lat', 'lng', 'percentCases'].includes(currentKey)
                    )
                    .reduce((accumObj: any, currentKey) => {
                        if (currentKey === 'percentCases') {
                            accumObj.weight = Number(
                                currentDataProp[currentKey].value
                            )
                        } else {
                            accumObj[currentKey] = Number(
                                currentDataProp[currentKey].value
                            )
                        }
                        return accumObj
                    }, {}) as Position

                return position
            }
        )
        setPositions(computedPositions)
    }, [runCaseNumbersQuery, caseNumbersData])

    useEffect(() => {
        if (!data) return
        dispatch(caseNumbersDataUpdateData(data))
    }, [data, dispatch])

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error getting data...</div>

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: envConfig.googleApiKey ?? '',
                    libraries: ['visualization'],
                }}
                defaultCenter={defaultCenter}
                defaultZoom={defaultZoom}
                heatmap={{
                    positions,
                    options: {
                        opacity: 0.6,
                        radius: 50,
                    },
                }}
            ></GoogleMapReact>
        </div>
    )
}

export default HeatMapPage
