import React from "react";

import {
  Grid,
  Typography,
  Fab,
  makeStyles,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ListItemText,
  Button,
  List,
  Card,
  ListItem,
  ListItemSecondaryAction,
  IconButton,
  ButtonBase
} from "@material-ui/core";
import { Add, Clear, ExpandMore } from "@material-ui/icons";

import StageForInvites from "./stage-for-invites";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  content: {
    margin: 0
  }
}));

export default ({
  title,
  name,
  description,
  address,
  onUser,
  onAccept,
  onRefuse,
  stages,
  day,
  time
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Card>
        <List>
          <ListItem>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs={8}>
                <ListItemText
                  primary={
                    <Button
                      onClick={onUser}
                      style={{ textDecoration: "underline" }}
                    >
                      {name}
                    </Button>
                  }
                  secondary={description}
                />
              </Grid>
              <Grid item={4}>
                <ListItemSecondaryAction>
                  <ButtonBase onClick={onAccept}>
                    <Button color="primary" edge="add" aria-label="add">
                      <Add />
                    </Button>
                  </ButtonBase>
                  <ButtonBase onClick={onRefuse}>
                    <Button color="secondary" edge="clear" aria-label="clear">
                      <Clear />
                    </Button>
                  </ButtonBase>
                </ListItemSecondaryAction>
              </Grid>
            </Grid>
          </ListItem>
          <StageForInvites
            address={address}
            description={description}
            day={day}
            time={time}
          />
          <ListItem>
            <ListItemText
              style={{ textAlign: "center", paddingRight: 100 }}
              primary={
                <Button
                  onClick={onUser}
                  style={{ textDecoration: "underline" }}
                >
                  {name}
                </Button>
              }
              secondary={description}
            />
            <ListItemSecondaryAction>
              <ButtonBase>
                <IconButton color="primary" edge="add" aria-label="add">
                  <Add />
                </IconButton>
              </ButtonBase>
              <ButtonBase>
                <IconButton color="secondary" edge="clear" aria-label="clear">
                  <Clear />
                </IconButton>
              </ButtonBase>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Card>

      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        <ExpansionPanel
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <ExpansionPanelSummary
            classes={{ content: classes.content }}
            expandIcon={<ExpandMore />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Grid item xs={8}>
              <Typography className={classes.heading}>{address}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography align="center" className={classes.secondaryHeading}>
                24 июля
                <br />
                10:30
              </Typography>
            </Grid>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography></Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <ExpansionPanelSummary
            classes={{ content: classes.content }}
            expandIcon={<ExpandMore />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Grid item xs={8}>
              <Typography className={classes.heading}>{address}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography align="center" className={classes.secondaryHeading}>
                24 июля
                <br />
                10:30
              </Typography>
            </Grid>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography></Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Grid>
    </>
  );
};
