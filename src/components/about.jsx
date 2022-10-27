import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { Image } from "react-bootstrap";
import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <Container>
        <Row className="direction-responsive-about">
          <Col>
            <Image src="img/about.jpg" fluid />
          </Col>

          <Col>
            <div className="about-text">
              <h2>About Us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <Col>
                    <Col>
                      <Nav defaultActiveKey="/home" as="ul">
                        <Nav.Item as="li">Tempor incididunt</Nav.Item>
                        <Nav.Item as="li">Tempor incididunt</Nav.Item>
                        <Nav.Item as="li">Tempor incididunt</Nav.Item>

                        <Nav.Item as="li">Tempor incididunt</Nav.Item>
                      </Nav>
                    </Col>

                    <Col>
                      <Nav defaultActiveKey="/home" as="ul">
                        <Nav.Item as="li">Tempor incididunt</Nav.Item>
                        <Nav.Item as="li">Tempor incididunt</Nav.Item>
                        <Nav.Item as="li">Tempor incididunt</Nav.Item>

                        <Nav.Item as="li">Tempor incididunt</Nav.Item>
                      </Nav>
                    </Col>
                  </Col>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="col-lg-6">
          <Col className="col-xl-12 col-xs-12 col-sm-12 col-md-12">1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </div>
  );
};
