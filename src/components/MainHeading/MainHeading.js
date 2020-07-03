import React, { useContext } from "react";
import Theme from "../../components/Theme/Theme";
import Context from "../../store/context";

function MainHeading(props) {
  const context = useContext(Context);
  return (
    <div className="main-heading">
      <div className="day-title">
        <h1>{props.heading}</h1>
        {props.heading === "MyDay" ? (
          <span className="sub-date">Thrusday, july 2</span>
        ) : null}
      </div>
      <div className="customize">
        <span className="buld-icon">
          <i className="far fa-lightbulb"></i>
        </span>
        <span className="dots-icon">
          <i onClick={context.themeOpened} className="fas fa-ellipsis-h"></i>
        </span>
      </div>
      {/* themes */}
      <Theme active={context.themeOpen} />
    </div>
  );
}

export default MainHeading;
