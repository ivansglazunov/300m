import React from "react";

import { Paper, Tabs, Tab } from "@material-ui/core";
import { Person, People, Business, Notifications } from "@material-ui/icons";
import { useTranslation } from "react-i18next";

export default ({ onToProfile, onToTeams, onToProjects, onToNotification }) => {
  const { t } = useTranslation();

  return (
    <Paper
      square="false"
      elevation="2"
      style={{
        backgroundColor: "#3f51b5"
      }}
    >
      <Tabs variant="fullWidth" centered>
        <Tab
          style={{
            color: "#fff",
            textTransform: "none",
            backgroundColor: "rgb(85, 99, 179)",
            opacity: 1
          }}
          onClick={onToProfile}
          icon={<Person />}
          label={t("Profile")}
        />
        <Tab
          style={{
            color: "#fff",
            textTransform: "none",
            backgroundColor: "#3f51b5",
            opacity: 1
          }}
          onClick={onToTeams}
          icon={<People />}
          label={t("Teams")}
        />
        <Tab
          style={{
            color: "#fff",
            textTransform: "none",
            backgroundColor: "#3f51b5",
            opacity: 1
          }}
          onClick={onToProjects}
          icon={<Business />}
          label={t("Projects")}
        />
        <Tab
          style={{
            color: "#fff",
            textTransform: "none",
            backgroundColor: "#3f51b5",
            opacity: 1
          }}
          onClick={onToNotification}
          label={t("Add members to stages")}
          icon={<Notifications />}
          label={t("Notification")}
        />
      </Tabs>
    </Paper>
  );
};
