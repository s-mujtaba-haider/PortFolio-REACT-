import React, { useContext, useState, useEffect } from 'react';
import { PortfolioContext } from '../App';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ProjectCard from '../components/ProjectCard';

function Projects() {
    const { portfolioData } = useContext(PortfolioContext);
    const [projects, setProjects] = useState(portfolioData?.projects || []);

    useEffect(() => {
        if (Array.isArray(portfolioData?.projects)) {
            setProjects(portfolioData.projects);
        }
    }, [portfolioData]);




    {/* Drag and Drop Functionality */}  

        
    const handleDragEnd = (result) => {
        if (!result.destination) return;

        const reorderedProjects = [...projects];
        const [movedItem] = reorderedProjects.splice(result.source.index, 1);
        reorderedProjects.splice(result.destination.index, 0, movedItem);

        setProjects(reorderedProjects);
    };




    {/* Projects Section to Display all the projects*/}  

        
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4 text-uppercase fw-bold">My Projects</h2>

            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="projects-list" direction="horizontal">
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className="d-flex flex-row gap-3 justify-content-start overflow-auto"
                            style={{
                                padding: '10px',
                                minHeight: '220px',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {projects.length > 0 ? (
                                projects.map((project, index) => (
                                    <Draggable
                                        key={project.id?.toString() || `project-${index}`}
                                        draggableId={project.id?.toString() || `project-${index}`}
                                        index={index}
                                    >
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className="draggable-project"
                                                style={{
                                                    width: '300px',
                                                    flexShrink: 0,
                                                    ...provided.draggableProps.style,
                                                }}
                                            >
                                                <ProjectCard
                                                    title={project.title}
                                                    description={project.description}
                                                    image={project.image}
                                                    github={project.github}
                                                />
                                            </div>
                                        )}
                                    </Draggable>
                                ))
                            ) : (
                                <p className="text-center w-100">No projects available.</p>
                            )}
                            {provided.placeholder} {}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}

export default Projects;
