import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  Typography,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  IconButton,
  Container,
  ListItemAvatar
} from "@material-ui/core";
import { Edit, MoreVert } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default ({ title, description, onEdit, adjoins, onMembers }) => {
  const classes = useStyles();

  return (
    <Container>
      <Card>
        <CardContent>
          <IconButton
            style={{ float: "right", padding: 0 }}
            aria-label="Edit"
            onClick={onEdit}
          >
            <Edit />
          </IconButton>
          <Typography gutterBottom component="h1" variant="h5" align="center">
            {title}
          </Typography>
          <Typography variant="body1" component="div">
            {description}
          </Typography>
        </CardContent>
        <List>
          <ListItem alignItems="flex-start" button onClick={onMembers}>
            {/* <ListItemAvatar>
                <MoreVert />
            </ListItemAvatar> */}
            <ListItemText primary={adjoins} />
          </ListItem>
        </List>
      </Card>
    </Container>
  );
};
