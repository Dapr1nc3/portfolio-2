import React from "react";
import "./Topbar.scss";
import { Person, Mail } from "@material-ui/icons";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Devin.M
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+(407) 953 0941</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>ddaprincem84@gmail.com</span>
          </div>
          {/* <div className="itemContainer">
            <AccountCircle className="icon" />
            <span>
              <a href="https://beta.crunchyroll.com/">about me</a>
            </span>
          </div> */}
        </div>
        <div className="right">
          <div className="hamburg" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
