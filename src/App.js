import './App.css';
import { useState, useEffect, useRef } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import NameComponent from './components/NameComponent';
import AboutComponent from './components/AboutComponent';
import ExperienceComponent from './components/ExperienceComponent';
import ProjectsComponent from './components/ProjectsComponent';
import ContactMeComponent from './components/ContactMeComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  // Most of this code is setting up a scroll listener for our navbar
  const [activeSection, setActiveSection] = useState('name');

  // All refs that point to different section components
  const nameRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactMeRef = useRef(null);

  // Definition of the scroll event listener
  const scrollListener = () => {
    const pos = window.scrollY;
    
    // In order for the automatic highlight on the navbar to work, we need to add this offset
    const nameTop = nameRef.current.offsetTop;
    const aboutTop = aboutRef.current.offsetTop - 200;
    const experienceTop = experienceRef.current.offsetTop - 200;
    const projectsTop = projectsRef.current.offsetTop - 200;
    const contactMeTop = contactMeRef.current.offsetTop - 200;

    const inName = (nameTop <= pos && pos < aboutTop);
    const inAbout = (aboutTop <= pos && pos < experienceTop);
    const inExperience = (experienceTop <= pos && pos < projectsTop);
    const inProjects = (projectsTop <= pos && pos < contactMeTop);
    const inContactMe = (contactMeTop <= pos);

    if(inName) {
      setActiveSection('name');
    }else if(inAbout) {
      setActiveSection('about');
    }else if(inExperience){
      setActiveSection('experience');
    }else if(inProjects){
      setActiveSection('projects');
    }else if(inContactMe){
      setActiveSection('contactMe');
    }
  }

  // Mount scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  // This is for fade-in classes when the user is scrolling
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function handleScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => {
      if (isElementInViewport(el)) {
        el.classList.add('fade-in-active');
      } else {
        el.classList.remove('fade-in-active');
      }
    });

    // We also query for the cards in experiences to fade in and out
    const experiences = document.querySelectorAll('.experience-card');
    experiences.forEach((ex) => {
      if (isElementInViewport(ex)) {
        ex.classList.add('experience-card-active');
      }else{
        ex.classList.remove('experience-card-active');
      }
    })
  }
  
  window.addEventListener('scroll', handleScroll);

  return (
    <div className="App">
      <Navbar className={`custom-navbar ${activeSection === 'name' ? 'navbar-big' : ''} mr-auto`} variant="dark" expand="lg" fixed="top">
        <Navbar.Brand href="#name">
          <span className={activeSection === 'name' ? 'brand-text-big' : 'brand-text'}>Korry Tunnicliff &nbsp;</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#name" active={activeSection === 'name'}>Name</Nav.Link>
            <Nav.Link href="#about" active={activeSection === 'about'}>About</Nav.Link>
            <Nav.Link href="#experience" active={activeSection === 'experience'}>Experience</Nav.Link>
            <Nav.Link href="#projects" active={activeSection === 'projects'}>Projects</Nav.Link>
            <Nav.Link href="#contactMe" active={activeSection === 'contactMe'}>Contact&nbsp;Me</Nav.Link>
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
      <div ref={contactMeRef}>
        <ContactMeComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;


