import React, { useState } from "react";

import {
  List,
  ListItem,
  ListItemText,
  Paper,
  ListItemIcon
} from "@material-ui/core";

import { Add } from "@material-ui/icons";

import StagesItem from "./stages-item";

import { Area } from "../slice-area";

export default ({
  title = "Stage Title",
  name = "Cap.Sanders",
  address = "Dandelion st. 21-12",
  durationFrom = "21.08",
  durationTo = "23.08",
  description = "short description of the stage",
  onEdit
}) => {
  const [edit, setEdit] = useState(false);
  const [create, setCreate] = useState(false);
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <>
      <Area
        content={
          <StagesItem
            title={title}
            address={address}
            durationFrom={durationFrom}
            durationTo={durationTo}
            name={name}
            description={description}
            onEdit={onEdit}
          />
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
              <ListItem button onClick={onEdit}>
                <ListItemIcon style={{ color: "#fff" }}>
                  <Add />
                </ListItemIcon>
                <ListItemText primary="add stage" />
              </ListItem>
            </List>
          </Paper>
        }
      />
    </>
  );
};
