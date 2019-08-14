import React, { useState } from "react";
import withTracker from "../../simulate";

import ProjectInvites from "../../components/project-invites-list";
import { Area } from "../../components/slice-area";
import Navigation from "../../components/navigation/down";
import BackButton from "../../components/navigation/up";

import { useTranslation } from "react-i18next";

export default withTracker(() => {
  return {};
})(({ history }) => {
  const { t } = useTranslation();

  return (
    <Area
      content={
        <ProjectInvites
          name="Сапрыкин А.Ф."
          description="Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti."
          address="Стремянный переулок, 38 Москва, Россия, 115054"
          onUser={() => history.push("/user")}
          dateStartInvitation="22.08"
          dayDuration="2"
          hourDuration="16"
          onProjects={() => history.push("/projects-list")}
          onInvitations={() => history.push("/project-invites-list")}
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
