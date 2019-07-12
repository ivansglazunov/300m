import React from "react";

import {
  makeStyles,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Paper,
  Container
} from "@material-ui/core";
import { ChevronRight } from "@material-ui/icons";

import { Link } from "react-router-dom";

import { Area } from "../slice-area";
import OneItem from "./item";

import { useTranslation } from "react-i18next";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default ({ onTeam, teams }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <Area
        content={
          <Container>
            <List>
              {teams.map(team => (
                <OneItem key={team._id} {...team} onTeam={onTeam} />
              ))}
            </List>
          </Container>
        }
        bottom={
          <Paper
            square="false"
            elevation="2"
            style={{
              backgroundColor: "#3f51b5"
            }}
          >
            <List style={{ color: "#fff" }}>
              <ListItem button component={Link} to="/team">
                <ListItemText primary={t("Team add")} />
                <ListItemSecondaryAction>
                  <ChevronRight />
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Paper>
        }
      />
    </>
  );
};
