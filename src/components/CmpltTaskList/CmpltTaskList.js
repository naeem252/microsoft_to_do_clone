import React, { useContext } from "react";
import CmpltTaskListItem from "./CmpltTaskListItem";
import Context from "../../store/context";

function CmpltTaskList(props) {
  const context = useContext(Context);
  const completedTask = context.completedTask;
  return (
    <ul className="cmplt-list">
      <h5 onClick={context.toggleCompletedTask} className="cmplt-list_heading">
        <span
          className={[
            "cmplt-list_arro",
            context.showCompletedTask ? "active" : "",
          ].join(" ")}
        >
          <i className="fas fa-chevron-right"></i>
        </span>{" "}
        Completed
      </h5>
      <div
        className={[
          "cmplt-list-container",
          context.showCompletedTask ? "active" : "",
        ].join(" ")}
      >
        {completedTask.map((task, index) => {
          return (
            <CmpltTaskListItem
              clicked={context.undoCompletedTask.bind(this, index)}
              taskName={task.title}
              isImportant={task.important}
              key={index}
            />
          );
        })}
      </div>
    </ul>
  );
}
export default CmpltTaskList;
