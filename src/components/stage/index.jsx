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
  ListItem,
  ListItemText,
  List,
  Button,
  Container
} from "@material-ui/core";
import { useTranslation } from "react-i18next";

import useGlobalStyles from "../styles";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  border: {
    borderBottom: "1px solid #c8c8c8"
  }
}));

export default ({
  stage: { title, description, address, name },
  onCancel,
  onSave,
  onDelete
}) => {
  const classes = useStyles();
  const [valueTit, setValueTitle] = useState(title);
  const [valueDesc, setValueDesc] = useState(description);
  const [valueAddress, setValueAddress] = useState(address);
  const [selectedDate, handleDateChange] = useState(new Date());
  const { t } = useTranslation();
  const globalClasses = useGlobalStyles();

  return (
    <>
      <Area
        content={
          <Container className={globalClasses.paddingForCard}>
            <TextField
              fullWidth
              className={globalClasses.textFieldBoderColor}
              value={valueTit}
              margin="dense"
              label={title}
              variant="outlined"
              placeholder={title}
              onChange={event => setValueTitle(event.target.value)}
            />
            <TextField
              className={globalClasses.textFieldBoderColor}
              fullWidth
              value={valueDesc}
              margin="dense"
              label={description}
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
              className={globalClasses.paddingForCard}
            >
              <Grid item xs={6}>
                <MuiPickersUtilsProvider
                  utils={MomentUtils}
                  label={t("From")}
                  value={selectedDate}
                  onChange={handleDateChange}
                >
                  <DateTimePicker
                    className={classes.border}
                    fullWidth
                    value={selectedDate}
                    onChange={handleDateChange}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={6}>
                <MuiPickersUtilsProvider
                  className={globalClasses.textFieldBoderColor}
                  utils={MomentUtils}
                  label={t("To")}
                  value={selectedDate}
                  onChange={handleDateChange}
                >
                  <DateTimePicker
                    className={classes.border}
                    fullWidth
                    value={selectedDate}
                    onChange={handleDateChange}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
            </Grid>
            <TextField
              className={globalClasses.textFieldBoderColor}
              fullWidth
              value={valueAddress}
              margin="dense"
              label={t("Address")}
              variant="outlined"
              placeholder={t("address")}
              onChange={event => setValueAddress(event.target.value)}
            />
            <YMaps>
              <Map
                style={{
                  border: "1px solid #ededed",
                  width: "100%",
                  height: 240
                }}
                className={globalClasses.shadowCard}
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
              <ListItem>
                <ListItemText primary={name} />
              </ListItem>
            </List>
          </Container>
        }
        bottom={
          <>
            <Button onClick={onCancel} className={globalClasses.refuse}>
              {t("cancel")}
            </Button>
            <Button color="primary" onClick={onSave}>
              {t("save")}
            </Button>
            <Button color="secondary" onClick={onDelete}>
              {t("delete")}
            </Button>
          </>
        }
      />
    </>
  );
};
