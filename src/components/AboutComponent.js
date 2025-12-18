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
          &nbsp; &nbsp; &nbsp; &nbsp; I am a Software Engineer who graduated
          from the University of CU Boulder. I have relevant, professional
          experience in:{" "}
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
              <i>- Distributed Systems</i>
              <br />
            </h4>
            <h4>
              <i>- Cloud Infrastructure</i>
            </h4>
          </div>
          <div>
            <h4>
              <i>- Recommendation Systems</i>
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
          &nbsp; &nbsp; &nbsp; &nbsp; Currently, I am working as a Software 
          Engineer at Amazon on the Haul Personalization team, building scalable 
          recommendation systems that drive millions of dollars in revenue through 
          personalized shopping experiences. Previously, I contributed to AWS Bedrock's 
          infrastructure supporting foundational models from Anthropic, Meta, and Mistral AI.
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
