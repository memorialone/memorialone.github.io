import React from "react";

const ThumCard = ({ thumSrc, tempName, tempDescript }) => {
  return (
    <div className="template-img-text__wrap">
      <div>
        <a href="/">
          <img src={thumSrc} alt="썸네일 이미지" />
        </a>
      </div>
      <div className="template-info__wrap">
        <h4>{tempName}</h4>
        <p>{tempDescript}</p>
      </div>
    </div>
  );
};

export default ThumCard;
