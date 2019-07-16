import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import moment from "moment";
import "moment/locale/ru";
moment.locale("ru");
moment.updateLocale("ru");

const resources = {
  ru: {
    translation: {
      user: "Пользователь",
      description: "Описание",
      title: "Название",
      Back: "Назад",
      settings: "Настройки",
      stage: "Этап",
      stages: "Этапы",
      address: "Адрес",
      Address: "Адрес",
      Title: "Название",
      Description: "Описание",
      Next: "Далее",
      "member add": "Добавить участника",
      "select stages for members": "Выбрать этапы для участников",
      "Add members to stages": "Добавить участников в этапы",
      cancel: "Отменить",
      save: "Сохранить",
      delete: "Удалить",
      From: "С",
      To: "До",
      Profile: "Профиль",
      Teams: "Команды",
      Projects: "Проекты",
      Notification: "Уведомления",
      "Project List": "Список проектов",
      "Stages List": "Список этапов",
      "Members List": "Список участников",
      "Project Invites List": "Список приглашений в проекты",
      "Teams List": "Список команд",
      "Team Invites List": "Список приглашений в команды",
      "Profile Notifications": "Уведомления",
      "Profile Notification": "Уведомление",
      "Project title": "Название проекта",
      "Date of Birth": "Дата рождения",
      "back to the list of projects": "вернуться к списку проектов",
      "Project add": "Добавить проект",
      "Short description of the project": "Короткое описание проекта",
      "back to the teams list": "вернуться к списку команд",
      "Team title": "Название команды",
      "Team description": "Описание команды",
      "Team add": "Добавить команду",
      "Adjoins list": "Список приглашенных",
      "Stage title": "Название этапа",
      "Short description": "Короткое описание",
      Checked: "Выбранные",
      Search: "Поиск",
      Finish: "Закончить",
      "Search member": "Поиск участников",
      "Short description of the worker": "Короткое описание работника",
      "Back to the project": "Вернуться в проект",
      "Back to profile": "Вернуться в профиль",
      "Short description of the stage": "Короткое описание этапа",
      "Add stage": "Добавить этапы",
      "Team short description": "Краткое описание команды",
      "Project chef": "Проект шефа",
      "Back to project list": "Вернуться в список проектов"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ru",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
