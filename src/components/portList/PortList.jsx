import React from "react";
import "./PortList.scss";

const PortList = ({ id, title, active, setSelected }) => {
  return (
    <li
      className={active ? "portList active" : "portList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
};

export default PortList;
