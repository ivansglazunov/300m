import React, { useState } from "react";
import { Container, Button } from "@material-ui/core";

import Project from "../project-editable/project";
import Members from "../members-search/search";
import SimpleStage from "../stage/simple-stage";
import { Area } from "../slice-area";
import useGlobalStyles from "../styles";

import { useTranslation } from "react-i18next";

export default ({ onSelectStages, onCancel, onSave }) => {
  const { t } = useTranslation();
  const globalClasses = useGlobalStyles();

  return (
    <Area
      content={
        <Container className={globalClasses.paddingForCard}>
          <Project />
          <SimpleStage />
          <Members onSelectStages={onSelectStages} />
        </Container>
      }
      bottom={
        <>
          <Button onClick={onCancel} className={globalClasses.refuse}>
            {t("cancel")}
          </Button>
          <Button color="primary" onClick={onSave}>
            {t("save")}
          </Button>
        </>
      }
    />
  );
};
