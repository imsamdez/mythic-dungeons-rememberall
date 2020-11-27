import PropTypes from 'prop-types';
import randomstring from 'randomstring';
import React from 'react';
import {Creature} from './../Creature';
import './_Styles.scss';

export const GroupCreature = (props) => {
  const {id, creatures} = props;

  return (
    <div id={`cg-${id}`} className="dg-group-creature">
      <div className="watch-at">
        <div className="timer">
          at <span>02:18</span>
        </div>
        <div className="action">
          watch <i className="icon-play"></i>
        </div>
      </div>
      <div className="creatures">
        {creatures.map(({creature: c}) /** creature */ => (
          <Creature
            key={randomstring.generate(5)}
            name={c.name}
            abilities={c.abilities}
            imageUrl={c.imageUrl}></Creature>
        ))}
      </div>
    </div>
  );
};

GroupCreature.propTypes = {
  creatures: PropTypes.array.isRequired,
};
