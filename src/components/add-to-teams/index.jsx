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

import classNames from "classnames";

import useGlobalStyles from "../styles";

const StyledBadge = withStyles(theme => ({
  badge: {
    top: "45%",
    right: -11,
    boxShadow: "0 0 1px 0 #DD2E34"
  }
}))(Badge);

const useStyles = makeStyles(theme => ({
  root: {
    width: 430
  }
}));

export default ({ active, className }) => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <>
      <IconButton
        onClick={handleClick}
        className={classNames(
          { [globalClasses.starNonFavorite]: !active },
          { [globalClasses.starFavorite]: active },
          className
        )}
      >
        <StarRate />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={globalClasses.shadowCard}
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
          classes={{ root: globalClasses.textFieldBoderColor }}
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
