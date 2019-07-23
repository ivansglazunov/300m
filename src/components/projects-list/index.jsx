import React from "react";
import { useTranslation } from "react-i18next";

import {
  List,
  makeStyles,
  Container,
  Fab,
  Tabs,
  Tab,
  Badge,
  withStyles
} from "@material-ui/core";
import { Add } from "@material-ui/icons";

import { Area } from "../slice-area/index";
import OneItem from "./item";

const StyledBadge = withStyles(theme => ({
  badge: {
    top: "45%",
    right: 7,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[900]
    }`
  }
}))(Badge);

const useStyles = makeStyles(theme => ({}));

export default ({
  projects,
  onProjectClick,
  onAddProject,
  onProjects,
  onInvitations
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <Area
        top={
          <Tabs
            value="projects"
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab value="projects" label={t("Projects")} onClick={onProjects} />
            <Tab
              value="invitations"
              onClick={onInvitations}
              label={
                <StyledBadge badgeContent={1} color="primary">
                  <span>{t("Invitations to projects")}</span>
                </StyledBadge>
              }
            />
          </Tabs>
        }
        content={
          <Container>
            <List>
              {projects.map(project => (
                <OneItem
                  key={project._id}
                  project={project}
                  onClick={onProjectClick}
                />
              ))}
            </List>
            <Fab
              onClick={onAddProject}
              color="primary"
              aria-label="Add"
              style={{
                position: "absolute",
                right: 16,
                bottom: 16
              }}
            >
              <Add />
            </Fab>
          </Container>
        }
      />
    </>
  );
};
