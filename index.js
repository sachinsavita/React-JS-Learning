import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import PI, { doublePi, triplePi } from "./math.js";
ReactDom.render(
  <div>
    <App />
    <ul>
      <li>{PI}</li>
      <li>{doublePi()}</li>
      <li>{triplePi()}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
