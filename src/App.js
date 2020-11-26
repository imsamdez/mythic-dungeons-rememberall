import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {EmptyLayout} from 'router/Layouts';
import {PublicRoute} from './router/Routes';
import {ROUTE_DG_PF, ROUTE_HOME} from './router/routes.const';
import DungeonPF from './scenes/Dungeons/scenes/PF';
import Home from './scenes/Home';

class App extends React.Component {
  render() {
    return (
      <Router>
        <PublicRoute exact component={Home} path={ROUTE_HOME}></PublicRoute>
        <PublicRoute
          exact
          component={DungeonPF}
          path={ROUTE_DG_PF}
          layout={EmptyLayout}></PublicRoute>
      </Router>
    );
  }
}

export default App;
