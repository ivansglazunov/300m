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
          title={t("Title")}
          name="Сапрыкин А.Ф."
          description="Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti."
          address="Стремянный переулок, 38 Москва, Россия, 115054"
          stages={t("stages")}
          onUser={() => history.push("/user")}
          onAccept={() => history.push("/project-member")}
          onRefuse={() => history.push("/")}
          day="22.08"
          time="10:45"
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
