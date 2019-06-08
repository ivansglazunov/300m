import React, { useState } from "react";
import withTracker from '../../simulate';

export const SomePageComponent: any = ({
  currentUser, setCurrentUser,
  count, setCount,
}) => {
  return <>
    <button onClick={() => setCurrentUser(currentUser ? 0 : 123)}>currentUser: {currentUser}</button>
    <button onClick={() => setCount(count + 1)}>{count}</button>
  </>;
}

export default withTracker(() => {
  const [currentUser, setCurrentUser] = useState(0);

  return {
    currentUser: currentUser,
    setCurrentUser,
  };
})(({ currentUser, setCurrentUser }) => {
  const [count, setCount] = useState(0);

  return <SomePageComponent currentUser={currentUser} setCurrentUser={setCurrentUser} count={count} setCount={setCount}/>;
})