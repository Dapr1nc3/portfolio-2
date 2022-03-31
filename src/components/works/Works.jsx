import React from "react";
import { useState } from "react";
import "./Works.scss";

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Food 4 Thought",
      desc: "Create a application that targets people who choose to cook at home and want to make foods. ",
      img: "./assets/food-app.png",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Work day Scheduler",
      desc: "Application made to help a user plan their week and save notes, events, and data for user.",
      img: "./assets/work-day-ss.png",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Budget Tracker",
      desc: "This application was made to help the user track thier funds, helping to track and help make a financial decision",
      img: "./assets/budget-t.png",
    },
    {
      id: "4",
      icon: "./assets/writing.png",
      title: "Weather Dashboard",
      desc: "The application helps the user look at the weather in the designated area to plan out their day accordingly.",
      img: "./assets/weather-day.png",
    },
    {
      id: "5",
      icon: "./assets/writing.png",
      title: "What-2-watch",
      desc: "One of my first group projects, love it even now it helps the user find a list of movies based on the genre they search for.",
      img: "./assets/what-2-watch-ss.png",
    },
    {
      id: "6",
      icon: "./assets/writing.png",
      title: "1st Portfolio",
      desc: "My very first portfolio ever and it's very rough but I visit it often to remember how I started compared to where I am now.",
      img: "./assets/port-1.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>
                    {" "}
                    <a href="https://immense-shelf-25976.herokuapp.com/">App</a>
                  </span>
                  <span>
                    {" "}
                    <a href="https://github.com/Dapr1nc3/Food-App.git">Repo</a>
                  </span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
};

export default Works;
