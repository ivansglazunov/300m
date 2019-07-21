import React from "react";

import {
  makeStyles,
  List,
  Container,
  Tabs,
  Tab,
  Badge,
  withStyles
} from "@material-ui/core";

import { Area } from "../slice-area";
import OneItem from "./item";

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
  }
}));

export default ({ onTeam, teams, onTeams, onInvitations }) => {
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
            <Tab value="teams" label={t("Teams")} onClick={onTeams} />
            <Tab
              value="invitations"
              onClick={onInvitations}
              label={
                <StyledBadge badgeContent={1} color="primary">
                  <span>{t("Invitations to teams")}</span>
                </StyledBadge>
              }
            />
          </Tabs>
        }
        content={
          <Container>
            <List>
              {teams.map(team => (
                <OneItem key={team._id} {...team} onTeam={onTeam} />
              ))}
            </List>
          </Container>
        }
      />
    </>
  );
};
