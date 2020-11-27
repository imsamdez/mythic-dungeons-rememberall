import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {EmptyLayout} from 'router/Layouts';
import {PublicRoute} from './router/Routes';
import {
  ROUTE_DG_HOA,
  ROUTE_DG_MOTS,
  ROUTE_DG_OS,
  ROUTE_DG_PF,
  ROUTE_DG_SD,
  ROUTE_DG_SOA,
  ROUTE_DG_TNW,
  ROUTE_DG_TOP,
  ROUTE_HOME,
} from './router/routes.const';
import DungeonHoA from './scenes/Dungeons/scenes/HoA';
import DungeonMoTS from './scenes/Dungeons/scenes/MoTS';
import DungeonOS from './scenes/Dungeons/scenes/OS';
import DungeonPF from './scenes/Dungeons/scenes/PF';
import DungeonSD from './scenes/Dungeons/scenes/SD';
import DungeonSoA from './scenes/Dungeons/scenes/SoA';
import DungeonTNW from './scenes/Dungeons/scenes/TNW';
import DungeonToP from './scenes/Dungeons/scenes/ToP';
import Home from './scenes/Home';

class App extends React.Component {
  render() {
    return (
      <Router>
        <PublicRoute
          exact
          component={Home}
          path={ROUTE_HOME}
          title="Home"></PublicRoute>

        <PublicRoute
          exact
          component={DungeonPF}
          path={ROUTE_DG_PF}
          layout={EmptyLayout}
          title="Plaguefall"></PublicRoute>
        <PublicRoute
          exact
          component={DungeonTNW}
          path={ROUTE_DG_TNW}
          layout={EmptyLayout}
          title="The necrotic wake"></PublicRoute>
        <PublicRoute
          exact
          component={DungeonSoA}
          path={ROUTE_DG_SOA}
          layout={EmptyLayout}
          title="Spires of Ascension"></PublicRoute>
        <PublicRoute
          exact
          component={DungeonToP}
          path={ROUTE_DG_TOP}
          layout={EmptyLayout}
          title="Theater of Pain"></PublicRoute>
        <PublicRoute
          exact
          component={DungeonMoTS}
          path={ROUTE_DG_MOTS}
          layout={EmptyLayout}
          title="Mists of Tirna Scithe"></PublicRoute>
        <PublicRoute
          exact
          component={DungeonOS}
          path={ROUTE_DG_OS}
          layout={EmptyLayout}
          title="Other side"></PublicRoute>
        <PublicRoute
          exact
          component={DungeonHoA}
          path={ROUTE_DG_HOA}
          layout={EmptyLayout}
          title="Halls of Atonement"></PublicRoute>
        <PublicRoute
          exact
          component={DungeonSD}
          path={ROUTE_DG_SD}
          layout={EmptyLayout}
          title="Sanguine depths"></PublicRoute>
      </Router>
    );
  }
}

export default App;
