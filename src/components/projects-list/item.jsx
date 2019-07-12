import React from "react";

import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  makeStyles
} from "@material-ui/core";
import { Build, Star } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({}));

export default ({ project, onClick }) => {
  const classes = useStyles();

  const { title, description, role } = project;

  return (
    <>
      <ListItem button divider onClick={event => onClick(event, project)}>
        <ListItemText primary={title} secondary={description} />
        <ListItemSecondaryAction>
          {// иконка это вопрос верстки
          // их не надо передавать вместе с данными
          role === "owner" ? <Star /> : role === "member" ? <Build /> : null}
        </ListItemSecondaryAction>
      </ListItem>
    </>
  );
};
