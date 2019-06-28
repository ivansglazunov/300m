import React from "react";

import { Typography, makeStyles, List, Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";

import { Link } from "react-router-dom";

import OneItem from "./item";
import moment from "moment";

// TODO юзеры должно быть элементом списка, иначе этого появляется куча дублирующих логик отрисовки одного и того-же по разному
// я бы проверил можно ли ListItem размещать без List ИЛИ можно ли размещать в List ExapansionPanel, это бы многое упростило и позволило бы их чередовать
// TODO добавил красную ссылку в draw.io, юзеры должны быть ссылками на их профили, что бы можно было понять кто это вообще такой

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
  }
}));

export default ({}) => {
  const classes = useStyles();

  return (
    <>
      <Typography gutterBottom component="h1" variant="h5" align="center">
        Members List
      </Typography>
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
      <Fab
        variant="extended"
        size="small"
        color="primary"
        aria-label="Add"
        className={classes.margin}
        component={Link}
        to="/members-search"
      >
        <Add className={classes.extendedIcon} />
        <span className={classes.textAlign}>member add</span>
      </Fab>
    </>
  );
};
