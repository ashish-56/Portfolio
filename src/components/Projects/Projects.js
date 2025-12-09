import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tracker from "../../Assets/Projects/tracker.png";
import translator from "../../Assets/Projects/translator.png";
import traviya from "../../Assets/Projects/traviya.png";
import movify from "../../Assets/Projects/movify.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tracker}
              isBlog={false}
              title="Expense Tracker"
              description="A responsive personal finance tracker that allows users to add, edit, and delete expenses. Built using React.js and Tailwind CSS with efficient state management through React Hooks."
              ghLink="https://github.com/ashish-56/Expense-Tracker"
              demoLink="https://expense-tracker-ten-flame.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={translator}
              isBlog={false}
              title="Language Translator"
              description="A React-based web app that translates text between 100+ languages with real-time UI updates. Integrated external translation APIs for accurate results and built an intuitive interface for seamless language switching and user experience."
              ghLink="https://github.com/ashish-56/Language-Translator"
              demoLink="https://language-translator-eight-omega.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={traviya}
              isBlog={false}
              title="Traviya - Travel Booking Web Application"
              description="A full-stack travel booking platform where users can search trips by destination, month, and type with dynamic filtering. Built using React, Node.js, Express, and MongoDB with secure JWT authentication, and real-time results."
              ghLink="https://github.com/ashish-56/traviya-travel-site"
              demoLink="https://traviya-travel-site.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movify}
              isBlog={false}
              title="Movify Explorer"
              description="A responsive movie search and watchlist application powered by JavaScript and the OMDb API. Features include live search, multi-page results, status tags, filters, sorting, and automatic featured movie recommendations."
              ghLink="https://github.com/ashish-56/Movify-Explorer"
              demoLink="https://movify-explorer.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
