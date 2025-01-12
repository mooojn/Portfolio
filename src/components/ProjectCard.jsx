import gitIcon from '../assets/github-icon.png'
import '../styles/ProjectCard.css'

function ProjectCard({ info }) {
    const { image, logo, name, link, heading, highlights, description } = info;
   
    return (
        <>
            <div className='project-card'>
               
                <img className='project-img' src={image} alt="" />

                <div className='project-content'>
                    <div className='project-info'>
                        <img src={logo} alt="logo" />
                        <h3>{name}</h3>
                        <div className='project-info-btn'>
                            <a href={link} target='_blank'><img src={gitIcon}/>Source</a>
                        </div>
                    </div>

                    <h2>{heading}</h2>

                    <div className='project-highlights'>
                        <h4>HIGHLIGHTS:</h4>
                        <ul>
                            {highlights.map((value, index) => (
                                <li key={index}>{value}</li>
                            ))}
                        </ul>

                    </div>

                    <hr className='solid' />

                    <div className='project-description'>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
