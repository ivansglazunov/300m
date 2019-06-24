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
  TextField
} from "@material-ui/core";
import { Star, Add, Build, Search } from "@material-ui/icons";

import { Link } from "react-router-dom";

import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

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

  return (
    <>
      <Typography variant="h5" component="h1" align="center">
        Stages List
      </Typography>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        className={classes.margin}
      >
        <Grid item xs={12}>
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
        </Grid>
        <Grid item xs={12}>
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="outlined-dense"
              label="Name"
              className={classes.textField}
              margin="dense"
              variant="outlined"
            />
          </form>
        </Grid>
        <Grid item xs={6}>
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
        </Grid>
      </Grid>
      <Fab
        variant="extended"
        size="medium"
        color="primary"
        aria-label="Add"
        className={classes.margin}
      >
        <Add className={classes.extendedIcon} />
        <span className={classes.textAlign}>Project add</span>
      </Fab>
    </>
  );
};
