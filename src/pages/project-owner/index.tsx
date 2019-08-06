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
          titleAccept={"Принято приглашение"}
          descriptionAccept={
            'Иванов А.А. принял приглашние в проект "Весело шагать по просторам"'
          }
          timeAccept={"12:47"}
          titleRefuse={"Отклонено приглашение"}
          descriptionRefuse={
            'Смирнов В.А. отклонил приглашние в проект "Весело шагать по просторам"'
          }
          timeRefuse={"11:29"}
          onAccept={() => history.push("/members-list")}
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
