import classnames from 'classnames';
import PropTypes from 'prop-types';
import randomstring from 'randomstring';
import React from 'react';
import {
  ActionIconCBSS,
  ActionIconDI,
  ActionIconMBK,
  ActionIconSBK,
} from '../ActionIcons';
import './_Styles.scss';

const ACTION_MUST_BE_KICKED = 'ACTION_MUST_BE_KICKED';
const ACTION_SHOULD_BE_KICKED = 'ACTION_SHOULD_BE_KICKED';
const ACTION_DODGE_IT = 'ACTION_DODGE_IT';
const ACTION_CAN_BE_SPELL_STEAL = 'ACTION_CAN_BE_SPELL_STEAL';

export const Creature = (props) => {
  const {name, imageUrl, isBoss, abilities} = props;
  const classNames = classnames('dg-creature', {'is-boss': isBoss});

  return (
    <div className={classNames}>
      <div
        className="avatar"
        style={{backgroundImage: `url(${imageUrl})`}}></div>
      <div className="body">
        <div className="name">{name}</div>
        <div className="abilities">
          {abilities.map((a) /** ability */ => (
            <Ability
              key={randomstring.generate(5)}
              name={a.name}
              actions={a.actions}></Ability>
          ))}
        </div>
      </div>
    </div>
  );
};

Creature.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  abilities: PropTypes.array,
  isBoss: PropTypes.bool,
};
Creature.defaultProps = {
  isBoss: false,
  abilities: [],
};

const Ability = (props) => {
  const {name, actions} = props;
  const actionIcon = {
    [ACTION_MUST_BE_KICKED]: (
      <ActionIconMBK key={randomstring.generate(5)}></ActionIconMBK>
    ),
    [ACTION_SHOULD_BE_KICKED]: (
      <ActionIconSBK key={randomstring.generate(5)}></ActionIconSBK>
    ),
    [ACTION_DODGE_IT]: (
      <ActionIconDI key={randomstring.generate(5)}></ActionIconDI>
    ),
    [ACTION_CAN_BE_SPELL_STEAL]: (
      <ActionIconCBSS key={randomstring.generate(5)}></ActionIconCBSS>
    ),
  };

  return (
    <div className="dg-creature-ability">
      {actions.map((a) /** action */ => actionIcon[a])}
      {name}
    </div>
  );
};
