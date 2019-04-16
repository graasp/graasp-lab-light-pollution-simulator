import React, { Component } from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

class Canvas extends Component {
  state = {
    color: 'green',
  };

  handleClick = () => {
    this.setState({
      color: Konva.Util.getRandomColor(),
    });
  };

  render() {
    const { color } = this.state;
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text="Try click on rect" />
          <Rect
            x={20}
            y={20}
            width={50}
            height={50}
            fill={color}
            shadowBlur={5}
            onClick={this.handleClick}
          />
        </Layer>
      </Stage>
    );
  }
}

export default Canvas;
