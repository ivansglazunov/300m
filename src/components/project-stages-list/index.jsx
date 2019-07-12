import React, { useState } from "react";
import {
  makeStyles,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";

import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

import { Area } from "../slice-area/index";
import StagesItem from "../stages/stages-item";

const useStyles = makeStyles(theme => ({
  direction: {
    float: "right"
  }
}));

export default ({ stages, onEdit }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [edit, setEdit] = useState(false);

  return (
    <>
      <Area
        content={
          <>
            {stages.map(stage => (
              <StagesItem key={stage._id} stage={stage} onEdit={onEdit} />
            ))}
          </>
        }
        bottom={
          <Paper
            square="false"
            elevation="2"
            style={{
              backgroundColor: "#3f51b5"
            }}
          >
            <List style={{ color: "#fff" }}>
              <ListItem button component={Link} to={"/project-owner"}>
                <ListItemIcon style={{ color: "#fff" }}>
                  <ChevronLeft />
                </ListItemIcon>
                <ListItemText primary={t("Back")} />
              </ListItem>
            </List>
          </Paper>
        }
      />
    </>
  );
};
