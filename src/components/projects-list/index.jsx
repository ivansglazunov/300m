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
import useGlobalStyles from "../styles";

const StyledBadge = withStyles(theme => ({
  badge: {
    top: "45%",
    right: 7,
    boxShadow: "0 0 2px 0 #DD2E34",
    backgroundColor: "#FFE20C",
    color: "#111f33"
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
  const globalClasses = useGlobalStyles();
  const { t } = useTranslation();

  return (
    <>
      <Area
        top={
          <Tabs
            value="projects"
            indicatorColor="primary"
            className={globalClasses.textColor}
            variant="fullWidth"
          >
            <Tab value="projects" label={t("Projects")} onClick={onProjects} />
            <Tab
              className={`${globalClasses.textColor} ${globalClasses.collapseAndTabs}`}
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
            <List className={globalClasses.textColor}>
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
