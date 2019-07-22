import React from "react";

const ErrorPage = ({ err }) => {
  if (err) {
    return (
      <div>
        <h1>Whoops! Something went wrong...</h1>
        <h2>{err.message}</h2>
      </div>
    );
  } else {
    return <h1>Whoops! Something went wrong...</h1>;
  }
};

export default ErrorPage;
