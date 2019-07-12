import React from "react";
import { useTranslation } from "react-i18next";

import {
  List,
  ListItem,
  makeStyles,
  Badge,
  Typography,
  Card,
  ListItemText,
  Paper,
  ListItemIcon
} from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";

import { Area } from "../slice-area";

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

export default ({ title, description, onTransitionToListofProjects }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Area
      content={
        <Card>
          <Typography variant="h5" component="h1" align="center">
            {title}
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary={description} />
            </ListItem>
            <Badge className={classes.margin} badgeContent={2} color="primary">
              <ListItem button>{t("Profile Notification")}</ListItem>
            </Badge>
          </List>
        </Card>
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
            <ListItem button onClick={onTransitionToListofProjects}>
              <ListItemIcon style={{ color: "#fff" }}>
                <ChevronLeft />
              </ListItemIcon>
              <ListItemText primary={t("back to the list of projects")} />
            </ListItem>
          </List>
        </Paper>
      }
    />
  );
};
