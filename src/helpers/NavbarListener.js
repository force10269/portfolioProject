import { useState, useRef, useEffect } from "react";

function NavbarListener() {
    const [activeSection, setActiveSection] = useState('name');
    const scrollOffset = 200;
    const nameRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const experienceRef = useRef(null);
    const projectsRef = useRef(null);
    const contactMeRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const pos = window.scrollY;
            const nameTop = nameRef.current.offsetTop;
            const aboutTop = aboutRef.current.offsetTop - scrollOffset;
            const skillsTop = skillsRef.current.offsetTop - scrollOffset;
            const experienceTop = experienceRef.current.offsetTop - scrollOffset;
            const projectsTop = projectsRef.current.offsetTop - scrollOffset;
            const contactMeTop = contactMeRef.current.offsetTop - scrollOffset;

            const inName = (nameTop <= pos && pos < aboutTop);
            const inAbout = (aboutTop <= pos && pos < skillsTop);
            const inSkills = (skillsTop <= pos && pos < experienceTop);
            const inExperience = (experienceTop <= pos && pos < projectsTop);
            const inProjects = (projectsTop <= pos && pos < contactMeTop);
            const inContactMe = (contactMeTop <= pos);

            if(inName) {
                setActiveSection('name');
            }else if(inSkills){
                setActiveSection('skills');
            }else if(inAbout) {
                setActiveSection('about');
            }else if(inExperience){
                setActiveSection('experience');
            }else if(inProjects){
                setActiveSection('projects');
            }else if(inContactMe){
                setActiveSection('contactMe');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollOffset]);

    return [         
        nameRef,         
        aboutRef,         
        skillsRef,         
        experienceRef,         
        projectsRef,         
        contactMeRef,         
        activeSection    
    ];
}

export default NavbarListener;
