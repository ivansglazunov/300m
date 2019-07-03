import React from "react";

import {
  Typography,
  Divider,
  makeStyles,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Paper
} from "@material-ui/core";
import { StarRate, Build, ArrowRightAlt } from "@material-ui/icons";

import { Link } from "react-router-dom";

import { Area } from "../slice-area";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default ({}) => {
  const classes = useStyles();

  return (
    <>
      <Area
        content={
          <>
            <Typography gutterBottom component="h1" variant="h5" align="center">
              Teams List
            </Typography>
            <List>
              <ListItem
                alignItems="flex-start"
                button
                component={Link}
                to="/team"
              >
                <ListItemText primary="Team short description" />
                <ListItemAvatar>
                  <StarRate />
                </ListItemAvatar>
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem
                alignItems="flex-start"
                button
                component={Link}
                to="/team"
              >
                <ListItemText primary="Team short description" />
                <ListItemAvatar>
                  <Build />
                </ListItemAvatar>
              </ListItem>
            </List>
          </>
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
