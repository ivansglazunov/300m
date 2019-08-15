import React from "react";

import {
  makeStyles,
  List,
  Container,
  Fab,
  Typography
} from "@material-ui/core";
import { Add } from "@material-ui/icons";

import { useTranslation } from "react-i18next";

import OneItem from "./item";
import AwaitingConfirmation from "./not-yet-confirmed";
import DeclinedInvitation from "./declined-invitation";
import useGlobalStyles from "../styles";
import { Area } from "../slice-area";

const useStyles = makeStyles(theme => ({}));

export default ({ members, onAddMembers, onUser, membersConfirmation }) => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const { t } = useTranslation();

  return (
    <>
      <Area
        content={
          <Container>
            <List className={globalClasses.textColor}>
              {members.map(member => (
                <OneItem key={member._id} {...member} onUser={onUser} />
              ))}
            </List>
            <List>
              <Typography
                variant="h6"
                component="header"
                className={globalClasses.textColor}
              >
                {t("Awaiting confirmation")}
              </Typography>
              {membersConfirmation.map(memberConf => (
                <AwaitingConfirmation
                  key={memberConf._id}
                  {...memberConf}
                  onUser={onUser}
                />
              ))}
            </List>
            <List>
              <Typography
                variant="h6"
                component="header"
                className={globalClasses.textColor}
              >
                {t("Declined invitation")}
              </Typography>
              {membersConfirmation.map(memberConf => (
                <DeclinedInvitation
                  key={memberConf._id}
                  {...memberConf}
                  onUser={onUser}
                />
              ))}
            </List>
          </Container>
        }
        bottom={
          <Fab
            onClick={onAddMembers}
            color="primary"
            aria-label="Add"
            style={{ position: "absolute", right: 16, bottom: 16 }}
          >
            <Add />
          </Fab>
        }
      />
    </>
  );
};
