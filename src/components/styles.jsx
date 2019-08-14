import React from "react";
import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  textColor: {
    color: theme.palette.text.primary
  },
  collapseAndTabs: {
    backgroundColor: theme.palette.collapseContainer.backgroundColor
  },
  refuse: {
    color: theme.palette.red
  },
  accept: {
    color: theme.palette.yellow
  },
  paddingForCard: {
    padding: theme.paddingForCard
  },
  shadow: {
    shadowCard: {
      boxShadow: theme.palette.shadow.shadowCard
    },
    shadowBadge: {
      boxShadow: "0 0 1px 0 #DD2E34" // красный
    }
  }
}));
