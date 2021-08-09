import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isLoggedIn } from "../utils/auth";

export default function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedIn()) { return <Component {...props} /> }
        else {
          return (<Redirect to={{ pathname: "/notfound", state: { from: props.location }, }} />);
        }
      }}
    />
  );
}
