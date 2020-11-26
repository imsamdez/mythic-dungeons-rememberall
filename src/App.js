import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {EmptyLayout} from 'router/Layouts';
import {PublicRoute} from './router/Routes';
import {
  ROUTE_DG_PF,
  ROUTE_DG_SOA,
  ROUTE_DG_TNW,
  ROUTE_HOME,
} from './router/routes.const';
import DungeonPF from './scenes/Dungeons/scenes/PF';
import DungeonSoA from './scenes/Dungeons/scenes/SoA';
import DungeonTNW from './scenes/Dungeons/scenes/TNW';
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
        <PublicRoute
          exact
          component={DungeonTNW}
          path={ROUTE_DG_TNW}
          layout={EmptyLayout}></PublicRoute>
        <PublicRoute
          exact
          component={DungeonSoA}
          path={ROUTE_DG_SOA}
          layout={EmptyLayout}></PublicRoute>
      </Router>
    );
  }
}

export default App;
