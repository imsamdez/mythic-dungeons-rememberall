import classnames from 'classnames';
import React from 'react';
import {Content} from '../../components/Content';
import {Sidebar} from '../../components/Sidebar';

const fakeJson = [];

export default () => {
  const classNames = classnames('s-dungeon dungeon-os');

  return (
    <div className={classNames}>
      <Sidebar
        name="Other side"
        region="ardenweald"
        videoUrl="https://www.youtube.com/embed/PGnaNdSxPQg"></Sidebar>
      <Content data={fakeJson}></Content>
    </div>
  );
};
