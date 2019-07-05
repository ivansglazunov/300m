import React, { useState } from "react";

import { Button } from "@material-ui/core";

export default () => {
  const [edit, setEdit] = useState(false);

  return (
    <>
      <Button
        // className={classes.margin}
        onClick={() => {
          setEdit(false);
        }}
      >
        Cancel
      </Button>
      <Button
        color="primary"
        // className={classes.margin}
        onClick={() => {
          setEdit(false);
        }}
      >
        Save
      </Button>
    </>
  );
};
