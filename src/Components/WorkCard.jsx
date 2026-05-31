import React from "react";

const WorkCard = ({ title, category, img }) => {
  return (
    <div className="work-card">
      <img src={img} alt={title} />
      <div className="work-overlay">
        <span
          style={{
            color: "var(--gold)",
            fontWeight: "600",
            fontSize: "0.9rem",
          }}
        >
          {category}
        </span>
        <h5 style={{ color: "white", fontWeight: "700", margin: 0 }}>
          {title}
        </h5>
      </div>
    </div>
  );
};

export default WorkCard;
