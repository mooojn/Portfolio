import { useState } from 'react'
import ProjectCard from './ProjectCard.jsx'

import pagex from '../assets/projects/pagex.png'
import pagexLogo from '../assets/projects/pagex_logo.svg'
import '../styles/Project.css'

function Project() {
    const PAGEX = {
        image: pagex,
        logo: pagexLogo,
        name: "PageX",
        link: "https://gitlab.com/dsa8301239/pagex",
        heading: "Developed text editor with DSA for seamless work experience",
        highlights: [
            "React.js text editor with advanced features and rich functionality.",
            "Supports text formatting and PDF export with seamless integration.",
            "DJB2 hash function for search, reducing key collisions by 47%.",
            "Hybrid Kruskal's and Prim's algorithm, cutting maze generation time by 67%.",
            "DSA concepts enhancing data access and manipulation speed by 39%."
        ],                   
        description: "PageX is a fast and efficient word editor using data structure and algorithm concepts. The editor offers advanced features for customizing, formatting, and designing documents with ease. It also includes a maze generator that challenges users to solve complex problems and enhances problem-solving skills. The maximum maze size is 40x35 (rows x columns).",
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
