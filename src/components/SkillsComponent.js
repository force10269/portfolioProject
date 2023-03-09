import "../styles/Skills.css";
import { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { FaHtml5, FaCss3, FaJava, FaPython, FaJs, FaReact } from "react-icons/fa";
import { DiMongodb, DiPostgresql } from "react-icons/di";
import { IoLogoAngular, IoLogoNodejs } from "react-icons/io";
import { ReactComponent as CppLogo } from "../assets/cpp_logo.svg";
import { ReactComponent as ExpressLogo } from "../assets/express.svg";
import { GrGraphQl } from "react-icons/gr";

function LanguagesComponent(props) {
    return (
        <>
        <h3 className="mb-3 fade-in" style={{paddingRight: `${props.isSmall ? '0vw' : '1.5vw'}`}}>Languages</h3>
        {props.isSmall ? <><br/></> : <></> }
        <div className="skill-icon">
            <FaHtml5 size={props.iconSize/2} />
            <FaCss3 size={props.iconSize/2} />
            <p>HTML + CSS</p>
        </div>
        <div className="skill-icon">
            <FaJava size={props.iconSize} />
            <p>Java</p>
        </div>
        <div className="skill-icon">
            <FaJs size={props.iconSize}/>
            <p>JavaScript</p>
        </div>
        <div className="skill-icon">
            <FaPython size={props.iconSize} />
            <p>Python</p>
        </div>
        <div className="skill-icon">
            <CppLogo />
            <p>C++</p>
        </div>
        <div className="skill-icon">
            <DiPostgresql size={props.iconSize}/>
            <p>SQL</p>
        </div>
        </>
    );
}

function FrontBackComponent(props) {
    return (
        <>
        <h3 className="mb-3 fade-in">Frameworks</h3>
        {props.isSmall ? <><br/></> : <></> }
        <div className="fe-icon">
            <FaReact size={props.iconSize}/>
            <p>React</p>
        </div>
        <div className="fe-icon">
            <IoLogoAngular size={props.iconSize}/>
            <p>Angular</p>
        </div>
        <div className="fe-icon">
            <ExpressLogo fill="#008CBA"/>
            <p>Express</p>
        </div>
        <div className="fe-icon">
            <IoLogoNodejs size={props.iconSize}/>
            <p>Node</p>
        </div>
        <div className="fe-icon">
            <GrGraphQl size={props.iconSize}/>
            <p>GraphQL</p>
        </div>
        <div className="fe-icon">
            <DiMongodb size={props.iconSize}/>
            <p>MongoDB</p>
        </div>
        </>
    );
}

function SkillsComponent() {
    const iconSize = 64;

    const [isSmall, setIsSmallScreen] = useState(window.innerWidth < 768);

    useEffect(() => {
      function handleResize() {
        setIsSmallScreen(window.innerWidth < 768);
      }
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
        <div id="skills" className="full-page-panel">
            <Container className="py-5" fluid style={{ paddingLeft: "10%", paddingRight: "10%" }}>
                <h1 className="text-center mb-5 fade-in" style={{ fontSize: "7vw" }}>
                    <strong>Skills</strong>
                </h1>
                <Row className="mb-5 align-items-center">
                    {isSmall ? (
                        <>
                        <Col xs={6}>
                            <LanguagesComponent iconSize={iconSize} isSmall={isSmall}/>
                        </Col>
                        <Col xs={6}>
                            <FrontBackComponent iconSize={iconSize} isSmall={isSmall}/>
                        </Col>
                        </>
                    ) : (
                        <>
                        <div className="col-xs-6 d-flex flex-sm-row flex-column">
                            <LanguagesComponent iconSize={iconSize} isSmall={isSmall}/>
                        </div>
                        <div className="col-xs-6 d-flex flex-sm-row flex-column">
                            <FrontBackComponent iconSize={iconSize} isSmall={isSmall}/>
                        </div>
                        </>
                    )}
                </Row>
            </Container>
        </div>
    );
}

export default SkillsComponent;
