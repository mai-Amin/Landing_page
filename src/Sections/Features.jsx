import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FeatureCard from "../Components/FeatureCard";
import { siteData } from "../Data/siteData";

const Features = () => {
  return (
    <section id="مميزاتنا" style={{ padding: "80px 0" }}>
      <Container>
        <h2
          style={{
            textAlign: "center",
            fontWeight: "800",
            marginBottom: "50px",
            fontSize: "2.5rem",
          }}
        >
          لماذا <span style={{ color: "var(--gold)" }}>تختارنا؟</span>
        </h2>
        <Row className="p-0 feature-row " style={{border: '0.5px solid var(--gold-light) ' , borderRadius:" 10px "}}>
          {siteData.features.map((feature, i) => (
            <Col
              className=" p-0 m-0 border-1  rounded-2 card bg-dark "
              key={i}
              lg={2}
              md={4}
              sm={4}
            >
              <FeatureCard {...feature} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
