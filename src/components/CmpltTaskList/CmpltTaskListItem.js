import React from "react";

const cmpltTaskListItem = (props) => {
  return (
    <li className="task-item">
      <div className="task-item_text">
        <div onClick={props.clicked} className="task-item_circle cmplt">
          <span className="task-item_circle-icon">
            <i className="fas fa-check"></i>
          </span>
        </div>
        <div className="task-item_text_container cmplt">
          <span className="task-item_text_heading">{props.taskName}</span>{" "}
          <span className="task-item_sub">task</span>
        </div>
      </div>
      <div
        className={[
          "task-item_icon",
          props.isImportant ? "important" : "",
        ].join(" ")}
      >
        <i className="fas fa-star-of-life"></i>
      </div>
    </li>
  );
};

export default cmpltTaskListItem;
