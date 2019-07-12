import React from "react";
import withTracker from "../../simulate";

import Stages from "../../components/stages";
import { useTranslation } from "react-i18next";

export default withTracker(() => {
  return {};
})(({ history }) => {
  const { t } = useTranslation();

  return (
    <Stages
      onAddStage={() => {
        history.push("/stage");
      }}
      onEdit={() => {
        history.push("/stage");
      }}
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
