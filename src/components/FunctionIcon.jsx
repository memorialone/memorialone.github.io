import React from "react";
import { FaDesktop, FaChartBar, FaGift, FaBullhorn } from "react-icons/fa";

const FunctionIcon = ({ title }) => {
  const size = "45";
  const color = "#BEBEBE";
  switch (title) {
    case "간단한 인터페이스":
      return <FaDesktop size={size} color={color} />;
    case "따뜻한 위로 선사":
      return <FaGift size={size} color={color} />;
    case "관리자 페이지 제공":
      return <FaChartBar size={size} color={color} />;
    case "추가 기능 피드백":
      return <FaBullhorn size={size} color={color} />;

    default:
      return <div></div>;
  }
};

export default FunctionIcon;
