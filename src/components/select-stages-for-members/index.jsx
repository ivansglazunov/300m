import React, { useState } from "react";

import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

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
  Checkbox
} from "@material-ui/core";

import { ExpandMore, ExpandLess, Edit } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  content: {
    margin: 0
  }
}));

export default ({
  title,
  description,
  address,
  name,
  durationFrom,
  durationTo
}) => {
  const classes = useStyles();
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
              <Checkbox
                checked={true}
                value="checkedA"
                inputProps={{
                  "aria-label": "primary checkbox"
                }}
              />
              <ListItemText
                primary={title}
                secondary={
                  !open ? (
                    <div>
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
            <IconButton onClick={handleClick}>
              {open ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </ExpansionPanelActions>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{ paddingTop: 0, paddingBottom: 10 }}>
          <List style={{ padding: 0 }}>
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
              style={{ paddingTop: 0, paddingBottom: 0 }}
            >
              <ListItemText primary={address} />
            </ListItem>
            <ListItem
              disableGutters={true}
              style={{ paddingTop: 0, paddingBottom: 0 }}
            >
              <ListItemText primary={name} />
            </ListItem>
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </>
  );
};
