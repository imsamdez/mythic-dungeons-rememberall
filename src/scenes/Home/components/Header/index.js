import {WOW_VERSION} from 'const';
import React from 'react';
import './_Styles.scss';

export default () => {
  return (
    <div className="home-header">
      <div className="item">
        Patch <span className="value">{WOW_VERSION}</span>
      </div>
      <div className="item">
        Last update <span className="value">coming soon</span>
      </div>
    </div>
  );
};
