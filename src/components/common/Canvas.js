import React, { Component } from 'react';
import { Stage, Layer } from 'react-konva';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tree from '../svgs/Tree';

class Canvas extends Component {
  static styles = {
    canvas: {
      backgroundColor: 'white',
    },
  };

  state = {
    height: window.innerHeight,
    width: window.innerWidth,
    tree: {
      x: 100,
      y: 100,
      scaleX: 0.25,
      scaleY: 0.25,
    },
  };

  static propTypes = {
    classes: PropTypes.shape({}).isRequired,
  };

  componentDidMount() {
    const scale = this.calculateScale();
    const { tree, height, width } = this.state;
    const newTree = {
      ...tree,
      scaleX: scale,
      scaleY: scale,
      y: height - 350,
      x: width - 500,
    };

    this.setState({ tree: newTree });
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
    const { tree } = this.state;

    const { classes } = this.props;

    return (
      <div className={classes.canvas}>
        <Stage width={window.innerWidth} height={window.innerHeight - 100}>
          <Layer>
            <Tree
              x={tree.x}
              y={tree.y}
              scaleX={tree.scaleX}
              scaleY={tree.scaleY}
            />
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default withStyles(Canvas.styles)(Canvas);
