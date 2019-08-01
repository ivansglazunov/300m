import React from "react";

import { useTranslation } from "react-i18next";
import withTracker from "../../simulate";

import Activity from "../../components/activity";
import Navigation from "../../components/navigation/down";
import BackButton from "../../components/navigation/up";
import { Area } from "../../components/slice-area";

export default withTracker(() => {
  return {};
})(({ history }) => {
  const { t } = useTranslation();

  return (
    <Area
      content={
        <Activity
          activities={[
            {
              _id: "a",
              typeOfActivity: "privateMessage",
              title: "от Иванова А.Г.",
              description: "текст сообщения",
              altAvatar: "Иванов А.Г.",
              srcAvatar:
                "https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg",
              onMassegs: () => {}
            },
            {
              _id: "b",
              typeOfActivity: "invitToTeam",
              title: "Команда для проекта ...",
              place: "ул. Ромашек, 25",
              role: "Сварщик",
              workDescription: "Описание рабочего процесса, требований, задач",
              onMassegs: () => {}
            },
            {
              _id: "c",
              typeOfActivity: "inviteToProject",
              title: "Название проекта",
              place: "ул. Ромашек, 25",
              role: "Шеф проекта",
              workDescription: "Описание рабочего процесса, требований, задач",
              onMassegs: () => {}
            },
            {
              _id: "d",
              typeOfActivity: "stageMessage",
              title: "12.08 - 13.08",
              place: "ул. Ромашек, 25",
              workDescription: "Описание рабочего процесса, требований, задач",
              onMassegs: () => {}
            }
          ]}
        />
      }
      bottom={
        <Navigation
          onToProfile={() => history.push("/user")}
          onToTeams={() => history.push("/teams-list")}
          onToProjects={() => history.push("/projects-list")}
          onToNotification={() => history.push("/activity")}
          selectedTab="team"
        />
      }
    />
  );
});
