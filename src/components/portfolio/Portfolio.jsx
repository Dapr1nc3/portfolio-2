import React, { useState } from "react";
import PortList from "../portList/PortList";
import "./Portfolio.scss";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
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
