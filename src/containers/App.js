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
import MainPhotoCard from "../components/MainPhotoCard";

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

  const photoCard = {
    cnemo: {
      bgImg: require("../images/footage/1.jpg"),
      title: "Cnemo Story",
      desc_1: "시네모는 Cinema Moment의 줄임말로서",
      desc_2: "영화 같은 순간을 위해 설립되었습니다.",
      desc_3: "다큐멘터리스트, 디자이너, 개발자로 구성되어",
      desc_4: "당신의 역사에서 영화적 순간을 포착합니다.",
    },
    memorialone: {
      bgImg: require("../images/footage/2.jpg"),
      title: "MemorialOne Story",
      desc_1: "시네모가 제공하는 메모리얼원 서비스는",
      desc_2: "소중한 기억을 간직할 수 있도록",
      desc_3: "영화적 순간을 담은 당신의 사진으로",
      desc_4: "아름답고 따뜻한 영상을 만들고 있습니다",
    },
    vision: {
      bgImg: require("../images/footage/3.jpg"),
      title: "Cnemo Vision",
      desc_1: "영화적 순간을 만드는 콘텐츠로",
      desc_2: "새로운 장례 문화를 이끕니다",
      desc_3: "추모영상, 다큐멘터리, VR, AR 등으로",
      desc_4: "예술과 기술을 결합한 콘텐츠를 만듭니다",
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
      <section className="defalut-section function">
        <div className="section-func-text__wraps">
          <h2>메모리얼원</h2>
          <h4>당신을 위한 기능</h4>
        </div>
        <div className="function-card__wraps">
          <FunctionCard
            title="간단한 인터페이스"
            desc_1="자막수정과 사진 업로드를"
            desc_2="쉽고 간편하게 할 수 있는"
            desc_3="인터페이스를 갖추고 있습니다"
          />
          <FunctionCard
            title="따뜻한 위로 선사"
            desc_1="고인과 함께 한 순간으로 엮인"
            desc_2="따뜻하고 아름다운 영상은"
            desc_3="세심한 위로가 될 것입니다"
          />
          <FunctionCard
            title="관리자 페이지 제공"
            desc_1="업체별 관리자 페이지를 통해"
            desc_2="주문자 정보와 제작 진행 상황을"
            desc_3="바로 파악할 수 있습니다"
          />
          <FunctionCard
            title="추가 기능 피드백"
            desc_1="추가 기능을 요청하시면"
            desc_2="그 의견을 반영하여"
            desc_3="서비스를 개선하고 있습니다"
          />
        </div>
      </section>
      <section className="main-photo-cards__wraps">
        <MainPhotoCard
          bgImg={photoCard.cnemo.bgImg}
          title={photoCard.cnemo.title}
          desc_1={photoCard.cnemo.desc_1}
          desc_2={photoCard.cnemo.desc_2}
          desc_3={photoCard.cnemo.desc_3}
          desc_4={photoCard.cnemo.desc_4}
        />
        <MainPhotoCard
          bgImg={photoCard.memorialone.bgImg}
          title={photoCard.memorialone.title}
          desc_1={photoCard.memorialone.desc_1}
          desc_2={photoCard.memorialone.desc_2}
          desc_3={photoCard.memorialone.desc_3}
          desc_4={photoCard.memorialone.desc_4}
        />
        <MainPhotoCard
          bgImg={photoCard.vision.bgImg}
          title={photoCard.vision.title}
          desc_1={photoCard.vision.desc_1}
          desc_2={photoCard.vision.desc_2}
          desc_3={photoCard.vision.desc_3}
          desc_4={photoCard.vision.desc_4}
        />
      </section>
      <section className="defalut-section logo-imgs__wraps">
        <div className="logo-img__wraps">
          <img
            src={require("../images/logo/music_copylight.png")}
            alt="copylight-img"
            width="300px"
          />
        </div>
        <div className="logo-img__wraps">
          <img
            src={require("../images/logo/music_player.jpg")}
            alt="music_player-img"
            width="300px"
          />
        </div>
        <div className="logo-img__wraps">
          <img
            src={require("../images/logo/adobe.png")}
            alt="adobe-img"
            width="200px"
          />
        </div>
        <div className="logo-img__wraps">
          <img
            src={require("../images/logo/vimeo.png")}
            alt="vimeo-img"
            width="150px"
          />
        </div>
      </section>
      <section className="defalut-section collabo">
        <div>
          <h4>협력과 제휴를 통해 함께 성장하며 </h4>
          <h4>새로운 문화를 형성하고자 합니다</h4>
        </div>
        <div>
          <hr width="80px"></hr>
        </div>
        <div>
          <p>Through cooperation and partnership,</p>
          <p>we want to grow together and lead a new culture.</p>
        </div>
        <div>
          <button>제휴 문의하기</button>
        </div>
      </section>
      {/* <section className="defalut-section counter">
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
      </section> */}
      <Footer />
    </>
  );
}

export default App;
