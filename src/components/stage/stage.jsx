import React, { useState } from "react";

import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

import { makeStyles, TextField, Grid } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default (
  {
    // stage: { title, description, address, name },
  }
) => {
  const classes = useStyles();
  const [valueTit, setValueTitle] = useState();
  const [valueDesc, setValueDesc] = useState();
  const [valueAddress, setValueAddress] = useState();
  const [selectedDate, handleDateChange] = useState(new Date());
  const { t } = useTranslation();

  return (
    // <Card>
    //   <CardContent>
    <>
      <TextField
        fullWidth
        value={valueTit}
        margin="dense"
        label={t("Stage title")}
        variant="outlined"
        placeholder={t("Stage title")}
        onChange={event => setValueTitle(event.target.value)}
      />
      <TextField
        fullWidth
        value={valueDesc}
        margin="dense"
        label={t("Short description of the stage")}
        variant="outlined"
        multiline
        placeholder={t("description")}
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
            label={t("From")}
            value={selectedDate}
            onChange={handleDateChange}
          >
            <DateTimePicker
              ampm={false}
              showTodayButton
              fullWidth
              value={selectedDate}
              onChange={handleDateChange}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={6}>
          <MuiPickersUtilsProvider
            utils={MomentUtils}
            label={t("To")}
            value={selectedDate}
            onChange={handleDateChange}
          >
            <DateTimePicker
              ampm={false}
              showTodayButton
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
        label={t("Address")}
        variant="outlined"
        placeholder={t("address")}
        onChange={event => setValueAddress(event.target.value)}
      />
      <a href="">{t("Show map")}</a>
    </>
    //   </CardContent>
    // </Card>
  );
};
