import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import WeatherApp from "../../Assets/Projects/WeatherApp.png";
import TextConverter from "../../Assets/Projects/TextConverter.png";

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
         { <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WeatherApp}
              isBlog={false}
              title="Weather App"
              description="An interactive Weather App which displays realtime weather information like current temp, AQI, rainfall, wind speed. "
              ghLink="https://github.com/karangondal/Weather-App"
              demoLink="https://weather-app-git-master-karan-gondals-projects.vercel.app/"
            />
          </Col>}

          {<Col md={4} className="project-card">
            <ProjectCard
              imgPath={TextConverter}
              isBlog={false}
              title="Text-Converter"
              description="Developed a React-based text converter app with features like text manipulation, dark mode, and user activity alerts."
              ghLink="https://github.com/karangondal/text-converter"
              demoLink="https://karangondal.github.io/text-converter/"
            />
          </Col>}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
