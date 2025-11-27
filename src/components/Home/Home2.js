import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Frontend Developer who enjoys turning ideas into fast,
              functional, and visually engaging web applications. Over time,
              I’ve explored modern web technologies and found my passion in
              building intuitive user interfaces and seamless full-stack
              experiences.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, React.js, Tailwind CSS, Node.js, Express.js, and
                  MongoDB{" "}
                </b>
              </i>
              — and I enjoy bringing together frontend responsiveness with
              backend logic to create complete, scalable products.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  web application development, frontend engineering, and
                  building MERN-stack solutions,{" "}
                </b>
              </i>
              that focus on performance, usability, and clean design.
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
