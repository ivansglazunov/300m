import React from "react";

import {
  makeStyles,
  ListItemText,
  Button,
  List,
  Card,
  ListItem,
  ListItemSecondaryAction,
  ButtonBase,
  Container
} from "@material-ui/core";
import { Add, Clear } from "@material-ui/icons";

import StageForInvites from "./stage-for-invites";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  content: {
    margin: 0
  }
}));

export default ({
  title,
  name,
  description,
  address,
  onUser,
  onAccept,
  onRefuse,
  stages,
  day,
  time
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Container>
        <List>
          <ListItem>
            <ListItemText
              style={{ textAlign: "left", paddingRight: 100 }}
              primary={
                <Button
                  onClick={onUser}
                  style={{ textDecoration: "underline" }}
                >
                  {name}
                </Button>
              }
              secondary={description}
            />
            <ListItemSecondaryAction>
              <ButtonBase onClick={onAccept}>
                <Button color="primary" edge="add" aria-label="add">
                  <Add />
                </Button>
              </ButtonBase>
              <ButtonBase onClick={onRefuse}>
                <Button color="secondary" edge="clear" aria-label="clear">
                  <Clear />
                </Button>
              </ButtonBase>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        <StageForInvites
          address={address}
          description={description}
          day={day}
          time={time}
        />
      </Container>
    </>
  );
};
