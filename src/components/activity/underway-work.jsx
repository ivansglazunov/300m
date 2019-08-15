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
  const globalClasses = useGlobalStyles();

  return (
    <>
      <List
        disablePadding={true}
        button
        onClick={onProject}
        className={globalClasses.yellowBackground}
      >
        <ListItem dense>
          <ListItemAvatar>
            <Avatar
              style={{ color: "#fff", backgroundColor: "#DD2E34", margin: 10 }}
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
                <Typography
                  component="p"
                  variant="body2"
                  className={globalClasses.blackText}
                >
                  {addressUnderway}
                </Typography>
                <Typography
                  component="p"
                  variant="body2"
                  className={globalClasses.blackText}
                >
                  {passedUnderway}&emsp;{timePassedUnderway}
                </Typography>
                <Typography
                  component="p"
                  variant="body2"
                  className={globalClasses.blackText}
                >
                  {leftUnderway}&emsp;{timeLeftUnderway}
                </Typography>
                <Typography
                  component="p"
                  variant="body2"
                  className={globalClasses.blackText}
                >
                  {descriptionStageUnderway}
                </Typography>
                <Typography
                  component="p"
                  variant="body2"
                  className={globalClasses.blackText}
                >
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
