import classnames from 'classnames';
import React from 'react';
import {Content} from '../../components/Content';
import {Sidebar} from '../../components/Sidebar';

const fakeJson = [];

export default () => {
  const classNames = classnames('s-dungeon dungeon-soa');

  return (
    <div className={classNames}>
      <Sidebar
        name="Spires of Ascension"
        region="bastion"
        videoId="jeC0peYOB8E"></Sidebar>
      <Content data={fakeJson}></Content>
    </div>
  );
};
