import React, { useState } from "react";
import withTracker from "../../simulate";

import { useTranslation } from "react-i18next";

import ProjectStages from "../../components/project-stages";
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
          labelBack={t("Back to project")}
          labelNow={t("Project stages")}
          onBack={() => history.push("/project-owner")}
        />
      }
      content={
        <ProjectStages
          onEdit={() => history.push("/stage")}
          stages={[
            {
              _id: "a",
              title: t("Stage title"),
              name: "Cap.Sanders",
              address: "Dandelion st. 21-12",
              durationFrom: "21.08",
              durationTo: "23.08",
              description: t("Short description of the stage")
            },
            {
              _id: "b",
              title: t("Stage title"),
              name: "Cap.Sanders",
              address: "Dandelion st. 21-12",
              durationFrom: "21.08",
              durationTo: "23.08",
              description: t("Short description of the stage")
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
          selectedTab="project"
        />
      }
    />
  );
});
