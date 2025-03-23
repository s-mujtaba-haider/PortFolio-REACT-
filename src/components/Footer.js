import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (

        <footer className="bg-dark text-light text-center py-3 mt-5">
            <div className="container">
                <p className="mb-2">
                    © 2025 Syed Mujtaba Haider. All Rights Reserved.


                            {/* Simple Footer Section, which has fixed links of the Creator.*/}  

        
                </p>
                <div className="d-flex justify-content-center gap-3">

                    <a href="https://github.com/s-mujtaba-haider" target="_blank" rel="noreferrer" className="text-light" aria-label="GitHub Profile"> <FaGithub size={24} /> </a>

                    <a href="https://linkedin.com/in/s-mujtaba-haider" target="_blank" rel="noreferrer" className="text-light" aria-label="LinkedIn Profile"><FaLinkedin size={24} /></a>

                    <a href="https://twitter.com/s-mujtaba-haider" target="_blank" rel="noreferrer" className="text-light"aria-label="Twitter Profile"><FaTwitter size={24} /></a>
                
                
                </div>


            </div>
        </footer>
    );
};

export default Footer;
