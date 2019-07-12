import React from "react";

import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider
} from "@material-ui/core";
import { StarRate, Build } from "@material-ui/icons";

export default ({ teamDescription, onTeam, role }) => {
  return (
    <>
      <ListItem alignItems="flex-start" button onClick={onTeam}>
        <ListItemText primary={teamDescription} />
        <ListItemAvatar>
          {role === "chef" ? (
            <StarRate />
          ) : role === "member" ? (
            <Build />
          ) : null}
        </ListItemAvatar>
      </ListItem>
      <Divider />
    </>
  );
};
