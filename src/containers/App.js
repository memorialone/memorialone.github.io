import CounterCard from "../components/CounterCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RoutingTextCard from "../components/RoutingTextCard";
import "./App.css";

import mainGif from "../images/gif/main.gif";
import giftGif from "../images/gif/gift.gif";

import Mouse from "../components/Mouse";
import ThumCard from "../components/ThumCard";
import HelpSection from "../components/HelpSection";
import FunctionCard from "../components/FunctionCard";

function App() {
  const template = {
    sky: {
      name: "Letter 하늘길",
      descript: "당신을 떠올리며 바라본 하늘에 편지를 쓴다",
      src: require("../images/thum/thum_sky.png"),
    },
    essay: {
      name: "Essay 기억노트",
      descript: "당신과 함께 했기에 모든 순간이 눈부셨다",
      src: require("../images/thum/thum_essay.png"),
    },
    drama: {
      name: "Drama 자서전",
      descript: "태어나 당신을 만나 행복했고 여전히 사랑합니다",
      src: require("../images/thum/thum_drama.png"),
    },
  };

  const help = {
    upload: {
      img: require("../images/help/help_upload.png"),
      title: "간편한 사진 업로드",
      engTitle: "Easy photo upload",
      descript_1: "사진 여러 장을 한 번에 올릴 수 있고",
      descript_2: "챕터별로 원하는 느낌의 사진을 올릴 수 있습니다",
    },
    edit: {
      img: require("../images/help/help_edit.png"),
      title: "자막을 원하는 대로 수정",
      engTitle: "Modify subtitles as desired",
      descript_1: "당신께 전하고 싶은 이야기를 마음껏 적을 수 있고",
      descript_2: "그 이야기가 영상에 어떻게 보이는지 확인할 수 있습니다",
    },
    complete: {
      img: require("../images/help/help_complete.png"),
      title: "빠른 제작 & 수정",
      engTitle: "Fast time to build",
      descript_1: "자료 업로드 기준으로 4시간 이내에 제작을 완료하여",
      descript_2: "잠시나마 작은 위로가 될 수 있도록 최선을 다합니다",
    },
    download: {
      img: require("../images/help/help_download.gif"),
      title: "영상 시청 & 다운로드",
      engTitle: "Watch and download a video",
      descript_1: "문자(SMS)로 전송된 링크에 접속하면",
      descript_2: "영상을 바로 볼 수 있고 다운로드할 수 있습니다",
    },
  };

  return (
    <>
      <Header />
      <section className="defalut-section first">
        <div className="App main">
          <div className="main-textbox">
            <h1>당신을 기억하겠습니다</h1>
            <p>당신의 기억을 마음에 담아내며</p>
          </div>
          <div>
            <img src={mainGif} alt="메인 gif" width="700px" />
          </div>
        </div>
        <Mouse />
      </section>
      <section className="defalut-section service">
        <div className="service-section__title-box">
          <h2>
            당신과의 기억을 간직하기 위해
            <br />
            하고픈 말과 사진을 담아봅니다
          </h2>
          <p>
            소중한 순간, 그리운 흔적, 아름다운 기억을 담는 <br />
            추모영상 제작 전문 메모리얼원 입니다
          </p>
        </div>
        <div className="text-card_wrap">
          <img src={giftGif} alt="gift gif" width="300px" />
        </div>
      </section>
      <section className="defalut-section video">
        <div>
          <span>Memorial Movie</span>
          <h1>메모리얼원 추모영상</h1>
        </div>
        <div className="thum-cards">
          <ThumCard
            thumSrc={template.sky.src}
            tempName={template.sky.name}
            tempDescript={template.sky.descript}
          />
          <ThumCard
            thumSrc={template.essay.src}
            tempName={template.essay.name}
            tempDescript={template.essay.descript}
          />
          <ThumCard
            thumSrc={template.drama.src}
            tempName={template.drama.name}
            tempDescript={template.drama.descript}
          />
        </div>
        <div className="video-detail-button__wrap">
          <a href="/">자세히 보기</a>
        </div>
      </section>
      <section className="defalut-section">
        <HelpSection
          helpImg={help.upload.img}
          helpTitle={help.upload.title}
          helpTitleEng={help.upload.engTitle}
          descript_1={help.upload.descript_1}
          descript_2={help.upload.descript_2}
        />
        <HelpSection
          helpImg={help.edit.img}
          helpTitle={help.edit.title}
          helpTitleEng={help.edit.engTitle}
          descript_1={help.edit.descript_1}
          descript_2={help.edit.descript_2}
        />
        <HelpSection
          helpImg={help.complete.img}
          helpTitle={help.complete.title}
          helpTitleEng={help.complete.engTitle}
          descript_1={help.complete.descript_1}
          descript_2={help.complete.descript_2}
        />
        <HelpSection
          helpImg={help.download.img}
          helpTitle={help.download.title}
          helpTitleEng={help.download.engTitle}
          descript_1={help.download.descript_1}
          descript_2={help.download.descript_2}
        />
      </section>
      <section className="defalut-section star-back">
        <p>모든 이들이 자신만의 역사를 만들며 살아간다</p>
        <p>여기 또 하나의 역사를 기억한다</p>
      </section>
      <section>
        <div></div>
        <div>
          <FunctionCard />
        </div>
      </section>
      <section className="defalut-section counter">
        <CounterCard
          number="1000+"
          title="Total Projects"
          subText="Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus"
        />
        <CounterCard
          number="10"
          title="Partners"
          subText="Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus"
        />
        <CounterCard
          number="1249"
          title="Anything"
          subText="Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus"
        />
      </section>
      <Footer />
    </>
  );
}

export default App;
