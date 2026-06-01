import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FiPhone, FiMail, FiMessageCircle } from "react-icons/fi";
import { siteData } from "../Data/siteData";

const Footer = () => {
  const { quickLinks, contact, cta, copyright } = siteData.footer;

  return (
    <footer
      style={{
        backgroundColor: "#060c12",
        borderTop: "1px solid #1e2a38",
        paddingTop: "60px",
        paddingBottom: "30px",
       
      }}
    >
      <Container>
        <Row className="g-5">
          <Col lg={4} md={6}>
            <h5
              style={{
                color: "var(--gold)",
                fontWeight: "700",
                marginBottom: "20px",
              }}
            >
              روابط سريعة
            </h5>
            <ul className="list-unstyled">
              {quickLinks.map((link, i) => (
                <li key={i} className="mb-2">
                  <a
                    href={`#${link}`}
                    style={{ color: "var(--gray)", textDecoration: "none" }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          <Col lg={4} md={6}>
            <h5
              style={{
                color: "var(--gold)",
                fontWeight: "700",
                marginBottom: "20px",
              }}
            >
              معلومات الاتصال
            </h5>
            <div className="d-flex flex-column gap-3">
              <a
                href={`tel:${contact.phone}`}
                style={{
                  color: "var(--gray)",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <FiPhone style={{ color: "var(--gold)" }} /> {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                style={{
                  color: "var(--gray)",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <FiMail style={{ color: "var(--gold)" }} /> {contact.email}
              </a>
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "var(--gray)",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <FiMessageCircle style={{ color: "var(--gold)" }} /> واتساب
                مباشر
              </a>
            </div>
          </Col>

          <Col lg={4} md={12}>
            <h5
              style={{
                color: "var(--gold)",
                fontWeight: "700",
                marginBottom: "20px",
              }}
            >
              {cta.title}
            </h5>
            <p style={{ color: "var(--gray)", marginBottom: "20px" }}>
              لا تضيع المزيد من الوقت، ابدأ مشروعك الرقمي الآن معنا.
            </p>
            <a href="#contact" className="btn-gold">
              {cta.btn}
            </a>
          </Col>
        </Row>

        <div
          style={{
            borderTop: "1px solid #1e2a38",
            marginTop: "40px",
            paddingTop: "20px",
            textAlign: "center",
            color: "#6c757d",
            fontSize: "0.9rem",
          }}
        >
          {copyright}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
