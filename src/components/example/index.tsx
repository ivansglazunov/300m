import React from "react";

export default ({ currentUser, setCurrentUser, count, setCount }) => {
  return (
    <>
      <button onClick={() => setCurrentUser(currentUser ? 0 : 123)}>
        currentUser: {currentUser}
      </button>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  );
};
