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
import { Alarm } from "@material-ui/icons";
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

export default ({
  titleStartSoon,
  descriptionStageStartSoon,
  descriptionWorkStartSoon,
  timeStartSoon,
  dayStartSoon,
  addressStartSoon,
  onProject
}) => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  return (
    <>
      <List disablePadding={true} button onClick={onProject}>
        <ListItem dense>
          <ListItemAvatar>
            <Avatar
              style={{ color: "#fff", backgroundColor: blue[500], margin: 10 }}
            >
              <Alarm />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            classes={{ primary: globalClasses.textColor }}
            primaryTypographyProps={{ variant: "h6" }}
            primary={titleStartSoon}
            secondary={
              <>
                <Typography component="p" variant="body2" color="textPrimary">
                  {addressStartSoon}
                </Typography>
                <Typography component="p" variant="body2" color="textPrimary">
                  {dayStartSoon}, в {timeStartSoon}
                </Typography>
                <Typography component="p" variant="body2" color="textPrimary">
                  {descriptionStageStartSoon}
                </Typography>
                <Typography component="p" variant="body2" color="textPrimary">
                  {descriptionWorkStartSoon}
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
