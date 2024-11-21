import React from 'react';
import SkillsAccordion from './pages/Skills';
import PortfolioCarousel from './pages/PortfolioCarousel';
import Qualifications from './pages/Qualification';
import Aboutme from './pages/Aboutme';
import Navbar from './pages/Navbar';
import Home from './pages//Home';
import InstagramSection from './pages/InstaArtical';
import Contact from './pages/Contact';
import Fotter from './pages/Fotter';
import ScrollToTopButton from './pages/ScrollToTopButton'
function App() {
  return (
    // max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4
    <div className="bg-white dark:bg-gray-900 max-w-[1100px] m-auto">
    {/* Navbar */}
    <Navbar />

    {/* Sections */}
    <div id="home">
      <Home />
    </div>

    <div id="Aboutme">
      <Aboutme />
    </div>

    <div id="SkillsAccordion">
      <SkillsAccordion />
    </div>

    <div id="Qualifications">
      <Qualifications />
    </div>

    <div id="InstagramSection">
      <InstagramSection />
    </div>

    <div id="PortfolioCarousel">
      <PortfolioCarousel />
    </div>


    <div id="Contact">
      <Contact />
    </div>
    <div id="Fotter">
      <Fotter/>
    </div>
    <ScrollToTopButton/>
  </div>
  );
}

export default App;
