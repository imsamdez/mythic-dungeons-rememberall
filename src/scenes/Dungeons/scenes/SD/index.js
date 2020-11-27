import classnames from 'classnames';
import React from 'react';
import {Content} from '../../components/Content';
import {Sidebar} from '../../components/Sidebar';
import data from './data.json';

export default () => {
  const classNames = classnames('s-dungeon dungeon-sd');

  return (
    <div className={classNames}>
      <Sidebar
        name="Sanguine depths"
        region="revendreth"
        videoId="OpwX6sQioic"></Sidebar>
      <Content data={data}></Content>
    </div>
  );
};
