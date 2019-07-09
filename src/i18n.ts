import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import moment from "moment";
import "moment/locale/ru";
moment.locale("ru");
moment.updateLocale("ru");

const resources = {
  ru: {
    translation: {
      user: "Пользователь"
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
