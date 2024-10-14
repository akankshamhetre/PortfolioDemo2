import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
  AiFillMobile,
  
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
            Greetings from the heart of tech-town Pune! 🌟
            <i>
                <b className="purple">I'm Dinesh Saste, </b>
              </i> 
                 a software sorcerer brewing innovation with
               <i>
                <b className="purple"> TechSamarth Innovation</b>
              </i> 
              <br />
              <br />From unraveling the mysteries of Oracle databases to conjuring Java spells, I'm on a quest to turn code into gold. 
              <i>
                <b className="purple">  With a dash of creativity and a sprinkle of caffeine, I'm all about crafting solutions that dazzle and delight.</b>
              </i>
              <br />
              <br />
              When I'm not weaving digital dreams, you'll find me chasing sunsets, losing myself in a good book, or diving into the latest tech trends like a fearless explorer.
              
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple"> FullStack Developement</b> With
              <i>
                <b className="purple">
                  {" "}
                  Modern Library and Frameworks.
                </b>
              </i>
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/DINESHSASTE"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="SASTEDINESH96@GMAIL.COM"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dinesh-saste-487b67301"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="tel:+917887820102"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMobile />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
