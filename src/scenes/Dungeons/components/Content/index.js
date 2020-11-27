import PropTypes from 'prop-types';
import randomstring from 'randomstring';
import React from 'react';
import {
  ActionIconCBSS,
  ActionIconDI,
  ActionIconMBK,
  ActionIconSBK,
} from './../ActionIcons';
import {GroupCreature} from './../GroupCreature';
import './_Styles.scss';

export const Content = (props) => {
  const {data} = props;

  return (
    <div className="dg-content fade-in-top">
      <div className="content-wrapper">
        <div className="content-body">
          {data.map((cg) /** creatureGroup */ => (
            <GroupCreature
              id={cg.id}
              key={randomstring.generate(5)}
              creatures={cg.creatures}
              watchAt={cg.watchAt}></GroupCreature>
          ))}
        </div>
        <div className="content-quick-nav">
          {data.map((cg) /** creatureGroup */ => (
            <a href={`#cg-${cg.id}`} key={cg.id}>
              {cg.creatures.reduce(
                (str, c) =>
                  str
                    .concat(str.length !== 0 ? ', ' : '')
                    .concat(c.creature.name),
                ''
              )}
            </a>
          ))}
        </div>
      </div>
      <div className="content-footer">
        <div>
          <ActionIconMBK></ActionIconMBK> Must be kicked
        </div>
        <div>
          <ActionIconSBK></ActionIconSBK> Should be kicked
        </div>
        <div>
          <ActionIconDI></ActionIconDI> Dodge it
        </div>
        <div>
          <ActionIconCBSS></ActionIconCBSS> Can be spell steal
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  data: PropTypes.array.isRequired,
};
