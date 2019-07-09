import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import withTracker from "../../simulate";

import ProjectOwner from "../../components/project-owner";

export default withTracker(() => {
  return {};
})(({ history }) => {
  const { t } = useTranslation();

  return (
    <ProjectOwner
      onEdit={() => history.push("/project-editable")}
      onTransitionToListofProjects={() => history.push("/projects-list")}
      membersList={t("Members List")}
      title={t("Project title")}
      description="1234567"
      stages={t("Stages List")}
    />
  );
});
