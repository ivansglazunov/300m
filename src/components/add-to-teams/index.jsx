import React, { useState } from "react";

import {
  Menu,
  IconButton,
  MenuItem,
  TextField,
  makeStyles,
  Badge
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { StarRate, Done } from "@material-ui/icons";

const StyledBadge = withStyles(theme => ({
  badge: {
    top: "45%",
    right: -11,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[900]
    }`
  }
}))(Badge);

const useStyles = makeStyles(theme => ({
  root: {
    width: 430
  }
}));

export default ({}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <>
      <IconButton onClick={handleClick}>
        <StarRate />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div
          style={{
            width: 500,
            minWidth: 325
          }}
        />
        <div>
          <MenuItem onClick={handleClose}>
            <StyledBadge badgeContent={4} color="primary">
              <span>Команда один</span>
            </StyledBadge>
          </MenuItem>
        </div>
        <div>
          <MenuItem onClick={handleClose}>
            <StyledBadge badgeContent={2} color="primary">
              <span>Команда два</span>
            </StyledBadge>
          </MenuItem>
        </div>
        <div>
          <MenuItem onClick={handleClose}>
            <StyledBadge badgeContent={10} color="primary">
              <span>Команда три</span>
            </StyledBadge>
          </MenuItem>
        </div>
        <TextField
          fullWidth
          style={{
            boxSizing: "border-box",
            paddingRight: 10,
            paddingLeft: 10
          }}
          margin="dense"
          variant="outlined"
          multiline
          placeholder="Создать новую команду"
          InputProps={{
            endAdornment: <Done onClick={handleClose} />
          }}
        />
      </Menu>
    </>
  );
};
