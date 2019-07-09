import React, { useState } from "react";
import withTracker from "../../simulate";

import ProjectMember from "../../components/project-member";

export default withTracker(() => {
  return {};
})(({ history }) => {
  return (
    <ProjectMember
      title="Project title"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua."
      onTransitionToListofProjects={() => history.push("/projects-list")}
    />
  );
});
