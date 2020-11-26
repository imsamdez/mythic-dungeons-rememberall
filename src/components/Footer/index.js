import React from 'react';
import './_Styles.scss';

export default () => {
  return (
    <div className="footer">
      <div>
        <a href="https://github.com/imsamdez/mythic-dungeons-rememberall">
          Open source
        </a>{' '}
        project made by a <a href="https://twitter.com/samnameless">wower</a>
      </div>
      <div className="separator"></div>
      <div>
        inspired from videos of a{' '}
        <a href="https://twitter.com/oonolivewow">streamer</a>
      </div>
    </div>
  );
};
