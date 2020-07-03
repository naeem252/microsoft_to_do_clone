import React, { useContext } from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import Context from "../../store/context";

function Navigation(props) {
  const context = useContext(Context);
  return (
    <ul className="navigation">
      <NavigationItem
        clicked={context.sectionActivated.bind(this, "Myday")}
        active={context.activeSection === "Myday" ? true : false}
        icon={<i className="fas fa-bahai"></i>}
        label="My Day"
      />
      <NavigationItem
        clicked={context.sectionActivated.bind(this, "Important")}
        active={context.activeSection === "Important" ? true : false}
        icon={<i className="far fa-star"></i>}
        label="Important"
      />
      <NavigationItem
        clicked={context.sectionActivated.bind(this, "Planed")}
        active={context.activeSection === "Planed" ? true : false}
        icon={<i className="fas fa-newspaper"></i>}
        label="Planed"
      />
      <NavigationItem
        clicked={context.sectionActivated.bind(this, "AssignToYou")}
        active={context.activeSection === "AssignToYou" ? true : false}
        icon={<i className="fas fa-user"></i>}
        label="Assigned to you"
      />
      <NavigationItem
        clicked={context.sectionActivated.bind(this, "Task")}
        icon={<i className="fas fa-home"></i>}
        active={context.activeSection === "Task" ? true : false}
        label="Task"
      />
    </ul>
  );
}

export default Navigation;
