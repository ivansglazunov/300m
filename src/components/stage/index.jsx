import React, { useState } from "react";

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
  ListItemText,
  List,
  Card,
  CardContent,
  Button
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default ({
  title,
  description,
  address,
  name,
  onCancelButton,
  onSaveButton,
  onDeleteButton
}) => {
  const classes = useStyles();
  const [valueTit, setValueTitle] = useState(title);
  const [valueDesc, setValueDesc] = useState(description);
  const [valueAddress, setValueAddress] = useState(address);
  const [selectedDate, handleDateChange] = useState(new Date());
  // const [edit, setEdit] = useState(false);

  return (
    <>
      <Area
        content={
          <Card>
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
                      fullWidth
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
                      fullWidth
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
              />
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
              <List>
                <listItem>
                  <ListItemText primary={name} />
                </listItem>
              </List>
            </CardContent>
          </Card>
        }
        bottom={
          <>
            <Button
              // className={classes.margin}
              onClick={onCancelButton}
            >
              Cancel
            </Button>
            <Button
              color="primary"
              // className={classes.margin}
              onClick={onSaveButton}
            >
              Save
            </Button>
            <Button
              color="secondary"
              // className={classes.margin}
              onClick={onDeleteButton}
            >
              Delete
            </Button>
          </>
        }
      />
    </>
  );
};
