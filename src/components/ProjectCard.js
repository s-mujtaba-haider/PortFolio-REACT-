import React from 'react';

function ProjectCard({ title, description, image, github }) {
    return (
        <div 
            className="card shadow-lg p-3 bg-white rounded text-center" 
            style={{ width: '18rem', height: '100%', display: 'flex', flexDirection: 'column' }}
        >



                    {/* Project Cards which shows name, description and link to the project*/}  

        
            <img 
                src={image} 
                className="card-img-top" 
                alt={title} 
                style={{ height: '150px', objectFit: 'cover' }} 
            />
            <div className="card-body d-flex flex-column" style={{ flexGrow: 1 }}>
                <h5 className="card-title text-truncate">{title}</h5>
                <p 
                    className="card-text" 
                    style={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 3,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}
                >
                    {description}
                </p>


                {/* Button to Github Repos*/}  

        


                <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-success mt-auto">
                    View on GitHub
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;
