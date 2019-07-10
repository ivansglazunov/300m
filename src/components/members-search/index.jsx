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
  Paper,
  TextField,
  InputAdornment,
  Tabs,
  Tab,
  Badge,
  withStyles
} from "@material-ui/core";
import { Search, ArrowRightAlt } from "@material-ui/icons";

import { Link } from "react-router-dom";

import { Area } from "../slice-area/index";
import { useTranslation } from "react-i18next";

const StyledBadge = withStyles(theme => ({
  badge: {
    top: "45%",
    right: -10,
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
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  textAlign: {
    position: "relative",
    top: 2,
    marginLeft: theme.spacing(1)
  }
}));

export default ({}) => {
  const classes = useStyles();
  const [value, setValue] = useState("search");
  const { t } = useTranslation();

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <>
      <Area
        top={
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            onChange={handleChange}
          >
            <Tab value="search" label={t("Search")} />
            <Tab
              value="checked"
              label={
                <StyledBadge badgeContent={1} color="primary">
                  <span>{t("Checked")}</span>
                </StyledBadge>
              }
            />
          </Tabs>
        }
        content={
          <>
            {value === "search" && (
              <div style={{ padding: "0 20px" }}>
                <TextField
                  id="outlined-search"
                  label={t("Search member")}
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
                  <ListItem dense component={Link} to="/user" TabContainerider>
                    <ListItemAvatar>
                      <Avatar
                        alt="montagnik"
                        src="https://96.img.avito.st/640x480/5475959896.jpg"
                        className={classes.avatar}
                      />
                    </ListItemAvatar>
                    <ListItemText
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
              <div>
                <List>
                  <ListItem dense component={Link} to="/user" divider>
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
              </div>
            )}
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
              <ListItem button component={Link} to="/select-stages-for-members">
                <ListItemText primary={t("select stages for members")} />
                <ListItemSecondaryAction>
                  <ArrowRightAlt className={classes.extendedIcon} />
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Paper>
        }
      />
    </>
  );
};
