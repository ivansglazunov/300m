import React, { useState } from "react";
import withTracker from "../../simulate";

import MembersSearch from "../../components/members-search";

import { useTranslation } from "react-i18next";

export default withTracker(() => {
  return {};
})(({ history }) => {
  const { t } = useTranslation();

  return (
    <MembersSearch
      onSelectStagesForMembers={() =>
        history.push("/select-stages-for-members")
      }
      onCancel={() => history.push("/members-list")}
      selectStagesForMembers={t("Select stages for members")}
    />
  );
});
