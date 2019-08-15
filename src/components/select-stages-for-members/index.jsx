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
  Container,
  Button
} from "@material-ui/core";

import { ExpandMore, ExpandLess } from "@material-ui/icons";

import { Area } from "../slice-area";
import useGlobalStyles from "../styles";

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
  onBackToSelectMemebers,
  onCancel,
  onAddMembersToStages
}) => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  function handleClick() {
    setOpen(!open);
  }

  return (
    <Area
      content={
        <Container className={globalClasses.paddingForCard}>
          <ExpansionPanel expanded={open} className={globalClasses.shadowCard}>
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
                <IconButton
                  onClick={handleClick}
                  className={globalClasses.textColor}
                >
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
        </Container>
      }
      bottom={
        <>
          <Button className={globalClasses.refuse} onClick={onCancel}>
            {t("cancel")}
          </Button>
          <Button onClick={onBackToSelectMemebers}>
            {t("Back to select members")}
          </Button>
          <Button color="secondary" onClick={onAddMembersToStages}>
            {t("Add members to stages")}
          </Button>
        </>
      }
    />
  );
};
