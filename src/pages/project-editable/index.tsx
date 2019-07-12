import React from "react";
import { useTranslation } from "react-i18next";
import withTracker from "../../simulate";

import ProjectEditable from "../../components/project-editable";

export default withTracker(() => {
  return {};
})(({ history }) => {
  const { t } = useTranslation();

  return (
    <ProjectEditable
      onCancel={() => history.push("/project-owner")}
      onSave={() => history.push("/project-owner")}
      title={t("Project title")}
      description="1234567"
      saveContent={t("save")}
    />
  );
});
