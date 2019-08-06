import React, { useState } from "react";
import withTracker from "../../simulate";

import Project from "../../components/project-headers";
import { useTranslation } from "react-i18next";

export default withTracker(() => {
  return {};
})(({ history }) => {
  const { t } = useTranslation();
  return (
    <Project
      onCancel={() => history.push("/project-owner")}
      onSave={() => history.push("/project-owner")}
      onSelectStages={() => history.push("/select-stages-for-members")}
    />
  );
});
