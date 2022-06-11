import React from "react";

function Navbar({ isScroll }) {
  return (
    <nav className="defalut-navbar">
      <ul>
        <li>
          <a className={isScroll ? "black-text" : "white-text"} href="/">
            추모영상
          </a>
        </li>
        <li>
          <a className={isScroll ? "black-text" : "white-text"} href="/">
            제작문의
          </a>
        </li>
        <li>
          <a className={isScroll ? "black-text" : "white-text"} href="/">
            제휴문의
          </a>
        </li>
        <li>
          <a className={isScroll ? "black-text" : "white-text"} href="/">
            고객센터
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
