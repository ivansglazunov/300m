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
  Checkbox,
  Paper,
  Tabs,
  Tab
} from "@material-ui/core";

import { ExpandMore, ExpandLess, ChevronLeft } from "@material-ui/icons";

import { Area } from "../slice-area";
import { useTranslation } from "react-i18next";

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
  durationTo,
  onTransitionToChoiseMembers,
  onTransitionToTheProject
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  function handleClick() {
    setOpen(!open);
  }

  return (
    <>
      <Area
        content={
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
        }
        bottom={
          <Paper
            square="false"
            elevation="2"
            style={{
              backgroundColor: "#3f51b5"
            }}
          >
            <Tabs selected={true} variant="fullWidth" centered>
              <Tab
                style={{
                  color: "#fff",
                  textTransform: "none",
                  backgroundColor: "#3f51b5"
                }}
                onClick={onTransitionToChoiseMembers}
                label={t("Add members to stages")}
              />
              <Tab
                style={{
                  color: "#fff",
                  textTransform: "none",
                  backgroundColor: "rgb(85, 99, 179)"
                }}
                onClick={onTransitionToTheProject}
                label={t("Back to the project")}
              />
            </Tabs>
          </Paper>
        }
      />
    </>
  );
};
