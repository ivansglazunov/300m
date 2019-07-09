import React from "react";

import {
  Typography,
  Divider,
  makeStyles,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from "@material-ui/core";
import { Done, Clear } from "@material-ui/icons";

import { Link } from "react-router-dom";

const useStyles: any = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default ({}) => {
  const classes = useStyles();

  return (
    <>
      <Typography gutterBottom component="h1" variant="h5" align="center">
        Team Invites List
      </Typography>
      <List>
        <ListItem button component={Link} to="/team">
          <ListItemText
            primary="Сидоров В.В."
            secondary="Short description of the team, its composition"
          />
          <ListItemAvatar>
            <Done />
          </ListItemAvatar>
          <ListItemAvatar>
            <Clear />
          </ListItemAvatar>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} to="/team">
          <ListItemText
            primary="Петров П.К."
            secondary="Short description of the team, its composition"
          />
          <ListItemAvatar>
            <Done />
          </ListItemAvatar>
          <ListItemAvatar>
            <Clear />
          </ListItemAvatar>
        </ListItem>
      </List>
    </>
  );
};
