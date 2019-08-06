import React, { useState } from "react";

import { Grid, Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Favorite from "../add-to-teams";

const useStyles = makeStyles({
  avatar: {
    margin: 15,
    width: 150,
    height: 150
  },
  avatarNonFavorite: {
    boxShadow: "0px 0px 1px 5px #fff, 0px 0px 1px 6px #000"
  },
  avatarFavorite: {
    boxShadow: "0px 0px 1px 5px #fff, 0px 0px 1px 6px #68FFB4 "
  },
  starNonFavorite: {
    position: "relative",
    top: -50,
    right: 40,
    padding: 0,
    backgroundColor: "#fff",
    boxShadow: "0px 0px 1px 5px #fff, 0px 0px 1px 6px #000"
  },
  starFavorite: {
    position: "relative",
    top: -50,
    right: 40,
    padding: 0,
    backgroundColor: "#fff",
    boxShadow: "0px 0px 1px 5px #fff, 0px 0px 1px 6px #68FFB4"
  }
});

export default ({ name, src, alt, date }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  function changeColor() {
    setOpen(!open);
  }

  return (
    <>
      <Grid container justify="center" alignItems="center">
        <Avatar
          alt={alt}
          src={src}
          onClick={changeColor}
          className={`${classes.avatar} ${
            !open ? classes.avatarNonFavorite : classes.avatarFavorite
          }`}
        />
        <Favorite
          className={!open ? classes.starNonFavorite : classes.starFavorite}
        />
      </Grid>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Typography component="h5" variant="h5" display="block" gutterBottom>
          {name}
        </Typography>
        <Typography variant="overline" display="block">
          {date}
        </Typography>
      </Grid>
    </>
  );
};
