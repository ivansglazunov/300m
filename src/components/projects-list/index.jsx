import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import {
  List,
  makeStyles,
  Paper,
  Tabs,
  Tab,
  Container
} from "@material-ui/core";
import { ChevronRight } from "@material-ui/icons";

import { Area } from "../slice-area/index";
import OneItem from "./item";

const useStyles = makeStyles(theme => ({}));

export default ({ projects, onProjectClick, onAddProject, onToProfile }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <Area
        content={
          <Container>
            <List>
              {projects.map(project => (
                <OneItem
                  key={project._id}
                  project={project}
                  // стоит передавать предмет целиком
                  // что бы была возможность рядом с ним передать что-то отдельное
                  // не являющееся частью предмета
                  // обычно это называют атомарностью данных
                  // то что они не смешиваются с чем-то
                  onClick={onProjectClick}
                />
              ))}
            </List>
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
            <Tabs variant="fullWidth" centered>
              <Tab
                style={{
                  color: "#fff",
                  textTransform: "none",
                  backgroundColor: "#3f51b5",
                  opacity: 1
                }}
                onClick={onToProfile}
                label={t("Back to profile")}
              />
              <Tab
                style={{
                  color: "#fff",
                  textTransform: "none",
                  backgroundColor: "rgb(85, 99, 179)",
                  opacity: 1
                }}
                onClick={onAddProject}
                label={t("Project add")}
              />
            </Tabs>
          </Paper>
        }
      />
    </>
  );
};
