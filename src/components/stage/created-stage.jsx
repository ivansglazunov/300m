import React from "react";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  padding: {
    padding: 8
  },
  paddingLastChild: {
    padding: 0
  }
}));

export default ({}) => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent classes={{ root: classes.padding }}>
        <Typography variant="body2">Название этапа</Typography>
      </CardContent>
    </Card>
  );
};
