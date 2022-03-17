import React from 'react'
import './Header.scss'

const Header = ({title}) => {
    return (
        <header className='Header'>
            <h1 className='Header__title'>{title}</h1>
        </header>
    )
}

export default Header