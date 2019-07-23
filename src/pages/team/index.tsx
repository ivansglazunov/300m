import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import withTracker from "../../simulate";

import Team from "../../components/team";
import Navigation from "../../components/navigation/down";
import BackButton from "../../components/navigation/up";
import { Area } from "../../components/slice-area";

export default withTracker(() => {
  return {};
})(({ history }) => {
  const { t } = useTranslation();

  return (
    <Area
      top={
        <BackButton
          labelBack={t("Back to teams")}
          labelNow={t("Team")}
          onBack={() => history.push("/teams-list")}
        />
      }
      content={
        <Team
          onMembers={() => history.push("/members-team")}
          onEdit={() => history.push("/team-editable")}
          title={t("Team title")}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          // {t("Team description")}
          adjoins={t("Adjoins list")}
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
