import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import Navbar from "./Navbar";

function Header() {
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 0) {
      setIsScroll(true);
    }
    if (window.pageYOffset === 0) {
      setIsScroll(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousewheel", handleScroll);
    return () => {
      window.addEventListener("mousewheel", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header className={(isScroll ? "isScroll" : " ") + " main-header"}>
      <Link
        className={(isScroll ? "black-text" : "white-text") + " logo-text"}
        to="/"
      >
        Memorial One
      </Link>

      <Navbar isScroll={isScroll} />
    </header>
  );
}

export default Header;
