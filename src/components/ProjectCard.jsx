import { useState } from 'react'
import '../styles/ProjectCard.css'

function ProjectCard({ info }) {
    const { image, logo, name, heading, highlights, description } = info;

    return (
        <>
            <div className='project-card'>

                <img className='project-img' src={image} alt="" />

                <div className='project-content'>
                    <div className='project-info'>
                        <img src={logo} alt="logo" />
                        <h3>{name}</h3>
                    </div>

                    <h2>{heading}</h2>

                    <div className='project-highlights'>
                        <h4>Highlights:</h4>
                        <ul>
                            {highlights.map((value, index) => (
                                <li key={index}>{value}</li>
                            ))}
                        </ul>

                    </div>
                    {/* white line here then description */}
                    <hr className='solid'/>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
