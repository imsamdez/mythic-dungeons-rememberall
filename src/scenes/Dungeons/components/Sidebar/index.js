import classnames from 'classnames';
import {WOW_VERSION} from 'const';
import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom';
import {ROUTE_HOME} from 'router/routes.const';
import YouTubePlayer from 'youtube-player';
import {EVENT_SEEK_TO, PlayerEmitter} from './player.emitter';
import './_Styles.scss';

const REGIONS = ['bastion', 'maldraxxus', 'ardenweald', 'revendreth'];

export class Sidebar extends React.Component {
  constructor() {
    super();
    this.player = null;
    this.subPlayerEventEmitter = null;
  }

  handleEventSeekTo = ({time}) => this.player.seekTo(time);

  render() {
    const {region, name} = this.props;
    const classNames = classnames('dg-sidebar', {
      'region-bastion': region === 'bastion',
      'region-maldraxxus': region === 'maldraxxus',
      'region-ardenweald': region === 'ardenweald',
      'region-revendreth': region === 'revendreth',
    });

    return (
      <div className={classNames}>
        <div className="top">
          <Link to={ROUTE_HOME}>
            <i className="icon-chevron-left"></i> Back to home
          </Link>
          <div className="label">
            PATCH <span className="value">{WOW_VERSION}</span>
          </div>
        </div>
        <div className="title">
          <div className="region">{region}</div>
          {name}
        </div>
        <div className="video-wrapper">
          <div id="youtube_player"></div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    const {videoId} = this.props;

    this.player = YouTubePlayer('youtube_player', {
      width: 560,
      height: 315,
      videoId,
    });
    this.subPlayerEventEmitter = PlayerEmitter.addListener(
      EVENT_SEEK_TO,
      this.handleEventSeekTo
    );
  }
  componentWillUnmount() {
    if (this.subPlayerEventEmitter != null) {
      this.subPlayerEventEmitter.remove();
    }
  }
}

Sidebar.propTypes = {
  region: PropTypes.oneOf(REGIONS).isRequired,
  name: PropTypes.string.isRequired,
  videoUrl: PropTypes.string.isRequired,
};
