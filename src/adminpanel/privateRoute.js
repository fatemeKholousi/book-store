import { Children } from "react";
import { Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        return fakeAuth.isAuthencated === true ? (
          Children
        ) : (
          <Redirect to="/loginpageforadmins" />
        );
      }}
    />
  );
}
