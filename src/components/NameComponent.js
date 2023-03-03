import { Container, Row, Col } from 'react-bootstrap';

function NameComponent() {
  return (
    <div id="name" className="full-page-panel">
      <Container>
        <Row>
          <Col>
            <h1>Korry Tunnicliff</h1>
            <h3>CU Boulder 2023, Computer Science BS</h3>
          </Col>
        </Row>
      </Container>
      <div className="scroll-prompt">
        <i className="fas fa-chevron-down"></i>
      </div>
    </div>
  );
}

export default NameComponent;