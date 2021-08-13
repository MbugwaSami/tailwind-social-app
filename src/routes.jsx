import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import LoginPage from "./components/Login";
import SignUpPage from "./components/SignUp";
import MainPage from "./components/Main";
import { checkUserPermisssion } from "./helpers/authHelpers";

function AppRoutes() {
  const RestrictedRoute = (props) => {
    const { component: Component, path } = props;
    const authUser = checkUserPermisssion();
    return (
      <Route
        path={path}
        render={(routeProps) =>
          authUser ? (
            <Component {...routeProps} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          )
        }
      />
    );
  };

  return (
    <BrowserRouter>
      <Route path="/" exact component={LoginPage} />
      <Route path="/signup" exact component={SignUpPage} />
      <RestrictedRoute path="/main" component={MainPage} />
    </BrowserRouter>
  );
}
export default AppRoutes;
