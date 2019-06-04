import React from "react";
import { withRouter } from "react-router";

import { isBrowser } from "react-device-detect";

import ya, { YMInitializer } from "react-yandex-metrika";
import ReactGA from "react-ga";

const GA = null;
const YM = null;

var Chance = require("chance");
var chance = new Chance();

if (isBrowser && typeof localStorage === "object") {
  if (!localStorage.userId)
    localStorage.setItem("userId", `${new Date().valueOf()}${chance.fbid()}`);
  ReactGA.initialize(YM, {
    gaOptions: {
      userId: localStorage.getItem("userId")
    }
  });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

export class Analitics extends React.Component {
  trackPage = page => {
    ReactGA.set({ page });
    ReactGA.pageview(page);
  };
  componentDidMount() {
    const page = this.props.location.pathname;
    this.trackPage(page);
  }

  componentDidUpdate(prevProps) {
    const currentPage = prevProps.location.pathname;
    const nextPage = this.props.location.pathname;

    if (currentPage !== nextPage) {
      this.trackPage(nextPage);
    }
  }

  render() {
    return GA && YM && isBrowser && typeof localStorage === "object" && (
      <YMInitializer
        accounts={[GA]}
        options={{
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true,
          trackHash: true,
          userParams: {
            userId: localStorage.getItem("userId")
          }
        }}
        version="2"
      />
    )
  }
}

export default withRouter(Analitics);

export const event = (action) => {
  ReactGA.event({ category: "actions", action });
  ya("reachGoal", action);
};