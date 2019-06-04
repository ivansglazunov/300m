//routes index.js
//import * as React from "react";
import React from "react";
//import * as ReactDOM from "react-dom";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

//import './normalize.css';
import Routes from "./routes";
import theme from "./theme";

if (!localStorage.noClient) {
  ReactDOM.hydrate(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>,
    document.getElementById("root"),
    () => {
      const ssStyles = document.getElementById("jss-server-side");
      if (ssStyles) ssStyles.parentNode.removeChild(ssStyles);
    }
  );
}
