import React, { Component } from "react";
import MainHeading from "../components/MainHeading/MainHeading";
import MainFooterInputForm from "../components/MainFooterInput/MainFooterInput";
import TaskList from "../components/Tasklist/Tasklist";
import CmpltTaskList from "../components/CmpltTaskList/CmpltTaskList";
import Context from "../store/context";

class Main extends Component {
  static contextType = Context;

  render() {
    const completedTaskArrLength = this.context.completedTask.length;
    return (
      <div className="main-content">
        <MainHeading heading="Myday" />
        <div id="items">
          <TaskList />
          {completedTaskArrLength > 0 ? <CmpltTaskList /> : null}
        </div>
        <MainFooterInputForm />
      </div>
    );
  }
}

export default Main;
