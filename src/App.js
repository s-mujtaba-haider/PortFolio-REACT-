<<<<<<< HEAD
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
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
>>>>>>> 0af4eb9 (Initial commit)
