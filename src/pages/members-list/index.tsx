import React from "react";

import withTracker from "../../simulate";

import MembersList from "../../components/members-list";

import moment from "moment";

export default withTracker(() => {
  return {};
})(({ history }) => {
  return (
    <MembersList
      members={[
        {
          _id: "a",
          name: "Papa Johns",
          stages: [
            { address: "Москва, Ветошный пер. 12", start: moment() },
            {
              address: "Москва, Бурденко ул. 1",
              start: moment().add(2, "days")
            }
          ]
        },
        { _id: "b", name: "Cap Sanders", stages: [] },
        { _id: "c", name: "Ronald MacDonald" }
      ]}
    />
  );
});
