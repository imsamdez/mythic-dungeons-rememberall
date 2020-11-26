/* eslint-disable import/first */
let dotenv = require('dotenv');
let dotenvExpand = require('dotenv-expand');
let myEnv = dotenv.config();
dotenvExpand(myEnv);
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scenes/Dungeons/_Styles.scss';
import * as serviceWorker from './serviceWorker';
import './_Global.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
