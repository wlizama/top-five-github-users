import React from 'react'
import Header from './Header'
import BodyContainer from './BodyContainer'

const Layout = ({ children, title, showBackButton }) => {
    return (
        <>
            <Header title={title} showBackButton={showBackButton} />
            <BodyContainer>
                {children}
            </BodyContainer>
        </>
    )
}

export default Layout