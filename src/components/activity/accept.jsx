import React from "react";

import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Typography,
  makeStyles,
  ListItemText
} from "@material-ui/core";
import { Check } from "@material-ui/icons";
import { blue } from "@material-ui/core/colors";

import useGlobalStyles from "../styles";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 3
  },
  bigAvatar: {
    margin: 10,
    width: 50,
    height: 45
  },
  primary: {
    fontWeight: 800
  }
}));

export default ({ titleAccept, descriptionAccept, timeAccept, onAccept }) => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  return (
    <>
      <List disablePadding={true} buttom onClick={onAccept}>
        <ListItem dense>
          <ListItemAvatar>
            <Avatar
              style={{ color: "#fff", backgroundColor: blue[500], margin: 10 }}
            >
              <Check />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            className={globalClasses.textColor}
            classes={{ primary: classes.primary }}
            primaryTypographyProps={{ variant: "h6" }}
            primary={titleAccept}
            secondary={
              <>
                <Typography component="p" variant="body2">
                  {descriptionAccept}
                </Typography>
                <Typography component="p" variant="body2">
                  {timeAccept}
                </Typography>
              </>
            }
          />
          {}
        </ListItem>
      </List>
    </>
  );
};
