import React from "react";

import withTracker from "../../simulate";

import MembersList from "../../components/members-list";
import Navigation from "../../components/navigation/down";
import BackButton from "../../components/navigation/up";
import { Area } from "../../components/slice-area";

import moment from "moment";
import { useTranslation } from "react-i18next";

export default withTracker(() => {
  return {};
})(({ history }) => {
  const { t } = useTranslation();

  return (
    <Area
      top={
        <BackButton
          labelBack={t("Back to profile")}
          labelNow={t("Members list")}
          onBack={() => history.push("/profile")}
        />
      }
      content={
        <MembersList
          members={[
            {
              _id: "a",
              name: "Papa Johns",
              stages: [
                { address: "Москва, Ветошный пер. 12", start: moment() },
                {
                  address: "Москва, Бурденко ул. 1",
                  start: moment().add(2, "days")
                }
              ]
            },
            { _id: "b", name: "Cap Sanders", stages: [] },
            { _id: "c", name: "Ronald MacDonald" }
          ]}
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
