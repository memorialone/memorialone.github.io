import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({
  imgSrc,
  title,
  price,
  photoLength,
  music,
  desc,
  empty,
}) => {
  if (empty) {
    return <div className="video-card-img-text__wraps empty"></div>;
  }
  return (
    <Link to={`/video/detail?title=${title}`}>
      <div className="video-card-img-text__wraps">
        <div className="video-card-img__wraps">
          <img src={imgSrc} alt="video-thum" />
        </div>
        <div className="video-card-text__wraps">
          <div className="video-card-title__wraps">
            <h6>{title}</h6>
            <p>{price}</p>
          </div>
          <div className="video-card-info__wraps">
            <span>
              사진 <strong>{photoLength} </strong>장 제작
            </span>
            <span>
              &nbsp; | <strong>BGM</strong> {music}
            </span>
          </div>
          <div className="video-card-desc__wraps">
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
