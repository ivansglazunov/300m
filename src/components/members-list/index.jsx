import React from "react";

import {
  Typography,
  makeStyles,
  List,
  Paper,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";
import { KeyboardArrowRight } from "@material-ui/icons";

import { Link } from "react-router-dom";

import OneItem from "./item";
import moment from "moment";

import { Area } from "../slice-area/index";

// TODO юзеры должно быть элементом списка, иначе этого появляется куча дублирующих логик отрисовки одного и того-же по разному
// я бы проверил можно ли ListItem размещать без List ИЛИ можно ли размещать в List ExapansionPanel, это бы многое упростило и позволило бы их чередовать
// TODO добавил красную ссылку в draw.io, юзеры должны быть ссылками на их профили, что бы можно было понять кто это вообще такой

const useStyles = makeStyles(theme => ({}));

export default ({}) => {
  const classes = useStyles();

  return (
    <>
      <Typography gutterBottom component="h1" variant="h5" align="center">
        Members List
      </Typography>
      <Area
        content={
          <List>
            <OneItem
              name="Papa Johns"
              stages={[
                { address: "Москва, Ветошный пер. 12", start: moment() },
                {
                  address: "Москва, Бурденко ул. 1",
                  start: moment().add(2, "days")
                }
              ]}
            />
            <OneItem name="Cap Sanders" stages={[]} />
            <OneItem name="Ronald MacDonald" />
          </List>
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
              <ListItem button component={Link} to="/members-search">
                <ListItemText primary="member add" />
                <ListItemSecondaryAction>
                  <KeyboardArrowRight />
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Paper>
        }
      />
    </>
  );
};
