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
  TextField,
  Button,
  IconButton,
  Paper,
  ListItemIcon
} from "@material-ui/core";
import { Edit, ChevronLeft } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Area } from "../slice-area/index";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default ({ title, description, onTransitionToTeamsList, adjoins }) => {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);
  const [valueTit, setValueTitle] = useState(title);
  const [valueDesc, setValueDesc] = useState(description);
  const { t } = useTranslation();

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
          <Area
            content={
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
                    <ListItemText primary={adjoins} />
                  </ListItem>
                </List>
              </>
            }
            bottom={
              <Paper
                square="false"
                elevation="2"
                style={{
                  backgroundColor: "#3f51b5"
                }}
              >
                <List style={{ color: "#fff" }}>
                  <ListItem button onClick={onTransitionToTeamsList}>
                    <ListItemIcon style={{ color: "#fff" }}>
                      <ChevronLeft />
                    </ListItemIcon>
                    <ListItemText primary={t("back to the teams list")} />
                  </ListItem>
                </List>
              </Paper>
            }
          />
        )}
      </Card>
    </>
  );
};
