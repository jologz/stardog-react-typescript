import { FC } from 'react'
import { pipe } from './compose'
import { convertStringUndefinedToStringEmpty } from './stringHelpers'

export interface RouteType {
    path: string | string[]
    exact: boolean
    childComponent: FC
}

export const appendRouteMatchUrlToPath = (matchUrl: string) => (
    path: string | string[]
) =>
    typeof path === 'string'
        ? matchUrl + path
        : (path as string[]).map((thisPath) => matchUrl + thisPath)

export interface GenerateRoutesResponseProps {
    exact: boolean
    computedPath: string | string[]
    key: string
    ChildComponent: FC
}

export const generateRoutes = (routes: RouteType[]) => (
    routeMatchUrl?: string
): GenerateRoutesResponseProps[] =>
    routes.map(({ path, exact, childComponent: ChildComponent }, idx) => {
        const computedPath = pipe(
            convertStringUndefinedToStringEmpty,
            appendRouteMatchUrlToPath
        )(routeMatchUrl)(path)

        return {
            ChildComponent,
            computedPath,
            key: idx.toString(),
            exact,
        }
    })
