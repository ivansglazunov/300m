import React, { useState } from "react";

import {
  makeStyles,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
  IconButton,
  ExpansionPanelActions
} from "@material-ui/core";

import { ExpandMore, ExpandLess, Today, AccessTime } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  content: {
    margin: 0
  },
  svg: {
    width: 17
  }
}));

export default ({ description, address, day, time }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <>
      <ExpansionPanel expanded={open}>
        <ExpansionPanelSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          // так ты передаешь в качестве ExpansionPanelSummory класса класс описанный в classes.content
          // а судя по https://material-ui.com/api/expansion-panel-summary/ ему можно передать стили для вложенных в него элементов
          // и для этого нужно задать его в classes
          // className={classes.content}
          classes={{ content: classes.content }}
          style={{ margin: 0 }}
        >
          <List style={{ width: "100%", padding: 0 }}>
            {/* <ListItem
              disableGutters={true}
              style={{ paddingTop: 0, paddingBottom: 0 }}
            > */}
            {!open ? (
              <ListItem
                fullWidth
                disableGutters={true}
                style={{ paddingTop: 0, paddingBottom: 0 }}
              >
                <ListItemText
                  secondary={
                    <Typography variant="caption">
                      {address}
                      <br />
                      <Today className={classes.svg} />
                      {day}&emsp;
                      <AccessTime className={classes.svg} />
                      {time}
                    </Typography>
                  }
                />
              </ListItem>
            ) : null}

            {/* <ListItemText
                primary={
                  !open ? (
                    <>
                    <div>
                      <Typography variant="caption">
                        {address}
                      </Typography>
                      <Typography variant="caption">
                        <Today className={classes.svg} />{day}&emsp;<AccessTime className={classes.svg} />{time}
                      </Typography>
                      <Typography variant="caption">
                        {address}
                        <br />
                        <Today className={classes.svg} />{day}&emsp;<AccessTime className={classes.svg} />{time}
                      </Typography>
                    </div>
                    <div>
                      <Typography variant="caption">
                        <Today className={classes.svg} />{day}&emsp;<AccessTime className={classes.svg} />{time}
                      </Typography>
                    </div>
                    </>
                  ) : null
                }
              /> */}
            {/* </ListItem> */}
          </List>
          <ExpansionPanelActions style={{ width: "100%", padding: 0 }}>
            <IconButton onClick={handleClick}>
              {open ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </ExpansionPanelActions>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{ paddingTop: 0, paddingBottom: 10 }}>
          <List style={{ padding: 0 }}>
            <ListItem
              disableGutters={true}
              style={{ paddingTop: 0, paddingBottom: 0 }}
            >
              <ListItemText primary={description} />
            </ListItem>
            <ListItem
              disableGutters={true}
              style={{ paddingTop: 0, paddingBottom: 0 }}
            >
              <ListItemText primary={address} />
            </ListItem>
            <ListItem
              disableGutters={true}
              style={{ paddingTop: 0, paddingBottom: 0 }}
            >
              {/* <Today className={classes.svg} />{day}&emsp;<AccessTime className={classes.svg} />{time} */}
              <ListItemText
                primary={
                  <>
                    <Today className={classes.svg} />
                    {day}&emsp;
                    <AccessTime className={classes.svg} />
                    {time}
                  </>
                }
              />
            </ListItem>
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </>
  );
};
