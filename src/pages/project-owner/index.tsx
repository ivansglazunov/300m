import React, { useState } from "react";
import withTracker from "../../simulate";

import ProjectOwner from "../../components/project-owner";

export default withTracker(() => {
  return {};
})(({ history }) => {
  return <ProjectOwner onEdit={() => history.push("/project-editable")} />;
});
