import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Line } from 'react-konva';
import {
  BUFFER_WIDTH,
  MAX_LAMP_POSTS,
  SIDEWALK_COLOR,
} from '../../config/settings';
import { showErrorToast } from '../../utils/toasts';
import {
  LAMP_POST_TOO_CLOSE_MESSAGE,
  TOO_MANY_LAMP_POSTS_MESSAGE,
} from '../../constants/messages';
import { addLampPost } from '../../actions';

class Sidewalk extends Component {
  static SIDEWALK_LENGTH = 657;

  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    fill: PropTypes.string,
    dispatchAddLampPost: PropTypes.func.isRequired,
    lampPosts: PropTypes.arrayOf(PropTypes.shape({ x: PropTypes.number }))
      .isRequired,
    lampPostActivity: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    fill: SIDEWALK_COLOR,
  };

  handleClick = ({ evt }) => {
    const { pageX } = evt;

    const { dispatchAddLampPost, lampPosts, lampPostActivity } = this.props;

    // do not do anything if there is still activity going on
    if (lampPostActivity) {
      return false;
    }

    if (lampPosts.length >= MAX_LAMP_POSTS) {
      showErrorToast(TOO_MANY_LAMP_POSTS_MESSAGE);
      return false;
    }

    // ensure that click is not within a safe zone around existing post
    let valid = true;
    lampPosts.forEach(({ x }) => {
      if (Math.abs(x - pageX) < BUFFER_WIDTH) {
        valid = false;
      }
    });
    if (valid) {
      dispatchAddLampPost({ x: pageX });
      return true;
    }

    showErrorToast(LAMP_POST_TOO_CLOSE_MESSAGE);
    return false;
  };

  render() {
    const { x, y, fill } = this.props;

    return (
      <Fragment>
        <Line
          points={[x, y, x + Sidewalk.SIDEWALK_LENGTH, y]}
          onClick={this.handleClick}
          onTap={this.handleClick}
          stroke={fill}
          strokeWidth={4}
        />
        <Line
          points={[x, y, x + Sidewalk.SIDEWALK_LENGTH, y]}
          onClick={this.handleClick}
          onTap={this.handleClick}
          stroke="transparent"
          strokeWidth={200}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ lampPost }) => {
  const { content, activity } = lampPost;
  return {
    lampPosts: content,
    lampPostActivity: activity,
  };
};

const mapDispatchToProps = {
  dispatchAddLampPost: addLampPost,
};

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidewalk);

export default ConnectedComponent;
