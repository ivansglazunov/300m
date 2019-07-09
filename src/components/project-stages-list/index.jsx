import React, { useState } from "react";
import {
  makeStyles,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";

import { Link } from "react-router-dom";

import { Area } from "../slice-area/index";
import StagesItem from "../stages/stages-item";

const useStyles = makeStyles(theme => ({
  direction: {
    float: "right"
  }
}));

export default ({
  title = "Stage Title",
  name = "Cap.Sanders",
  address = "Dandelion st. 21-12",
  durationFrom = "21.08",
  durationTo = "23.08",
  description = "short description of the stage"
}) => {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);

  return (
    <>
      <Area
        content={
          <>
            <Typography variant="h5" component="h1" align="center">
              Stages List
            </Typography>
            <StagesItem
              title={title}
              address={address}
              durationFrom={durationFrom}
              durationTo={durationTo}
              name={name}
              description={description}
            />
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
              <ListItem button>
                <ListItemIcon style={{ color: "#fff" }}>
                  <ChevronLeft />
                </ListItemIcon>
                <ListItemText primary="back" />
              </ListItem>
            </List>
          </Paper>
        }
      />
    </>
  );
};
