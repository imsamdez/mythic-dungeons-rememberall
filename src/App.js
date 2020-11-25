import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {PublicRoute} from './router/Routes';
import {ROUTE_HOME} from './router/routes.const';
import Home from './scenes/Home';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <PublicRoute exact component={Home} path={ROUTE_HOME}></PublicRoute>
        </div>
      </Router>
    );
  }
}

export default App;
