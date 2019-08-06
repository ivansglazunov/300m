import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import withTracker from "../../simulate";

import ProjectsList from "../../components/projects-list";
import { Area } from "../../components/slice-area";
import Navigation from "../../components/navigation/down";

export default withTracker(() => {
  return {};
})(({ history }) => {
  const { t } = useTranslation();

  return (
    <Area
      content={
        <ProjectsList
          onAddProject={() => history.push("/project-steps")}
          onProjects={() => history.push("/projects-list")}
          onInvitations={() => history.push("/project-invites-list")}
          projects={[
            {
              _id: "a",
              title: t("Project title"),
              description: t("Short description of the project"),
              role: "owner"
            },
            {
              _id: "b",
              title: t("Project title"),
              description: t("Short description of the project"),
              role: "member"
            }
          ]}
          onProjectClick={(event, { role }) => {
            if (role === "owner") history.push("/project-owner");
            else history.push("/project-member");
          }}
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
