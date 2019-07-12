import React from "react";
import withTracker from "../../simulate";

import TeamsList from "../../components/teams-list";
import { useTranslation } from "react-i18next";

export default withTracker(() => {
  return {};
})(({ history }) => {
  const { t } = useTranslation();

  return (
    <TeamsList
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
  );
});
