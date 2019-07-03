import React from "react";

import {
  Grid,
  Typography,
  Fab,
  Divider,
  makeStyles,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
import { Add, Clear, ExpandMore } from "@material-ui/icons";

import { Link } from "react-router-dom";

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
  }
}));

export default ({}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Link to="/user">
          <Typography component="button" variant="h5">
            Сапрыкин А.Ф.
          </Typography>
        </Link>
        <Typography component="h1" variant="h6">
          Name of project
        </Typography>
        <Typography variant="caption">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Fab
          size="small"
          color="primary"
          aria-label="Add"
          className={classes.margin}
        >
          <Add />
        </Fab>
        <Fab size="small" aria-label="Clear" className={classes.margin}>
          <Clear />
        </Fab>
      </Grid>
      {/* <Divider variant="middle" /> */}
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Link to="/user">
          <Typography component="button" variant="h6">
            Stages of project
          </Typography>
        </Link>
        <ExpansionPanel
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Grid item xs={8}>
              <Typography className={classes.heading}>
                Стремянный переулок, 38 Москва, Россия, 115054
              </Typography>
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
            <Typography>Short description of stage</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Grid item xs={8}>
              <Typography className={classes.heading}>
                Стремянный переулок, 38 Москва, Россия, 115054
              </Typography>
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
            <Typography>Short description of stage</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Grid>
    </>
  );
};
