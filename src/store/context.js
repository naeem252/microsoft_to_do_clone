import React from "react";

const context = React.createContext({
  dueTask: ["Home Work", "Drinking water"],
  completedTask: ["Waking", "Exersice"],
});

export default context;
