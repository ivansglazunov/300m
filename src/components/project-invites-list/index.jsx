import React, { useState } from "react";

import {
  makeStyles,
  ListItemText,
  Button,
  List,
  ListItem,
  ListItemSecondaryAction,
  Container,
  Badge,
  Tabs,
  Tab,
  withStyles,
  Card,
  Collapse,
  CardContent,
  Typography,
  Checkbox,
  ListItemIcon
} from "@material-ui/core";
import { ExpandMore, Today, AccessTime, ExpandLess } from "@material-ui/icons";

import { Area } from "../slice-area";
import { useTranslation } from "react-i18next";

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
  margin: {
    margin: theme.spacing(1)
  },
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  content: {
    margin: 0
  },

  svg: {
    width: 17
  }
}));

export default ({
  title,
  name,
  description,
  address,
  onUser,
  onAccept,
  onRefuse,
  stages,
  day,
  time,
  onProjects,
  onInvitations
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <>
      <Area
        top={
          <Tabs
            value="invitations"
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab value="projects" label={t("Projects")} onClick={onProjects} />
            <Tab
              value="invitations"
              onClick={onInvitations}
              label={
                <StyledBadge badgeContent={1} color="primary">
                  <span>{t("Invitations to projects")}</span>
                </StyledBadge>
              }
            />
          </Tabs>
        }
        content={
          <Container>
            <Card>
              <List dense>
                <ListItem>
                  <ListItemText
                    style={{ textAlign: "left", paddingRight: 100 }}
                    primary={
                      <ListItem>
                        <Typography variant="h6" component="h1">
                          {t("Project title")}
                        </Typography>
                      </ListItem>
                    }
                    secondary={
                      <ListItem
                        button
                        onClick={onUser}
                        style={{ textDecoration: "underline" }}
                      >
                        от {name}
                      </ListItem>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Button>{t("Refuse")}</Button>
                    <Button>{t("Accept")}</Button>
                  </ListItemIcon>
                  <ListItemSecondaryAction onClick={handleClick}>
                    {!open ? <ExpandMore /> : <ExpandLess />}
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography variant="caption">
                    {address}
                    <br />
                    <Today className={classes.svg} />
                    {day}&emsp;
                    <AccessTime className={classes.svg} />
                    {time}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Container>
        }
      />
    </>
  );
};
