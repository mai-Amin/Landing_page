import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { FiArrowLeft } from "react-icons/fi";
import { siteData } from "../Data/siteData";
import { TbArrowNarrowLeftDashed } from "react-icons/tb";

const Steps = () => {
  return (
    <section id="خطوات العمل" style={{ padding: "80px 0" }}>
      <Container>
        <h2
          style={{
            textAlign: "center",
            fontWeight: "800",
            marginBottom: "60px",
            fontSize: "2.5rem",
          }}
        >
          خطوات <span style={{ color: "var(--gold)" }}>العمل معنا</span>
        </h2>


          <Row className="g-4">
            {siteData.steps.map((step, i) => (
              <Col
                lg={true}
                md={6}
                key={i}
                className="step-item"
                style={{ textAlign: "center", position: "relative" }}
              >
                <div className="step-circle">
                  <span>{step.num}</span>
                </div>
                <h5 style={{ fontWeight: "700", marginBottom: "10px" }}>
                  {step.title}
                </h5>
                <p
                  style={{
                    color: "var(--gray)",
                    fontSize: "0.9rem",
                    maxWidth: "200px",
                    margin: "0 auto",
                  }}
                >
                  {step.desc}
                </p>

                {i < siteData.steps.length - 1 && (
                  <div
                    className="d-none d-lg-block"
                    style={{
                      position: "absolute",
                      top: "42px",
                      left: "-10px",
                      zIndex: 2,
                    }}
                  >
                    <TbArrowNarrowLeftDashed 
                      style={{ color: "var(--gold)", fontSize: "2.4rem" }}
                    />
                  </div>
                )}
              </Col>
            ))}
          </Row>
        
      </Container>
    </section>
  );
};

export default Steps;
