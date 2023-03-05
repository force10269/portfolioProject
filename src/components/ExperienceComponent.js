import '../styles/Experience.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

function ExperienceComponent() {
  const experiences = [
    {
      title: 'Software Engineer Intern',
      location: 'MojoTech',
      timeline: 'May 2022 - August 2022',
      description: "Developed applications with a team of 25 software engineers and 4 software engineer interns.",
      descriptionCont: "Achieved with collaboration on GitHub and the use of Elixir, Phoenix LiveView, PostgreSQL, ReactJS, Apollo, GraphQL, and Absinthe while handling multiple API clients",
    },
    {
      title: 'DLA Research Assistant',
      location: 'University of Colorado Boulder',
      timeline: 'August 2021 - December 2021',
      description:
        'Managed a C++ server in a research group of over 10 student engineers and a research professor.',
      descriptionCont: 'Utilized a publish-subscribe network protocol and Web Toolkit dependencies. Handled Software Defined Radios and visualized signal interference through MATLAB and the Google Maps API'
    },
    {
      title: 'Resident Advisor',
      location: 'University of Colorado Boulder',
      timeline: 'August 2020 - May 2022',
      description:
        'Engaged and mentored hundreds of incoming Freshmen at CU Boulder.',
      descriptionCont:
        'Organized and led creative events to foster a greater sense of community across dorms in the Kittredge community',
    },
    {
      title: 'Senior Resident Advisor',
      location: 'University of Colorado Boulder',
      timeline: 'May 2022 - December 2022',
      description:
        'Led the Community Council for the Bear Creek Apartments.',
      descriptionCont:
        'Helped to lead and schedule shifts for a team of 10 Resident Advisors. Worked closely with the Hall Directors of the Bear Creek Apartments to garner a greater affinity for leadership.',
    },
    {
      title: 'Cashier',
      location: 'Ideal Market, Boulder, CO',
      timeline: 'January 2023 - Present',
      description:
        'Provides a positive experience for our customers with courteous service, and thorough knowledge of both our produce and products.',
      descriptionCont:
        'Works on the frontend of the store, and helps to process hundreds of transactions a day.',
    },
    {
      title: 'Chess Tutor',
      location: 'Chessmates, Boulder Valley School District',
      timeline: 'January 2023 - Present',
      description:
        'Teaches chess to several elementary schools clubs as both before-school and after-school programs.',
      descriptionCont:
        'Engages elementary school kids to be enthusiastic about chess, its complexity, and encourages sportsmanship amongst all players.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };


  return (
    <div id="experience" className="bg-light">
      <Container className="py-5" fluid style={{ paddingLeft: '10%', paddingRight: '10%' }}>
        <h1 className="text-center mb-5 fade-in" style={{ fontSize: '5vh' }}>Experience</h1>
        {experiences.map((experience, index) => (
          <Row
            key={index}
            className={`mb-5 align-items-center`}
            onClick={() => handleClick(index)}
          >
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