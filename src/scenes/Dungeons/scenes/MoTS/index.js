import classnames from 'classnames';
import React from 'react';
import {Content} from '../../components/Content';
import {Sidebar} from '../../components/Sidebar';

const fakeJson = [];

export default () => {
  const classNames = classnames('s-dungeon dungeon-mots');

  return (
    <div className={classNames}>
      <Sidebar
        name="Mist of Tirna Scithe"
        region="ardenweald"
        videoUrl="https://www.youtube.com/embed/tcdBT17n5oQ"></Sidebar>
      <Content data={fakeJson}></Content>
    </div>
  );
};
