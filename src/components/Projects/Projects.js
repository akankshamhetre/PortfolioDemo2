import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import concretify from "../../Assets/concretify.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={concretify}
              isBlog={false}
              title="Concretify"
              description="🛠️ Concretify is a powerful software solution crafted with React and Spring Boot, specifically designed for civil engineers. It streamlines project analysis by providing comprehensive calculations for compressive strength, flexural test, and tensile test data.🚀 This innovative tool revolutionizes project management in the civil engineering field, empowering engineers to make informed decisions with ease."
              ghLink="https://github.com/DINESHSASTE"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
