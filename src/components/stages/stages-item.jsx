import React, { useState } from "react";

import {
  makeStyles,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  List,
  ListItemText,
  ListItem,
  IconButton,
  ExpansionPanelActions,
  ListItemSecondaryAction
} from "@material-ui/core";

import { ExpandMore, ExpandLess, Edit, Map } from "@material-ui/icons";

import useGlobalStyles from "../styles";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  content: {
    margin: 0
  }
}));

export default ({
  stage: { title, description, address, name, durationFrom, durationTo },
  onEdit,
  onUser
}) => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <>
      <ExpansionPanel expanded={open}>
        <ExpansionPanelSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.content}
        >
          <List style={{ width: "100%", padding: 0 }}>
            <ListItem
              disableGutters={true}
              style={{ paddingTop: 0, paddingBottom: 0 }}
            >
              <ListItemText
                classes={{ primary: globalClasses.textColor }}
                primary={title}
                secondary={
                  !open ? (
                    <div className={globalClasses.textColor}>
                      <Typography variant="caption">
                        {address}
                        <br />
                        {durationFrom}-{durationTo}
                      </Typography>
                    </div>
                  ) : null
                }
              />
            </ListItem>
          </List>
          <ExpansionPanelActions style={{ width: "100%", padding: 0 }}>
            <IconButton
              aria-label="Edit"
              onClick={onEdit}
              className={globalClasses.textColor}
            >
              <Edit />
            </IconButton>
            <IconButton
              onClick={handleClick}
              className={globalClasses.textColor}
            >
              {open ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </ExpansionPanelActions>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{ paddingTop: 0, paddingBottom: 10 }}>
          <List
            style={{
              padding: 0,
              width: "100%"
            }}
          >
            <ListItem
              disableGutters={true}
              style={{ paddingTop: 0, paddingBottom: 0 }}
            >
              <ListItemText primary={description} />
            </ListItem>
            <ListItem
              disableGutters={true}
              style={{ paddingTop: 0, paddingBottom: 0 }}
            >
              <ListItemText
                primary={
                  <>
                    {durationFrom}-{durationTo}
                  </>
                }
              />
            </ListItem>
            <ListItem
              disableGutters={true}
              style={{
                paddingTop: 0,
                paddingBottom: 0
              }}
            >
              <ListItemText primary={address} />
              <ListItemSecondaryAction>
                <IconButton edge="end" className={globalClasses.textColor}>
                  <Map />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem
              disableGutters={true}
              style={{ paddingTop: 0, paddingBottom: 0 }}
            >
              <ListItemText
                primary={
                  <ListItem button onClick={onUser}>
                    {name}
                  </ListItem>
                }
              />
            </ListItem>
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </>
  );
};
