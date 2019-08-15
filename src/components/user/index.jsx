import React, { useState } from "react";

import { Grid, Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Favorite from "../add-to-teams";
import useGlobalStyles from "../styles";

const useStyles = makeStyles({
  avatar: {
    margin: 15,
    width: 150,
    height: 150
  },
  avatarNonFavorite: {
    boxShadow: "0px 0px 1px 10px #0b1421, 0px 0px 1px 12px #c8c8c8"
  },
  avatarFavorite: {
    boxShadow: "0px 0px 1px 10px #0b1421, 0px 0px 1px 12px #FFE20C"
  },
  favoritesPosition: {
    position: "relative",
    top: -50,
    right: 27,
    padding: 0,
    backgroundColor: "#0b1421"
    // color: '#c8c8c8',
    // boxShadow: "0px 0px 1px 1px #0b1421, 0px 0px 1px 3px #c8c8c8"
  },
  starFavorite: {
    position: "relative",
    top: -50,
    right: 27,
    padding: 0,
    backgroundColor: "#0b1421",
    color: "#FFE20C"
    // boxShadow: "0px 0px 1px 1px #0b1421, 0px 0px 1px 3px #FFE20C"
  }
});

export default ({ name, src, alt, date }) => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const [open, setOpen] = useState(false);

  function changeColor() {
    setOpen(!open);
  }

  return (
    <>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={globalClasses.paddingForCard}
      >
        <Avatar
          alt={alt}
          src={src}
          onClick={changeColor}
          active={open}
          className={`${classes.avatar} ${
            !open ? classes.avatarNonFavorite : classes.avatarFavorite
          }`}
        />
        <Favorite
          // classes={!open ? {starNonFavorite: classes.starNonFavorite} : {starFavorite: classes.starFavorite}}
          className={classes.favoritesPosition}
        />
      </Grid>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
        className={globalClasses.textColor}
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
