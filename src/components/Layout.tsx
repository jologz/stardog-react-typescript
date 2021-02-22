import Container from '@material-ui/core/Container'
import React, { FC } from 'react'

const Layout: FC = ({ children }) => {
    return (
        <Container maxWidth="xl">
            <>{children}</>
        </Container>
    )
}

export default Layout
