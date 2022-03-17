import React from 'react'
import imgBack from '../../../assets/images/back.png'
import { useNavigate } from "react-router-dom"

import './Header.scss'

const Header = ({ title, showBackButton}) => {

    const navigate = useNavigate();

    return (
        <header className='Header'>
            {showBackButton && 
            <button className='Header__back-button' onClick={() => navigate(-1)}>
                <img  src={imgBack} title='Back image' />
                Back
            </button>
            }
            <h1 className='Header__title'>
                {title}
            </h1>
        </header>
    )
}

export default Header