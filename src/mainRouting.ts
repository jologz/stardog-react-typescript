import { generateRoutes, RouteType } from 'helpers/routeHelpers'
import HomePage from 'pages/HomePage'

export const mainRoutes: RouteType[] = [
    {
        path: ['/', '/home'],
        exact: true,
        childComponent: HomePage,
    },
]

export const mainRouting = generateRoutes(mainRoutes)
