import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { siteData } from "../Data/siteData";

const Solutions = () => {
  return (
    <section
      id="خدماتنا"
      style={{ padding: "80px 0", backgroundColor: "#0a1118" }}
    >
      <Container>
        <h2
          style={{
            textAlign: "center",
            fontWeight: "800",
            marginBottom: "50px",
            fontSize: "2.5rem",
            color: "#fff",
          }}
        >
          نقدم أفضل <span style={{ color: "var(--gold)" }}>الحلول لمتجرك</span>
        </h2>
        <Row className="g-4 justify-content-center">
          {siteData.solutions.map((sol, i) => {
            const IconComponent = sol.icon;

            return (
              <Col key={i} lg={4} md={6} >
                <div
                  className="glow-card "
                  style={{
                    borderColor: sol.color,
                    padding: "30px",
                    borderRadius: "12px",
                    backgroundColor: "#111923",
                    border: `1px solid ${sol.color}`,
                    height: "100%",
                 }}
                >
                  {/* حاوية مرنة تجمع الأيقونة والعنوان بجانب بعضهما */}
                  <div className="d-flex align-items-baseline justify-content-center mb-3">
                    <h3
                      style={{
                        color: sol.color,
                        fontWeight: "700",
                        fontSize: "1.5rem",
                        margin: 0, // أزلنا المارجن ليتوسط العنوان محاذاة الأيقونة تماماً
                      }}
                    >
                      {sol.title}
                    </h3>
                    {IconComponent && (
                      <div
                        style={{
                          color: sol.color,
                          fontSize: "2rem",
                          marginRight: "15px",
                        }}
                      >
                        <IconComponent />
                      </div>
                    )}
                  </div>

                  {/* الوصف بالأسفل */}
                  <p style={{ color: "#b3b3b3", margin: 0, lineHeight: "1.6" }}>
                    {sol.desc}
                  </p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Solutions;
