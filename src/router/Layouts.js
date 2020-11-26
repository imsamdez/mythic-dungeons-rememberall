import Footer from 'components/Footer';
import React from 'react';

/**
 * Basic Layout
 * Default layout used by routes
 */
export const BasicLayout = ({component: Component, ...props}) => (
  <div className="layout-basic">
    <Component {...props} />
    <Footer></Footer>
  </div>
);

/**
 * Empty Layout
 * Layout that only show the component supplied
 */
export const EmptyLayout = ({component: Component, ...props}) => (
  <div className="layout-empty">
    <Component {...props} />
  </div>
);
