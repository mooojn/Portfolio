import { useState } from 'react'
import '../styles/Header.css'

function Header() {

    return (
        <>
            <div className='nav'>
                <img src="./logo.svg" alt="logo" className='logo' />
                <p>Munees Tariq</p>
                <div className='nav-items'>
                    <ul>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Services</li>
                        <li>About</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header
