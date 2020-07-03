import React from "react";

const taskItem = (props) => {
  return (
    <li className="task-item">
      <div className="task-item_text">
        <div onClick={props.clicked} className="task-item_circle">
          <span className="task-item_circle-icon">
            <i className="fas fa-check"></i>
          </span>
        </div>
        <div className="task-item_text_container">
          {props.taskName} <span className="task-item_sub">task</span>
        </div>
      </div>
      <div
        title={props.isImportant ? "Make it unimportant" : "Make it important"}
        className={[
          "task-item_icon",
          props.isImportant ? "important" : "",
        ].join(" ")}
      >
        <i onClick={props.makeImportant} className="fas fa-star-of-life"></i>
      </div>
    </li>
  );
};

export default taskItem;
