import '../styles/About.css';
import { Container, Row, Col } from 'react-bootstrap';
import Resume from '../assets/resume.pdf'
import { FaGitSquare, FaLinkedin, FaFilePdf} from 'react-icons/fa';

function AboutComponent() {
  return (
    <div id="about" className="full-page-panel-alternate">
      <Container fluid style={{ paddingLeft: 200, paddingRight: 50 }}>
        <Row>
          <Col md={6}>
            <h1 className="fade-in" style={{fontSize: "4.5rem"}} id="about"><strong>About</strong></h1>
            <div style={{ textAlign: 'left' }}>
              <h3 className="fade-in">&nbsp; &nbsp; &nbsp; &nbsp;I am a Computer Science student at the University of Colorado Boulder. 
                  As of now, I have a GPA of 3.73, and my coursework so far at CU Boulder has included:
              </h3>
              <br /> 
              <div className="fade-in" style={{ columnCount: 2 }}>
                <div>
                  <h4 className="fade-in"><strong>- Software Development</strong><br /></h4>
                  <h4 className="fade-in"><strong>- Algorithms</strong><br /></h4>
                  <h4 className="fade-in"><strong>- Differential Equations</strong><br /></h4>
                </div>
                <div>
                  <h4 className="fade-in"><strong>- Linear Algebra</strong></h4>
                  <h4 className="fade-in"><strong>- Data Structures</strong><br /></h4>
                  <h4 className="fade-in"><strong>- User-Centered Design</strong><br /></h4>
                  <h4 className="fade-in"><strong>- Accessibile Web Design</strong><br /></h4>
                </div>
              </div>
              <br />
              <h3 className="fade-in">&nbsp; &nbsp; &nbsp; &nbsp; I love software development, and am currently searching for a position as a Software Engineer! </h3>
            </div>
          </Col>

          <Col md={6} className="my-5">
            <h1 className="fade-in" style={{ fontSize: '4.5rem' }}><i>Resume:</i></h1>
            <div className="row justify-content-center align-items-center mb-15">
              <div className="col-auto">
                <a href={Resume} without rel="noopener noreferrer" target="_blank">
                  <FaFilePdf className="fade-in" size={80}/>
                </a>
              </div>
            </div>

            <div className="row justify-content-between align-items-center icon-row">
              <div style={{marginTop: "-5rem"}} className="col-auto">
                <h1 className="fade-in"><i>LinkedIn:</i></h1>
                <a href="https://www.linkedin.com/in/korry-tunnicliff" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="fade-in" size={80}/>
                </a>
              </div>
              <div style={{marginTop: "-5rem"}}className="col-auto">
                <h1 className="fade-in"><i>GitHub:</i></h1>
                <a href="https://github.com/force10269" target="_blank" rel="noopener noreferrer">
                  <FaGitSquare className="fade-in" size={80}/>
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