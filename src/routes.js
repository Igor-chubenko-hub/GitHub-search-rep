import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import store from './store/index';
import Spinner from './components/spinner';

const loadPage = pageName => lazy(() => import(`./pages/${pageName}/effects`).then((module) => {
  store.injectReducer(pageName.toLowerCase(), module.reducer);
  store.injectSaga(pageName.toLowerCase(), module.sagas);
  return import(`./pages/${pageName}/index.jsx`);
}));

const Home = loadPage('Home');

const routes = [
  {
    path: '/home',
    render: () => <Home />,
    exact: true,
  },
];

const RouteMap = () => (
  <Suspense fallback={<Spinner />}>
    <Switch>
      {routes.map(item => (
        <Route {...item} key={item.path} />
      ))}
      <Redirect exact from="*" to="/home" />
    </Switch>
  </Suspense>
);

export default RouteMap;
