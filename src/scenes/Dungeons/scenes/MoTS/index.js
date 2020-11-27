import classnames from 'classnames';
import React from 'react';
import {Content} from '../../components/Content';
import {Sidebar} from '../../components/Sidebar';
import data from './data.json';

export default () => {
  const classNames = classnames('s-dungeon dungeon-mots');

  return (
    <div className={classNames}>
      <Sidebar
        name="Mist of Tirna Scithe"
        region="ardenweald"
        videoId="tcdBT17n5oQ"></Sidebar>
      <Content data={data}></Content>
    </div>
  );
};
