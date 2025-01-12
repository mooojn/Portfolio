import { useState } from 'react'
import cs from '../assets/skills/cs.svg'
import cpp from '../assets/skills/c++.svg'
import nodejs from '../assets/skills/nodejs.svg'
import python from '../assets/skills/python.svg'
import reactjs from '../assets/skills/react.svg'

import '../styles/Skills.css'

function Skill() {
    const logos = [cpp, cs, python, reactjs, nodejs]
    return (
        <div className='section'>
            <h1 className='legend'>Skills</h1>
            <div className='skill-items'>
                {logos.map((logo, index) => (
                    <img className='skill-logo' key={index} src={logo} alt={`logo-${index}`} />
                ))}
            </div>
        </div>
    )
}

export default Skill
