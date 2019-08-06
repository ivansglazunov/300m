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
import { AvTimer } from "@material-ui/icons";
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
  titleUnderway,
  descriptionStageUnderway,
  descriptionWorkUnderway,
  timePassedUnderway,
  timeLeftUnderway,
  leftUnderway,
  passedUnderway,
  addressUnderway,
  onProject
}) => {
  const classes = useStyles();

  return (
    <>
      <List
        disablePadding={true}
        button
        onClick={onProject}
        style={{ backgroundColor: "rgba(255, 235, 59, 0.5)" }}
      >
        <ListItem dense>
          <ListItemAvatar>
            <Avatar
              style={{ color: "#fff", backgroundColor: red[500], margin: 10 }}
            >
              <AvTimer />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            classes={{ primary: classes.primary }}
            primaryTypographyProps={{ variant: "h6" }}
            primary={titleUnderway}
            secondary={
              <>
                <Typography component="p" variant="body2" color="textPrimary">
                  {addressUnderway}
                </Typography>
                <Typography component="p" variant="body2" color="textPrimary">
                  {passedUnderway}&emsp;{timePassedUnderway}
                </Typography>
                <Typography component="p" variant="body2" color="textPrimary">
                  {leftUnderway}&emsp;{timeLeftUnderway}
                </Typography>
                <Typography component="p" variant="body2" color="textPrimary">
                  {descriptionStageUnderway}
                </Typography>
                <Typography component="p" variant="body2" color="textPrimary">
                  {descriptionWorkUnderway}
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
