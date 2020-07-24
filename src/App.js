import React from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar.component';
import Section from './components/section/Section.component';
import WelcomeSection from './components/welcome-section/WelcomeSection.component';
import ProjectsSection from './components/projects-section/ProjectsSection.component';
import AboutMeSection from './components/aboutme-section/AboutMeSection.component';
import Footer from './components/footer/Footer.component';

import {navItems, backgroundSections } from './defaultConfig.config';


const App = () => {
  return (
    <>
      <Navbar navItems={navItems} navSectionsSync/>

      <Section id='welcome-section'
      backgroundImage={backgroundSections.welcomeSection}>
          <WelcomeSection />
      </Section>
      
      <Section id="projects-section"
      backgroundImage={backgroundSections.projectsSection}>
          <ProjectsSection/>
      </Section>

      <Section id='about-me-section' 
      backgroundImage={backgroundSections.aboutMeSection}>
            <AboutMeSection/>
      <Footer/>
      </Section>
    </>
  );
};

export default App;
