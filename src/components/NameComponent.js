import '../styles/Name.css'
import headshot from '../assets/headshot.png';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';

function NameComponent() {

  // We do this so that we can hover the elements after the animation is finished
  useEffect(() => {
    const nameSubheader1 = document.querySelector(".name-subheader-1");
    const nameSubheader2 = document.querySelector(".name-subheader-2");

    const handleAnimationEnd = (event) => {
      event.target.classList.remove('name-subheader-1');
      event.target.classList.remove('name-subheader-2');
    };

    nameSubheader1.addEventListener("animationend", (event) => {
      event.target.classList.remove('name-subheader-1');
    });
    nameSubheader2.addEventListener("animationend", (event) => {
      event.target.classList.remove('name-subheader-2');
    });

    return () => {
      nameSubheader1.removeEventListener("animationend", handleAnimationEnd);
      nameSubheader2.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  return (
    <div id="name" className="full-page-panel">
      <Container fluid style={{ paddingLeft: 200, paddingRight: 200 }}>
        <Row>
          <Col md={6}>
            <img src={headshot} alt="Headshot" className="headshot"/>
          </Col>
          <Col md={6}>
            <br />
            <br />
            <h1 style={{fontSize: '4rem'}}><strong>Korry Tunnicliff</strong></h1>
            <h3 style={{fontSize: '2.5rem'}} className="name-subheader-1">CU Boulder '23</h3>
            <h3 style={{fontSize: '2.5rem'}} className="name-subheader-2">Computer Science BS</h3>
          </Col>
        </Row>
      </Container>
      <div className="scroll-prompt">
          <AiOutlineArrowDown/>
      </div>
  </div>
  );
}

export default NameComponent;