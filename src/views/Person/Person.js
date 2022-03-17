import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import './Person.scss'

const Person = () => {

    const [userData, setUserData] = useState({});

    const { name } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://api.github.com/users/${name}`);
            const userData = await response.json();
            setUserData(userData);
        }
        if (name)
            fetchData();

    }, [name]);

    return (
        <section className='Person'>
            <img 
                src={userData.avatar_url} 
                title='Avatar' 
                className='Person__avatar'
            />
            <div className='Person__data'>
                <h3 className='Person__data-name'>{userData.name}</h3>
                <h5 className='Person__data-location'>{userData.location}</h5>
            </div>
        </section>
    )
}

export default Person