import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  makeStyles,
  CardContent,
  TextField,
  Button,
  Card,
  Container
} from "@material-ui/core";

import { Area } from "../slice-area/index";
import useGlobalStyles from "../styles";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default ({ title, description, onCancel, onSave, saveContent }) => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const [valueTit, setValueTitle] = useState(title);
  const [valueDesc, setValueDesc] = useState(description);
  const { t } = useTranslation();

  return (
    <Area
      content={
        <Container className={globalClasses.paddingForCard}>
          <Card className={globalClasses.shadowCard}>
            <CardContent>
              <TextField
                className={globalClasses.textFieldBoderColor}
                fullWidth
                value={valueTit}
                margin="dense"
                label={t("title")}
                variant="outlined"
                placeholder={title}
                onChange={event => setValueTitle(event.target.value)}
              />
              <TextField
                className={globalClasses.textFieldBoderColor}
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
          </Card>
        </Container>
      }
      bottom={
        <>
          <Button
            className={`${classes.margin} ${globalClasses.refuse}`}
            onClick={onCancel}
          >
            {t("cancel")}
          </Button>
          <Button color="primary" className={classes.margin} onClick={onSave}>
            {saveContent}
          </Button>
        </>
      }
    />
  );
};
