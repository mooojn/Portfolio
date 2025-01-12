import { useState } from 'react'
import Cs from '../assets/cs.svg'
import Cpp from '../assets/c++.svg'
import NodeJs from '../assets/nodejs.svg'
import Python from '../assets/python.svg'
import ReactJs from '../assets/react.svg'

import '../styles/Skills.css'

function Skill() {
    const logos = [Cpp, Cs, Python, ReactJs, NodeJs]
    return (
        <div className='skills'>
            <h1>Skills</h1>
            <div className='skills-item'>
                {logos.map((logo, index) => (
                    <img className='skills-logo' key={index} src={logo} alt={`logo-${index}`} />
                ))}
            </div>
        </div>
    )
}

export default Skill
