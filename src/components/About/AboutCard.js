import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dinesh Saste </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            A Full-Stack Developer with 2.6 years of Experience.
            <br />
            I'm passionate about leveraging technology to solve real-world problems and create meaningful experiences.
            <br />
            With a solid foundation in both frontend and backend development, I thrive on crafting efficient solutions and continuously learning new skills.
            </p>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Life: a debugging journey where we fix errors, learn, and move forward."{" "}
          </p>
          <footer className="blockquote-footer">Er. Dinesh Saste</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
