import CounterCard from "../components/CounterCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RoutingTextCard from "../components/RoutingTextCard";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <section className="defalut-section first">
        <div className="App main">
          <div className="main-textbox">
            <h1>
              소중한 기억을 <br />
              마음에 담으며
            </h1>
            <p>
              Consectetur adipiscing elit, sed do eiusmod tempor <br />{" "}
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <button>더 알아보기</button>
          </div>
        </div>
      </section>
      <section className="defalut-section service">
        <div className="service-section__title-box">
          <span>Our Services</span>
          <h2>
            영화같은 순간을 <br />
            담아드립니다
          </h2>
        </div>
        <div className="text-card_wrap">
          <RoutingTextCard
            title="추모영상 제공"
            subText="시네모에서 자체 개발한 추모영상 자동화 프로그램을 통해 빠르고 안정적인 서비스를 제공합니다"
            buttonText="추모영상 보러가기"
          />
          <RoutingTextCard
            title="추모영상 제공"
            subText="시네모에서 자체 개발한 추모영상 자동화 프로그램을 통해 빠르고 안정적인 서비스를 제공합니다"
            buttonText="추모영상 보러가기"
          />
          <RoutingTextCard
            title="추모영상 제공"
            subText="시네모에서 자체 개발한 추모영상 자동화 프로그램을 통해 빠르고 안정적인 서비스를 제공합니다"
            buttonText="추모영상 보러가기"
          />
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
