import React, { useContext } from "react";
import Context from "../../store/context";

function MainFooterInput(props) {
  const context = useContext(Context);

  const formElement = context.addingTask ? (
    <div className="form-group">
      <div className="form-circle">&nbsp;</div>
      <input
        onChange={context.addingTaskChanged}
        value={context.newTaskValue}
        onBlur={context.addingInputBlure}
        type="text"
        className="form-control"
        autoFocus
      />
    </div>
  ) : (
    <label className="footer-form-label">
      <span className="footer-plus-icon">
        <i className="fas fa-plus"></i>
      </span>{" "}
      Add a task
    </label>
  );

  return (
    <form
      onSubmit={context.submittedTask}
      onClick={context.toggleAddingTask}
      className="footer-form"
    >
      {formElement}
    </form>
  );
}

export default MainFooterInput;
