import classnames from 'classnames';
import {WOW_VERSION} from 'const';
import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom';
import {ROUTE_HOME} from 'router/routes.const';
import './_Styles.scss';

const REGIONS = ['bastion', 'maldraxxus', 'ardenweald', 'revendreth'];

export const Sidebar = (props) => {
  const {region, name, videoUrl} = props;
  const classNames = classnames('dg-sidebar', {
    'region-bastion': region === 'bastion',
    'region-maldraxxus': region === 'maldraxxus',
    'region-ardenweald': region === 'ardenweald',
    'region-revendreth': region === 'revendreth',
  });

  return (
    <div className={classNames}>
      <div className="top">
        <Link to={ROUTE_HOME}>
          <i className="icon-chevron-left"></i> Back to home
        </Link>
        <div className="label">
          PATCH <span className="value">{WOW_VERSION}</span>
        </div>
      </div>
      <div className="title">
        <div className="region">{region}</div>
        {name}
      </div>
      <div className="video-wrapper">
        <iframe
          title={name}
          width="560"
          height="315"
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  region: PropTypes.oneOf(REGIONS).isRequired,
  name: PropTypes.string.isRequired,
  videoUrl: PropTypes.string.isRequired,
};
