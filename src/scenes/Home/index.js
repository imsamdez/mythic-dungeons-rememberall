import React from 'react';
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
            <CardDungeon
              region="bastion"
              name="The necrotic wake"></CardDungeon>
            <CardDungeon
              region="bastion"
              name="Spires of Ascension"></CardDungeon>
            <CardDungeon region="maldraxxus" name="Plaguefall"></CardDungeon>
            <CardDungeon
              region="maldraxxus"
              name="Theater of Pain"></CardDungeon>
            <CardDungeon
              region="ardenweald"
              name="Mists of Tirna Scithe"></CardDungeon>
            <CardDungeon region="ardenweald" name="Other side"></CardDungeon>
            <CardDungeon
              region="revendreth"
              name="The necrotic wake"></CardDungeon>
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
