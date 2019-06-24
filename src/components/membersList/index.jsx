import React from "react";

import {
  Grid,
  Typography,
  Divider,
  makeStyles,
  Fab,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
import { StarRate, Build, Add, ExpandMore } from "@material-ui/icons";

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
      <Typography gutterBottom component="h1" variant="h5" align="center">
        Members List
      </Typography>
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <Grid item xs={8}>
          <Typography gutterBottom variant="subtitle2">
            Лазарев П.Т.
            <br />
            Short description of the person
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <StarRate />
        </Grid>
        {/* <Divider /> */}
        <Grid item xs={12}>
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
        <Grid item xs={8}>
          <Typography gutterBottom variant="subtitle2">
            Семенов В.Ф.
            <br />
            Short description of the person
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Build />
        </Grid>
        <Grid item xs={12}>
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
        <Grid item xs={12}>
          <Fab
            variant="extended"
            size="small"
            color="primary"
            aria-label="Add"
            className={classes.margin}
          >
            <Add className={classes.extendedIcon} />
            <span className={classes.textAlign}>member add</span>
          </Fab>
        </Grid>
      </Grid>
    </>
  );
};
