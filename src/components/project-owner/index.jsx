import React, { useState } from "react";

import {
  List,
  ListItem,
  makeStyles,
  Badge,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton
} from "@material-ui/core";
import { Edit } from "@material-ui/icons";

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

export default ({
  title = "Project Title",
  description = "1234567",
  onEdit
}) => {
  const classes = useStyles();
  const [valueTit, setValueTitle] = useState(title);
  const [valueDesc, setValueDesc] = useState(description);

  return (
    <>
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
            Members List
          </ListItem>
          <ListItem component={Link} button to="/project-stages-list">
            Stages List
          </ListItem>
          <Badge className={classes.margin} badgeContent={2} color="primary">
            <ListItem button>ProfileNotification</ListItem>
          </Badge>
        </List>
      </Card>
    </>
  );
};
