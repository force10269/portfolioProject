import '../styles/About.css';
import { Container, Row, Col } from 'react-bootstrap';
import Resume from '../assets/resume.pdf'
import { FaGitSquare, FaLinkedin, FaFilePdf} from 'react-icons/fa';

function AboutComponent() {
  return (
    <div id="about" className="full-page-panel-alternate">
      <Container fluid style={{ paddingLeft: '10%', paddingRight: '5%' }}>
        <Row>
          <Col xs={12} md={6} className="about-column text-left">
            <br />
            <h1 className="fade-in text-center" id="about"><strong>About</strong></h1>
            <div>
              <h3 className="fade-in">&nbsp; &nbsp; &nbsp; &nbsp; I am a Computer Science student at the University of Colorado Boulder. 
              As of now, I have a GPA of 3.73, and my coursework so far at CU Boulder has included:</h3>
              <br /> 
              <div className="fade-in" style={{columnCount: 2}}>
                <div>
                  <h4><i>- Software Development</i><br /></h4>
                  <h4><i>- Algorithms</i><br /></h4>
                  <h4><i>- Differential Equations</i><br /></h4>
                </div>
                <div>
                  <h4><i>- Linear Algebra</i></h4>
                  <h4><i>- Data Structures</i><br /></h4>
                  <h4><i>- User-Centered Design</i><br /></h4>
                  <h4><i>- Accessibile Web Design</i><br /></h4>
                </div>
              </div>
              <br />
              <h3 className="fade-in">&nbsp; &nbsp; &nbsp; &nbsp; I love software development, and am currently searching for a position as a Software Engineer! </h3>
            </div>
          </Col>


          <Col xs={12} md={6} className="my-5">
            <h1 className="fade-in" style={{ fontSize: '3vw' }}><i>Resume:</i></h1>
            <div className="row justify-content-center align-items-center mb-15">
              <div className="col-auto">
                <a href={Resume} without rel="noopener noreferrer" target="_blank">
                  <FaFilePdf className="fade-in" size={'5vw'}/>
                </a>
              </div>
            </div> 
            <br />

            <h1 className="fade-in" style={{ fontSize: '3vw' }}><i>LinkedIn:</i></h1>
            <div className="row justify-content-center align-items-center mb-15">
              <div className="col-auto">
                <a href="https://www.linkedin.com/in/korry-tunnicliff" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="fade-in" size={'5vw'}/>
                </a>
              </div>
            </div>
            <br />

            <h1 className="fade-in" style={{ fontSize: '3vw' }}><i>GitHub:</i></h1>
            <div className="row justify-content-center align-items-center mb-15">
              <div className="col-auto">
                <a href="https://github.com/force10269" target="_blank" rel="noopener noreferrer">
                  <FaGitSquare className="fade-in" size={'5vw'}/>
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