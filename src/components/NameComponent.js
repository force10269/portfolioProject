import '../styles/Name.css'
import headshot from '../assets/headshot.png';
import ScrollTo from '../helpers/ScrollTo';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { Container, Row, Col } from 'react-bootstrap';

function NameComponent(props) {
  return (
    <div id="nameC" className="full-page-panel">
      <Container fluid style={{ paddingLeft: "15%", paddingRight: "15%"}}>
        <Row>
          <Col md={6} style={{paddingTop: `${props.isTiny ? '30%' : `${props.isSmall ? '0%' : '10%'}`}`}}>
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
              <a href="#about" onClick={((e) => ScrollTo(e, "about"))}><AiOutlineArrowDown id="scroll-icon" href="#about"/></a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NameComponent;