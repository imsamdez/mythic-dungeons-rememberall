import classnames from 'classnames';
import React from 'react';
import {Content} from '../../components/Content';
import {Sidebar} from '../../components/Sidebar';
import data from './data.json';

export default () => {
  const classNames = classnames('s-dungeon dungeon-os');

  return (
    <div className={classNames}>
      <Sidebar
        name="Other side"
        region="ardenweald"
        videoId="PGnaNdSxPQg"></Sidebar>
      <Content data={data}></Content>
    </div>
  );
};
