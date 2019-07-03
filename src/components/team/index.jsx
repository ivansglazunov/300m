import React, { useState } from "react";

import {
  Typography,
  Divider,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton
} from "@material-ui/core";
import { Edit } from "@material-ui/icons";

import { Link } from "react-router-dom";

import { Area } from "../slice-area/index";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default ({ title = "Team Title", description = "Team description" }) => {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);
  const [valueTit, setValueTitle] = useState(title);
  const [valueDesc, setValueDesc] = useState(description);

  return (
    <>
      <Card>
        {edit ? (
          <Area
            content={
              <CardContent>
                <TextField
                  fullWidth
                  margin="dense"
                  label="Title"
                  variant="outlined"
                  value={valueTit}
                  placeholder={title}
                  onChange={event => setValueTitle(event.target.value)}
                />
                <TextField
                  fullWidth
                  margin="dense"
                  label="Description"
                  variant="outlined"
                  multiline
                  value={valueDesc}
                  placeholder={description}
                  onChange={event => setValueDesc(event.target.value)}
                />
              </CardContent>
            }
            bottom={
              <>
                <Button
                  className={classes.margin}
                  onClick={() => {
                    setEdit(false);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  color="primary"
                  className={classes.margin}
                  onClick={() => {
                    setEdit(false);
                  }}
                >
                  Save
                </Button>
              </>
            }
          />
        ) : (
          <>
            <CardContent>
              <IconButton
                style={{ float: "right", padding: 0 }}
                aria-label="Edit"
                onClick={() => {
                  setEdit(true);
                }}
              >
                <Edit />
              </IconButton>
              <Typography
                gutterBottom
                component="h1"
                variant="h5"
                align="center"
              >
                {title}
              </Typography>
              <Typography variant="body1" component="div">
                {description}
              </Typography>
            </CardContent>
            <List>
              <ListItem
                alignItems="flex-start"
                component={Link}
                to="/members-list"
              >
                <ListItemText primary="Adjoins List" />
              </ListItem>
            </List>
          </>
        )}
      </Card>
    </>
  );
};
