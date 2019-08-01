import React, { useState } from "react";
import { makeStyles, Container } from "@material-ui/core";

import { useTranslation } from "react-i18next";

import StagesItem from "../stages/stages-item";

const useStyles = makeStyles(theme => ({
  direction: {
    float: "right"
  }
}));

export default ({ stages, onEdit, onUser }) => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Container>
      {stages.map(stage => (
        <StagesItem
          key={stage._id}
          stage={stage}
          onEdit={onEdit}
          onUser={onUser}
        />
      ))}
    </Container>
  );
};
