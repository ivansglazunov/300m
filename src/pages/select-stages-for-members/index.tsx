import React from "react";

import withTracker from "../../simulate";

import SelectStages from "../../components/select-stages-for-members";

export default withTracker(() => {
  return {};
})(
  ({
    title,
    description,
    address,
    name,
    durationFrom,
    durationTo,
    history
  }) => {
    return (
      <SelectStages title description address name durationFrom durationTo />
    );
  }
);
