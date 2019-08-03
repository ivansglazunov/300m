import React, { useState } from "react";
import withTracker from "../../simulate";

import Project from "../../components/project-steps";
import { useTranslation } from "react-i18next";

export default withTracker(() => {
  return {};
})(({ history }) => {
  const { t } = useTranslation();
  return (
    <Project
      onProjectOwner={() => history.push("/project-owner")}
      onAddStage={() => {}}
      onSelectStages={() => history.push("/select-stages-for-members")}
      stageTitle="Название этапа"
      projectTitle="Название проекта"
      projectStages="Этары проекта"
      projectDescription="Lorem ipsum dolor sit amet, consectetur 
      adipiscing elit, sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliqua."
      duration="Продолжительность проекта"
      stageDescription="Lorem ipsum dolor sit amet, consectetur 
      adipiscing elit, sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliqua."
      stageAddress="ул. Вавилова, д. 7/1"
      usersList="Список участников"
      members={[
        {
          _id: "1",
          userName: "Карпов А.Ф."
        },
        {
          _id: "2",
          userName: "Карпов А.Ф."
        }
      ]}
    />
  );
});
