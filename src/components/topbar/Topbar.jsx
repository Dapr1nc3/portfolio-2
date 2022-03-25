import React from "react";
import "./Topbar.scss";
import { Person, Mail } from "@material-ui/icons";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Devin.M
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+88 999 89 77</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>Example@example.com</span>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Topbar;
