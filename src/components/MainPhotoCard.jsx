import React from "react";
const MainPhotoCard = ({ bgImg, title, desc_1, desc_2, desc_3, desc_4 }) => {
  const style = {
    background: `url(${bgImg}) center center / cover no-repeat`,
    backgroundSize: "cover",
  };
  return (
    <div className="main-photo-card" style={style}>
      <div className="main-photo-card-text__wraps">
        <div>
          <h5>{title}</h5>
          <p>{desc_1}</p>
          <p>{desc_2}</p>
          <p>{desc_3}</p>
          <p>{desc_4}</p>
        </div>
      </div>
    </div>
  );
};

export default MainPhotoCard;
