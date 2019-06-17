import React from "react";
import { Route, Switch } from "react-router";

import { ThemeProvider } from "@material-ui/styles";

import Analitics from "./analitics";
import theme from "./theme";

import "./styles.css";
import "normalize.css";

import Example from "./pages/example/index.tsx";

export const routes = (
  <ThemeProvider theme={theme}>
    <Switch>
      <Route component={Example} />
    </Switch>
  </ThemeProvider>
);

export default class Routes extends React.Component {
  render() {
    return (
      <>
        <Analitics />
        {routes}
      </>
    );
  }
}
