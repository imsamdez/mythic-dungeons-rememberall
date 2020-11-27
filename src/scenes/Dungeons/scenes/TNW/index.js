import classnames from 'classnames';
import React from 'react';
import {Content} from '../../components/Content';
import {Sidebar} from '../../components/Sidebar';
import data from './data.json';

export default () => {
  const classNames = classnames('s-dungeon dungeon-tnw');

  return (
    <div className={classNames}>
      <Sidebar
        name="The necrotic wake"
        region="bastion"
        videoId="y-84bpUWnXc"></Sidebar>
      <Content data={data}></Content>
    </div>
  );
};
