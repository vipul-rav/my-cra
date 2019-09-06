import React, { lazy, Suspense } from "react";
import { Route, Switch, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const SampleContainer = lazy(() => import("../containers/SampleContainer"));
const SampleContainer2 = lazy(() => import("../containers/SampleContainer2"));

export const history = createBrowserHistory();

const routes = <Router history={history}>
    <Suspense fallback={<div />}>
        <Switch>
            <Route exact path="/" component={SampleContainer} />
            <Route path="/sample2" component={SampleContainer2} />
        </Switch>
    </Suspense>
</Router>;

export default routes;