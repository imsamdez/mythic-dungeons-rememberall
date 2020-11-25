import React from 'react';

/**
 * Basic Layout
 * Default layout used by routes
 */
export const BasicLayout = ({component: Component, ...props}) => (
  <div>
    <div>
      <Component {...props} />
    </div>
  </div>
);
