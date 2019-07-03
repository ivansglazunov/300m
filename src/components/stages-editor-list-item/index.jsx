import React, { useState } from "react";
import { Link } from "react-router-dom";

import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

import { Area } from "../slice-area";

import {
  Card,
  CardContent,
  TextField,
  Grid,
  Collapse,
  CardActions,
  IconButton
} from "@material-ui/core";

import { ExpandMore, MoreVert } from "@material-ui/icons";

export default ({ title = "Project Title", description = "1234567" }) => {
  const [valueTit, setValueTitle] = useState(title);
  const [valueDesc, setValueDesc] = useState(description);
  const [selectedDate, handleDateChange] = useState(new Date());
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <>
      <Card>
        <Area
          content={
            <>
              <CardContent>
                <TextField
                  fullWidth
                  value={valueTit}
                  margin="dense"
                  label="Title"
                  variant="outlined"
                  placeholder={title}
                  onChange={event => setValueTitle(event.target.value)}
                />
              </CardContent>
              <CardActions>
                <IconButton
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="Show more"
                >
                  <ExpandMore />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <TextField
                    fullWidth
                    value={valueDesc}
                    margin="dense"
                    label="Description"
                    variant="outlined"
                    multiline
                    placeholder={description}
                    onChange={event => setValueDesc(event.target.value)}
                  />
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item xs={6}>
                      <MuiPickersUtilsProvider
                        utils={MomentUtils}
                        label="From"
                        value={selectedDate}
                        onChange={handleDateChange}
                      >
                        <DateTimePicker
                          value={selectedDate}
                          onChange={handleDateChange}
                        />
                      </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={6}>
                      <MuiPickersUtilsProvider
                        utils={MomentUtils}
                        label="To"
                        value={selectedDate}
                        onChange={handleDateChange}
                      >
                        <DateTimePicker
                          value={selectedDate}
                          onChange={handleDateChange}
                        />
                      </MuiPickersUtilsProvider>
                    </Grid>
                  </Grid>
                </CardContent>
              </Collapse>
            </>
          }
        />
      </Card>
    </>
  );
};
