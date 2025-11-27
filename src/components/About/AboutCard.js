import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Ashish Kumar Yadav</span>{" "}
            from <span className="purple">Jaipur, Rajasthan</span>.
            <br />I completed my Bachelor of Technology in{" "}
            <span className="purple">
              Instrumentation and Control Engineering
            </span>{" "}
            from{" "}
            <span className="purple">
              Dr. B.R. Ambedkar National Institute of Technology (NIT Jalandhar){" "}
            </span>
            <br />
            Where I built a strong foundation in programming, problem-solving,
            and modern software development. <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket & Badminton 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music 🎧
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep building, keep learning — the journey matters the most!"{" "}
          </p>
          <footer className="blockquote-footer">Ashish</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
