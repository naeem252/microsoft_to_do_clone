import React, { useContext } from "react";
import TaskItem from "./TaskItem/TaskItem";
import Context from "../../store/context";

function TaskList(props) {
  const context = useContext(Context);
  const dueTask = context.dueTask;
  return (
    <ul className="task-list">
      {props.tasks.map((task, index) => {
        return (
          <TaskItem
            clicked={context.taskCompleted.bind(this, index)}
            taskName={task.title}
            isImportant={task.important}
            key={index}
            makeImportant={context.makeImportant.bind(this, index)}
          />
        );
      })}
    </ul>
  );
}

export default TaskList;
