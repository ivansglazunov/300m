import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  makeStyles,
  Paper
} from "@material-ui/core";
import { Star, Build, ChevronRight } from "@material-ui/icons";

import { Area } from "../slice-area/index";

const useStyles = makeStyles(theme => ({}));

export default ({ title, description }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <Area
        content={
          <List>
            <ListItem button divider component={Link} to="/project-owner">
              <ListItemText primary={title} secondary={description} />
              <ListItemSecondaryAction>
                <Star />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem button divider component={Link} to="/project-member">
              <ListItemText primary={title} secondary={description} />
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
                <ListItemText primary={t("project add")} />
                <ListItemSecondaryAction>
                  <ChevronRight />
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Paper>
        }
      />
    </>
  );
};
