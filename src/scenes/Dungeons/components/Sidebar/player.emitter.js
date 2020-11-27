import {EventEmitter} from 'fbemitter';

class CPlayerEmitter extends EventEmitter {}

export const EVENT_SEEK_TO = 'EVENT_SEEK_TO';
export const PlayerEmitter = new CPlayerEmitter();
