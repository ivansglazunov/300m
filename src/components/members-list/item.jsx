import React from "react";

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

const StyledBadge = withStyles(theme => ({
  badge: {
    top: "45%",
    right: -11,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[900]
    }`
  }
}))(Badge);

export default ({ name, stages, onUser }) => {
  // const classes = useStyles();
  const [open, setOpen] = React.useState(true);
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
          <Favorite />
        </ListItemAvatar>
        <ListItemSecondaryAction>
          {stages ? (
            <IconButton onClick={handleClick} disabled={!stages.length}>
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
