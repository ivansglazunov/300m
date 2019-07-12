import React, { useState } from "react";

import {
  List,
  ListItem,
  ListItemText,
  Paper,
  ListItemIcon,
  Container
} from "@material-ui/core";

import { Add } from "@material-ui/icons";

import StagesItem from "./stages-item";

import { Area } from "../slice-area";
import { useTranslation } from "react-i18next";

export default ({ onEdit, onAddStage, stages }) => {
  const [edit, setEdit] = useState(false);
  const [create, setCreate] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  function handleClick() {
    setOpen(!open);
  }

  return (
    <>
      <Area
        content={
          <Container>
            {stages.map(stage => (
              <StagesItem key={stage._id} stage={stage} onEdit={onEdit} />
            ))}
          </Container>
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
              <ListItem button onClick={onAddStage}>
                <ListItemIcon style={{ color: "#fff" }}>
                  <Add />
                </ListItemIcon>
                <ListItemText primary={t("Add stage")} />
              </ListItem>
            </List>
          </Paper>
        }
      />
    </>
  );
};
