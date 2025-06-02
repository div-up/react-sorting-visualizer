import React from "react";
import "../../public/assets/AlgorithmCard.css";

const AlgorithmCard = ({ id, title, description, link }) => {
  return (
    <div className={`algorithm-card ${id}`}>
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <p>{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="learn-more"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

export default AlgorithmCard;