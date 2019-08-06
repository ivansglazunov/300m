import React, { useState } from "react";
import { Container, Button } from "@material-ui/core";

import Project from "../project-editable/project";
import Members from "../members-search/search";
import SimpleStage from "../stage/simple-stage";
import { Area } from "../slice-area";
import { useTranslation } from "react-i18next";

export default ({ onSelectStages, onCancel, onSave }) => {
  const { t } = useTranslation();

  return (
    <Area
      content={
        <Container>
          <Project />
          <SimpleStage />
          <Members onSelectStages={onSelectStages} />
        </Container>
      }
      bottom={
        <>
          <Button onClick={onCancel}>{t("cancel")}</Button>
          <Button color="primary" onClick={onSave}>
            {t("save")}
          </Button>
        </>
      }
    />
  );
};
