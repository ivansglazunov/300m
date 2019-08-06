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
import { Warning } from "@material-ui/icons";
import { red } from "@material-ui/core/colors";

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
  titleLate,
  descriptionStageLate,
  descriptionWorkLate,
  timePassedLate,
  timeLeftLate,
  leftLate,
  passedLate,
  addressLate,
  onProject
}) => {
  const classes = useStyles();

  return (
    <>
      <List
        disablePadding={true}
        button
        onClick={onProject}
        style={{ backgroundColor: "#ee44448a" }}
      >
        <ListItem dense>
          <ListItemAvatar>
            <Avatar
              style={{ color: "#fff", backgroundColor: red[500], margin: 10 }}
            >
              <Warning />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            classes={{ primary: classes.primary }}
            primaryTypographyProps={{ variant: "h6" }}
            primary={titleLate}
            secondary={
              <>
                <Typography component="p" variant="body2" color="textPrimary">
                  {addressLate}
                </Typography>
                <Typography component="p" variant="body2" color="textPrimary">
                  {passedLate}&emsp;{timePassedLate}
                </Typography>
                <Typography component="p" variant="body2" color="textPrimary">
                  {leftLate}&emsp;{timeLeftLate}
                </Typography>
                <Typography component="p" variant="body2" color="textPrimary">
                  {descriptionStageLate}
                </Typography>
                <Typography component="p" variant="body2" color="textPrimary">
                  {descriptionWorkLate}
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
