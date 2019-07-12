import React, { useState } from "react";
import withTracker from "../../simulate";

import CreateProjectStage from "../../components/stage";
import { useTranslation } from "react-i18next";
import { ConfirmationNumber } from "@material-ui/icons";

export default withTracker(() => {
  return {};
})(({ history }) => {
  const { t } = useTranslation();

  return (
    <CreateProjectStage
      onCancel={() => history.push("/create-project/2")}
      onSave={() => history.push("/create-project/2")}
      onDelete={() => history.push("/create-project/2")}
      stage={{
        title: t("Stage title"),
        name: "Cap.Sanders",
        address: "Dandelion st. 21-12",
        description: t("Short description of the stage")
      }}
    />
  );
});
