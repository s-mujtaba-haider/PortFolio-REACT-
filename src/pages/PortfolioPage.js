import React, { useContext} from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SocialMedia from '../components/SocialMedia';
import DarkModeToggle from '../components/DarkModeToggle';
import { PortfolioContext } from '../App';

function PortfolioPage() {
    const { portfolioData } = useContext(PortfolioContext);
    
    if (!portfolioData || !portfolioData.name) {
        return <div className='container text-center mt-5'><h2>Please Enter Data Again.</h2></div>;
    }

    return (
        <div>
            <Navbar />
            <section id="home" style={{ marginTop: '10px', padding: '40px 0' }}>

                
                <Hero name={portfolioData.name} bio={portfolioData.bio} />
            </section>



            <section id="about" style={{ marginTop: '30px', padding: '20px 0' }}>


                <About profilePic={portfolioData.profilePic} skills={portfolioData.skills} interests={portfolioData.interests} />
            </section>


            <section id="projects" style={{ marginTop: '20px', padding: '50px 0' }}>
                <Projects projects={portfolioData.projects} />

            </section>

            <section id="social-media" style={{ marginTop: '20px', padding: '40px 0'}}>
                <SocialMedia />
            </section>


        <section id="contact" style={{ marginTop: '20px', padding: '40px 0' }}>
                <Contact />

        </section>


            <Footer />

            <DarkModeToggle />

        



    </div>
    );
}

export default PortfolioPage;
