import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  makeStyles,
  Paper
} from "@material-ui/core";
import { Star, Build, ArrowRightAlt } from "@material-ui/icons";

import { Link } from "react-router-dom";

import { Area } from "../slice-area/index";

const useStyles = makeStyles(theme => ({
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
      <Area
        content={
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
          </List>
        }
        bottom={
          <Paper
            square="false"
            elevation="2"
            style={{
              backgroundColor: "#3f51b5"
            }}
          >
            <List style={{ color: "#fff" }}>
              <ListItem button component={Link} to="/project-owner">
                <ListItemText primary="project add" />
                <ListItemSecondaryAction>
                  <ArrowRightAlt className={classes.extendedIcon} />
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Paper>
        }
      />
    </>
  );
};
