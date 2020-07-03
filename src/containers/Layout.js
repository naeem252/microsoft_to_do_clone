import React, { useContext } from "react";
import Aside from "./Aside";
import Context from "../store/context";

function Layout(props) {
  const context = useContext(Context);
  return (
    <React.Fragment>
      <Aside />
      <main
        style={{
          backgroundImage:
            "url(" +
            require("../assests/themeImages/" + context.activeTheme + ".jpg") +
            ")",
          opacity: context.themeOpacity,
        }}
        className="main"
      >
        {props.children}
      </main>
    </React.Fragment>
  );
}

export default Layout;
