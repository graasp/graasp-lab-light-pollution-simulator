import React from 'react';
import { Circle } from 'react-konva';
import {
  DEFAULT_COLOR_RGBA,
  NUM_CIRCLES_IN_HALO,
  SIZE_LARGE,
  SIZE_SMALL,
} from '../../config/settings';

const calculateSize = (size, scale = 1) => {
  switch (size) {
    case SIZE_SMALL:
      return 80 * scale;
    case SIZE_LARGE:
    default:
      return 150 * scale;
  }
};

const calculateRadius = (scale = 1) => {
  return scale * 20;
};

const Halo = ({ size, x, y }) => {
  const RADIUS_WIDTH_FACTOR = 10;
  // this is the location where the hidden object that casts a shadow is being placed
  const HIDDEN_OBJECT_OFFSET = 100000;
  return Array(NUM_CIRCLES_IN_HALO)
    .fill()
    .map((e, i) => {
      return (
        <Circle
          x={x - HIDDEN_OBJECT_OFFSET}
          y={y - calculateSize(size) - calculateRadius() - HIDDEN_OBJECT_OFFSET}
          radius={calculateRadius() + i * RADIUS_WIDTH_FACTOR}
          fill={DEFAULT_COLOR_RGBA}
          // emulating the law of inverse square, but actually exponentiating to one
          shadowColor={`rgba(248, 148, 6, ${1 / (i + 1) ** 1})`}
          shadowBlur={5}
          shadowOpacity={0.1}
          shadowOffset={{ x: HIDDEN_OBJECT_OFFSET, y: HIDDEN_OBJECT_OFFSET }}
        />
      );
    });
};

export default Halo;
