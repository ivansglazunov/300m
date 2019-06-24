import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Fab,
  makeStyles
} from "@material-ui/core";
import { Star, Add, Build } from "@material-ui/icons";

import { Link } from "react-router-dom";

const useStyles: any = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  textAlign: {
    position: "relative",
    top: 2
  }
}));

export default ({}) => {
  const classes = useStyles();

  return (
    <>
      <List>
        <ListItem button divider component={Link} to="/project-owner">
          <ListItemText
            primary="ProjectItem"
            secondary="ProjectShortDescription"
          />
          <ListItemSecondaryAction>
            <Star />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem button divider component={Link} to="/project-member">
          <ListItemText
            primary="ProjectItem"
            secondary="ProjectShortDescription"
          />
          <ListItemSecondaryAction>
            <Build />
          </ListItemSecondaryAction>
        </ListItem>
        <Fab
          variant="extended"
          size="medium"
          color="primary"
          aria-label="Add"
          className={classes.margin}
        >
          <Add className={classes.extendedIcon} />
          <span className={classes.textAlign}>Project add</span>
        </Fab>
      </List>
    </>
  );
};
