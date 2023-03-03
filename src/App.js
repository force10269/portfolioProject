import './App.css';
import { useState, useEffect, useRef } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import NameComponent from './components/NameComponent';
import AboutComponent from './components/AboutComponent';
import ExperienceComponent from './components/ExperienceComponent';
import ProjectsComponent from './components/ProjectsComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  // Most of this code is setting up a scroll listener for our navbar
  const [activeSection, setActiveSection] = useState('name');

  // All refs that point to different section components
  const nameRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  // Definition of the scroll event listener
  const scrollListener = () => {
    const pos = window.scrollY;
    
    // In order for the automatic highlight on the navbar to work, we need to add this offset of 20
    const nameTop = nameRef.current.offsetTop - 20;
    const aboutTop = aboutRef.current.offsetTop - 20;
    const experienceTop = experienceRef.current.offsetTop - 20;
    const projectsTop = projectsRef.current.offsetTop - 20;

    const inName = (nameTop <= pos && pos < aboutTop);
    const inAbout = (aboutTop <= pos && pos < experienceTop);
    const inExperience = (experienceTop <= pos && pos < projectsTop);
    const inProjects = (projectsTop <= pos);

    if(inName) {
      setActiveSection('name');
    }else if(inAbout) {
      setActiveSection('about');
    }else if(inExperience){
      setActiveSection('experience');
    }else if(inProjects){
      setActiveSection('projects');
    }
  }

  // Mount scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])

  return (
    <div className="App">
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="#name">&nbsp; &nbsp; Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#name" active={activeSection === 'name'}>Name</Nav.Link>
            <Nav.Link href="#about" active={activeSection === 'about'}>About</Nav.Link>
            <Nav.Link href="#experience" active={activeSection === 'experience'}>Experience</Nav.Link>
            <Nav.Link href="#projects" active={activeSection === 'projects'}>Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div ref={nameRef}>
        <NameComponent />
      </div>
      <div ref={aboutRef}>
        <AboutComponent />
      </div>
      <div ref={experienceRef}>
        <ExperienceComponent />
      </div>
      <div ref={projectsRef}>
        <ProjectsComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;


