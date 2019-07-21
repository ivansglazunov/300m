import React from "react";

import {
  ListItem,
  ListItemText,
  Divider,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";

import { Done, Clear } from "@material-ui/icons";

export default ({
  description,
  name,
  onAcceptInvitation,
  onTeam,
  onCancelInvitation
}) => {
  return (
    <>
      <ListItem>
        <ListItemText primary={name} secondary={description} onClick={onTeam} />
        <ListItemSecondaryAction>
          <IconButton onClick={onAcceptInvitation}>
            <Done />
          </IconButton>
          <IconButton onClick={onCancelInvitation}>
            <Clear />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </>
  );
};
