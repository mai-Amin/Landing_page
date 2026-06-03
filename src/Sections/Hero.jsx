import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FiCheckCircle } from "react-icons/fi";
import { siteData } from "../Data/siteData";

const Hero = () => {
  const { title, desc, checks, ctaPrimary, ctaSecondary, bgImg } =
    siteData.hero;

  return (
    <section
      id="الرئيسية"
      className="hero-section"
      style={{ backgroundImage: `url(${bgImg})` , maxWidth:"100%" , backgroundSize:"cover", backgroundrepeat:"no-repeat" }}
    >
      
      <Container className="hero-content">
        <Row className="align-items-center">
          <Col lg={7} style={{ width: "75%" }}>
            <h1
              style={{
                fontSize: "3.5rem",
                fontWeight: "900",
                lineHeight: "1.2",
                marginBottom: "25px",
              }}
            >
              {title}
            </h1>
            <p
              style={{
                color: "var(--gray)",
                fontSize: "1.2rem",
                marginBottom: "20px",
                maxWidth: "600px",
              }}
            >
              {desc}
            </p>

            <div className="d-flex gap-1 py-4">
              {checks.map((check, i) => (
                <div key={i} className="d-flex align-items-center gap-2">
                  <FiCheckCircle
                    style={{ color: "var(--gold)", fontSize: "1.3rem" }}
                  />
                  <span style={{ color: "var(--gray)", fontSize: "1.1rem" }}>
                    {check}
                  </span>
                </div>
              ))}
            </div>

            <div className="d-flex gap-3 mt-5 flex-wrap">
              <a
                href="#contact"
                className="btn-gold"
                style={{ padding: "12px 35px", fontSize: "1.1rem" }}
              >
                {ctaPrimary}
              </a>
              <a
                href="#أعمالنا"
                className="btn-outline-gold"
                style={{ padding: "12px 35px", fontSize: "1.1rem" }}
              >
                {ctaSecondary}
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
