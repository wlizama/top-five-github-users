import React from 'react'
import {
    Link,
} from 'react-router-dom'
import './Home.scss'

const Home = () => {

    const usernames = ["GrahamCampbell","fabpot","weierophinney","rkh","josh"];

    return (
        <section className='Home'>
            <h2 className='Home__title'>Top 5 GitHub Users</h2>
            <h5 className='Home__subtitle'>Tap the username to see more information</h5>
            <ul className='Home__list'>
                {usernames.map(username => (
                <li 
                    key={username}
                    className='Home__list-item'
                >
                    <Link to={`/person/${username}`}>{username}</Link>
                </li>
                ))}
            </ul>
        </section>
    )
}

export default Home