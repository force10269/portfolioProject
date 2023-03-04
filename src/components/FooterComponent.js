import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function FooterComponent() {
  return (
    <footer className="bg-light">
       <Container>
        <Row>
          <Col>
            <p>© 2023 Korry Tunnicliff. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterComponent;