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
  const globalClasses = useGlobalStyles();

  return (
    <>
      <List
        disablePadding={true}
        button
        onClick={onProject}
        className={globalClasses.redBackground}
      >
        <ListItem dense>
          <ListItemAvatar>
            <Avatar
              style={{
                color: "#111f33",
                backgroundColor: "#FFE20C",
                margin: 10
              }}
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
                <Typography
                  component="p"
                  variant="body2"
                  className={globalClasses.blackText}
                >
                  {addressLate}
                </Typography>
                <Typography
                  component="p"
                  variant="body2"
                  className={globalClasses.blackText}
                >
                  {passedLate}&emsp;{timePassedLate}
                </Typography>
                <Typography
                  component="p"
                  variant="body2"
                  className={globalClasses.blackText}
                >
                  {leftLate}&emsp;{timeLeftLate}
                </Typography>
                <Typography
                  component="p"
                  variant="body2"
                  className={globalClasses.blackText}
                >
                  {descriptionStageLate}
                </Typography>
                <Typography
                  component="p"
                  variant="body2"
                  className={globalClasses.blackText}
                >
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
