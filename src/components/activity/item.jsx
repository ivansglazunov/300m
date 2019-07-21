import React from "react";

import {
  Card,
  Typography,
  makeStyles,
  Avatar,
  List,
  ListItemAvatar,
  ListItemText,
  ListItem
} from "@material-ui/core";
import { GroupAdd, ListAlt, Timeline, BrokenImage } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 3
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  }
}));

export default ({
  title,
  description,
  typeOfActivity,
  altAvatar,
  srcAvatar,
  place,
  role,
  workDescription
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <List disablePadding={true}>
        <ListItem dense>
          <ListItemAvatar>
            <Avatar>
              {typeOfActivity === "invitToTeam" ? (
                <GroupAdd />
              ) : typeOfActivity === "inviteToProject" ? (
                <ListAlt />
              ) : typeOfActivity === "privateMassage" ? (
                <img
                  alt={altAvatar}
                  src={srcAvatar}
                  className={classes.bigAvatar}
                />
              ) : typeOfActivity === "stageMessage" ? (
                <Timeline />
              ) : (
                <BrokenImage />
              )}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={title}
            secondary={
              typeOfActivity === "privateMessage" ? (
                <Typography component="p" variant="body2" color="textPrimary">
                  {description}
                </Typography>
              ) : typeOfActivity === "stageMessage" ? (
                <>
                  <Typography component="p" variant="body2" color="textPrimary">
                    {place}
                  </Typography>
                  <Typography component="p" variant="body2" color="textPrimary">
                    {workDescription}
                  </Typography>
                </>
              ) : (
                <>
                  <Typography component="p" variant="body2" color="textPrimary">
                    {place}
                  </Typography>
                  <Typography component="p" variant="body2" color="textPrimary">
                    {role}
                  </Typography>
                  <Typography component="p" variant="body2" color="textPrimary">
                    {workDescription}
                  </Typography>
                </>
              )
            }
          />
          {}
        </ListItem>
      </List>
    </Card>
  );
};
