import React from "react";

import { Grid, Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Favorite from "../add-to-teams";

const useStyles = makeStyles({
  avatar: {
    margin: 15,
    width: 150,
    height: 150
  }
});

export default ({ name, src, alt, date }) => {
  const classes = useStyles();

  return (
    <>
      <Grid container justify="center" alignItems="center">
        <Avatar alt={alt} src={src} className={classes.avatar} />
      </Grid>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Typography component="h5" variant="h5" display="block" gutterBottom>
          {name} <Favorite />
        </Typography>
        <Typography variant="overline" display="block">
          {date}
        </Typography>
      </Grid>
    </>
  );
};
