import React, { useState } from "react";
import withTracker from "../../simulate";

import Profile from "../../components/profile/index";
import Message from "../../components/activity/index";

export default withTracker(() => {
  return {};
})(({}) => {
  return (
    <>
      <Profile />
      <Message
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
    </>
  );
});
