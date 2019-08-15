import React, { useState } from "react";

import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Avatar,
  Checkbox,
  makeStyles,
  TextField,
  InputAdornment,
  Badge,
  withStyles,
  Button
} from "@material-ui/core";
import { Search } from "@material-ui/icons";

import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import useGlobalStyles from "../styles";

const StyledBadge = withStyles(theme => ({
  badge: {
    top: "45%",
    right: 7,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[900]
    }`
  }
}))(Badge);

const useStyles = makeStyles(theme => ({
  textField: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2)
  },
  gutters: {
    paddingLeft: 0
  }
}));

export default ({ onSelectStages }) => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const [value, setValue] = useState("search");
  const { t } = useTranslation();

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <>
      {value === "search" && (
        <div>
          <List>
            <ListItem
              dense
              component={Link}
              to="/user"
              divider
              classes={{ gutters: classes.gutters }}
            >
              <ListItemAvatar>
                <Avatar
                  alt="montagnik"
                  src="https://96.img.avito.st/640x480/5475959896.jpg"
                  className={classes.avatar}
                />
              </ListItemAvatar>
              <ListItemText
                classes={{ primary: globalClasses.textColor }}
                primary="Семенов Ф.А."
                secondary={t("Short description of the worker")}
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
          </List>
          <TextField
            id="outlined-search"
            label={t("Search member")}
            type="search"
            classes={{ root: globalClasses.textFieldBoderColor }}
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
            <ListItem
              dense
              component={Link}
              to="/user"
              classes={{ gutters: classes.gutters }}
            >
              <ListItemAvatar>
                <Avatar
                  alt="montagnik"
                  src="https://96.img.avito.st/640x480/5475959896.jpg"
                  className={classes.avatar}
                />
              </ListItemAvatar>
              <ListItemText
                classes={{ primary: globalClasses.textColor }}
                primary="Петров П.С."
                secondary={t("Short description of the worker")}
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
          </List>
        </div>
      )}
      {value === "checked" && (
        <List>
          <ListItem
            dense
            component={Link}
            to="/user"
            divider
            classes={{ gutters: classes.gutters }}
          >
            <ListItemAvatar>
              <Avatar
                alt="montagnik"
                src="https://96.img.avito.st/640x480/5475959896.jpg"
                className={classes.avatar}
              />
            </ListItemAvatar>
            <ListItemText
              primary="Семенов Ф.А."
              secondary={t("Short description of the worker")}
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
        </List>
      )}
      {/* <Button onClick={onSelectStages}>{t("Select stages for members")}</Button> */}
    </>
  );
};
