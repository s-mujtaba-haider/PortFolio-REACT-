import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Hero({ name, bio }) {
    return (
        <div className='hero text-center p-5 bg-primary text-white'>


        {/* Simple Hero Section*/}  

                {/* Just Name and Bio*/}  

        

        

            <h1 style={{fontWeight : "bold"}} className='display-3'>{name}</h1>
            <p style={{fontWeight : 500}} className='lead'>{bio}</p>


            <a href='#projects' className='btn btn-light btn-lg mt-3'>View My Work</a>

        </div>
    );
}

export default Hero;
