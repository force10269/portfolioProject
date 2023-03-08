import '../styles/Footer.css';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import Resume from '../assets/resume.pdf';

function FooterComponent() {
  return (
    <footer className="mt-5">
      <br />
      <Container>
        <Row className="d-flex flex-column align-items-center">
          <div className="mb-3">
            <a href="https://www.linkedin.com/in/korry-tunnicliff" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/force10269" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
              <FaGithub size={30} />
            </a>
            <a href={Resume} target="_blank" rel="noopener noreferrer" className="text-dark">
              <FaFilePdf size={30} />
            </a>
          </div>
          <div className="text-center mb-3">
            <p>Email: korry.tunnicliff@colorado.edu</p>
            <p>Phone: 720-833-1097</p>
            <p>&copy; 2023 Korry Tunnicliff. All rights reserved.</p>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterComponent;
