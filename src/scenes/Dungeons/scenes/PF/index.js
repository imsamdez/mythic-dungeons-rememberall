import classnames from 'classnames';
import React from 'react';
import {Content} from '../../components/Content';
import {Sidebar} from '../../components/Sidebar';
import data from './data.json';

export default () => {
  const classNames = classnames('s-dungeon dungeon-pf');

  return (
    <div className={classNames}>
      <Sidebar
        name="Plaguefall"
        region="maldraxxus"
        videoUrl="https://www.youtube.com/embed/ZsxNwwTXZFk"
        videoId="ZsxNwwTXZFk"></Sidebar>
      <Content data={data}></Content>
    </div>
  );
};
