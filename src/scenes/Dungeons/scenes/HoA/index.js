import classnames from 'classnames';
import React from 'react';
import {Content} from '../../components/Content';
import {Sidebar} from '../../components/Sidebar';
import data from './data.json';

export default () => {
  const classNames = classnames('s-dungeon dungeon-hoa');

  return (
    <div className={classNames}>
      <Sidebar
        name="Halls of Atonement"
        region="revendreth"
        videoId="Q9-QE6WBSpg"></Sidebar>
      <Content data={data}></Content>
    </div>
  );
};
