import React from "react";
import ReactDOM from "react-dom";
import pie from "./math";
import pi, { doublePi, triplePi } from "./math";
//if you use a wild card you lose benefit of having single default export

console.log(pi);

ReactDOM.render(
  <ul>
    <li>{pie}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
