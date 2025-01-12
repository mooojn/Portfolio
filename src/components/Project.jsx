import { useState } from 'react'
import ProjectCard from './ProjectCard.jsx'

import pagex from '../assets/projects/page-x.png'
import pagexLogo from '../assets/skills/react.svg'
import '../styles/Project.css'

function Project() {

    return (
        <>
            <div className='section'>
                <h1 className='legend'>Projects</h1>
                <ProjectCard image={pagex} logo={pagexLogo} siteName={"PageX"} heading={"Developed text editor with DSA for seamless work experience"} highlights={["speed", "efficient"]} description={"This was very nice"}/>
            </div>
        </>
    )
}

export default Project
