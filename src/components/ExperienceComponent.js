import { Container, Row, Col } from 'react-bootstrap';

function ExperienceComponent() {
  return (
    <div id="experience" className="full-page-panel">
      <Container>
        <Row>
          <Col>
            <h2 id="experience">Experience</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Col>
        </Row>
      </Container>
      <div className="scroll-prompt">
        <i className="fas fa-chevron-down"></i>
      </div>
    </div>
  );
}

export default ExperienceComponent;