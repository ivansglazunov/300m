import React, { useState } from "react";

import {
  ListItem,
  Divider,
  makeStyles,
  withStyles,
  Badge,
  ListItemSecondaryAction,
  ListItemAvatar,
  ListItemText,
  IconButton,
  Typography,
  Collapse
} from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";

import { useTranslation } from "react-i18next";

import Favorite from "../add-to-teams/";
import useGlobalStyles from "../styles";

const StyledBadge = withStyles(theme => ({
  badge: {
    top: "45%",
    right: -11,
    boxShadow: "0 0 2px 0 #DD2E34",
    color: "#111f33"
  }
}))(Badge);

export default ({ name, stages, onUser, groupActive }) => {
  // const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const [open, setOpen] = useState(true);
  const { t } = useTranslation();

  function handleClick() {
    setOpen(!open);
  }

  return (
    <>
      <ListItem>
        <ListItemText
          primary={
            <ListItem button onClick={onUser}>
              {name}
            </ListItem>
          }
          secondary={
            stages ? (
              <StyledBadge
                showZero
                badgeContent={stages.length}
                color="primary"
              >
                {t("stages")}
              </StyledBadge>
            ) : null
          }
        />
        <ListItemAvatar>
          <Favorite active={groupActive} />
        </ListItemAvatar>
        <ListItemSecondaryAction>
          {stages ? (
            <IconButton
              color="primary"
              onClick={handleClick}
              disabled={!stages.length}
              classes={{ colorPrimary: globalClasses.textColor }}
            >
              {open ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          ) : null}
        </ListItemSecondaryAction>
      </ListItem>
      <Collapse in={!open} timeout="auto" unmountOnExit>
        {stages && stages.map(stage => <Stage {...stage} />)}
      </Collapse>
      <Divider />
    </>
  );
};

const Stage = ({ address, start }) => {
  return (
    <ListItem danse="true">
      <ListItemText primary={address} />
      <ListItemSecondaryAction style={{ textAlign: "right" }}>
        <Typography variant="body2" component="div">
          {start.calendar()}
        </Typography>
        <Typography variant="caption" component="span">
          12 часов
        </Typography>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
