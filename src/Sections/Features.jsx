import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FeatureCard from '../Components/FeatureCard';
import { siteData } from '../Data/siteData';

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
        <Row className="p-0 ">
          {siteData.features.map((feature, i) => (
            <Col
              className="p-0 m-0 border-1 card bg-dark gap-5"
              key={i}
              lg={2}
              md={4}
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