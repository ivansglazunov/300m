import React, { useState } from "react";
import withTracker from "../../simulate";

import ProjectMember from "../../components/project-member";
import Navigation from "../../components/navigation/down";
import BackButton from "../../components/navigation/up";
import { Area } from "../../components/slice-area";

import { useTranslation } from "react-i18next";

export default withTracker(() => {
  return {};
})(({ history }) => {
  const { t } = useTranslation();

  return (
    <Area
      top={
        <BackButton
          labelBack={t("Back to projects")}
          labelNow={t("Project member")}
          onBack={() => history.push("/projects-list")}
        />
      }
      content={
        <ProjectMember
          title={t("Project title")}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
          onTransitionToListofProjects={() => history.push("/projects-list")}
        />
      }
      bottom={
        <Navigation
          onToProfile={() => history.push("/user")}
          onToTeams={() => history.push("/teams-list")}
          onToProjects={() => history.push("/projects-list")}
          onToNotification={() => history.push("/activity")}
          selectedTab="project"
        />
      }
    />
  );
});
