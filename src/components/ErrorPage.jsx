import React from "react";

const ErrorPage = ({ err }) => {
  return (
    <div>
      <h1>{err.message}</h1>
    </div>
  );
};

export default ErrorPage;
