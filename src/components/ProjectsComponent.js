import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Projects.css';

import project1Img from '../assets/dynein.png';
import project2Img from '../assets/caliber.png';
import project3Img from '../assets/portfolio.png';

function ProjectCard(props) {
  return (
    <div className="project-card">
      <img src={props.imgSrc} alt={props.title} />
      <div className="project-info">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

function ProjectsComponent() {
  return (
    <div id="projects" className="bg-light">
      <Container className="py-5" fluid style={{ paddingLeft: 200, paddingRight: 200 }}>
        <h1 className="text-center mb-5 fade-in" style={{fontSize: '5rem'}}>Projects</h1>
        <Row className="justify-content-center">
          <Col md={5} className="text-center">
            <ProjectCard imgSrc={project1Img} title="Dynein Protein Analysis" description="This is a project of several Python scripts which utilize libraries such as OpenCV, Tkinter, Dotenv, and the ImageJ application and interface to perform an analysis of cell images containing dynein proteins." />
          </Col>
          <Col md={5} className="text-center">
            <ProjectCard imgSrc={project2Img} title="Caliber Marketplace" description="Working with Caliber Public Safety, me and a group of 5 other undergraduate CSCI students at CU Boulder have been working on creating a marketplace for Caliber to advertise various features to their customers in different police departments. This project uses a MEAN stack, with MongoDB, ExpressJS, AngularJS (including PrimeNG), and NodeJS." />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={5} className="text-center">
            <ProjectCard imgSrc={project3Img} title="Portfolio!" description="This page! Everything you see here was created with the ReactJS framework and Bootstrap for the HTML, CSS, and JS, as well as using icons from Font Awesome. The deployment of this website was done through Netlify." />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProjectsComponent;
