import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FiCheck } from "react-icons/fi";
import { siteData } from "../Data/siteData";

const Pricing = () => {
  const { badge, price, currency, ingots, features } = siteData.pricing;

  return (
    <section
      id="الأسعار"
      style={{ padding: "80px 0", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "400px",
          height: "400px",
          background: "rgba(212, 175, 55, 0.03)",
          borderRadius: "50%",
          filter: "blur(100px)",
        }}
      ></div>

      <Container>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span
            style={{
              backgroundColor: "rgba(212, 175, 55, 0.1)",
              color: "var(--gold)",
              padding: "8px 25px",
              borderRadius: "50px",
              fontWeight: "700",
              fontSize: "1.1rem",
            }}
          >
            {badge}
          </span>
        </div>

        <Row className="align-items-center g-5">
          {/* السبائك على اليمين */}
          <Col lg={6} className="text-center">
            <div className="ingots-container">
              {ingots.map((ingot, i) => (
                <div key={i} className="ingot">
                  <span>{ingot}</span>
                </div>
              ))}
            </div>
            <div className="price-circle">
              <span
                style={{
                  color: "var(--gold)",
                  fontSize: "5rem",
                  fontWeight: "900",
                  lineHeight: 1,
                }}
              >
                {price}
              </span>
              <span
                style={{
                  color: "white",
                  fontSize: "1.2rem",
                  fontWeight: "700",
                }}
              >
                {currency}
              </span>
            </div>
          </Col>

          {/* التفاصيل على اليسار */}
          <Col lg={6}>
            <h3
              style={{
                fontWeight: "800",
                marginBottom: "30px",
                fontSize: "2rem",
              }}
            >
              تفاصيل <span style={{ color: "var(--gold)" }}>العرض</span>
            </h3>
            <div
              className="d-flex flex-column gap-3"
              style={{ marginBottom: "40px" }}
            >
              {features.map((feat, i) => (
                <div key={i} className="d-flex align-items-center gap-2">
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(212, 175, 55, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <FiCheck
                      style={{ color: "var(--gold)", fontSize: "14px" }}
                    />
                  </div>
                  <span style={{ color: "var(--gray)", fontSize: "1.1rem" }}>
                    {feat}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="btn-gold"
              style={{ padding: "15px 50px", fontSize: "1.2rem" }}
            >
              ابدأ مشروعك الآن
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Pricing;
