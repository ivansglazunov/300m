import React from "react";
import withTracker from "../../simulate";

import TeamInvitesList from "../../components/team-invites-list";
import { useTranslation } from "react-i18next";
import { Area } from "../../components/slice-area";
import Navigation from "../../components/navigation/down";

export default withTracker(() => {
  return {};
})(({ history }) => {
  const { t } = useTranslation();

  return (
    <Area
      content={
        <TeamInvitesList
          onTeams={() => history.push("/teams-list")}
          onInvitations={() => history.push("/team-invites-list")}
          onTeam={() => history.push("/team")}
          teams={[
            {
              _id: "a",
              name: "Сидоров В.В.",
              description: t("Team short description")
            },
            {
              _id: "b",
              name: "Иванов А.А.",
              description: t("Team short description")
            },
            {
              _id: "c",
              name: "Фокин В.Т.",
              description: t("Team short description")
            }
          ]}
        />
      }
      bottom={
        <Navigation
          onToProfile={() => history.push("/user")}
          onToTeams={() => history.push("/teams-list")}
          onToProjects={() => history.push("/projects-list")}
          onToNotification={() => history.push("/activity")}
          selectedTab="team"
        />
      }
    />
  );
});
