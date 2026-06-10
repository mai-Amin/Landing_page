import React from 'react';

const FeatureCard = ({ icon: Icon, title, desc }) => {
  return (
    <div className="glow-card" style={{position:"relative"}}>
      <div
        style={{
          width: "60px",
          height: "60px",
          margin: "0 auto 15px",
          backgroundColor: "rgba(212, 175, 55, 0.1)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon style={{ color: "var(--gold)", fontSize: "1.5rem" }} />
      </div>
      <h5 style={{ color: "white", fontWeight: "700", marginBottom: "10px" }}>
        {title}
      </h5>
      <p style={{ color: "var(--gray)", fontSize: "0.9rem", margin: 0 }}>
        {/* {desc} */}
        <div
          className="d-none d-md-block" // يختفي في الشاشات الصغيرة لتجنب تشوه التصميم
          style={{
            width: "3px",
            height: "100%",
            background:
              "linear-gradient(to bottom, transparent, rgba(212, 175, 55, 0.3), transparent)", // خط ذهبي متدرج وناعم
            opacity: 0.7,
            position:"absolute",
            top:"0",
            right:"0",
            zIndex: "4",
          }}
        />
      </p>
    </div>
  );
};

export default FeatureCard;