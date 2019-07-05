import React, { useState } from "react";
import { Link } from "react-router-dom";

import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

import {
  YMaps,
  Map,
  GeolocationControl,
  SearchControl,
  Placemark
} from "react-yandex-maps";

import { Area } from "../slice-area";

import {
  makeStyles,
  TextField,
  Grid,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Collapse,
  ListItemText,
  List,
  Card,
  CardContent,
  IconButton,
  CardHeader,
  CardActions,
  Button
} from "@material-ui/core";

import { ExpandMore, ExpandLess } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default ({ title, description, address, name }) => {
  const classes = useStyles();
  const [valueTit, setValueTitle] = useState(title);
  const [valueDesc, setValueDesc] = useState(description);
  const [valueAddress, setValueAddress] = useState(address);
  const [selectedDate, handleDateChange] = useState(new Date());
  const [open, setOpen] = React.useState(true);
  const [show, setShow] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <>
      <Card>
        <CardHeader
          title={
            <TextField
              fullWidth
              value={valueTit}
              margin="dense"
              label="Title"
              variant="outlined"
              placeholder={title}
              onChange={event => setValueTitle(event.target.value)}
            />
          }
          action={
            <IconButton onClick={handleClick}>
              {open ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          }
        />
        <Collapse in={open} timeout="auto" unmountOnExit>
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
              justify="center"
              alignItems="center"
              direction="row"
              spacing={2}
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
            <TextField
              fullWidth
              value={valueAddress}
              margin="dense"
              label="Address"
              variant="outlined"
              placeholder={address}
              onChange={event => setValueAddress(event.target.value)}
              helperText={
                <Button
                  onClick={() => setShow(true)}
                  style={{
                    textDecoration: "underline",
                    fontSize: 9,
                    padding: 0
                  }}
                >
                  Show on the map
                </Button>
              }
            />
            <Collapse in={show} timeout="auto" unmountOnExit>
              <YMaps>
                <Map
                  style={{
                    border: "1px solid #ededed",
                    width: "100%",
                    height: 240
                  }}
                  state={{
                    center: [55.820328, 37.64223],
                    zoom: 9,
                    controls: []
                  }}
                >
                  <Placemark
                    geometry={[55.820328, 37.64223]}
                    properties={{
                      balloonContentBody: "Your address"
                    }}
                  />
                  <GeolocationControl options={{ float: "left" }} />
                  <SearchControl options={{ float: "right" }} />
                </Map>
              </YMaps>
            </Collapse>
            <List>
              <listItem>
                <ListItemText primary={name} />
              </listItem>
            </List>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
};
