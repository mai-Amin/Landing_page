import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import WorkCard from "../Components/WorkCard";
import { siteData } from "../Data/siteData";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const Portfolio = () => {
  // 1. تحديد عدد الكروت في كل شريحة بناءً على عرض الشاشة الحالي
  const getChunkSize = () => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width < 768) return 1;  // شاشات الموبايل: كرت واحد فقط في السلايد
      if (width < 992) return 2;  // شاشات التابلت: كرتين فقط في السلايد
    }
    return 3; // الشاشات الكبيرة: 3 كروت في السلايد
  };

  const [chunkSize, setChunkSize] = useState(getChunkSize());

  // 2. تحديث عدد الكروت تلقائياً عند تغيير حجم الشاشة (Resize)
  useEffect(() => {
    const handleResize = () => {
      setChunkSize(getChunkSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 3. دالة تقسيم المصفوفة ديناميكياً
  const chunkArray = (array, size) => {
    const results = [];
    for (let i = 0; i < array.length; i += size) {
      results.push(array.slice(i, i + size));
    }
    return results;
  };

  const portfolioChunks = chunkArray(siteData.portfolio, chunkSize);

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

        {/* إضافة interval={null} يمنع التقليب التلقائي المزعج أثناء المعاينة إذا رغبتِ */}
        <Carousel indicators={false} className="portfolio-carousel" interval={null}>
          {portfolioChunks.map((chunk, i) => (
            <Carousel.Item key={i}>
              <Row className="g-4 justify-content-center flex-nowrap mx-0">
                {chunk.map((item, idx) => (
                  // توزيع الـ Cols ليتناسب تماماً مع العدد المعروض من الكروت لمنع التمدد أو التراكم
                  <Col 
                    xs={12} 
                    md={chunkSize === 2 ? 6 : 12} 
                    lg={chunkSize === 3 ? 4 : (chunkSize === 2 ? 6 : 12)} 
                    key={idx}
                  >
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