import React, { useState } from "react";
import withTracker from "../../simulate";

import StagesEditor from "../../components/stages-editor";

export default withTracker(() => {
  return {};
})(({ title, description, address, name }) => {
  return <StagesEditor title="" description="" address="" name="" />;
});
