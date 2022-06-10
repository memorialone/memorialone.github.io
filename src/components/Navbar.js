import React from "react";

function Navbar({ isScroll }) {
  return (
    <nav className="defalut-navbar">
      <ul>
        <li>
          <a className={isScroll ? "black-text" : "white-text"} href="/">
            회사 소개
          </a>
        </li>
        <li>
          <a className={isScroll ? "black-text" : "white-text"} href="/">
            서비스 소개
          </a>
        </li>
        <li>
          <a className={isScroll ? "black-text" : "white-text"} href="/">
            Contect Us
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
