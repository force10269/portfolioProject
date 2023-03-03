import '../styles/About.css';
import { Container, Row, Col } from 'react-bootstrap';
import Resume from '../assets/resume.pdf'
import { FaGitSquare, FaLinkedin, FaFilePdf} from 'react-icons/fa';

function AboutComponent() {
  return (
    <div id="about" className="full-page-panel-alternate">
      <Container>
        <Row>
          <Col md={6}>
            <h1 style={{fontSize: "6rem"}} id="about">About</h1>
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ marginLeft: '1rem' }}>I am a Computer Science student at the University of Colorado Boulder. </h3>
              <br/>
              <h3 style={{ marginLeft: '1rem' }}>As of now, I have a GPA of 3.73, and my coursework so far at CU Boulder has included:</h3>
              <br /> 
              <div style={{ marginLeft: '2rem', columnCount: 2 }}>
                <div>
                  <h4><strong>- Software Development</strong><br /></h4>
                  <h4><strong>- Algorithms</strong><br /></h4>
                  <h4><strong>- Differential Equations</strong><br /></h4>
                </div>
                <div>
                  <h4><strong>- Linear Algebra</strong></h4>
                  <h4><strong>- Data Structures</strong><br /></h4>
                  <h4><strong>- User-Centered Design</strong><br /></h4>
                  <h4><strong>- Accessibile Web Design</strong><br /></h4>
                </div>
              </div>
              <br />
              <br />
              <h3 style={{ marginLeft: '1rem' }}>I love software development, and am currently searching for a position as a Software Engineer! </h3>
            </div>
          </Col>

          <Col md={6} className="my-5">
            <h1 style={{ fontSize: '4.5rem' }}><i>Resume:</i></h1>
            <div className="row justify-content-center align-items-center mb-15">
              <div className="col-auto">
                <a href={Resume} without rel="noopener noreferrer" target="_blank">
                  <FaFilePdf size={80}/>
                </a>
              </div>
            </div>

            <div className="row justify-content-between align-items-center icon-row">
              <div style={{marginTop: "-5rem"}} className="col-auto">
                <h1><i>LinkedIn:</i></h1>
                <a href="https://www.linkedin.com/in/korry-tunnicliff" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={80}/>
                </a>
              </div>
              <div style={{marginTop: "-5rem"}}className="col-auto">
                <h1><i>GitHub:</i></h1>
                <a href="https://github.com/force10269" target="_blank" rel="noopener noreferrer">
                  <FaGitSquare size={80}/>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutComponent;