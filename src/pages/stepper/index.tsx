import React, { useState } from "react";
import withTracker from "../../simulate";

import CreateProject from "../../components/create-project/stepper";
import { useTranslation } from "react-i18next";
import { ConfirmationNumber } from "@material-ui/icons";

export default withTracker(() => {
  return {};
})(({ history, match: { params: { step = 1 } } }) => {
  const { t } = useTranslation();

  return (
    <CreateProject
      step={+step}
      onCancel={() => history.push("/projects-list")}
      onNext={() => history.push("/create-project/2")}
      onBack={() => history.push("/create-project/1")}
      onAdd={() => history.push("/create-project-stage")}
      onFinish={() => history.push("/project-owner")}
      onEdit={() => history.push("/create-project-stage")}
      next={t("Next")}
      stage={{
        title: t("Stage title"),
        name: "Cap.Sanders",
        address: "Dandelion st. 21-12",
        durationFrom: "21.08",
        durationTo: "23.08",
        description: t("Short description of the stage")
      }}
    />
  );
});

//TODO создать новую страницу со стейджем для его создания
//TODO onClick в stages-item
