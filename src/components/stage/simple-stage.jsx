import React, { useState } from "react";

import InfiniteCalendar, {
  Calendar,
  defaultMultipleDateInterpolation,
  withMultipleDates
} from "react-infinite-calendar";
import "react-infinite-calendar/styles.css";

import { TextField, makeStyles, MenuItem, Grid } from "@material-ui/core";

import {
  MuiPickersUtilsProvider,
  TimePicker,
  DateTimePicker
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { useTranslation } from "react-i18next";

const duration = [
  {
    value: "one",
    label: 1
  },
  {
    value: "two",
    label: 2
  },
  {
    value: "three",
    label: 3
  },
  {
    value: "four",
    label: "4"
  },
  {
    value: "five",
    label: 5
  },
  {
    value: "six",
    label: 6
  },
  {
    value: "seven",
    label: 7
  },
  {
    value: "eight",
    label: 8
  },
  {
    value: "nine",
    label: 9
  },
  {
    value: "ten",
    label: 10
  },
  {
    value: "eleven",
    label: 11
  },
  {
    value: "twelve",
    label: 12
  }
];

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  },
  root: {
    marginRight: 0,
    marginLeft: -2
  },
  minWidth: {
    minWidth: 325
  }
}));

export default ({}) => {
  const [selectedDate, handleDateChange] = useState(new Date());
  const classes = useStyles();
  const { t } = useTranslation();
  const [values, setValues] = useState({
    duration: "one"
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const [valueAddress, setValueAddress] = useState();

  const MultipleDatesCalendar = withMultipleDates(Calendar);

  return (
    <>
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
            value={selectedDate}
            onChange={handleDateChange}
          >
            <TimePicker
              clearable
              ampm={false}
              label="24 hours"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="outlined-select-duration"
            select
            className={classes.textField}
            value={values.duration}
            onChange={handleChange("duration")}
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            label="Please select duration"
            margin="dense"
          >
            {duration.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
      <InfiniteCalendar
        className={classes.minWidth}
        width="100%"
        displayOptions={{
          showHeader: false,
          overscanMonthCount: 2,
          todayHelperRowOffset: 2
        }}
        locale={{
          weekdays: [
            t("Sun"),
            t("Mon"),
            t("Tue"),
            t("Wed"),
            t("Thu"),
            t("Fri"),
            t("Sat")
          ],
          weekStartsOn: 1,
          todayLabel: {
            long: t("Today")
          }
        }}
        height={200}
        Component={MultipleDatesCalendar}
        interpolateSelection={defaultMultipleDateInterpolation}
        selected={[new Date()]}
      />
      <TextField
        fullWidth
        value={valueAddress}
        margin="dense"
        label={t("Address")}
        variant="outlined"
        placeholder={t("address")}
        onChange={event => setValueAddress(event.target.value)}
      />
      <a href="">{t("Show map")}</a>
    </>
  );
};
