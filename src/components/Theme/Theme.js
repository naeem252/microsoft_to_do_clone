import React, { useContext } from "react";
import ThemeItem from "./ThemeItem";
import Context from "../../store/context";

function Theme(props) {
  const context = useContext(Context);
  return (
    <div className={["theme", props.active ? "active" : ""].join(" ")}>
      <h4 className="themeHeading">Theme</h4>
      <div className="theme-container">
        {context.themeImages.map((image, index) => {
          return (
            <ThemeItem
              clicked={context.themeChanged.bind(this, index)}
              img={image}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Theme;
