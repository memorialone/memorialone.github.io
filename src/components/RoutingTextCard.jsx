import React from "react";

const RoutingTextCard = ({ title, subText, buttonText }) => {
  return (
    <div className="text-card">
      <h3>{title}</h3>
      <p>{subText}</p>
      <button>{buttonText}</button>
    </div>
  );
};

export default RoutingTextCard;
