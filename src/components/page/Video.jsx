import React, { useState } from "react";
import Footer from "../Footer";
import VideoCard from "../VideoCard";

const Video = () => {
  const [isActive, setIsActive] = useState(1);
  const [type, setType] = useState("basic");

  const templates = [
    {
      id: "sky",
      title: "Letter : 하늘길",
      desc: "당신을 떠올리며 멍하니 바라본 하늘에 편지를 씁니다",
      music: "메이세컨 - 바람소리",
      photoLength: "15",
      src: require("../../images/thum/thum_sky.png"),
      price: "250,000원",
      type: "basic",
    },
    {
      id: "Essay",
      title: "Essay : 기억노트",
      desc: "모든 순간이 눈 부셨던 건 당신과 함께 했기 때문입니다",
      music: "Meet again",
      photoLength: "30",
      src: require("../../images/thum/thum_essay.png"),
      price: "350,000원",
      type: "basic",
    },
    {
      id: "Drama_trip",
      title: "Drama : 여행",
      desc: "인생이란 여행을 함께 만끽할 수 있어서 행복했습니다",
      music: "하림 - 소풍",
      photoLength: "40",
      src: require("../../images/thum/thum_trip.png"),
      price: "450,000원",
      type: "basic",
    },
    {
      id: "Drama",
      title: "Drama : 자서전",
      desc: "태어나 당신을 만나 행복했고, 여전히 사랑합니다",
      music: "시간을 넘어서",
      photoLength: "40",
      src: require("../../images/thum/thum_drama.png"),
      price: "450,000원",
      type: "basic",
    },
    {
      id: "Premium",
      title: "Premium : 맞춤 제작",
      desc: "고인의 특별한 삶을 기리기 위한 맞춤 제작 서비스입니다",
      music: "",
      photoLength: "N",
      src: require("../../images/thum/thum_premium.png"),
      price: "500,000원",
      type: "premium",
    },
    {
      id: "sky_christ",
      title: "Letter : 하늘길 (기독교)",
      desc: "하늘을 바라보며 주님과 함께하는 그대 모습 그려봅니다",
      music: "당신과 안식합니다",
      photoLength: "15",
      src: require("../../images/thum/thum_sky_christ.png"),
      price: "250,000원",
      type: "christ",
    },
    {
      id: "Essay_christ",
      title: "Essay : 기억노트 (기독교)",
      desc: "그대를 가슴 깊이 간직하며 주님의 크신 뜻 함께 하리라",
      music: "당신과 안식합니다",
      photoLength: "30",
      src: require("../../images/thum/thum_essay_christ.png"),
      price: "350,000원",
      type: "christ",
    },
    {
      id: "sky_catholic",
      title: "Letter : 하늘길 (천주교)",
      desc: "하늘 나라 말씀으로 사는 주님의 종 그대를 떠올립니다",
      music: "주 예수보다 더 귀한 것은 없네",
      photoLength: "15",
      src: require("../../images/thum/thum_sky_catholic.png"),
      price: "250,000원",
      type: "catholic",
    },
    {
      id: "Essay_catholic",
      title: "Essay : 기억노트 (천주교)",
      desc: "그에게 주님의 영원한 기쁨, 안식과 평화를 주시옵소서",
      music: "주 예수보다 더 귀한 것은 없네",
      photoLength: "30",
      src: require("../../images/thum/thum_essay_catholic.png"),
      price: "350,000원",
      type: "catholic",
    },
  ];

  const switchActive = (e) => {
    console.log("hellp world", e.target.innerText);
    const text = e.target.innerText;
    switch (text) {
      case "추모영상":
        setIsActive(1);
        setType("basic");
        break;
      case "프리미엄":
        setIsActive(2);
        setType("premium");
        break;
      case "기독교 전용":
        setIsActive(3);
        setType("christ");
        break;
      case "천주교 전용":
        setIsActive(4);
        setType("catholic");
        break;

      default:
        break;
    }

    // setIsActive(index);
  };
  return (
    <>
      <div id="video-page">
        <section className="defalut-section video-page-section">
          <p>
            이별 후에 남겨진 수많은 순간, 그리운 흔적, <br />
            아름다운 기억을 모아 따뜻한 영상으로 담아내 봅니다
          </p>
        </section>

        <nav>
          <ul>
            <li
              onClick={switchActive}
              className={isActive === 1 ? "isActive" : " "}
            >
              추모영상
            </li>
            <li
              onClick={switchActive}
              className={isActive === 2 ? "isActive" : " "}
            >
              프리미엄
            </li>
            <li
              onClick={switchActive}
              className={isActive === 3 ? "isActive" : " "}
            >
              기독교 전용
            </li>
            <li
              onClick={switchActive}
              className={isActive === 4 ? "isActive" : " "}
            >
              천주교 전용
            </li>
          </ul>
        </nav>
        <div className="video-card-section-flex_wraps">
          <section className="defalut-section video-card-section">
            {/* <div */}
            {templates.map((template, idx) => {
              if (type === template.type) {
                return (
                  <VideoCard
                    imgSrc={template.src}
                    title={template.title}
                    price={template.price}
                    photoLength={template.photoLength}
                    music={template.music}
                    desc={template.desc}
                    key={idx}
                  />
                );
              }
              return null;
            })}
            {templates?.length % 2 !== 0 && <VideoCard empty={true} />}
            {templates?.length % 2 !== 0 && <VideoCard empty={true} />}
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Video;
