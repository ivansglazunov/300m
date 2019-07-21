import React from "react";

import {
  makeStyles,
  ListItemText,
  Button,
  List,
  ListItem,
  ListItemSecondaryAction,
  ButtonBase,
  Container,
  Badge,
  Tabs,
  Tab,
  withStyles,
  Card
} from "@material-ui/core";
import { Add, Clear } from "@material-ui/icons";

import StageForInvites from "./stage-for-invites";
import { Area } from "../slice-area";
import { useTranslation } from "react-i18next";

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
              <List>
                <ListItem>
                  <ListItemText
                    style={{ textAlign: "left", paddingRight: 100 }}
                    primary={
                      <Button
                        onClick={onUser}
                        style={{ textDecoration: "underline" }}
                      >
                        {name}
                      </Button>
                    }
                    secondary={description}
                  />
                  <ListItemSecondaryAction>
                    <ButtonBase onClick={onAccept}>
                      <Button color="primary" edge="add" aria-label="add">
                        <Add />
                      </Button>
                    </ButtonBase>
                    <ButtonBase onClick={onRefuse}>
                      <Button color="secondary" edge="clear" aria-label="clear">
                        <Clear />
                      </Button>
                    </ButtonBase>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </Card>
            <StageForInvites
              address={address}
              description={description}
              day={day}
              time={time}
            />
          </Container>
        }
      />
    </>
  );
};
