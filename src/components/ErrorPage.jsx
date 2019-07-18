import React from "react";

const ErrorPage = ({ err }) => {
  return (
    <div>
      <h1>Whoops! Something went wrong...</h1>
      <h2>{err.message}</h2>
    </div>
  );
};

export default ErrorPage;
