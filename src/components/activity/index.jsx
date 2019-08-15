import React from "react";

import { Container } from "@material-ui/core";

import OneItem from "./item";
import useGlobalStyles from "../styles";

export default ({ activities }) => {
  const globalClasses = useGlobalStyles();

  return (
    <Container className={globalClasses.paddingForCard}>
      {activities.map(activity => (
        <OneItem key={activity._id} {...activity} />
      ))}
    </Container>
  );
};
