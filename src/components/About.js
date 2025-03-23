import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function About({profilePic, skills, interests}) {
    return (
        <div className='container mt-5 text-center'>


            {/* Simple About US Section*/}

<h2 className="text-center mb-4 text-uppercase fw-bold">About Me</h2>

            <img src={profilePic} alt='Profile' className='rounded-circle mb-3' width='200' />

            <p><strong> Skills:</strong> {skills || 'Zero Skills'}</p>

            <p><strong> Interests:</strong> {interests || 'Zero Interests'}</p>

        </div>
    );
}
export default About;