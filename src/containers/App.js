import CounterCard from "../components/CounterCard";

import Header from "../components/Header";
import RoutingTextCard from "../components/RoutingTextCard";
import "./App.css";

import { BrowserRouter, Link, Route } from "react-router-dom";
import { Routes } from "react-router";
import Home from "../components/page/Home";
import FunctionCard from "../components/FunctionCard";
import Video from "../components/page/Video";
import VideoDetail from "../components/page/VideoDetail";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/video" element={<Video />}></Route>
        <Route path="/video/detail" element={<VideoDetail />}></Route>
      </Routes>

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
    </BrowserRouter>
  );
}

export default App;
