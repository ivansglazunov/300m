import React, { useState } from "react";

import { Link } from "react-router-dom";

import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  ListItemIcon,
  ListItemSecondaryAction,
  Button
} from "@material-ui/core";

import { Edit, KeyboardArrowLeft, Add } from "@material-ui/icons";

import StagesEditor from "../stages-editor";
import StagesItem from "./stages-item";
// import CancelSave from "../cancel-save";

import { Area } from "../slice-area";

export default ({ title = "Project Title", name = "Cap.Sanders" }) => {
  const [edit, setEdit] = useState(false);
  const [create, setCreate] = useState(false);

  return (
    <>
      {edit ? (
        <Area
          content={<StagesEditor name={name} />}
          bottom={
            <Paper
              square="false"
              elevation="2"
              style={{
                backgroundColor: "#3f51b5"
              }}
            >
              <List style={{ color: "#fff" }}>
                <ListItem button onClick={() => setEdit(false)}>
                  <ListItemIcon style={{ color: "#fff" }}>
                    <KeyboardArrowLeft />
                  </ListItemIcon>
                  <ListItemText primary="back" />
                </ListItem>
              </List>
            </Paper>
          }
        />
      ) : create ? (
        <Area
          content={<StagesItem />}
          bottom={
            <>
              <Button
                // className={classes.margin}
                onClick={() => {
                  setCreate(false);
                }}
              >
                Cancel
              </Button>
              <Button
                color="primary"
                // className={classes.margin}
                onClick={() => {
                  setCreate(false);
                }}
              >
                Save
              </Button>
            </>
          }
        />
      ) : (
        <>
          <Area
            content={
              <List>
                <ListItem divider>
                  <ListItemText primary={title} />
                </ListItem>
                <ListItemSecondaryAction>
                  <IconButton
                    aria-label="Edit"
                    onClick={() => {
                      setEdit(true);
                    }}
                  >
                    <Edit />
                  </IconButton>
                </ListItemSecondaryAction>
              </List>
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
                  <ListItem button onClick={() => setCreate(true)}>
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
      )}
    </>
  );
};
