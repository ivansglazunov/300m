import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import withTracker from "../../simulate";

import ProjectOwner from "../../components/project-owner";
import { Area } from "../../components/slice-area";
import Navigation from "../../components/navigation/down";
import BackButton from "../../components/navigation/up";

export default withTracker(() => {
  return {};
})(({ history }) => {
  const { t } = useTranslation();

  return (
    <Area
      top={
        <BackButton
          labelBack={t("Back to projects")}
          labelNow={t("Project chef")}
          onBack={() => history.push("/projects-list")}
        />
      }
      content={
        <ProjectOwner
          onEdit={() => history.push("/project-editable")}
          membersList={t("Members List")}
          title={t("Project title")}
          description="1234567"
          stages={t("Stages List")}
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
