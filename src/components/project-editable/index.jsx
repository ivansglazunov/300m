import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { makeStyles, CardContent, TextField, Button } from "@material-ui/core";

import { Area } from "../slice-area/index";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default ({
  title = "Project Title",
  description = "1234567",
  onCancelButton,
  onSaveButton
}) => {
  const classes = useStyles();
  const [valueTit, setValueTitle] = useState(title);
  const [valueDesc, setValueDesc] = useState(description);
  const { t } = useTranslation();

  return (
    <Area
      content={
        <CardContent>
          <TextField
            fullWidth
            value={valueTit}
            margin="dense"
            label={t("title")}
            variant="outlined"
            placeholder={title}
            onChange={event => setValueTitle(event.target.value)}
          />
          <TextField
            fullWidth
            value={valueDesc}
            margin="dense"
            label={t("description")}
            variant="outlined"
            multiline
            placeholder={description}
            onChange={event => setValueDesc(event.target.value)}
          />
        </CardContent>
      }
      bottom={
        <>
          <Button className={classes.margin} onClick={onCancelButton}>
            {t("cancel")}
          </Button>
          <Button
            color="primary"
            className={classes.margin}
            onClick={onSaveButton}
          >
            {t("save")}
          </Button>
        </>
      }
    />
  );
};
