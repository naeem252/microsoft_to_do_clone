import React from "react";

const navigationItem = (props) => {
  return (
    <li
      onClick={props.clicked}
      className={["navigation-item", props.active ? "active" : ""].join(" ")}
    >
      <div className="item-left">
        <span className="navigation-item_icon">{props.icon}</span>
        {props.label}
      </div>
      <div className="item-right">{props.itemNumber}</div>
    </li>
  );
};
export default navigationItem;
