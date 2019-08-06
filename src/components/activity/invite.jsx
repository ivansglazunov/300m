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
import { Close, AttachMoneyTwoTone } from "@material-ui/icons";
import { blue } from "@material-ui/core/colors";

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

export default ({
  titleInvite,
  descriptionInvite,
  timeInvite,
  onProjectInvite
}) => {
  const classes = useStyles();

  return (
    <>
      <List disablePadding={true} button onClick={onProjectInvite}>
        <ListItem dense>
          <ListItemAvatar>
            <Avatar
              style={{ color: "#fff", backgroundColor: blue[500], margin: 10 }}
            >
              <AttachMoneyTwoTone />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            classes={{ primary: classes.primary }}
            primaryTypographyProps={{ variant: "h6" }}
            primary={titleInvite}
            secondary={
              <>
                <Typography component="p" variant="body2" color="textPrimary">
                  {descriptionInvite}
                </Typography>
                <Typography component="p" variant="body2" color="textPrimary">
                  {timeInvite}
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
