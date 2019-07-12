import React from "react";

import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider
} from "@material-ui/core";

import { Done, Clear } from "@material-ui/icons";

export default ({ description, name, onTeam }) => {
  return (
    <>
      <ListItem button onClick={onTeam}>
        <ListItemText primary={name} secondary={description} />
        <ListItemAvatar>
          <Done />
        </ListItemAvatar>
        <ListItemAvatar>
          <Clear />
        </ListItemAvatar>
      </ListItem>
      <Divider />
    </>
  );
};
