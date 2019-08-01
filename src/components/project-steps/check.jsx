import React from "react";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";

//страница со строками заполненными на предыдущих шагах
export default ({}) => {
  return (
    <>
      <List>
        <Typography variant="h5">Проект</Typography>
        <ListItem>
          <ListItemText primary={"Название проекта"} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
          />
        </ListItem>
        <Typography variant="h5">Этапы проекта</Typography>
        <ListItem>
          <ListItemText
            primary={"Этап номер один"}
            secondary={
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </li>
                <li>21.09 13:30 - 21.09 19:00</li>
                <li>ул. Вавилова, 24 к2</li>
              </ul>
            }
          />
        </ListItem>
        <Typography variant="h5">Участники проекта</Typography>
        <ListItem>
          <ListItemText
            secondary={
              <ul>
                <li>Сапрыкин А.А.</li>
                <li>Нефедов С.А.</li>
                <li>терехов В.П.</li>
              </ul>
            }
          />
        </ListItem>
      </List>
    </>
  );
};
