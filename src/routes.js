import React from "react";
import { Route, Switch } from "react-router";

import { ThemeProvider } from "@material-ui/styles";

import Analitics from "./analitics";
import theme from "./theme";

import "normalize.css";

import Profile from "./pages/profile/index.tsx";
import ProjectsList from "./pages/projectsList/index.tsx";
import User from "./pages/user/index.tsx";

export const routes = (
  <ThemeProvider theme={theme}>
    <Switch>
      <Route path="/user" component={User} />
      <Route path="/projects-list" component={ProjectsList} />
      <Route component={Profile} />
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
