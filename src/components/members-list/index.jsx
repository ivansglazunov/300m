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

// TODO юзеры должно быть элементом списка, иначе этого появляется куча дублирующих логик отрисовки одного и того-же по разному
// я бы проверил можно ли ListItem размещать без List ИЛИ можно ли размещать в List ExapansionPanel, это бы многое упростило и позволило бы их чередовать
// TODO добавил красную ссылку в draw.io, юзеры должны быть ссылками на их профили, что бы можно было понять кто это вообще такой

const useStyles = makeStyles(theme => ({}));

export default ({
  members,
  onAddMembers,
  onUser,
  membersConfirmation
  // name
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <List>
          {members.map(member => (
            <OneItem key={member._id} {...member} onUser={onUser} />
          ))}
        </List>
        <List>
          <Typography variant="h6" component="header">
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
          <Typography variant="h6" component="header">
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
        <Fab
          onClick={onAddMembers}
          color="primary"
          aria-label="Add"
          style={{ position: "absolute", right: 16, bottom: 16 }}
        >
          <Add />
        </Fab>
      </Container>
    </>
  );
};
