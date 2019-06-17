//routes index.js
//import * as React from "react";
import React from "react";
//import * as ReactDOM from "react-dom";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";

if (!localStorage.noClient) {
  ReactDOM.hydrate(
    <BrowserRouter>
      <Routes />
    </BrowserRouter>,
    document.getElementById("root"),
    () => {
      const ssStyles = document.getElementById("jss-server-side");
      if (ssStyles) ssStyles.parentNode.removeChild(ssStyles);
    }
  );
}
