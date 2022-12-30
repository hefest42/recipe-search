import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./CSS/index.scss";

import { BrowserRouter } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";

ReactDOM.render(
  <React.StrictMode>
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SkeletonTheme>
  </React.StrictMode>,
  document.getElementById("root")
);
