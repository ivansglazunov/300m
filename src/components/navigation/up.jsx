import React from "react";

import { Paper, Tabs, Tab, makeStyles } from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  wrapper: {
    flexDirection: "row"
  },
  labelIcon: {
    minHeight: "initial"
  }
}));

export default ({ onBack, labelBack, labelNow }) => {
  const classes = useStyles();

  return (
    <Paper
      square="false"
      elevation="2"
      style={{
        backgroundColor: "#3f51b5"
      }}
    >
      <Tabs variant="fullWidth" centered>
        <Tab
          style={{
            color: "#fff",
            textTransform: "none",
            backgroundColor: "#3f51b5",
            opacity: 1
          }}
          classes={{ wrapper: classes.wrapper, labelIcon: classes.labelIcon }}
          onClick={onBack}
          icon={<ChevronLeft />}
          label={labelBack}
        />
        <Tab
          style={{
            color: "#fff",
            textTransform: "none",
            backgroundColor: "rgb(85, 99, 179)",
            opacity: 1
          }}
          label={labelNow}
        />
      </Tabs>
    </Paper>
  );
};
