import React from "react";

import { Paper, Tabs, Tab, makeStyles } from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  wrapper: {
    flexDirection: "row",
    color: "c8c8c8"
  },
  labelIcon: {
    minHeight: "initial"
  },
  tabButton: {
    backgroundColor: "#111f33",
    opacity: 1,
    color: "c8c8c8",
    textTransform: "none"
  },
  tabNonActive: {
    backgroundColor: "#3c4758",
    color: "c8c8c8",
    textTransform: "none",
    opacity: 1
  }
}));

export default ({ onBack, labelBack, labelNow }) => {
  const classes = useStyles();

  return (
    <Paper square="false" elevation="2">
      <Tabs variant="fullWidth" centered>
        <Tab
          classes={{ wrapper: classes.wrapper, labelIcon: classes.labelIcon }}
          onClick={onBack}
          icon={<ChevronLeft />}
          label={labelBack}
          className={classes.tabButton}
        />
        <Tab className={classes.tabNonActive} label={labelNow} />
      </Tabs>
    </Paper>
  );
};
