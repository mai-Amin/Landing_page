import React from "react";
import Carousel from "react-bootstrap/Carousel";
import WorkCard from "../Components/WorkCard";
import { siteData } from "../Data/siteData";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const Portfolio = () => {
  return (
    <section id="أعمالنا" style={{ padding: "80px 0" }}>
      <Container>
        <h2
          style={{
            textAlign: "center",
            fontWeight: "800",
            marginBottom: "50px",
            fontSize: "2.5rem",
          }}
        >
          نماذج من <span style={{ color: "var(--gold)" }}>أعمالنا</span>
        </h2>

        {/* استخدمنا الـ Carousel الخاص بـ Bootstrap كحل أنيق بدون Tailwind */}
        <Carousel indicators={false} className="portfolio-carousel">
          {[0, 3].map((startIndex, i) => (
            <Carousel.Item key={i}>
              <Row className="g-4">
                {siteData.portfolio
                  .slice(startIndex, startIndex + 3)
                  .map((item, idx) => (
                    <Col lg={4} md={6} key={idx}>
                      <WorkCard {...item} />
                    </Col>
                  ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Portfolio;
