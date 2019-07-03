import React from "react";
import { Route, Switch } from "react-router";

import { ThemeProvider } from "@material-ui/styles";

import "./i18n";

import Analitics from "./analitics";
import theme from "./theme";

import "normalize.css";

import Profile from "./pages/profile/index";
import ProjectsList from "./pages/projects-list/index";
import User from "./pages/user/index";
import ProjectInvitesList from "./pages/project-invites-list/index";
import TeamsList from "./pages/teams-list/index";
import TeamInvitesList from "./pages/team-invites-list/index";
import ProjectMember from "./pages/project-member";
import ProjectOwner from "./pages/project-owner";
import MembersList from "./pages/members-list";
import ProjectStagesList from "./pages/project-stages-list";
import Team from "./pages/team";
import Stage from "./pages/stage-who";
import MembersSearch from "./pages/members-search";

const NotFounded = () => <div>404</div>;

export const routes = (
  <ThemeProvider theme={theme}>
    <Switch>
      <Route path="/user" component={User} />
      <Route path="/projects-list" component={ProjectsList} />
      <Route path="/project-invites-list" component={ProjectInvitesList} />
      <Route path="/teams-list" component={TeamsList} />
      <Route path="/team-invites-list" component={TeamInvitesList} />
      <Route path="/project-member" component={ProjectMember} />
      <Route path="/project-owner" component={ProjectOwner} />
      <Route path="/members-list" component={MembersList} />
      <Route path="/project-stages-list" component={ProjectStagesList} />
      <Route path="/team" component={Team} />
      <Route path="/stage-who" component={Stage} />
      <Route path="/members-search" component={MembersSearch} />
      <Route path="/" component={Profile} />
      <Route component={NotFounded} />
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
