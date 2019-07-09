import React, { useState } from "react";
import withTracker from "../../simulate";

import User from "../../components/user";

export default withTracker(() => {
  return {};
})(({}) => {
  return (
    <User
      name="Сапрыкин Андрей Федорович"
      src="https://96.img.avito.st/640x480/5475959896.jpg"
      alt="montagnik"
      date="22.10.1981"
    />
  );
});
