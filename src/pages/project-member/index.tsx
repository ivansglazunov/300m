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
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          titleInvite={"Приглашение в проект"}
          descriptionInvite={"Описание проекта"}
          // timeInvite={timeInvite}
          onProjectInvite={() => history.push("/project-invites-list")}
          titleStartSoon={"Запланирован монтаж"}
          descriptionStageStartSoon={"Описание этапа работы"}
          descriptionWorkStartSoon={"Описание запланированных работ"}
          timeStartSoon={"12:00"}
          dayStartSoon={t("Tomorrow")}
          addressStartSoon={"ул. Земляной Вал, 34/2"}
          titleLate={"Опоздание на монтаж"}
          descriptionStageLate={"Описание этапа работы"}
          descriptionWorkLate={"Описание запланированных работ"}
          timePassedLate={"2 часа"}
          timeLeftLate={"5 часов"}
          leftLate={"Опоздание"}
          passedLate={t("Passed")}
          addressLate={"ул. Земляной Вал, 34/2"}
          titleUnderway={"Сейчас идет монтаж"}
          descriptionStageUnderway={"Описание этапа работы"}
          descriptionWorkUnderway={"Описание запланированных работ"}
          timePassedUnderway={"24 минут"}
          timeLeftUnderway={"5 часов 36 минут"}
          leftUnderway={"Опоздание"}
          passedUnderway={t("Passed")}
          addressUnderway={"ул. Земляной Вал, 34/2"}
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
