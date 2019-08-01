import React, { useState } from "react";

import { ListItem, Divider, ListItemText } from "@material-ui/core";

export default ({ name, onUser }) => {
  // const classes = useStyles();
  const [open, setOpen] = useState(true);

  return (
    <>
      <ListItem button onClick={onUser}>
        <ListItemText secondary={name} />
      </ListItem>
      <Divider />
    </>
  );
};
