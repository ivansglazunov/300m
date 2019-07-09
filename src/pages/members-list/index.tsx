import React, { useState } from "react";

import { useTranslation } from "react-i18next";
import withTracker from "../../simulate";

import MembersList from "../../components/members-list";

export default withTracker(() => {
  return {};
})(({ history }) => {
  const { t } = useTranslation();

  return (
    <MembersList members={t("Members List")} address="Москва, Бурденко ул. 1" />
  );
});
