import './App.css';
import { useState, useEffect, useRef } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { isMobileOnly } from 'react-device-detect';
import SpinnerComponent from './components/SpinnerComponent';
import NameComponent from './components/NameComponent';
import AboutComponent from './components/AboutComponent';
import ExperienceComponent from './components/ExperienceComponent';
import ProjectsComponent from './components/ProjectsComponent';
import ContactMeComponent from './components/ContactMeComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  // Most of this code is setting up a scroll listener for our navbar
  const [activeSection, setActiveSection] = useState('name');

  const scrollOffset = 200;

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
    const aboutTop = aboutRef.current.offsetTop - scrollOffset;
    const experienceTop = experienceRef.current.offsetTop - scrollOffset;
    const projectsTop = projectsRef.current.offsetTop - scrollOffset;
    const contactMeTop = contactMeRef.current.offsetTop - scrollOffset;

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

  // These functions are for scrolling to each section without changing the URL with an /#{sectionID}
  function scrollTo(e, sectionName){
    e.preventDefault();
    const section = document.getElementById(sectionName); // Get the section element by ID
    window.scrollTo({
      top: section.offsetTop - (sectionName === "nameC" ? 0 : 75), // Scroll to the section's offset top
      behavior: "smooth" // Add smooth scrolling behavior
    });
  }

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

  /*
    Since fade-in is very costly for mobile Chrome users, we are going to disable it here
  */
  function handleScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => {
      // Disables fade-in when we either are seeing the element, or if we have a mobile user on Chrome
      if (isElementInViewport(el) || isMobileOnly) {
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

  // Handles fade-in classes
  window.addEventListener('scroll', handleScroll);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1025);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 1025);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navbarClass = `custom-navbar ${activeSection === 'name' ? 'navbar-big' : ''} ${isSmallScreen ? 'm-auto justify-content-center' : 'mr-auto'}`;

  // We use this for the first fraction of a second to give time for images to load
  // The two useEffects serve in conjunction for loading screens on different browsers
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <div className="App">
      <div style={{display: isLoading ? "block" : "none"}}>
        <SpinnerComponent />
      </div>
      <div style={{opacity: isLoading ? "0.8" : "1"}}>
        <Navbar className={navbarClass} variant="dark" expand="lg" fixed="top">
          <Nav.Link id="nameLink" href="#nameC" active={activeSection === 'name'} onClick={(e) => scrollTo(e, "nameC")}><span className={activeSection === 'name' ? 'brand-text-big' : 'brand-text'}>Korry Tunnicliff</span></Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#about" active={activeSection === 'about'} onClick={(e) => scrollTo(e, "about")}>About</Nav.Link>
              <Nav.Link href="#experience" active={activeSection === 'experience'} onClick={(e) => scrollTo(e, "experience")}>Experience</Nav.Link>
              <Nav.Link href="#projects" active={activeSection === 'projects'} onClick={(e) => scrollTo(e, "projects")}>Projects</Nav.Link>
              <Nav.Link href="#contactMe" active={activeSection === 'contactMe'} onClick={(e) => scrollTo(e, "contactMe")}>Contact&nbsp;Me</Nav.Link>
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
    </div>
  );
}

export default App;