import ConvertSeconds from 'convert-seconds';
import PropTypes from 'prop-types';
import randomstring from 'randomstring';
import React from 'react';
import {EVENT_SEEK_TO, PlayerEmitter} from '../Sidebar/player.emitter';
import {Creature} from './../Creature';
import './_Styles.scss';

const addZero = (value, digits) => {
  digits = digits || 2;
  var isNegative = Number(value) < 0;
  var buffer = value.toString();
  var size = 0;

  if (isNegative) {
    buffer = buffer.slice(1);
  }
  size = digits - buffer.length + 1;
  size = size < 0 ? 1 : size;
  buffer = new Array(size).join('0').concat(buffer);
  return (isNegative ? '-' : '') + buffer;
};
const seconds2readable = (seconds) => {
  const result = ConvertSeconds(seconds);

  if (seconds < 60) {
    return `0:${addZero(seconds)}`;
  }
  if (seconds < 3600) {
    return `${result.minutes}:${addZero(result.seconds)}`;
  }
  return `${result.hours}:${addZero(result.minutes)}:${addZero(
    result.seconds
  )}`;
};

export const GroupCreature = (props) => {
  const {id, creatures, watchAt} = props;

  return (
    <div id={`cg-${id}`} className="dg-group-creature">
      <div className="watch-at">
        <div className="timer">
          at <span>{seconds2readable(watchAt)}</span>
        </div>
        <div
          className="action"
          onClick={() => PlayerEmitter.emit(EVENT_SEEK_TO, {time: watchAt})}>
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
