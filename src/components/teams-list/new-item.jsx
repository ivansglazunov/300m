import React, { useState } from "react";

import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
  Collapse,
  List,
  Zoom
} from "@material-ui/core";
import {
  Edit,
  DeleteForever,
  ExpandLess,
  ExpandMore,
  Done,
  Clear
} from "@material-ui/icons";
import { useTranslation } from "react-i18next";
import useGlobalStyles from "../styles";

export default ({ teamDescription, onEdit }) => {
  const globalClasses = useGlobalStyles();
  const [open, setOpen] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [edit, setEdit] = useState(false);
  const [openCollapse, setCollapse] = useState(false);
  const { t } = useTranslation();

  function handleOpenDelete() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleOpenDeleteUser() {
    setOpenUser(true);
  }

  function handleCloseUser() {
    setOpenUser(false);
  }

  function handleClickTeamList() {
    setCollapse(!openCollapse);
  }

  onEdit = () => {
    setEdit(!edit);
  };

  return (
    <>
      <ListItem alignItems="flex-start">
        {!edit ? (
          <ListItemText primary={teamDescription} style={{ marginRight: 91 }} />
        ) : (
          <TextField
            fullWidth
            margin="dense"
            variant="outlined"
            className={globalClasses.textFieldBoderColor}
          />
        )}
        <ListItemSecondaryAction>
          <IconButton onClick={onEdit} className={globalClasses.textColor}>
            {!edit ? <Edit /> : <Done />}
          </IconButton>
          <IconButton
            onClick={handleOpenDelete}
            className={globalClasses.textColor}
          >
            <DeleteForever />
          </IconButton>
          <IconButton
            onClick={handleClickTeamList}
            className={globalClasses.textColor}
          >
            {openCollapse ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Collapse in={openCollapse} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem>
            <ListItemText primary="Иванов В.В." />
            <ListItemSecondaryAction>
              <IconButton
                onClick={handleOpenDeleteUser}
                className={globalClasses.textColor}
              >
                <Clear style={{ width: 20, height: 20 }} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary="Петров А.А." />
            <ListItemSecondaryAction>
              <IconButton
                onClick={handleOpenDeleteUser}
                className={globalClasses.textColor}
              >
                <Clear style={{ width: 20, height: 20 }} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary="Смирнов С.С." />
            <ListItemSecondaryAction>
              <IconButton
                onClick={handleOpenDeleteUser}
                className={globalClasses.textColor}
              >
                <Clear style={{ width: 20, height: 20 }} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Collapse>
      <Divider />
      <Dialog
        classes={{ paper: globalClasses.shadowCard }}
        open={open}
        TransitionComponent={Zoom}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Удаление команды"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Вы уверены, что хотите удалить команду и ее содержимое?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className={globalClasses.refuse}>
            {t("Disagree")}
          </Button>
          <Button onClick={handleClose} color="primary">
            {t("Agree")}
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        classes={{ paper: globalClasses.shadowCard }}
        open={openUser}
        TransitionComponent={Zoom}
        keepMounted
        onClose={handleCloseUser}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Удаление участника"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Вы уверены, что хотите удалить участника из команды?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseUser} className={globalClasses.refuse}>
            {t("Disagree")}
          </Button>
          <Button onClick={handleCloseUser} color="primary">
            {t("Agree")}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
