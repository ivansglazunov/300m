import React from "react";
import { Route, Switch } from "react-router";

import Analitics from './analitics';

import "./styles.css";
import "normalize.css";

import Example from "./pages/example";

export const routes = (
  <Switch>
    <Route component={Example} />
  </Switch>
);

export default class Routes extends React.Component {
  render() {
    return (
      <>
        <Analitics/>
        {routes}
      </>
    );
  }
}
