import React from "react";

const CounterCard = ({ number, title, subText }) => {
  return (
    <div className="counter-card">
      <h3>{number}</h3>
      <h4>{title}</h4>
      <p>{subText}</p>
    </div>
  );
};

export default CounterCard;
