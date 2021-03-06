import React, { useEffect } from "react";
import { init } from "ityped";
import { useRef } from "react";
import "./Intro.scss";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Front-End", "Back-End", "UI/UX Designer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/myself-2.png" alt="/" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Devin Minnis</h1>
          <h3>
            Web Developer: <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="/" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
