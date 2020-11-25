import React from 'react';
import {Route} from 'react-router-dom';
import {BasicLayout} from './Layouts';

export const PublicRoute = ({
  component: Component,
  layout: Layout = BasicLayout,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => <Layout component={Component} {...props} />}
  />
);
