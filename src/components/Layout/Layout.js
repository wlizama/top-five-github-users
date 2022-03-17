import React from 'react'
import Header from './Header'
import BodyContainer from './BodyContainer'

const Layout = ({ children, title }) => {
    return (
        <>
            <Header title={title} />
            <BodyContainer>
                {children}
            </BodyContainer>
        </>
    )
}

export default Layout