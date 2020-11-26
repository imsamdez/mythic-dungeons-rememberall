import classnames from 'classnames';
import React from 'react';
import {Content} from '../../components/Content';
import {Sidebar} from '../../components/Sidebar';

const fakeJson = [];

export default () => {
  const classNames = classnames('s-dungeon dungeon-sd');

  return (
    <div className={classNames}>
      <Sidebar
        name="Sanguine depths"
        region="revendreth"
        videoUrl="https://www.youtube.com/embed/OpwX6sQioic"></Sidebar>
      <Content data={fakeJson}></Content>
    </div>
  );
};
