import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";
import { Star } from "@material-ui/icons";

export default ({}) => {
  return (
    <>
      <List>
        <ListItem button>
          <ListItemText
            primary="ProjectItem"
            secondary="ProjectShortDescription"
          />
          <ListItemSecondaryAction>
            <Star />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem button>ProjectAdd</ListItem>
      </List>
    </>
  );
};
