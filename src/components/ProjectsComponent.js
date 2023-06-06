import { Container, Row, Col } from "react-bootstrap";
import "../styles/Projects.css";
import ProjectData from "../helpers/ProjectData";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { FaGithub } from "react-icons/fa";

function ProjectCard(props) {
  return (
    <div className="project-card fade-in">
      <LazyLoadImage
        src={props.imgSrc}
        alt={props.title}
        effect="opacity"
        className="project-card-image"
      />
      <div className="project-info">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

function ProjectsComponent() {
  return (
    <div
      id="projects"
      className="full-page-panel"
      style={{ paddingTop: "5vh", paddingBottom: "5vh" }}
    >
      <Container
        className="py-5"
        fluid
        style={{ paddingLeft: "10%", paddingRight: "10%" }}
      >
        <h1 className="text-center mb-5 fade-in" style={{ fontSize: "7vw" }}>
          <strong>Projects</strong>
        </h1>
        <br />
        <Row className="justify-content-center">
          {ProjectData.map((project) => (
            <Col key={project.key} md={5} className="text-center">
              <ProjectCard
                imgSrc={project.imgSrc}
                title={project.title}
                githubLink={project.githubLink}
              />
              <h1 className="fade-in">{project.title}</h1>
              <p className="fade-in">{project.description}</p>
              {project.key === 4 && (
                <p className="fade-in">
                  <a
                    href="https://www.tunnicliffblog.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    tunnicliffblog.com
                  </a>
                </p>
              )}
              {project.key === 7 && (
                <p className="fade-in">
                  <a
                    href="https://www.vimdictionary.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    vimdictionary.com
                  </a>
                </p>
              )}
              {project.githubLink ? (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="fade-in" size={"5vw"} />
                </a>
              ) : (
                <>
                  <FaGithub color="grey" className="fade-in" size={"5vw"} />
                  <p>Coming Soon</p>
                </>
              )}
              <br />
              <br />
              <br />
              <br />
              <br />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ProjectsComponent;
