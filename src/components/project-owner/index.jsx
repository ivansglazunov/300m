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
  Container,
  Divider
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Edit } from "@material-ui/icons";

import { Link } from "react-router-dom";

import useGlobalStyles from "../styles";
import Accept from "../activity/accept";
import Refuse from "../activity/refuse";

const StyledBadge = withStyles(theme => ({
  badge: {
    top: "45%",
    right: 5,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[900]
    }`
  }
}))(Badge);

const useStyles = makeStyles(theme => ({}));

export default ({
  title,
  description,
  onEdit,
  membersList,
  stages,
  descriptionAccept,
  titleAccept,
  timeAccept,
  descriptionRefuse,
  titleRefuse,
  timeRefuse,
  onAccept
}) => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  return (
    <Container className={globalClasses.paddingForCard}>
      <Card className={globalClasses.shadowCard}>
        <CardContent>
          <IconButton
            style={{ float: "right", padding: 0 }}
            aria-label="Edit"
            onClick={onEdit}
            className={globalClasses.textColor}
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
        </List>
      </Card>
      <Accept
        descriptionAccept={descriptionAccept}
        titleAccept={titleAccept}
        timeAccept={timeAccept}
        onAccept={onAccept}
      />
      <Divider />
      <Refuse
        descriptionRefuse={descriptionRefuse}
        titleRefuse={titleRefuse}
        timeRefuse={timeRefuse}
      />
    </Container>
  );
};
