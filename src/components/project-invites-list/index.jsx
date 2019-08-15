import React, { useState } from "react";

import {
  makeStyles,
  ListItemText,
  Button,
  List,
  ListItem,
  ListItemSecondaryAction,
  Container,
  Badge,
  Tabs,
  Tab,
  withStyles,
  Card,
  Collapse,
  CardContent,
  Typography,
  ListItemIcon,
  Grid,
  Divider
} from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";

import { Area } from "../slice-area";
import { useTranslation } from "react-i18next";

import useGlobalStyles from "../styles";

const StyledBadge = withStyles(theme => ({
  badge: {
    top: "45%",
    right: 7,
    boxShadow: "0 0 2px 0 #DD2E34",
    color: "#111f33"
  }
}))(Badge);

const useStyles = makeStyles(theme => ({
  buttonUser: {
    color: "#c8c8c8",
    boxShadow: "0 0 2px 0 #c8c8c8"
  },
  content: {
    margin: 0
  },
  svg: {
    width: 17
  },
  container: {
    paddingTop: 20
  },

  // card: {
  //   boxShadow: '0 0 2px 0 #c8c8c8',
  // },
  indicator: {
    backgroundColor: "#FFE20C"
  },
  textTabs: {
    color: "#c8c8c8"
  },
  tabNonActive: {
    backgroundColor: "#111f33"
  }
}));

export default ({
  name,
  description,
  address,
  onUser,
  hourDuration,
  dayDuration,
  onProjects,
  dateStartInvitation,
  onInvitations
}) => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <>
      <Area
        top={
          <Tabs
            value="invitations"
            indicatorColor="secondary"
            variant="fullWidth"
          >
            <Tab
              value="projects"
              label={t("Projects")}
              onClick={onProjects}
              className={`${globalClasses.textColor} ${globalClasses.collapseAndTabs}`}
            />
            <Tab
              value="invitations"
              onClick={onInvitations}
              className={globalClasses.textColor}
              label={
                <StyledBadge badgeContent={1} color="primary">
                  <span>{t("Invitations to projects")}</span>
                </StyledBadge>
              }
            />
          </Tabs>
        }
        content={
          <Container className={globalClasses.paddingForCard}>
            <Card className={globalClasses.shadowCard}>
              <List dense>
                <ListItem>
                  <ListItemText
                    style={{ textAlign: "left", paddingRight: 100 }}
                    primary={
                      <ListItem>
                        <Typography variant="h6" component="h1">
                          {t("Project title")}
                        </Typography>
                      </ListItem>
                    }
                    secondary={
                      <ListItem
                        button
                        onClick={onUser}
                        className={classes.buttonUser}
                      >
                        от {name}
                      </ListItem>
                    }
                  />
                </ListItem>
                <ListItem>
                  <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                  >
                    <Grid item xs={3} align="center">
                      <Typography component="div" variant="caption">
                        {t("Start")}
                      </Typography>
                      <Typography component="div" variant="body1">
                        {dateStartInvitation}
                      </Typography>
                    </Grid>
                    <Grid item xs={3} align="center">
                      <Typography component="div" variant="caption">
                        {t("Days")}
                      </Typography>
                      <Typography component="div" variant="body1">
                        {dayDuration}
                      </Typography>
                    </Grid>
                    <Grid item xs={3} align="center">
                      <Typography component="div" variant="caption">
                        {t("Hours")}
                      </Typography>
                      <Typography component="div" variant="body1">
                        {hourDuration}
                      </Typography>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Button className={globalClasses.refuse}>
                      {t("Refuse")}
                    </Button>
                    <Button className={globalClasses.accept}>
                      {t("Accept")}
                    </Button>
                  </ListItemIcon>
                  <ListItemSecondaryAction onClick={handleClick}>
                    {!open ? <ExpandMore /> : <ExpandLess />}
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
              <Collapse
                in={open}
                timeout="auto"
                unmountOnExit
                className={globalClasses.collapseAndTabs}
              >
                <CardContent>
                  <Typography variant="body1" gutterBottom>
                    {description}
                  </Typography>
                  <Divider />
                  <Typography variant="body2" className={classes.container}>
                    {address}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Container>
        }
      />
    </>
  );
};
