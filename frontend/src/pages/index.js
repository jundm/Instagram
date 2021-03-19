import React from "react";
import { Route } from "react-router-dom";
import AppLayout from "components/AppLayout";
import Home from "./Home";
import About from "./About";
import AccountRoutes from "./accounts"; //default를 임포트 하는거라 이름은 임의로 줄수가 있음 

function Root() {
  return (
    <AppLayout>
      최상위 컴포넌트
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      {/* 여기서 라우트를 쓰는건 라우터 컴포넌트로 감싸져 있기 때문이다 
      exact는 정확하게 url이 매칭되는 경우에만 보이기 위함이다  */}
      <Route path="/accounts" component={AccountRoutes} />
    </AppLayout>
  );
}
export default Root;
