import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import withTracker from "../../simulate";

import TeamEditable from "../../components/team-editable";

export default withTracker(() => {
  return {};
})(({ history }) => {
  const { t } = useTranslation();

  return (
    <TeamEditable
      onCancel={() => history.push("/team")}
      onSave={() => history.push("/team")}
      title={t("Team title")}
      description={t("Team description")}
      saveContent={t("save")}
    />
  );
});
