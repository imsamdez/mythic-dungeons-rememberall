import React from 'react';
import ReactHelmet from 'react-helmet';
import {Route} from 'react-router-dom';
import {BasicLayout} from './Layouts';

export const PublicRoute = ({
  component: Component,
  layout: Layout = BasicLayout,
  title = '',
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => [
      <ReactHelmet key={1}>
        <title>{title} &middot; MDR</title>
      </ReactHelmet>,
      <Layout component={Component} {...props} />,
    ]}
  />
);
