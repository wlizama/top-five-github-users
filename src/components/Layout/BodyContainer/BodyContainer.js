import React from 'react'
import { Outlet } from 'react-router-dom'

import './BodyContainer.scss'

const BodyContainer = () => {
    return (
        <main className='BodyContainer'>
            <Outlet />
        </main>
    )
}

export default BodyContainer