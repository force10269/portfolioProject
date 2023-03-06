import '../styles/Name.css'
import headshot from '../assets/headshot.png';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { Container, Row, Col } from 'react-bootstrap';

function NameComponent() {
  return (
    <div id="nameC" className="full-page-panel">
      <Container fluid style={{ paddingLeft: "15%", paddingRight: "15%" }}>
        <Row>
          <Col md={6} style={{paddingTop: "5%" }}>
            <img src={headshot} alt="Headshot" className="headshot"/>
          </Col>
          <Col md={6} className="align-items-center" style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}>
            <h1><strong>Korry Tunnicliff</strong></h1>
            <h3 style={{fontSize: "4vh;"}} className="name-subheader-1"><i>CU Boulder '23</i></h3>
            <h3 style={{fontSize: "4vh;"}} className="name-subheader-2"><i>Computer Science BS</i></h3>
            <br />
            <br />
          </Col>
        </Row>
      </Container>
      <br />
      <div className="scroll-prompt">
          <AiOutlineArrowDown/>
      </div>
    </div>
  );
}

export default NameComponent;