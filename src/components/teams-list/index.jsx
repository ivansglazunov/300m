import React from "react";

import {
  makeStyles,
  List,
  Container,
  Badge,
  withStyles
} from "@material-ui/core";

import { Area } from "../slice-area";
import NewItem from "./new-item";

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
                <NewItem key={team._id} {...team} onTeam={onTeam} />
              ))}
            </List>
          </Container>
        }
      />
    </>
  );
};
