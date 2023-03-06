import '../styles/About.css';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Resume from '../assets/resume.pdf'
import { FaGitSquare, FaLinkedin, FaFilePdf} from 'react-icons/fa';
import { isMobileOnly } from 'react-device-detect';

function AboutComponent() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  // For some odd reason, doing this in our App.js file does not affect this component
  // For right now, the bandaid solution is to copy the code here
  useEffect(() => {
    if (isMobileOnly) {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((el) => {
        el.classList.remove('fade-in');
      });
    }
  }, []);

  return (
    <div id="about" className="full-page-panel-alternate">
      <Container fluid style={{ paddingLeft: '10%', paddingRight: '5%', paddingBottom: `${isMobile ? '12%' : '0%'}` }}>
        <Row>
          <Col xs={12} md={6} className="about-column text-left">
            <h1 className="fade-in text-center"><strong>About</strong></h1>
            <div>
              <h3 className="fade-in">&nbsp; &nbsp; &nbsp; &nbsp; I am a Computer Science student at the University of Colorado Boulder. 
              I currently have a 3.73 GPA and, to date, my coursework at CU Boulder has included: </h3>
              <br /> 
              <div className="fade-in" style={{columnCount: 2}}>
                <div>
                  <h4><i>- Software Development</i><br /></h4>
                  <h4><i>- Algorithms</i><br /></h4>
                  <h4><i>- Differential Equations</i><br /></h4>
                  <h4><i>- Operating Systems</i></h4>
                </div>
                <div>
                  <h4><i>- Linear Algebra</i></h4>
                  <h4><i>- Data Structures</i><br /></h4>
                  <h4><i>- User-Centered Design</i><br /></h4>
                  <h4><i>- Accessible Web Design</i><br /></h4>
                </div>
              </div>
              <br />
              <h3 className="fade-in">&nbsp; &nbsp; &nbsp; &nbsp; I am passionate about software development, and am currently searching for a position as a Software Engineer! I am highly motivated, and am excited to see which team I will end up working with.</h3>
            </div>
          </Col>

          {!isMobile && 
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
          </Col>}

          {isMobile && 
          <Col>
            <br /><br />
            <div className="d-flex justify-content-center">
              <div className="d-flex align-items-center mx-4">
                <h1 className="fade-in" style={{ fontSize: '3vw' }}><i>Resume:&nbsp;</i></h1>
                <div className="row justify-content-center align-items-center mb-15">
                  <div className="col-auto">
                    <a href={Resume} without rel="noopener noreferrer" target="_blank">
                      <FaFilePdf className="fade-in" size={'7vw'}/>
                    </a>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center mx-4">
                <h1 className="fade-in" style={{ fontSize: '3vw' }}><i>LinkedIn:&nbsp;</i></h1>
                <div className="row justify-content-center align-items-center mb-15">
                  <div className="col-auto">
                    <a href="https://www.linkedin.com/in/korry-tunnicliff" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="fade-in" size={'7vw'}/>
                    </a>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center mx-4">
                <h1 className="fade-in" style={{ fontSize: '3vw' }}><i>GitHub:&nbsp;</i></h1>
                <div className="row justify-content-center align-items-center mb-15">
                  <div className="col-auto">
                    <a href="https://github.com/force10269" target="_blank" rel="noopener noreferrer">
                      <FaGitSquare className="fade-in" size={'7vw'}/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>}
        </Row>
      </Container>
    </div>
  );
}

export default AboutComponent;