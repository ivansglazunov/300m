import React, { useState } from "react";
import withTracker from "../../simulate";

import Stages from "../../components/stages";

export default withTracker(() => {
  return {};
})(({ history }) => {
  return (
    <Stages
      onClick={() => {
        history.push("/");
      }}
      onEdit={() => {
        history.push("/stage");
      }}
    />
  );
});
