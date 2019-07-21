import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import withTracker from "../../simulate";

import TeamEditable from "../../components/team-editable";
import Navigation from "../../components/navigation/down";
import BackButton from "../../components/navigation/up";
import { Area } from "../../components/slice-area";

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
