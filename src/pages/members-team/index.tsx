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
          labelBack={t("Back to teams")}
          labelNow={t("Members List")}
          onBack={() => history.push("/team")}
        />
      }
      content={
        <MembersList
          onAddMembers={() => history.push("/members-search")}
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
          onUser={() => history.push("/user")}
          // name='Иванов А.П.'
          membersConfirmation={[
            { _id: "1", name: "Иванов А.П." },
            { _id: "2", name: "Петров В.Е." }
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
