import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

function DarkModeToggle() {

    {/* Dark Mode and Light MOde*/}  

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.className = darkMode ? 'bg-dark text-light' : 'bg-light text-dark';
    }, [darkMode]);

    return (
        <button 
             className="btn btn-outline-success position-fixed" 
             style={{ bottom: '20px', right: '20px', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <FaSun /> : <FaMoon />}
         </button>
    );
}

export default DarkModeToggle;