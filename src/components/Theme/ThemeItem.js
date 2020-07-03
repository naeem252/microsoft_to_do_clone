import React from "react";

const themeItem = (props) => {
  return (
    <div onClick={props.clicked} className="themeItem">
      <img
        src={require("../../assests/themeImages/" + props.img + ".jpg")}
        alt="some.jpg"
      />
    </div>
  );
};
export default themeItem;
