import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavbarMain from "../components/NavbarMain/NavbarMain";

const Home = lazy(() => import("../pages/Home/Home"));
const AboutUs = lazy(() => import("../pages/About_us/About_Us"));

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <NavbarMain />
        <Suspense
          fallback={
            <>
              <div>Loading</div>
            </>
          }
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about_us" component={AboutUs} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
