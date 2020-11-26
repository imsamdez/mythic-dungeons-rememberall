import classnames from 'classnames';
import React from 'react';
import {Content} from '../../components/Content';
import {Sidebar} from '../../components/Sidebar';

const fakeJson = [];

export default () => {
  const classNames = classnames('s-dungeon dungeon-hoa');

  return (
    <div className={classNames}>
      <Sidebar
        name="Halls of Atonement"
        region="revendreth"
        videoUrl="https://www.youtube.com/embed/tGiXZq6Gt3M"></Sidebar>
      <Content data={fakeJson}></Content>
    </div>
  );
};
