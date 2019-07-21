import React from "react";
import withTracker from "../../simulate";

import TeamsList from "../../components/teams-list";
import { Area } from "../../components/slice-area";
import Navigation from "../../components/navigation/down";

import { useTranslation } from "react-i18next";

export default withTracker(() => {
  return {};
})(({ history }) => {
  const { t } = useTranslation();

  return (
    <Area
      content={
        <TeamsList
          onTeams={() => history.push("/teams-list")}
          onInvitations={() => history.push("/team-invites-list")}
          onTeam={() => history.push("/team")}
          teams={[
            {
              _id: "a",
              teamDescription: t("Team short description"),
              role: "chef"
            },
            {
              _id: "b",
              teamDescription: t("Team short description"),
              role: "member"
            }
          ]}
        />
      }
      bottom={
        <Navigation
          onToProfile={() => history.push("/profile")}
          onToTeams={() => history.push("/teams-list")}
          onToProjects={() => history.push("/projects-list")}
          onToNotification={() => history.push("/")}
          selectedTab="team"
        />
      }
    />
  );
});
