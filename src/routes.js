import React from "react";
import { Route, Switch } from "react-router";

import { ThemeProvider } from "@material-ui/styles";

import Analitics from "./analitics";
import theme from "./theme";

import "normalize.css";

import Profile from "./pages/profile/index";
import ProjectsList from "./pages/projectsList/index";
import User from "./pages/user/index";
import ProjectInvitesList from "./pages/projectInvitesList/index";
import TeamsList from "./pages/teamsList/index";
import TeamInvitesList from "./pages/teamInvitesList/index";
import ProjectMember from "./pages/projectMember";
import ProjectOwner from "./pages/projectOwner";
import MembersList from "./pages/membersList";
import ProjectStagesList from "./pages/projectStagesList";
import Team from "./pages/team";

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
