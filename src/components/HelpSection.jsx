import React from "react";

const HelpSection = ({
  helpImg,
  helpTitle,
  helpTitleEng,
  descript_1,
  descript_2,
}) => {
  return (
    <div className="help-img-text__wrap">
      <div className="help-img__wrap">
        <img src={helpImg} alt="help 이미지" />
      </div>

      <div className="help-info__wrap">
        <div className="help-info-title__wrap">
          <h2>{helpTitle}</h2>
          <span>{helpTitleEng}</span>
        </div>
        <div className="help-info-descript__wrap">
          <p>{descript_1}</p>
          <p>{descript_2}</p>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
