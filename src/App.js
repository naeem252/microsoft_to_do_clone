import React, { Component } from "react";
import Layout from "./containers/Layout";
import Myday from "./sections/Myday";
import Important from "./sections/Important";
import Context from "./store/context";

import "./App.css";

class App extends Component {
  state = {
    dueTask: [
      { title: "Home work", important: false },
      { title: "Drinking", important: false },
    ],
    completedTask: [
      { title: "Home work", important: false },
      { title: "Movies", important: false },
    ],
    importantTask: [],
    newTaskValue: "",
    showCompletedTask: false,
    addingTask: false,
    themeImages: [
      "natural_1",
      "natural_2",
      "natural_3",
      "natural_4",
      "natural_5",
      "natural_6",
      "natural_7",
      "natural_8",
      "natural_9",
      "natural_10",
      "natural_11",
      "natural_12",
    ],
    activeTheme: "natural_11",
    themeOpacity: 0.8,
    themeOpen: false,
    activeSection: "Important",
  };
  showCompletedTaskHandler = () => {
    this.setState((prevState) => {
      return {
        showCompletedTask: !prevState.showCompletedTask,
      };
    });
  };
  addingTaskHandler = (e) => {
    // e.currentTarget.querySelector("input").focus();

    this.setState((prevState) => {
      return {
        addingTask: true,
      };
    });
  };
  addingTaskChangeHandler = (e) => {
    const value = e.target.value;
    this.setState({ newTaskValue: value });
  };
  addingTaskBlureHandler = () => {
    this.setState((prevState) => {
      return {
        addingTask: false,
      };
    });
  };
  addingTaskSubmitHandler = (e) => {
    e.preventDefault();
    const updatedDueTask = [...this.state.dueTask];
    updatedDueTask.unshift({
      title: this.state.newTaskValue,
      important: false,
    });
    this.setState({ dueTask: updatedDueTask, newTaskValue: "" });
  };
  completedTaskHandler = (index) => {
    const updatedDueTask = [...this.state.dueTask];
    const newCompleteTaskValue = updatedDueTask[index].title;
    updatedDueTask.splice(index, 1);
    const updatedCompleteTask = [...this.state.completedTask];
    updatedCompleteTask.unshift({
      title: newCompleteTaskValue,
      important: false,
    });
    this.setState({
      dueTask: updatedDueTask,
      completedTask: updatedCompleteTask,
    });
  };
  undoCompletedTaskHandler = (index) => {
    const updatedCompleteTask = [...this.state.completedTask];
    const undoTaskValue = updatedCompleteTask[index].title;
    updatedCompleteTask.splice(index, 1);
    const updatedDueTask = [...this.state.dueTask];
    updatedDueTask.push({ title: undoTaskValue, important: false });
    this.setState({
      dueTask: updatedDueTask,
      completedTask: updatedCompleteTask,
    });
  };

  makeImportantHandler = (index) => {
    const updatedDueTask = [...this.state.dueTask];
    const updatedImportantTask = [...this.state.importantTask];
    const importantTask = updatedDueTask[index];
    const ImportantTaskIndex = updatedImportantTask.findIndex(
      (task) => task.title === importantTask.title
    );
    if (importantTask.important) {
      importantTask.important = false;
      updatedDueTask.splice(index, 1);
      updatedImportantTask.splice(ImportantTaskIndex, 1);
      updatedDueTask.push(importantTask);
      this.setState({
        dueTask: updatedDueTask,
        importantTask: updatedImportantTask,
      });
    } else {
      importantTask.important = true;
      updatedDueTask.splice(index, 1);
      updatedDueTask.unshift(importantTask);
      updatedImportantTask.unshift(importantTask);
      this.setState({
        dueTask: updatedDueTask,
        importantTask: updatedImportantTask,
      });
    }
  };
  themeOpenHandler = () => {
    this.setState((prevState) => {
      return {
        themeOpen: !prevState.themeOpen,
      };
    });
  };
  fadeEffect = () => {
    if (this.state.themeOpacity >= 1) {
      clearInterval(this.setTime);
    } else {
      this.setState((prevState) => {
        return {
          themeOpacity: prevState.themeOpacity + 0.01,
        };
      });
    }
  };
  themeChangedHandler = (index) => {
    this.setState({
      activeTheme: this.state.themeImages[index],
      themeOpacity: 0,
    });
    this.setTime = setInterval(this.fadeEffect, 20);
  };

  activeSectionHandler = (sectionName) => {
    this.setState({ activeSection: sectionName });
  };

  render() {
    const value = {
      ...this.state,
      toggleCompletedTask: this.showCompletedTaskHandler,
      toggleAddingTask: this.addingTaskHandler,
      addingTaskChanged: this.addingTaskChangeHandler,
      addingInputBlure: this.addingTaskBlureHandler,
      submittedTask: this.addingTaskSubmitHandler,
      taskCompleted: this.completedTaskHandler,
      undoCompletedTask: this.undoCompletedTaskHandler,
      makeImportant: this.makeImportantHandler,
      themeOpened: this.themeOpenHandler,
      themeChanged: this.themeChangedHandler,
      sectionActivated: this.activeSectionHandler,
    };
    let section = null;
    switch (this.state.activeSection) {
      case "Myday":
        section = <Myday />;
        break;
      case "Important":
        section = <Important />;
        break;
      case "Planed":
        section = "";
        break;
      default:
        section = <Myday />;
    }

    return (
      <div className="App">
        <Context.Provider value={value}>
          <Layout>{section}</Layout>
        </Context.Provider>
      </div>
    );
  }
}

export default App;
