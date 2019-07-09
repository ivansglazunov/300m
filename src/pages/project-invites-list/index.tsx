import React, { useState } from "react";
import withTracker from "../../simulate";

import ProjectInvitesList from "../../components/project-invites-list";

export default withTracker(() => {
  return {};
})(({ history }) => {
  return (
    <ProjectInvitesList
      title="Title"
      name="Сапрыкин А.Ф."
      description="Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
    consectetur, neque doloribus, cupiditate numquam dignissimos laborum
    fugiat deleniti."
      address="Стремянный переулок, 38 Москва, Россия, 115054"
      stages="stages of project"
      onUser={() => history.push("/user")}
      onAccept={() => history.push("/project-member")}
      onRefuse={() => history.push("/")}
      day="22.08"
      time="10:45"
    />
  );
});
