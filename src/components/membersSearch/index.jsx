import React from "react";

import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Avatar,
  Checkbox,
  Divider,
  makeStyles,
  Fab,
  TextField,
  InputAdornment
} from "@material-ui/core";
import { Add, Search } from "@material-ui/icons";

import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  textField: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  textAlign: {
    position: "relative",
    top: 2
  }
}));

export default ({}) => {
  const classes = useStyles();

  return (
    <>
      <TextField
        id="outlined-search"
        label="Search member"
        type="search"
        className={classes.textField}
        margin="dense"
        variant="outlined"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          )
        }}
      />
      <List>
        <ListItem component={Link} to="/user" divider>
          <ListItemAvatar>
            <Avatar
              alt="montagnik"
              src="https://96.img.avito.st/640x480/5475959896.jpg"
              className={classes.avatar}
            />
          </ListItemAvatar>
          <ListItemText
            primary="Семенов Ф.А."
            secondary="Short description of the worker"
          />
          <ListItemSecondaryAction>
            <Checkbox
              checked={true}
              value="checkedA"
              inputProps={{
                "aria-label": "primary checkbox"
              }}
            />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem component={Link} to="/user"></ListItem>
        <ListItem component={Link} to="/user" divider>
          <ListItemAvatar>
            <Avatar
              alt="montagnik"
              src="https://96.img.avito.st/640x480/5475959896.jpg"
              className={classes.avatar}
            />
          </ListItemAvatar>
          <ListItemText
            primary="Петров П.С."
            secondary="Short description of the worker"
          />
          <ListItemSecondaryAction>
            <Checkbox
              checked={false}
              value="checkedA"
              inputProps={{
                "aria-label": "primary checkbox"
              }}
            />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem component={Link} to="/user"></ListItem>
      </List>
      <Fab
        variant="extended"
        size="small"
        color="primary"
        aria-label="Add"
        className={classes.margin}
        component={Link}
        to="/select-stages"
      >
        <Add className={classes.extendedIcon} />
        <span className={classes.textAlign}>select stages for members</span>
      </Fab>
    </>
  );
};
