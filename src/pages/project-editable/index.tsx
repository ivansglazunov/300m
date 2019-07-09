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
      onCancelButton={() => history.push("/project-owner")}
      onSaveButton={() => history.push("/project-owner")}
      title={t("Project title")}
      description="1234567"
    />
  );
});
