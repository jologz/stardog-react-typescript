import Layout from 'components/Layout'
import { generateRoutes, RouteType } from 'helpers/routeHelpers'
import HeatMapPage from 'pages/HeatmapPage'
import HomePage from 'pages/HomePage'

export const mainRoutes: RouteType[] = [
    {
        path: '/heatmap',
        exact: true,
        childComponent: () => <HeatMapPage />,
    },
    {
        path: ['/', '/home'],
        exact: true,
        childComponent: () => (
            <Layout>
                <HomePage />
            </Layout>
        ),
    },
]

export const mainRouting = generateRoutes(mainRoutes)
