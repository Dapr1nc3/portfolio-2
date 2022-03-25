import React from "react";
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Design</li>
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://www.livetecs.com/wp-content/uploads/2019/05/Project-Management-2.png"
            alt=""
          />
          <h3>Project 1</h3>
        </div>
        <div className="item">
          <img
            src="https://www.livetecs.com/wp-content/uploads/2019/05/Project-Management-2.png"
            alt=""
          />
          <h3>Project 2</h3>
        </div>
        <div className="item">
          <img
            src="https://www.livetecs.com/wp-content/uploads/2019/05/Project-Management-2.png"
            alt=""
          />
          <h3>Project 3</h3>
        </div>
        <div className="item">
          <img
            src="https://www.livetecs.com/wp-content/uploads/2019/05/Project-Management-2.png"
            alt=""
          />
          <h3>Project 4</h3>
        </div>
        <div className="item">
          <img
            src="https://www.livetecs.com/wp-content/uploads/2019/05/Project-Management-2.png"
            alt=""
          />
          <h3>Project 5</h3>
        </div>
        <div className="item">
          <img
            src="https://www.livetecs.com/wp-content/uploads/2019/05/Project-Management-2.png"
            alt=""
          />
          <h3>Project 6</h3>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
