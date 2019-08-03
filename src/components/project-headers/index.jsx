import React, { useState } from "react";
import { Container } from "@material-ui/core";

import Project from "../project-editable/project";
import Members from "../members-search/search";
import SimpleStage from "../stage/simple-stage";

export default ({ onSelectStages }) => {
  return (
    <Container>
      <Project />
      <SimpleStage />
      <Members onSelectStages={onSelectStages} />
    </Container>
  );
};
