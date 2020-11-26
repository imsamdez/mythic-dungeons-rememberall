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
