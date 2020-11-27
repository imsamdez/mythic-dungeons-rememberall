import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './_Styles.scss';

const REGIONS = ['bastion', 'maldraxxus', 'ardenweald', 'revendreth'];

export const CardDungeon = (props) => {
  const {region, name} = props;
  const classNames = classnames('card-dungeon fade-in-right', {
    'region-bastion': region === 'bastion',
    'region-maldraxxus': region === 'maldraxxus',
    'region-ardenweald': region === 'ardenweald',
    'region-revendreth': region === 'revendreth',
  });

  return (
    <div className={classNames}>
      <div className="region">{region}</div>
      <div className="name">{name}</div>
    </div>
  );
};

CardDungeon.propTypes = {
  region: PropTypes.oneOf(REGIONS).isRequired,
  name: PropTypes.string.isRequired,
};
