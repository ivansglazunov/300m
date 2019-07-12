import React from "react";
import withTracker from "../../simulate";

import TeamInvitesList from "../../components/team-invites-list";
import { useTranslation } from "react-i18next";

export default withTracker(() => {
  return {};
})(({ history }) => {
  const { t } = useTranslation();

  return (
    <TeamInvitesList
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
  );
});
