import React, { Component } from 'react';
import Konva from 'konva';
import { connect, ReactReduxContext, Provider } from 'react-redux';
import { Stage, Layer } from 'react-konva';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles/index';
import BushTypeA from '../svgs/BushTypeA';
import BushTypeB from '../svgs/BushTypeB';
import GrassTypeA from '../svgs/GrassTypeA';
import GrassTypeB from '../svgs/GrassTypeB';
import GrassTypeC from '../svgs/GrassTypeC';
import GrassTypeD from '../svgs/GrassTypeD';
import Hill from '../svgs/Hill';
import House from '../svgs/House';
import LampPosts from './LampPosts';
import Moon from '../svgs/Moon';
import Tree from '../svgs/Tree';
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
    bushTypeA: {
      x: 0,
      y: 0,
      scaleX: 0.1,
      scaleY: 0.1,
    },
    bushTypeB: {
      x: 0,
      y: 0,
      scaleX: 0.1,
      scaleY: 0.1,
    },
    grassTypeAItem1: {
      x: 0,
      y: 0,
      scaleX: 1.0,
      scaley: 1.0,
    },
    grassTypeAItem2: {
      x: 0,
      y: 0,
      scaleX: 1.0,
      scaley: 1.0,
    },
    grassTypeB: {
      x: 0,
      y: 0,
      scaleX: 1.0,
      scaley: 1.0,
    },
    grassTypeC: {
      x: 0,
      y: 0,
      scaleX: 1.0,
      scaley: 1.0,
    },
    grassTypeD: {
      x: 0,
      y: 0,
      scaleX: 1.0,
      scaley: 1.0,
    },
    hill: {
      x: 0,
      y: 0,
      scaleX: 1.0,
      scaleY: 1.0,
    },
    house: {
      x: 0,
      y: 0,
      scaleX: 0.9,
      scaleY: 0.5,
    },
    moon: {
      x: 0,
      y: 0,
      scaleX: 1.0,
      scaleY: 1.0,
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
    const {
      bushTypeA,
      bushTypeB,
      grassTypeAItem1,
      grassTypeAItem2,
      grassTypeB,
      grassTypeC,
      grassTypeD,
      hill,
      house,
      moon,
      tree,
      width,
      height,
    } = this.state;
    const newBushTypeA = {
      ...bushTypeA,
      scaleX: 0.8 * scale,
      scaleY: 0.5 * scale,
      y: height - 200,
      x: width - 1950,
    };
    const newBushTypeB = {
      ...bushTypeB,
      scaleX: 0.2 * scale,
      scaleY: 0.2 * scale,
      y: height - 177,
      x: width - 505,
    };
    const newGrassTypeAItem1 = {
      ...grassTypeAItem1,
      scaleX: 0.12 * scale,
      scaleY: 0.12 * scale,
      y: height - 200,
      x: width - 425,
    };
    const newGrassTypeAItem2 = {
      ...grassTypeAItem2,
      scaleX: 0.12 * scale,
      scaleY: 0.12 * scale,
      y: height - 255,
      x: width - 260,
    };
    const newGrassTypeB = {
      ...grassTypeB,
      scaleX: 0.15 * scale,
      scaleY: 0.15 * scale,
      y: height - 183,
      x: width - 1470,
    };
    const newGrassTypeC = {
      ...grassTypeC,
      scaleX: 0.15 * scale,
      scaleY: 0.15 * scale,
      y: height - 225,
      x: width - 45,
    };
    const newGrassTypeD = {
      ...grassTypeD,
      scaleX: 0.25 * scale,
      scaleY: 0.2 * scale,
      y: height - 243,
      x: width - 255,
    };
    const newHill = {
      ...hill,
      scaleX: 2.3 * scale,
      scaleY: 1.5 * scale,
      y: height - 330,
      x: width - 600,
    };
    const newHouse = {
      ...house,
      scaleX: 1.8 * scale,
      scaleY: 1.9 * scale,
      y: height - 480,
      x: width - 1935,
    };
    const newMoon = {
      ...moon,
      scaleX: 3.0 * scale,
      scaleY: 3.0 * scale,
      y: height - 790,
      x: width - 650,
    };
    const newTree = {
      ...tree,
      scaleX: scale,
      scaleY: 1.3 * scale,
      y: height - 552,
      x: width - 410,
    };

    this.setState({
      bushTypeA: newBushTypeA,
      bushTypeB: newBushTypeB,
      grassTypeAItem1: newGrassTypeAItem1,
      grassTypeAItem2: newGrassTypeAItem2,
      grassTypeB: newGrassTypeB,
      grassTypeC: newGrassTypeC,
      grassTypeD: newGrassTypeD,
      hill: newHill,
      house: newHouse,
      moon: newMoon,
      tree: newTree,
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
    const {
      bushTypeA,
      bushTypeB,
      grassTypeAItem1,
      grassTypeAItem2,
      grassTypeB,
      grassTypeC,
      grassTypeD,
      hill,
      house,
      moon,
      tree,
    } = this.state;

    const { classes } = this.props;

    return (
      <div className={classes.canvas}>
        <ReactReduxContext.Consumer>
          {({ store }) => (
            <Stage
              width={window.innerWidth}
              height={window.innerHeight - 150}
              onClick={this.handleClick}
            >
              <Provider store={store}>
                <Layer>
                  <BushTypeA
                    x={bushTypeA.x}
                    y={bushTypeA.y}
                    scaleX={bushTypeA.scaleX}
                    scaleY={bushTypeA.scaleY}
                  />
                  <BushTypeB
                    x={bushTypeB.x}
                    y={bushTypeB.y}
                    scaleX={bushTypeB.scaleX}
                    scaleY={bushTypeB.scaleY}
                  />
                  <GrassTypeA
                    x={grassTypeAItem1.x}
                    y={grassTypeAItem1.y}
                    scaleX={grassTypeAItem1.scaleX}
                    scaleY={grassTypeAItem1.scaleY}
                  />
                  <GrassTypeA
                    x={grassTypeAItem2.x}
                    y={grassTypeAItem2.y}
                    scaleX={grassTypeAItem2.scaleX}
                    scaleY={grassTypeAItem2.scaleY}
                  />
                  <GrassTypeB
                    x={grassTypeB.x}
                    y={grassTypeB.y}
                    scaleX={grassTypeB.scaleX}
                    scaleY={grassTypeB.scaleY}
                  />
                  <GrassTypeC
                    x={grassTypeC.x}
                    y={grassTypeC.y}
                    scaleX={grassTypeC.scaleX}
                    scaleY={grassTypeC.scaleY}
                  />
                  <GrassTypeD
                    x={grassTypeD.x}
                    y={grassTypeD.y}
                    scaleX={grassTypeD.scaleX}
                    scaleY={grassTypeD.scaleY}
                  />
                  <Hill
                    x={hill.x}
                    y={hill.y}
                    scaleX={hill.scaleX}
                    scaleY={hill.scaleY}
                  />
                  <House
                    x={house.x}
                    y={house.y}
                    scaleX={house.scaleX}
                    scaleY={house.scaleY}
                  />
                  <LampPosts />
                  <Moon
                    x={moon.x}
                    y={moon.y}
                    scaleX={moon.scaleX}
                    scaleY={moon.scaleY}
                  />
                  <Stars />
                  <Tree
                    x={tree.x}
                    y={tree.y}
                    scaleX={tree.scaleX}
                    scaleY={tree.scaleY}
                  />
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
