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
import { blue } from "@material-ui/core/colors";
import { GroupAdd, ListAlt, Timeline, BrokenImage } from "@material-ui/icons";

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
            <Avatar
              style={{ color: "#fff", backgroundColor: blue[500], margin: 10 }}
            >
              {srcAvatar ? (
                <img
                  alt={altAvatar}
                  src={srcAvatar}
                  className={classes.bigAvatar}
                />
              ) : typeOfActivity === "invitToTeam" ? (
                <GroupAdd />
              ) : typeOfActivity === "inviteToProject" ? (
                <ListAlt />
              ) : typeOfActivity === "stageMessage" ? (
                <Timeline />
              ) : (
                <BrokenImage />
              )}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            classes={{ primary: classes.primary }}
            primaryTypographyProps={{ variant: "h6" }}
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
