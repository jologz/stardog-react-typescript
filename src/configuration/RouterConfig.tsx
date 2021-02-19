import React, { FC } from 'react'
import { useLocation } from 'react-router-dom'
import ForbiddenPage from '../pages/ForbiddenPage'
import NotFoundPage from '../pages/NotFoundPage'

const RouterConfig: FC = ({ children }) => {
    const location = useLocation()

    if ((location?.state as any)?.notFound) {
        return <NotFoundPage />
    }

    if ((location?.state as any)?.forbidden) {
        return <ForbiddenPage />
    }

    return <>{children}</>
}

export default RouterConfig
