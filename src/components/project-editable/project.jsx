import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { makeStyles, TextField } from "@material-ui/core";

import useGlobalStyles from "../styles";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default ({ title, description }) => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const [valueTit, setValueTitle] = useState(title);
  const [valueDesc, setValueDesc] = useState(description);
  const { t } = useTranslation();

  return (
    <>
      <TextField
        classes={{ root: globalClasses.textFieldBoderColor }}
        fullWidth
        value={valueTit}
        margin="dense"
        label={t("title")}
        variant="outlined"
        placeholder={title}
        onChange={event => setValueTitle(event.target.value)}
      />
      <TextField
        classes={{ root: globalClasses.textFieldBoderColor }}
        fullWidth
        value={valueDesc}
        margin="dense"
        label={t("description")}
        variant="outlined"
        multiline
        placeholder={description}
        onChange={event => setValueDesc(event.target.value)}
      />
    </>
  );
};
