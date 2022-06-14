import React from "react";

import FunctionIcon from "./FunctionIcon";

const FunctionCard = ({ title, desc_1, desc_2, desc_3 }) => {
  return (
    <div className="function-card">
      <div>
        <FunctionIcon title={title} />
      </div>
      <div className="function-card-text__wraps">
        <h6>
          <strong>{title}</strong>
        </h6>
        <p>{desc_1}</p>
        <p>{desc_2}</p>
        <p>{desc_3}</p>
      </div>
    </div>
  );
};

export default FunctionCard;
