import React, { useState } from "react";

import { makeStyles, CardContent, TextField, Button } from "@material-ui/core";
import { Edit } from "@material-ui/icons";

import { Link } from "react-router-dom";

import { Area } from "../slice-area/index";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  textAlign: {
    position: "relative",
    top: 2
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

  return (
    <Area
      content={
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
        </CardContent>
      }
      bottom={
        <>
          <Button className={classes.margin} onClick={onCancelButton}>
            Cancel
          </Button>
          <Button
            color="primary"
            className={classes.margin}
            onClick={onSaveButton}
          >
            Save
          </Button>
        </>
      }
    />
  );
};
