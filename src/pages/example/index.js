import React, { useState } from "react";
import withTracker from '../../simulate';

export default withTracker(() => {
  return {
    currentUser: 123
  };
})(({ currentUser }) => {
  const [count, setCount] = useState(0);
  return <>
    {currentUser}
    <button onClick={() => setCount(count + 1)}>{count}</button>
  </>;
})
