import React from "react";
import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  textColor: {
    color: theme.palette.text.primary
  },
  collapseAndTabs: {
    backgroundColor: theme.palette.collapseContainer.backgroundColor
  },
  textFieldBoderColor: {
    // у fieldset нет присвоенного classname
    // но его можно вот так найти css селекторами
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.divider
      }
    },

    // это можно удалить, для примера
    "& .MuiOutlinedInput-root.Mui-focused": {
      "& fieldset": {
        borderColor: "yellow"
      }
    }
  },
  refuse: {
    color: theme.palette.red
  },
  accept: {
    color: theme.palette.yellow
  },
  paddingForCard: {
    padding: theme.paddingForCard.paddingTop
  },
  shadowCard: {
    boxShadow: theme.palette.shadow.shadowCard.boxShadow
  },
  shadowBadge: {
    boxShadow: theme.palette.shadow.shadowBadge.boxShadow // красный
  },
  starNonFavorite: {
    color: theme.palette.white
  },
  starFavorite: {
    color: theme.palette.yellow
  },
  redBackground: {
    backgroundColor: theme.palette.red
  },
  yellowBackground: {
    backgroundColor: theme.palette.yellow
  },
  blackText: {
    color: theme.palette.black
  }
}));
