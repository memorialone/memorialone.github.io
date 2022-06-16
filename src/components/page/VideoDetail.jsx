import React from "react";
import Header from "../Header";

const VideoDetail = () => {
  return (
    <div className="video-detail-page">
      <section className="title-section">
        <h6>Title : 하늘길</h6>
        <p>Price250,000원</p>
      </section>
      <section>
        <div className="nav-bar">
          <span>상세정보</span>
          <span>구매평</span>
        </div>

        <div>
          <iframe
            src="https://player.vimeo.com/video/586718171?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=d104c12d38"
            width="1920"
            height="1080"
            class="sample_video"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default VideoDetail;
