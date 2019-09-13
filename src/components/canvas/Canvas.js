import React, { Component } from 'react';
import Konva from 'konva';
import { connect, ReactReduxContext, Provider } from 'react-redux';
import { Stage, Layer } from 'react-konva';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles/index';
import Dog from '../svgs/Dog';
import Hill from '../svgs/Hill';
import House from './House';
import LampPosts from './LampPosts';
import Moon from './Moon';
import Sidewalk from '../svgs/Sidewalk';
import { addLampPost } from '../../actions';
import {
  BUFFER_WIDTH,
  CRESCENT_MOON,
  FIXED_HEIGHT,
  FIXED_WIDTH,
  FOOTER_HEIGHT,
  MAX_LAMP_POSTS,
  SKY_COLOR,
} from '../../config/settings';
import { showErrorToast } from '../../utils/toasts';
import {
  LAMP_POST_TOO_CLOSE_MESSAGE,
  TOO_MANY_LAMP_POSTS_MESSAGE,
} from '../../constants/messages';
import Stars from './Stars';

class Canvas extends Component {
  static styles = {
    canvas: {
      backgroundColor: SKY_COLOR,
    },
  };

  state = {
    width: FIXED_WIDTH,
    height: FIXED_HEIGHT,
    dog: {
      x: 0,
      y: 0,
      // scaleX: 0.1,
      // scaleY: 0.1,
    },
    hill: {
      x: 0,
      y: 0,
      // scaleX: 0.1,
      // scaleY: 0.1,
    },
    house: {
      // x: 0,
      // y: 0,
      // scaleX: 0.1,
      // scaleY: 0.1,
    },
    moon: {
      x: 0,
      y: 0,
      // scaleX: 0.1,
      // scaleY: 0.1,
    },
    sidewalk: {
      x: 0,
      y: 0,
      // scaleX: 0.1,
      // scaleY: 0.1,
    },
  };

  static propTypes = {
    classes: PropTypes.shape({}).isRequired,
    dispatchAddLampPost: PropTypes.func.isRequired,
    lampPosts: PropTypes.arrayOf(PropTypes.shape({ x: PropTypes.number }))
      .isRequired,
    lampPostActivity: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    const scale = this.calculateScale();
    const { dog, hill, house, moon, sidewalk, width, height } = this.state;
    const theDog = {
      ...dog, // next to the telescope
      scaleX: 1.15 * scale,
      scaleY: 1.15 * scale,
      x: 0.77 * width,
      y: 0.697 * height,
    };
    const newHill = {
      ...hill,
      scaleX: 2.1 * scale,
      scaleY: 1.5 * scale,
      x: 0.647 * width,
      y: 0.386 * height,
    };
    const newHouse = {
      ...house,
      scaleX: 2.0 * scale,
      scaleY: 1.6 * scale,
      x: 0.001 * width,
      y: 0.509 * height,
    };
    // we need to know moon width to calculate the position of its halo
    const theMoon = {
      ...moon,
      scaleX: 3.0 * scale,
      scaleY: 3.0 * scale,
      x: 0.65 * width,
      y: 0.15 * height,
      width: scale * 3.0 * 100,
      height: scale * 3.0 * 400,
    };
    const mainSidewalk = {
      ...sidewalk,
      scaleX: 2.18 * scale,
      scaleY: 3.8 * scale,
      x: 0.299 * width,
      y: 0.795 * height,
    };

    this.setState({
      dog: theDog,
      hill: newHill,
      house: newHouse,
      moon: theMoon,
      sidewalk: mainSidewalk,
    });
  }

  /**
   * This is a sample way of calculating the scale to be used by objects
   * using only the height of the window.
   * @returns {number}
   */
  calculateScale = () => {
    const { height } = this.state;
    const factor = 250;
    return factor / height;
  };

  isInBottomHalf = clientY => {
    const { height } = this.state;
    return clientY > height / 2;
  };

  isInLeftThird = clientX => {
    const { width } = this.state;
    return clientX < width / 3;
  };

  handleClick = ({ evt, target }) => {
    const { clientX, clientY } = evt;

    // commands after this check only apply to the right two thirds of the canvas
    if (this.isInLeftThird(clientX)) {
      return false;
    }

    // commands after this check only apply to the bottom half of the canvas
    if (!this.isInBottomHalf(clientY)) {
      return false;
    }

    const { dispatchAddLampPost, lampPosts, lampPostActivity } = this.props;

    // do not consider clicks on the lamp posts
    if (target instanceof Konva.Line) {
      return false;
    }

    // do not consider clicks on lamps
    if (target instanceof Konva.Circle) {
      return false;
    }

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
      if (Math.abs(x - clientX) < BUFFER_WIDTH) {
        valid = false;
      }
    });
    if (valid) {
      dispatchAddLampPost({ x: clientX });
      return true;
    }

    showErrorToast(LAMP_POST_TOO_CLOSE_MESSAGE);
    return false;
  };

  render() {
    const { dog, hill, house, moon, sidewalk } = this.state;

    const { classes } = this.props;

    return (
      <div className={classes.canvas}>
        <ReactReduxContext.Consumer>
          {({ store }) => (
            <Stage
              width={FIXED_WIDTH}
              height={FIXED_HEIGHT - FOOTER_HEIGHT}
              onClick={this.handleClick}
              onTap={this.handleClick}
            >
              <Provider store={store}>
                <Layer>
                  <Dog
                    x={dog.x}
                    y={dog.y}
                    scaleX={dog.scaleX}
                    scaleY={dog.scaleY}
                  />
                  <Hill
                    x={hill.x}
                    y={hill.y}
                    scaleX={hill.scaleX}
                    scaleY={hill.scaleY}
                  />
                  <House house={house} />
                  <LampPosts />
                  <Moon phase={CRESCENT_MOON} moon={moon} />
                  <Sidewalk
                    x={sidewalk.x}
                    y={sidewalk.y}
                    scaleX={sidewalk.scaleX}
                    scaleY={sidewalk.scaleY}
                  />
                  <Stars />
                </Layer>
              </Provider>
            </Stage>
          )}
        </ReactReduxContext.Consumer>
      </div>
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
)(Canvas);

export default withStyles(Canvas.styles)(ConnectedComponent);
