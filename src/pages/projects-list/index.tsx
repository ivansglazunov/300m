import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import withTracker from "../../simulate";

import ProjectsList from "../../components/projects-list";

export default withTracker(() => {
  return {};
})(({}) => {
  const { t } = useTranslation();

  return (
    <ProjectsList
      title={t("Project title")}
      description={t("short description of the project")}
    />
  );
});
