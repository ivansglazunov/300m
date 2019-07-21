import React from "react";

import { makeStyles, List, Container, Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";

import OneItem from "./item";

// TODO юзеры должно быть элементом списка, иначе этого появляется куча дублирующих логик отрисовки одного и того-же по разному
// я бы проверил можно ли ListItem размещать без List ИЛИ можно ли размещать в List ExapansionPanel, это бы многое упростило и позволило бы их чередовать
// TODO добавил красную ссылку в draw.io, юзеры должны быть ссылками на их профили, что бы можно было понять кто это вообще такой

const useStyles = makeStyles(theme => ({}));

export default ({ members, onAddMembers }) => {
  const classes = useStyles();

  return (
    <>
      <Container>
        <List>
          {members.map(member => (
            <OneItem key={member._id} {...member} />
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
