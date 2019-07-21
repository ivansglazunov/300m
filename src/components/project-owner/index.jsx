import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  List,
  ListItem,
  makeStyles,
  Badge,
  Typography,
  Card,
  CardContent,
  IconButton,
  Container
} from "@material-ui/core";
import { Edit } from "@material-ui/icons";

import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default ({ title, description, onEdit, membersList, stages }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Container>
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
          <ListItem component={Link} button to="/project-stages">
            {stages}
          </ListItem>
          <Badge className={classes.margin} badgeContent={2} color="primary">
            <ListItem button>{t("Profile Notification")}</ListItem>
          </Badge>
        </List>
      </Card>
    </Container>
  );
};
