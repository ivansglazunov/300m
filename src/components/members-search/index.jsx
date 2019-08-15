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
  Tabs,
  Tab,
  Badge,
  withStyles,
  Button,
  Container
} from "@material-ui/core";
import { Search } from "@material-ui/icons";

import { Link } from "react-router-dom";

// import {classNames} from 'classnames';
import classNames from "classnames";

import Favorite from "../add-to-teams";
import { Area } from "../slice-area/index";
import useGlobalStyles from "../styles";

import { useTranslation } from "react-i18next";

const StyledBadge = withStyles(theme => ({
  badge: {
    top: "45%",
    right: -11,
    boxShadow: "0 0 2px 0 #DD2E34"
  }
}))(Badge);

const useStyles = makeStyles(theme => ({
  textField: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2)
  }
}));

export default ({
  selectStagesForMembers,
  onSelectStagesForMembers,
  onCancel
}) => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
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
            variant="fullWidth"
            onChange={handleChange}
            // className={globalClasses.textColor} не нужно
          >
            <Tab
              value="search"
              // className={classNames({[globalClasses.collapseAndTabs] : !value })}
              className={classNames(globalClasses.textColor, {
                [globalClasses.collapseAndTabs]: value !== "search"
              })}
              label={t("Search")}
            />
            <Tab
              value="checked"
              // className={globalClasses.textColor}
              className={classNames(globalClasses.textColor, {
                [globalClasses.collapseAndTabs]: value !== "checked"
              })}
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
            <Container>
              {value === "search" && (
                <div style={{ padding: "0 20px" }}>
                  <TextField
                    id="outlined-search"
                    label={t("Search member")}
                    type="search"
                    className={classes.textField}
                    margin="dense"
                    classes={{ root: globalClasses.textFieldBoderColor }}
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
                      TabContainerider
                    >
                      <ListItemAvatar>
                        <Avatar
                          alt="montagnik"
                          src="https://96.img.avito.st/640x480/5475959896.jpg"
                          className={classes.avatar}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        className={globalClasses.textColor}
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
                        <Favorite />
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
                        className={globalClasses.textColor}
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
            </Container>
          </>
        }
        bottom={
          <>
            <Button
              // className={classes.margin}
              className={`${globalClasses.refuse} ${classes.margin}`}
              onClick={onCancel}
            >
              {t("cancel")}
            </Button>
            <Button
              color="primary"
              className={classes.margin}
              onClick={onSelectStagesForMembers}
            >
              {selectStagesForMembers}
            </Button>
          </>
        }
      />
    </>
  );
};
