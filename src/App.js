import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DataEntry from './pages/DataEntry';
import PortfolioPage from './pages/PortfolioPage';
export const PortfolioContext = createContext();

function App() {
    const [portfolioData, setPortfolioData] = useState({
        name: '', 
        bio: '', 
        profilePic: '', 
        skills: '', 
        interests: '',
        projects: [], 
        socialLinks: []
    });
    

    
    return (
        <PortfolioContext.Provider value={{ portfolioData, setPortfolioData }}>
            <Router>
                <Routes>
                    <Route path='/' element={<DataEntry />} />
                    <Route path='/portfolio' element={<PortfolioPage />} />
                </Routes>
            </Router>
        </PortfolioContext.Provider>
        
    );
}



export default App;