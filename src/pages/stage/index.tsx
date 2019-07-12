import React, { useState } from "react";
import withTracker from "../../simulate";

import Stage from "../../components/stage";
import { useTranslation } from "react-i18next";

export default withTracker(() => {
  return {};
})(({ history }) => {
  const { t } = useTranslation();
  return (
    <Stage
      stage={{
        title: t("Title"),
        description: t("Description"),
        address: "",
        name: ""
      }}
      onCancel={() => history.push("/stages")}
      onSave={() => history.push("/stages")}
      onDelete={() => history.push("/stages")}
    />
  );
});
