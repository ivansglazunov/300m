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
import ProjectInvites from "./pages/project-invites-list/index";
import TeamsList from "./pages/teams-list/index";
import TeamInvitesList from "./pages/team-invites-list/index";
import ProjectMember from "./pages/project-member";
import ProjectOwner from "./pages/project-owner";
import MembersList from "./pages/members-list";
import MembersTeam from "./pages/members-team";
import ProjectStages from "./pages/project-stages";
import ProjectEditable from "./pages/project-editable";
import Team from "./pages/team";
import MembersSearch from "./pages/members-search";
import Stage from "./pages/stage";
import Stages from "./pages/stages";
import SelectStages from "./pages/select-stages-for-members";
import CreateProject from "./pages/stepper";
import CreateProjectStage from "./pages/create-project-stage";
import TeamEditable from "./pages/team-editable";
import ProjectSteps from "./pages/project-steps";
import ProjectHeaders from "./pages/project-headers";
import Activity from "./pages/activity";

const NotFounded = () => <div>404</div>;

export const routes = (
  <ThemeProvider theme={theme}>
    <div
      style={{
        backgroundColor: "#0b1421",
        position: "absolute",
        width: "100%",
        height: "100%"
      }}
    >
      <Switch>
        <Route path="/user" component={User} />
        <Route path="/projects-list" component={ProjectsList} />
        <Route path="/project-invites-list" component={ProjectInvites} />
        <Route path="/teams-list" component={TeamsList} />
        <Route path="/team-invites-list" component={TeamInvitesList} />
        <Route path="/project-member" component={ProjectMember} />
        <Route path="/project-owner" component={ProjectOwner} />
        <Route path="/members-list" component={MembersList} />
        <Route path="/members-team" component={MembersTeam} />
        <Route path="/project-stages" component={ProjectStages} />
        <Route path="/project-editable" component={ProjectEditable} />
        <Route path="/team" component={Team} />
        <Route path="/members-search" component={MembersSearch} />
        <Route path="/stages" component={Stages} />
        <Route path="/select-stages-for-members" component={SelectStages} />
        <Route path="/stage" component={Stage} />
        <Route path="/create-project/:step" component={CreateProject} />
        <Route path="/create-project-stage" component={CreateProjectStage} />
        <Route path="/team-editable" component={TeamEditable} />
        <Route path="/project-steps" component={ProjectSteps} />
        <Route path="/project-headers" component={ProjectHeaders} />
        <Route path="/activity" component={Activity} />
        <Route path="/" component={Profile} />
        <Route component={NotFounded} />
      </Switch>
    </div>
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
