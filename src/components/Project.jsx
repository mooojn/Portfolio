import { useState } from 'react'
import ProjectCard from './ProjectCard.jsx'

import pagex from '../assets/projects/page-x.png'
import pagexLogo from '../assets/skills/react.svg'
import '../styles/Project.css'

function Project() {
    const PAGEX = {
        image: pagex,
        logo: pagexLogo,
        name: "PageX",
        heading: "Developed text editor with DSA for seamless work experience",
        highlights: [
            "React.js text editor with advanced features and rich functionality.",
            "Supports text formatting and PDF export with seamless integration.",
            "DJB2 hash function for search, reducing key collisions by 47%.",
            "Hybrid Kruskal's and Prim's algorithm, cutting maze generation time by 67%.",
            "DSA concepts enhancing data access and manipulation speed by 39%."
        ],                   
        description: "This was very nice",
    };

    return (
        <>
            <div className='section'>
                <h1 className='legend'>Projects</h1>
                <ProjectCard info={PAGEX} />
            </div>
        </>
    )
}

export default Project
