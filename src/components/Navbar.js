import React from "react";
import { Link } from "react-router-dom";

function Navbar({ isScroll }) {
  return (
    <nav className="defalut-navbar">
      <ul>
        <li>
          <Link className={isScroll ? "black-text" : "white-text"} to="/video">
            추모영상
          </Link>
        </li>
        <li>
          <Link
            className={isScroll ? "black-text" : "white-text"}
            to="/question"
          >
            제작문의
          </Link>
        </li>
        <li>
          <Link
            className={isScroll ? "black-text" : "white-text"}
            to="/collabo"
          >
            제휴문의
          </Link>
        </li>
        <li>
          <Link
            className={isScroll ? "black-text" : "white-text"}
            to="/customer-center"
          >
            고객센터
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
