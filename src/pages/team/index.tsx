import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import withTracker from "../../simulate";

import Team from "../../components/team";

export default withTracker(() => {
  return {};
})(({ history }) => {
  const { t } = useTranslation();

  return (
    <Team
      onTransitionToTeamsList={() => history.push("/teams-list")}
      title={t("Team title")}
      description={t("Team description")}
      adjoins={t("Adjoins list")}
    />
  );
});
