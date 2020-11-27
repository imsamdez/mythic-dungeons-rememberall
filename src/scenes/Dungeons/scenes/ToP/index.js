import classnames from 'classnames';
import React from 'react';
import {Content} from '../../components/Content';
import {Sidebar} from '../../components/Sidebar';

const fakeJson = [];

export default () => {
  const classNames = classnames('s-dungeon dungeon-top');

  return (
    <div className={classNames}>
      <Sidebar
        name="Theater of Pain"
        region="maldraxxus"
        videoId="rP51ihvvch8"></Sidebar>
      <Content data={fakeJson}></Content>
    </div>
  );
};
