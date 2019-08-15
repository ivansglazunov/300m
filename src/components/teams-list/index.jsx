import React from "react";

import { makeStyles, List, Container } from "@material-ui/core";

import NewItem from "./new-item";
import useGlobalStyles from "../styles";

import { useTranslation } from "react-i18next";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default ({ onTeam, teams }) => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const { t } = useTranslation();

  return (
    <>
      <Container className={globalClasses.paddingForCard}>
        <List className={globalClasses.textColor}>
          {teams.map(team => (
            <NewItem key={team._id} {...team} onTeam={onTeam} />
          ))}
        </List>
      </Container>
    </>
  );
};
