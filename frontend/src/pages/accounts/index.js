import React from "react";
import { Route } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";

function Routes({ match }) {//match 는 상위에 path값이 있으니 그걸 가져다 쓰는 것임 
  return (
    <>
      <Route exact path={match.url + "/profile"} component={Profile} />
      <Route exact path={match.url + "/login"} component={Login} />
    </>
  );
}
export default Routes;
