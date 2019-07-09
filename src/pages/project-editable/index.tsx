import React from "react";

import withTracker from "../../simulate";

import ProjectEditable from "../../components/project-editable";

export default withTracker(() => {
  return {};
})(({ history }) => {
  return (
    <ProjectEditable
      onCancelButton={() => history.push("/project-owner")}
      onSaveButton={() => history.push("/project-owner")}
    />
  );
});
