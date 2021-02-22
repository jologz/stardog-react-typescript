import Layout from 'components/Layout'
import { generateRoutes, RouteType } from 'helpers/routeHelpers'
import HomePage from 'pages/HomePage'

export const mainRoutes: RouteType[] = [
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
