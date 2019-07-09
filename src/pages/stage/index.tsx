import React, { useState } from "react";
import withTracker from "../../simulate";

import Stage from "../../components/stage";

export default withTracker(() => {
  return {};
})(({ history }) => {
  return (
    <Stage
      title=""
      description=""
      address=""
      name=""
      onCancelButton={() => history.push("/stages")}
      onSaveButton={() => history.push("/stages")}
      onDeleteButton={() => history.push("/stages")}
    />
  );
});
