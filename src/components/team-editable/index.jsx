import React, { useState } from "react";

import {
  Card,
  CardContent,
  TextField,
  Container,
  Button,
  makeStyles
} from "@material-ui/core";
import { Area } from "../slice-area";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default ({ description, title, onCancel, onSave, saveContent }) => {
  const classes = useStyles();
  const [valueTit, setValueTitle] = useState(title);
  const [valueDesc, setValueDesc] = useState(description);
  const { t } = useTranslation();

  return (
    <Area
      content={
        <Container>
          <Card>
            <CardContent>
              <TextField
                fullWidth
                margin="dense"
                label="Title"
                variant="outlined"
                value={valueTit}
                placeholder={title}
                onChange={event => setValueTitle(event.target.value)}
              />
              <TextField
                fullWidth
                margin="dense"
                label="Description"
                variant="outlined"
                multiline
                value={valueDesc}
                placeholder={description}
                onChange={event => setValueDesc(event.target.value)}
              />
            </CardContent>
          </Card>
        </Container>
      }
      bottom={
        <>
          <Button className={classes.margin} onClick={onCancel}>
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
