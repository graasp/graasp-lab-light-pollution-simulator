import React, { Component } from 'react';
import Konva from 'konva';
import { connect, ReactReduxContext, Provider } from 'react-redux';
import { Stage, Layer } from 'react-konva';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles/index';
import Tree from '../svgs/Tree';
import House from '../svgs/House';
import LampPosts from './LampPosts';
import { addLampPost } from '../../actions';
import { BUFFER_WIDTH, MAX_LAMP_POSTS, SKY_COLOR } from '../../config/settings';
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
    height: window.innerHeight,
    width: window.innerWidth,
    house: {
      x: 0,
      y: 0,
      scaleX: 0.9,
      scaleY: 0.5,
    },
    tree: {
      x: 100,
      y: 120,
      scaleX: 0.25,
      scaleY: 0.25,
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
    const { house, tree, height, width } = this.state;
    const newHouse = {
      ...house,
      scaleX: 1.7 * scale,
      scaleY: 1.6 * scale,
      y: height - 376,
      x: height - 900,
    };
    const newTree = {
      ...tree,
      scaleX: scale,
      scaleY: 1.3 * scale,
      y: height - 410, //350
      x: width - 500,
    };

    this.setState({ house: newHouse, tree: newTree });
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

  handleClick = ({ evt, target }) => {
    const { clientX } = evt;
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
    const { house } = this.state;

    const { tree } = this.state;

    const { classes } = this.props;

    return (
      <div className={classes.canvas}>
        <ReactReduxContext.Consumer>
          {({ store }) => (
            <Stage
              width={window.innerWidth}
              height={window.innerHeight - 100}
              onClick={this.handleClick}
            >
              <Provider store={store}>
                <Layer>
                  <Stars />
                  <House
                    x={house.x}
                    y={house.y}
                    scaleX={house.scaleX}
                    scaleY={house.scaleY}
                  />
                  <Tree
                    x={tree.x}
                    y={tree.y}
                    scaleX={tree.scaleX}
                    scaleY={tree.scaleY}
                  />
                  <LampPosts />
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
