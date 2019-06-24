import React from "react";

import { Grid, Card, CardContent, Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles: any = makeStyles({
  avatar: {
    margin: 15,
    width: 150,
    height: 150
  }
});

export default ({}) => {
  const classes = useStyles();

  return (
    <>
      <Grid container justify="center" alignItems="center">
        <Avatar
          alt="montagnik"
          src="https://96.img.avito.st/640x480/5475959896.jpg"
          className={classes.avatar}
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
          Сапрыкин Андрей Федорович
        </Typography>
        <Typography variant="overline" display="block">
          22.10.1981
        </Typography>
      </Grid>
    </>
  );
};
