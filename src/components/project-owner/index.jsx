import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper,
  makeStyles,
  Badge,
  Typography,
  Card,
  CardContent,
  IconButton
} from "@material-ui/core";
import { Edit, ChevronLeft } from "@material-ui/icons";

import { Link } from "react-router-dom";

import { Area } from "../slice-area/index";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default ({
  title,
  description,
  onEdit,
  onTransitionToListofProjects,
  membersList,
  stages
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [valueTit, setValueTitle] = useState(title);
  const [valueDesc, setValueDesc] = useState(description);

  return (
    <Area
      content={
        <Card>
          <CardContent>
            <IconButton
              style={{ float: "right", padding: 0 }}
              aria-label="Edit"
              onClick={onEdit}
            >
              <Edit />
            </IconButton>
            <Typography variant="h5" component="h1" gutterBottom align="center">
              {title}
            </Typography>
            <Typography variant="body1" component="div">
              {description}
            </Typography>
          </CardContent>
          <List>
            <ListItem component={Link} button to="/members-list">
              {membersList}
            </ListItem>
            <ListItem component={Link} button to="/project-stages-list">
              {stages}
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
