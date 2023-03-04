import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Projects.css';
import { FaGithub } from 'react-icons/fa';

import project1Img from '../assets/dynein.png';
import project2Img from '../assets/caliber.png';
import project3Img from '../assets/portfolio.png';

function ProjectCard(props) {
  return (
    <div className="project-card fade-in">
      <img src={props.imgSrc} alt={props.title} />
      <div className="project-info">
      </div>
    </div>
  );
}

function ProjectsComponent() {
  return (
    <div id="projects" className="projects-section">
      <Container className="py-5" fluid style={{ paddingLeft: '10%', paddingRight: '10%' }}>
      <h1 className="text-center mb-5 fade-in" style={{fontSize: '7vw'}}><strong>Projects</strong></h1>
        <Row className="justify-content-center">
          <Col md={5} className="text-center">
            <ProjectCard imgSrc={project1Img}/>
            <h1 className="fade-in">Dynein Protein Analysis</h1>
            <p className="fade-in">Using Python scripts which utilize the OpenCV library and the ImageJ interface to perform an analysis of cell images containing dynein proteins.</p>
            <a href="https://www.github.com/force10269/DyneinProtein" target="_blank" rel="noopener noreferrer">
              <FaGithub className="fade-in" size={'5vw'} />
            </a>
            <br /><br /><br /><br /><br />
          </Col>
          <Col md={5} className="text-center">
            <ProjectCard imgSrc={project2Img}/>
            <h1 className="fade-in">Caliber Marketplace</h1>
            <p className="fade-in">Working with Caliber Public Safety, me and a group of five other students are working on creating a marketplace for Caliber's products and features using the MEAN stack.</p>
            <br /><br /><br /><br /><br />
          </Col>
        </Row>
        <Row>
          <Col style={{ height: '10vh' }}></Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={5} className="text-center">
            <ProjectCard imgSrc={project3Img}/>
          </Col>
          <h1 className="fade-in">Portfolio!</h1>
          <p className="fade-in">This page! Everything you see here was created with the ReactJS framework and Bootstrap. Deployment achieved through Netlify.</p>
          <a href="https://github.com/force10269/portfolioProject" target="_blank" rel="noopener noreferrer">
            <FaGithub className="fade-in" size={'5vw'} />
          </a>
        </Row>
      </Container>
    </div>
  );
}

export default ProjectsComponent;
