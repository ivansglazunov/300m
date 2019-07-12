import React, { useState } from "react";
import withTracker from "../../simulate";

import ProjectMember from "../../components/project-member";
import { useTranslation } from "react-i18next";

export default withTracker(() => {
  return {};
})(({ history }) => {
  const { t } = useTranslation();

  return (
    <ProjectMember
      title={t("Project title")}
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua."
      onTransitionToListofProjects={() => history.push("/projects-list")}
    />
  );
});
