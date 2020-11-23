import React, { Component } from 'react';
import { ReactReduxContext, Provider } from 'react-redux';
import { Stage, Layer } from 'react-konva';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles/index';
import City from '../svgs/City';
import Dog from '../svgs/Dog';
import Hill from '../svgs/Hill';
import House from './House';
import LampPosts from './LampPosts';
import Moon from './Moon';
import MountainLeft from '../svgs/MountainLeft';
import MountainRight from '../svgs/MountainRight';
import Sidewalk from '../svgs/Sidewalk';
import TreeLeft from '../svgs/TreeLeft';
import TreeRight from '../svgs/TreeRight';
import {
  CRESCENT_MOON,
  FIXED_HEIGHT,
  FIXED_WIDTH,
  FOOTER_HEIGHT,
  SKY_COLOR,
} from '../../config/settings';
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
    city: {
      x: 0,
      y: 0,
      // scaleX: 0.1,
      // scaleY: 0.1,
    },
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
    mountainLeft: {
      x: 0,
      y: 0,
      // scaleX: 0.1,
      // scaleY: 0.1,
    },
    mountainRight: {
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
    treeLeft: {
      x: 0,
      y: 0,
      // scaleX: 0.1,
      // scaleY: 0.1,
    },
    treeRight: {
      x: 0,
      y: 0,
      // scaleX: 0.1,
      // scaleY: 0.1,
    },
  };

  static propTypes = {
    classes: PropTypes.shape({}).isRequired,
  };

  componentDidMount() {
    const scale = this.calculateScale();
    const {
      city,
      dog,
      hill,
      house,
      moon,
      mountainLeft,
      mountainRight,
      sidewalk,
      treeLeft,
      treeRight,
      width,
      height,
    } = this.state;
    const backgroundCity = {
      ...city,
      scaleX: 0.2 * scale,
      scaleY: 0.2 * scale,
      x: 0.426 * width,
      y: 0.632 * height,
    };
    const backgroundMountainLeft = {
      ...mountainLeft,
      scaleX: 6.0 * scale,
      scaleY: 4.0 * scale,
      x: 0.22 * width,
      y: 0.7 * height,
    };
    const backgroundMountainRight = {
      ...mountainRight,
      scaleX: 1.2 * scale,
      scaleY: 1.2 * scale,
      x: 0.925 * width,
      y: 0.768 * height,
    };
    const theDog = {
      ...dog, // next to the telescope
      scaleX: 0.23 * scale,
      scaleY: 0.23 * scale,
      x: 0.745 * width,
      y: 0.666 * height,
    };
    const newHill = {
      ...hill,
      scaleX: 0.117 * scale,
      scaleY: 0.117 * scale,
      x: 0.647 * width,
      y: 0.325 * height,
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
      y: 0.798 * height,
    };
    const backgroundTreeLeft = {
      ...treeLeft,
      scaleX: 0.9 * scale,
      scaleY: 0.9 * scale,
      x: 0.28 * width,
      y: 0.59 * height,
    };
    const backgroundTreeRight = {
      ...treeRight,
      scaleX: 0.05 * scale,
      scaleY: 0.05 * scale,
      x: 0.95 * width,
      y: 0.69 * height,
    };

    this.setState({
      city: backgroundCity,
      dog: theDog,
      hill: newHill,
      house: newHouse,
      moon: theMoon,
      mountainLeft: backgroundMountainLeft,
      mountainRight: backgroundMountainRight,
      sidewalk: mainSidewalk,
      treeLeft: backgroundTreeLeft,
      treeRight: backgroundTreeRight,
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

  render() {
    const {
      city,
      dog,
      hill,
      house,
      moon,
      mountainLeft,
      mountainRight,
      sidewalk,
      treeLeft,
      treeRight,
    } = this.state;

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
                  <MountainLeft
                    x={mountainLeft.x}
                    y={mountainLeft.y}
                    scaleX={mountainLeft.scaleX}
                    scaleY={mountainLeft.scaleY}
                  />
                  <City
                    x={city.x}
                    y={city.y}
                    scaleX={city.scaleX}
                    scaleY={city.scaleY}
                  />
                  <MountainRight
                    x={mountainRight.x}
                    y={mountainRight.y}
                    scaleX={mountainRight.scaleX}
                    scaleY={mountainRight.scaleY}
                  />
                  <TreeLeft
                    x={treeLeft.x}
                    y={treeLeft.y}
                    scaleX={treeLeft.scaleX}
                    scaleY={treeLeft.scaleX}
                  />
                  <TreeRight
                    x={treeRight.x}
                    y={treeRight.y}
                    scaleX={treeRight.scaleX}
                    scaleY={treeRight.scaleX}
                  />
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
                  <Sidewalk
                    x={sidewalk.x}
                    y={sidewalk.y}
                    scaleX={sidewalk.scaleX}
                    scaleY={sidewalk.scaleY}
                  />
                  {/* lamp posts have to go after sidewalk to render on top */}
                  <LampPosts />
                  <Stars />
                  <Moon phase={CRESCENT_MOON} moon={moon} />
                </Layer>
              </Provider>
            </Stage>
          )}
        </ReactReduxContext.Consumer>
      </div>
    );
  }
}

export default withStyles(Canvas.styles)(Canvas);
