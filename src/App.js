import './App.css';
import { React, useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { isMobileOnly } from 'react-device-detect';
import NavbarListener from './helpers/NavbarListener';
import FadeListener from './helpers/FadeListener';
import ScrollTo from './helpers/ScrollTo';
import SpinnerComponent from './components/SpinnerComponent';
import NameComponent from './components/NameComponent';
import SkillsComponent from './components/SkillsComponent';
import AboutComponent from './components/AboutComponent';
import ExperienceComponent from './components/ExperienceComponent';
import ProjectsComponent from './components/ProjectsComponent';
import ContactMeComponent from './components/ContactMeComponent';
import FooterComponent from './components/FooterComponent';

function App() { 
    const [
      nameRef,
      aboutRef,
      skillsRef,
      experienceRef,
      projectsRef,
      contactMeRef,
      activeSection, 
      NavbarListenerFunction
    ] = NavbarListener();
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1025);
    const [isTinyScreen, setIsTinyScreen] = useState(window.innerWidth < 768);
    const [isLoading, setIsLoading] = useState(true);
    const navbarClass = `custom-navbar ${activeSection === 'name' ? 'navbar-big' : ''} ${isSmallScreen ? 'm-auto justify-content-center' : 'mr-auto'}`;

    useEffect(() => {
        if (isMobileOnly) {
          const elements = document.querySelectorAll('.fade-in');
          elements.forEach((el) => {
            el.classList.remove('fade-in');
          });
        }

        function handleResize() {
            setIsSmallScreen(window.innerWidth < 1025);
            setIsTinyScreen(window.innerWidth < 768);
        }

        function handleLoad() {
            setIsLoading(false);
        };

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 750);

        window.addEventListener('load', handleLoad);
        window.addEventListener('scroll', () => {
            NavbarListenerFunction();
            if(!isMobileOnly) {
              FadeListener();
            }
        })
        window.addEventListener('resize', handleResize);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('load', handleLoad);
            window.removeEventListener('scroll', NavbarListener);
            if(!isMobileOnly){
              window.removeEventListener('scroll', FadeListener);
            }
        };
    });

  return (
    <div className="App">
      <div style={{display: isLoading ? "block" : "none"}}>
        <SpinnerComponent />
      </div>
      <div style={{opacity: isLoading ? "0.8" : "1", backgroundColor: "#FFFAFF"}}>
        <Navbar className={navbarClass} variant="dark" expand="lg" fixed="top">
          <Nav.Link id="nameLink" href="#nameC" active={activeSection === 'name'} onClick={(e) => ScrollTo(e, "nameC")}><span className={activeSection === 'name' ? 'brand-text-big' : 'brand-text'}>Korry Tunnicliff</span></Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#about" active={activeSection === 'about'} onClick={(e) => ScrollTo(e, "about")}>About</Nav.Link>
              <Nav.Link href="#skills" active={activeSection === 'skills'} onClick={(e) => ScrollTo(e, "skills")}>Skills</Nav.Link>
              <Nav.Link href="#experience" active={activeSection === 'experience'} onClick={(e) => ScrollTo(e, "experience")}>Experience</Nav.Link>
              <Nav.Link href="#projects" active={activeSection === 'projects'} onClick={(e) => ScrollTo(e, "projects")}>Projects</Nav.Link>
              <Nav.Link href="#contactMe" active={activeSection === 'contactMe'} onClick={(e) => ScrollTo(e, "contactMe")}>Contact&nbsp;Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div ref={nameRef}>
          <NameComponent isSmall={isSmallScreen} isTiny={isTinyScreen}/>
        </div>
        <div ref={aboutRef}>
          <AboutComponent isSmall={isSmallScreen} isTiny={isTinyScreen}/>
        </div>
        <div ref={skillsRef}>
          <SkillsComponent isSmall={isSmallScreen} isTiny={isTinyScreen}/>
        </div>
        <div ref={experienceRef}>
          <ExperienceComponent />
        </div>
        <div ref={projectsRef}>
          <ProjectsComponent />
        </div>
        <div ref={contactMeRef}>
          <ContactMeComponent />
        </div>
        <FooterComponent />
      </div>
    </div>
  );
}

export default App;