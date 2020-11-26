import React from 'react';
import {Link} from 'react-router-dom';
import {
  ROUTE_DG_MOTS,
  ROUTE_DG_OS,
  ROUTE_DG_PF,
  ROUTE_DG_SOA,
  ROUTE_DG_TNW,
  ROUTE_DG_TOP,
} from 'router/routes.const';
import {CardDungeon} from './components/CardDungeon';
import Header from './components/Header';
import Title from './components/Title';
import './_Styles.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="s-home">
        <Header></Header>
        <div className="wrapper">
          <Title></Title>
          <div className="dungeons">
            <Link to={ROUTE_DG_TNW}>
              <CardDungeon
                region="bastion"
                name="The necrotic wake"></CardDungeon>
            </Link>
            <Link to={ROUTE_DG_SOA}>
              <CardDungeon
                region="bastion"
                name="Spires of Ascension"></CardDungeon>
            </Link>
            <Link to={ROUTE_DG_PF}>
              <CardDungeon region="maldraxxus" name="Plaguefall"></CardDungeon>
            </Link>
            <Link to={ROUTE_DG_TOP}>
              <CardDungeon
                region="maldraxxus"
                name="Theater of Pain"></CardDungeon>
            </Link>
            <Link to={ROUTE_DG_MOTS}>
              <CardDungeon
                region="ardenweald"
                name="Mists of Tirna Scithe"></CardDungeon>
            </Link>
            <Link to={ROUTE_DG_OS}>
              <CardDungeon region="ardenweald" name="Other side"></CardDungeon>
            </Link>
            <CardDungeon
              region="revendreth"
              name="Halls of Atonement"></CardDungeon>
            <CardDungeon
              region="revendreth"
              name="Sanguine depths"></CardDungeon>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
