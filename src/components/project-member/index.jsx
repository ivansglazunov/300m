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
  Container
} from "@material-ui/core";

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
    <Container>
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
    </Container>
  );
};
