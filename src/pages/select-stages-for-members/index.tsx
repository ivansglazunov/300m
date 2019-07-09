import React from "react";

import withTracker from "../../simulate";

import SelectStages from "../../components/select-stages-for-members";

export default withTracker(() => {
  return {};
})(({ history }) => {
  return (
    <SelectStages
      title="Stage title"
      description="Short description"
      address="Dandelion st. 21-12"
      name="Ronald MacDonald"
      durationFrom="21.06"
      durationTo="22.06"
      onTransitionToChoiseMembers={() => history.push("/members-list")}
    />
  );
});
