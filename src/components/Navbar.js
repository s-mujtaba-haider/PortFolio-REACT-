import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };


     {/* Navbar which turns into Hamburger Menu, when on small screens*/}  


        {/* Just 5 simple sections, takes to the respective section*/}  

        
        

    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark px-3' style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
            <a className='navbar-brand' onClick={() => scrollToSection('home')} style={{fontWeight :"bold"}}>My Portfolio</a>
            <button className='navbar-toggler' onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                <ul className='navbar-nav ms-auto'>
                    <li className='nav-item'>
                        <button className='nav-link btn btn-link' onClick={() => scrollToSection('home')}>Home</button>
                    </li>
                    <li className='nav-item'>
                        <button className='nav-link btn btn-link' onClick={() => scrollToSection('about')}>About</button>
                    </li>
                    <li className='nav-item'>
                        <button className='nav-link btn btn-link' onClick={() => scrollToSection('projects')}>Projects</button>
                    </li>
                    <li className='nav-item'>
                        <button className='nav-link btn btn-link' onClick={() => scrollToSection('social-media')}>Social</button>
                    </li>
                    <li className='nav-item'>
                        <button className='nav-link btn btn-link' onClick={() => scrollToSection('contact')}>Contact</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
