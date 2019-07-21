import React from "react";
import { useTranslation } from "react-i18next";

import withTracker from "../../simulate";

import SelectStages from "../../components/select-stages-for-members";

export default withTracker(() => {
  return {};
})(({ history }) => {
  const { t } = useTranslation();

  return (
    <SelectStages
      title={t("Stage title")}
      description={t("Short description")}
      address="Dandelion st. 21-12"
      name="Ronald MacDonald"
      durationFrom="21.06"
      durationTo="22.06"
      onCancel={() => history.push("/members-list")}
      onBackToSelectMemebers={() => history.push("/members-search")}
      onAddMembersToStages={() => history.push("/members-list")}
    />
  );
});
