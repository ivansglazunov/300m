import React from "react";

import { Container } from "@material-ui/core";

import OneItem from "./item";

export default ({ activities }) => {
  return (
    <Container>
      {activities.map(activity => (
        <OneItem key={activity._id} {...activity} />
      ))}
    </Container>
  );
};
