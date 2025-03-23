import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { PortfolioContext } from '../App';

function DataEntry() {
    const { setPortfolioData } = useContext(PortfolioContext);



    const [useGitHub, setUseGitHub] = useState(false);
    const [githubUsername, setGithubUsername] = useState('');


    const [formData, setFormData] = useState({
        name: '',
        bio: '',
        profilePic: '',
        skills: '',
        interests: '',
        projects: [],
        socialLinks: [{ name: '', url: '' }]
    });
    const navigate = useNavigate();

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };
    const handleProjectChange = (index, field, value) => {
        const updatedProjects = formData.projects.map((proj, i) =>
            i === index ? { ...proj, [field]: value } : proj
        );
        setFormData({ ...formData, projects: updatedProjects });
    };





    const handleSocialChange = (index, field, value) => {
        const updatedLinks = formData.socialLinks.map((link, i) =>
            i === index ? { ...link, [field]: value } : link
        );
        setFormData({ ...formData, socialLinks: updatedLinks });
    };

    const addProject = () => {
        setFormData({
            ...formData,
            projects: [...formData.projects, { title: '', description: '', image: '', github: '' }]
        });
    };



    const fetchGitHubProjects = async () => {
        if (!githubUsername.trim()) {
            alert('Please enter a GitHub username.');
            return;
        }
        try {
            const response = await fetch(`https://api.github.com/users/${githubUsername}/repos`);

            
            const data = await response.json();

            if (data.message === 'Not Found') {
                alert('GitHub username not found. Please check and try again.');
                return;
            }
            const projects = data.slice(20, 25).map(repo => ({
                title: repo.name,
                description: repo.description || 'No description available',
                image: 'https://avatars.githubusercontent.com/u/110555927?v=4',
                github: repo.html_url
            }));

            setFormData({ ...formData, projects });
        } catch (error) {
            console.error('Error fetching GitHub projects:', error);
        }
    };




    const handleFillAllFields = () => {
        setFormData({
            name: 'Mujtaba Haider',
            bio: 'Data Scientist',
            profilePic: 'https://avatars.githubusercontent.com/u/110555927?v=4',
            skills: 'Python, JavaScript, Web Development',
            interests: 'Cricket, Table Tennis, Coding',
            projects: [{ title: 'BloodLink', description: 'A blood donation platform', image: 'https://avatars.githubusercontent.com/u/75002949?v=4', github: 'https://github.com/s-mujtaba-haider/BloodLink-MERN-Stack' },
                { title: 'BloodLink', description: 'A blood donation platform', image: 'https://avatars.githubusercontent.com/u/64399555?v=4', github: 'https://github.com/s-mujtaba-haider/BloodLink-MERN-Stack' }
            ],
            socialLinks: [{ name: 'GitHub', url: 'https://github.com/s-mujtaba-haider' },
                { name: 'LinkedIn', url: 'https://linkedin.com/in/s-mujtaba-haider' },
                { name: 'Twitter', url: 'https://twitter.com/s-mujtaba-haider' }
            ]
        });
        setGithubUsername('s-mujtaba-haider');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPortfolioData(formData);
        navigate('/portfolio');
    };

    return (
        <div className='container mt-5 p-4 bg-light shadow-lg rounded'>
            <h2 className='text-center mb-4'>Enter Your Portfolio Details</h2>
            <form onSubmit={handleSubmit} className='p-4 border rounded bg-white'>


                <label className='form-label'>Name:</label>
                <input type='text' placeholder='Your Name' value={formData.name} onChange={(e) => handleChange('name', e.target.value)} className='form-control mb-3' required />
                <label className='form-label'>Bio:</label>
                <textarea placeholder='Short Bio' value={formData.bio} onChange={(e) => handleChange('bio', e.target.value)} className='form-control mb-3' required />



                <label className='form-label'>Profile Picture URL:</label>
                <input type='text' placeholder='Profile Picture URL' value={formData.profilePic} onChange={(e) => handleChange('profilePic', e.target.value)} className='form-control mb-3' />
                <label className='form-label'>Skills:</label>
                <input type='text' placeholder='Skills (comma separated)' value={formData.skills} onChange={(e) => handleChange('skills', e.target.value)} className='form-control mb-3' />
                <label className='form-label'>Interests:</label>
                <input type='text' placeholder='Your Interests' value={formData.interests} onChange={(e) => handleChange('interests', e.target.value)} className='form-control mb-3' />

                
                
                <label className='form-label'>Projects Source:</label>
                <div className='form-check'>
                    <input type='radio' className='form-check-input' id='manualEntry' name='projectSource' checked={!useGitHub} onChange={() => setUseGitHub(false)} />
                    <label className='form-check-label' htmlFor='manualEntry'>Manually Enter Projects</label>
                </div>
                <div className='form-check mb-3'>
                    <input type='radio' className='form-check-input' id='githubFetch' name='projectSource' checked={useGitHub} onChange={() => setUseGitHub(true)} />
                    <label className='form-check-label' htmlFor='githubFetch'>Fetch from GitHub</label>
                </div>

                {useGitHub ? (
                    <>
                        <label className='form-label'>GitHub Username:</label>
                        <input type='text' placeholder='Enter GitHub Username' value={githubUsername} onChange={(e) => setGithubUsername(e.target.value)} className='form-control mb-3' />
                        <button type='button' onClick={fetchGitHubProjects} className='btn btn-secondary mb-3 w-100'>Fetch Projects</button>
                    </>
                ) : (
                    <>
                        <h5>Projects:</h5>
                        {formData.projects.map((project, index) => (
                            <div key={index} className='mb-3 border p-3 rounded'>
                                <input type='text' placeholder='Project Title' value={project.title} onChange={(e) => handleProjectChange(index, 'title', e.target.value)} className='form-control mb-2' />
                                <textarea placeholder='Project Description' value={project.description} onChange={(e) => handleProjectChange(index, 'description', e.target.value)} className='form-control mb-2' />
                                <input type='text' placeholder='Project Image URL' value={project.image} onChange={(e) => handleProjectChange(index, 'image', e.target.value)} className='form-control mb-2' />
                                <input type='text' placeholder='GitHub Link' value={project.github} onChange={(e) => handleProjectChange(index, 'github', e.target.value)} className='form-control mb-2' />
                            </div>
                        ))}
                        <button type='button' onClick={addProject} className='btn btn-secondary mb-3'>Add Project</button>
                    </>
                )}




                <h5>Social Media Links:</h5>
                {formData.socialLinks.map((link, index) => (
                    <div key={index} className='mb-2'>
                        <input type='text' placeholder='Platform' value={link.name} onChange={(e) => handleSocialChange(index, 'name', e.target.value)} className='form-control mb-2' />
                        <input type='text' placeholder='URL' value={link.url} onChange={(e) => handleSocialChange(index, 'url', e.target.value)} className='form-control mb-2' />
                    </div>
                ))}


                <button type='button' onClick={handleFillAllFields} className='btn btn-info mb-3 w-100'>Fill All Fields</button>

                <button type='submit' className='btn btn-primary w-100'>Generate Portfolio</button>
            </form>

            
        </div>
    );
}

export default DataEntry;
