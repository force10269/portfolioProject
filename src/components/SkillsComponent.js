import "../styles/Skills.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaHtml5, FaCss3, FaJava, FaPython, FaJs, FaReact } from "react-icons/fa";
import { DiScala, DiMongodb, DiPostgresql } from "react-icons/di";
import { IoLogoAngular, IoLogoNodejs } from "react-icons/io";
import { ReactComponent as CppLogo } from "../assets/cpp_logo.svg";
import { ReactComponent as ExpressLogo } from "../assets/express.svg";
import { GrGraphQl } from "react-icons/gr";

function SkillsComponent() {
    const iconSize = 64;

    return (
        <div id="skills" className="full-page-panel">
            <Container className="py-5" fluid style={{ paddingLeft: "10%", paddingRight: "10%" }}>
                <h1 className="text-center mb-5 fade-in" style={{ fontSize: "7vw" }}>
                    <strong>Skills</strong>
                </h1>
                <Row className="mb-5 align-items-center">
                    <Col xs={6}>
                        <h3 className="mb-3 fade-in">Languages</h3>
                        <div className="skill-icon">
                            <FaHtml5 size={iconSize} />
                            <p>HTML</p>
                        </div>
                        <div className="skill-icon">
                            <FaCss3 size={iconSize} />
                            <p>CSS</p>
                        </div>
                        <div className="skill-icon">
                            <FaJava size={iconSize} />
                            <p>Java</p>
                        </div>
                        <div className="skill-icon">
                            <FaJs size={iconSize}/>
                            <p>JavaScript</p>
                        </div>
                        <div className="skill-icon">
                            <FaPython size={iconSize} />
                            <p>Python</p>
                        </div>
                        <div className="skill-icon">
                            <CppLogo />
                            <p>C++</p>
                        </div>
                        <div className="skill-icon">
                            <DiScala size={iconSize}/>
                            <p>Scala</p>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <h3 className="mb-3 fade-in">Frontend, Backend</h3>
                        <div className="fe-icon">
                            <FaReact size={iconSize}/>
                            <p>React</p>
                        </div>
                        <div className="fe-icon">
                            <IoLogoAngular size={iconSize}/>
                            <p>Angular</p>
                        </div>
                        <div className="fe-icon">
                            <ExpressLogo fill="#008CBA"/>
                            <p>Express</p>
                        </div>
                        <div className="fe-icon">
                            <IoLogoNodejs size={iconSize}/>
                            <p>Node</p>
                        </div>
                        <div className="fe-icon">
                            <GrGraphQl size={iconSize}/>
                            <p>GraphQL</p>
                        </div>
                        <div className="fe-icon">
                            <DiPostgresql size={iconSize}/>
                            <p>PostgreSQL</p>
                        </div>
                        <div className="fe-icon">
                            <DiMongodb size={iconSize}/>
                            <p>MondoDB</p>
                        </div>
                    </Col>
                </Row> 
            </Container>
        </div>
    );
}

export default SkillsComponent;
