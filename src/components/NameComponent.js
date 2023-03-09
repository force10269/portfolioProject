import '../styles/Name.css'
import headshot from '../assets/headshot.png';
import { useState, useEffect } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { Container, Row, Col } from 'react-bootstrap';

function NameComponent() {
  const [isSmall, setIsSmallScreen] = useState(window.innerWidth < 1025);
  const [isVerySmall, setIsVerySmallScreen] = useState(window.innerWidth < 768);

    // These functions are for scrolling to each section without changing the URL with an /#{sectionID}
    function scrollTo(e, sectionName){
      e.preventDefault();
      const section = document.getElementById(sectionName); // Get the section element by ID
      window.scrollTo({
        top: section.offsetTop - (sectionName === "nameC" ? 0 : 75), // Scroll to the section's offset top
        behavior: "smooth" // Add smooth scrolling behavior
      });
    }

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 1025);
      setIsVerySmallScreen(window.innerWidth < 768);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="nameC" className="full-page-panel">
      <Container fluid style={{ paddingLeft: "15%", paddingRight: "15%"}}>
        <Row>
          <Col md={6} style={{paddingTop: `${isVerySmall ? '30%' : `${isSmall ? '0%' : '10%'}`}`}}>
            <img src={headshot} alt="Headshot" className="headshot"/>
          </Col>
          <Col md={6} className="align-items-center" style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}>
            <h1 id="head1"><strong>Korry Tunnicliff</strong></h1>
            <h3 id="head2" className="name-subheader-1"><i>CU Boulder '23</i></h3>
            <h3 id="head3" className="name-subheader-2"><i>Computer Science BS</i></h3>
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="scroll-prompt">
              <a href="#about" onClick={((e) => scrollTo(e, "about"))}><AiOutlineArrowDown id="scroll-icon" href="#about"/></a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NameComponent;