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
  List
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

export default ({ teamDescription, onEdit }) => {
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
          <ListItemText primary={teamDescription} style={{ marginRight: 76 }} />
        ) : (
          <TextField
            fullWidth
            margin="dense"
            variant="outlined"
            style={{ marginRight: 120 }}
          />
        )}
        <ListItemSecondaryAction>
          <IconButton onClick={onEdit}>
            {!edit ? <Edit /> : <Done />}
          </IconButton>
          <IconButton onClick={handleOpenDelete}>
            <DeleteForever />
          </IconButton>
          <IconButton onClick={handleClickTeamList}>
            {openCollapse ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Collapse in={openCollapse} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem>
            <ListItemText primary="Иванов В.В." />
            <ListItemSecondaryAction>
              <IconButton onClick={handleOpenDeleteUser}>
                <Clear style={{ width: 20, height: 20 }} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary="Петров А.А." />
            <ListItemSecondaryAction>
              <IconButton onClick={handleOpenDeleteUser}>
                <Clear style={{ width: 20, height: 20 }} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary="Смирнов С.С." />
            <ListItemSecondaryAction>
              <IconButton onClick={handleOpenDeleteUser}>
                <Clear style={{ width: 20, height: 20 }} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Collapse>
      <Divider />
      <Dialog
        open={open}
        // TransitionComponent={Transition}
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
          <Button onClick={handleClose} color="primary">
            {t("Disagree")}
          </Button>
          <Button onClick={handleClose} color="primary">
            {t("Agree")}
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openUser}
        // TransitionComponent={Transition}
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
          <Button onClick={handleCloseUser} color="primary">
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
