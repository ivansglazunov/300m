import React, { useState } from "react";
import {
  Fab,
  makeStyles,
  Typography,
  Grid,
  Paper,
  IconButton,
  InputBase,
  Divider,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";
import { Search, Edit, ArrowRightAlt } from "@material-ui/icons";

import { Link } from "react-router-dom";

import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

import { Area } from "../slice-area/index";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  textAlign: {
    position: "relative",
    top: 2
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2)
  }
}));

export default ({}) => {
  const classes = useStyles();
  const [selectedDate, handleDateChange] = useState(new Date());
  const [edit, setEdit] = useState(false);

  return (
    <>
      <Area
        content={
          <>
            <IconButton
              style={{ float: "right", padding: 0 }}
              aria-label="Edit"
              onClick={() => {
                setEdit(true);
              }}
            >
              <Edit />
            </IconButton>
            <Typography variant="h5" component="h1" align="center">
              Stages List
            </Typography>
            <Paper className={classes.root}>
              <InputBase
                className={classes.input}
                placeholder="Search Google Maps"
                inputProps={{ "aria-label": "Search Google Maps" }}
              />
              <IconButton className={classes.iconButton} aria-label="Search">
                <Search />
              </IconButton>
            </Paper>
            <TextField
              id="outlined-dense"
              label="Name"
              className={classes.textField}
              margin="dense"
              variant="outlined"
            />
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
              <ListItem button>
                <ListItemText primary="stage project add" />
                <ListItemSecondaryAction>
                  <ArrowRightAlt className={classes.extendedIcon} />
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Paper>
        }
      />

      {/* <Grid item xs={6}>
          <Typography variant="caption" component="h2">
            Stage From
          </Typography>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <DateTimePicker value={selectedDate} onChange={handleDateChange} />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="caption" component="h2">
            Stage To
          </Typography>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <DateTimePicker value={selectedDate} onChange={handleDateChange} />
          </MuiPickersUtilsProvider>
        </Grid> */}
    </>
  );
};
