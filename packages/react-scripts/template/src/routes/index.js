import React, { lazy, Suspense } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const SampleContainer = lazy(() => import('../containers/Sample/Sample'));
const SampleContainer2 = lazy(() => import('../containers/Sample2/Sample2'));

export const history = createBrowserHistory();

const routes = (
    <Router history={history}>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={SampleContainer} />
                <Route path="/sample2" component={SampleContainer2} />
            </Switch>
        </Suspense>
    </Router>
);

export default routes;
