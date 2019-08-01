import React, { useState } from "react";
import withTracker from "../../simulate";

import User from "../../components/user";
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
      top={
        <BackButton
          labelBack={t("Back to members search")}
          labelNow={t("user")}
          onBack={() => history.push("/members-search")}
        />
      }
      content={
        <User
          name="Сапрыкин Андрей Федорович"
          src="https://96.img.avito.st/640x480/5475959896.jpg"
          alt="montagnik"
          date="22.10.1981"
        />
      }
      bottom={
        <Navigation
          onToProfile={() => history.push("/user")}
          onToTeams={() => history.push("/teams-list")}
          onToProjects={() => history.push("/projects-list")}
          onToNotification={() => history.push("/activity")}
          selectedTab="profile"
        />
      }
    />
  );
});
