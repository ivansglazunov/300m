import React, { useState } from "react";
import withTracker from "../../simulate";

import ProjectStagesList from "../../components/project-stages-list";
import { useTranslation } from "react-i18next";

export default withTracker(() => {
  return {};
})(({ history }) => {
  const { t } = useTranslation();

  return (
    <ProjectStagesList
      onEdit={() => history.push("/stage")}
      stages={[
        {
          _id: "a",
          title: t("Stage title"),
          name: "Cap.Sanders",
          address: "Dandelion st. 21-12",
          durationFrom: "21.08",
          durationTo: "23.08",
          description: t("Short description of the stage")
        },
        {
          _id: "b",
          title: t("Stage title"),
          name: "Cap.Sanders",
          address: "Dandelion st. 21-12",
          durationFrom: "21.08",
          durationTo: "23.08",
          description: t("Short description of the stage")
        }
      ]}
    />
  );
});
