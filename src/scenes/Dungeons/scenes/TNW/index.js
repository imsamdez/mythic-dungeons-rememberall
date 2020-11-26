import classnames from 'classnames';
import React from 'react';
import {Content} from '../../components/Content';
import {Sidebar} from '../../components/Sidebar';

const fakeJson = [];

export default () => {
  const classNames = classnames('s-dungeon dungeon-tnw');

  return (
    <div className={classNames}>
      <Sidebar
        name="The necrotic wake"
        region="bastion"
        videoUrl="https://www.youtube.com/embed/y-84bpUWnXc"></Sidebar>
      <Content data={fakeJson}></Content>
    </div>
  );
};
