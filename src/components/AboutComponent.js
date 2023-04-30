import "../styles/About.css";
import { Container, Row, Col } from "react-bootstrap";
import Resume from "../assets/resume.pdf";
import { FaGitSquare, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { isMobileOnly } from "react-device-detect";

function AboutLeft(props) {
  return (
    <>
      <h1 className="fade-in text-center">
        <strong>About</strong>
      </h1>
      <div>
        <h3 className="fade-in">
          &nbsp; &nbsp; &nbsp; &nbsp; I am a Computer Science student at the
          University of Colorado Boulder. I currently have a 3.73 GPA and, to
          date, my coursework at CU Boulder has included:{" "}
        </h3>
        <br />
        <div className="fade-in" style={{ columnCount: 2 }}>
          <div>
            <h4>
              <i>- Software Development</i>
              <br />
            </h4>
            <h4>
              <i>- Algorithms</i>
              <br />
            </h4>
            <h4>
              <i>- Differential Equations</i>
              <br />
            </h4>
            <h4>
              <i>- Operating Systems</i>
            </h4>
          </div>
          <div>
            <h4>
              <i>- Linear Algebra</i>
            </h4>
            <h4>
              <i>- Data Structures</i>
              <br />
            </h4>
            <h4>
              <i>- User-Centered Design</i>
              <br />
            </h4>
            <h4>
              <i>- Accessible Web Design</i>
              <br />
            </h4>
          </div>
        </div>
        <br />
        <h3 className="fade-in">
          &nbsp; &nbsp; &nbsp; &nbsp; After graduating, I will be joining
          LineVision as a full-time Software Engineer. I am extremely passionate
          about software development, and am excited about the technologies that
          I will be learning out in the industry!
        </h3>
      </div>
    </>
  );
}

function AboutRight(props) {
  return (
    <Col
      xs={12}
      md={6}
      className={`${props.isMobile ? "my-5 mb-15" : "my-5"}`}
      style={{
        display: "flex",
        flexDirection: `${props.isMobile ? "row" : "column"}`,
        justifyContent: `${props.isMobile ? "center" : "center"}`,
        alignItems: `${props.isMobile ? "center" : "center"}`,
      }}
    >
      <div className="about-icon">
        <h1 className="fade-in" style={{ fontSize: "3vw" }}>
          <i>Resume</i>
        </h1>
        <div className="row justify-content-center align-items-center mb-15">
          <div className="col-auto">
            <a href={Resume} rel="noopener noreferrer" target="_blank">
              <FaFilePdf className="fade-in" size={props.iconSize} />
            </a>
          </div>
        </div>
      </div>
      <br />

      <div className="about-icon">
        <h1 className="fade-in" style={{ fontSize: "3vw" }}>
          <i>LinkedIn</i>
        </h1>
        <div className="row justify-content-center align-items-center mb-15">
          <div className="col-auto">
            <a
              href="https://www.linkedin.com/in/korry-tunnicliff"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="fade-in" size={props.iconSize} />
            </a>
          </div>
        </div>
      </div>
      <br />

      <div className="about-icon">
        <h1 className="fade-in" style={{ fontSize: "3vw" }}>
          <i>GitHub</i>
        </h1>
        <div className="row justify-content-center align-items-center mb-15">
          <div className="col-auto">
            <a
              href="https://github.com/force10269"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGitSquare className="fade-in" size={props.iconSize} />
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
}

function AboutComponent(props) {
  const iconSize = 70;
  const iconSizeBig = 45;

  return (
    <div id="about" className="full-page-panel-alternate">
      <Container
        fluid
        style={{
          paddingLeft: "10%",
          paddingRight: "5%",
          paddingBottom: `${props.isTiny ? "12%" : "0%"}`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Row>
          <Col xs={12} md={6} className="about-column text-left">
            {isMobileOnly && window.innerWidth > 800 && (
              <div>
                <br />
                <br />
                <br />
              </div>
            )}
            <AboutLeft />
          </Col>

          {!props.isTiny && (
            <AboutRight isMobile={props.isTiny} iconSize={iconSize} />
          )}

          {props.isTiny && (
            <AboutRight isMobile={props.isTiny} iconSize={iconSizeBig} />
          )}
        </Row>
      </Container>
    </div>
  );
}

export default AboutComponent;
