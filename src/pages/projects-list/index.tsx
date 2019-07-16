import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import withTracker from "../../simulate";

import ProjectsList from "../../components/projects-list";
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
          labelBack={t("Back to profile")}
          labelNow={t("Project List")}
          onBack={() => history.push("/profile")}
        />
      }
      content={
        <ProjectsList
          onAddProject={() => history.push("/project-owner")}
          onToProfile={() => history.push("/profile")}
          projects={[
            // внутри данных только данные, никакой верстки или реакци
            // только то что можно получить из базы данных
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
            // функция поставляется отдельно
            // получает вторым аргументом проект по которому кликнули
            // потому что мы его передали там вторым аргументом
            // и решает что делать
            if (role === "owner") history.push("/project-owner");
            else history.push("/project-member");
          }}
        />
      }
      bottom={
        <Navigation
          onToProfile={() => history.push("/profile")}
          onToTeams={() => history.push("/teams-list")}
          onToProjects={() => history.push("/projects-list")}
          onToNotification={() => history.push("/")}
        />
      }
    />
  );
});
