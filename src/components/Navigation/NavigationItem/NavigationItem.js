import React from "react";

const navigationItem = (props) => {
  return (
    <li
      onClick={props.clicked}
      className={["navigation-item", props.active ? "active" : ""].join(" ")}
    >
      <span className="navigation-item_icon">{props.icon}</span>
      {props.label}
    </li>
  );
};
export default navigationItem;
