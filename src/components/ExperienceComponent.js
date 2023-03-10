import '../styles/Experience.css';
import ExperienceData from '../helpers/ExperienceData';
import { Container, Row, Col } from 'react-bootstrap';

function ExperienceComponent() {
  return (
    <div id="experience" className="full-page-panel-alternate">
      <Container className="py-5" fluid style={{ paddingLeft: '10%', paddingRight: '10%' }}>
        <h1 className="text-center mb-5 fade-in" style={{ fontSize: '7vh' }}>Experience</h1>
        {ExperienceData.map((experience, index) => (
          <Row className={`mb-5 align-items-center`}>
            <div className='experience-card fade-in' style={{ width: '100%' }}>
              <Col md={4} style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}>
                <h3 className="mb-0">{experience.title}</h3>
                <h4 className="mb-0"><i>{experience.location}</i></h4>
                <h5 className="mb-0">{experience.timeline}</h5>
              </Col>
              <Col md={8}>
                <p className="mb-0 text-left">- {experience.description}</p>
                <p className="mb-0 text-left">- {experience.descriptionCont}</p>
              </Col>
            </div>
          </Row>
        ))}
      </Container>
    </div>
  );
}

export default ExperienceComponent;