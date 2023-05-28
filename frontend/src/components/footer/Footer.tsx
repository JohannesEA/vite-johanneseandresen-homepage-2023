import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-between text-center text-md-start">
          <Col md={4} className="footer__section">
            <h4>Kontakt oss</h4>
            <p>+47 12345678</p>
            <p>post@skeiveblomster.no</p>
            <p>adresse 50b</p>
          </Col>
          <Col md={4} className="footer__section">
            <h4>Om oss</h4>
            <p>Vi dyrker blomster</p>
            <p>Vi dyrker blomster</p>
            <p>Vi dyrker blomster</p>
          </Col>
        </Row>
        <div className="footer__copyright">
          <p>Copyright 2023</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
