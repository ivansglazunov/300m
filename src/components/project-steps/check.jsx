import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid
} from "@material-ui/core";

//страница со строками заполненными на предыдущих шагах
export default ({
  projectStages,
  stageTitle,
  projectTitle,
  projectDescription,
  duration,
  stageDescription,
  stageAddress,
  members,
  usersList
}) => {
  return (
    <>
      <List>
        <Typography variant="h5">Проект</Typography>
        <ListItem>
          <ListItemText primary={projectTitle} />
        </ListItem>
        <ListItem>
          <ListItemText primary={projectDescription} />
        </ListItem>
        <Typography variant="h5">{projectStages}</Typography>
        <ListItem>
          <ListItemText primary={stageTitle} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <ul>
                <li>{stageDescription}</li>
                <li>21.09 13:30 - 21.09 19:00</li>
                <li>{stageAddress}</li>
              </ul>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText primary={duration} />
        </ListItem>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={2}>
            <ListItem>
              <ListItemText primary={2} secondary={"дня"} />
            </ListItem>
          </Grid>
          <Grid item xs={2}>
            <ListItem>
              <ListItemText primary={10} secondary={"часов"} />
            </ListItem>
          </Grid>
        </Grid>
        <Typography variant="h5">{usersList}</Typography>
        {members.map(member => (
          <ListItem dense>
            <ListItemText key={member._id} primary={member.userName} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
