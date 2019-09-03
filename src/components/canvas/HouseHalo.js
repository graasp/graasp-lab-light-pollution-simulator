import React from 'react';
import { Circle } from 'react-konva';
import { DEFAULT_COLOR_RGBA, NUM_CIRCLES_IN_HALO } from '../../config/settings';

const calculateRadius = (scale = 1) => {
  return scale * 20;
};

const HouseHalo = ({ x, y }) => {
  const HOUSE_WIDTH = 600;
  const HOUSE_HEIGHT = 400;
  const RADIUS_WIDTH_FACTOR = 10;
  // this is the location where the hidden
  // object that casts a shadow is being placed
  const HIDDEN_OBJECT_OFFSET = 100000;
  return Array(NUM_CIRCLES_IN_HALO)
    .fill()
    .map((e, i) => {
      // emulating the law of inverse square,
      // but actually exponentiating to one
      const color = `rgba(248, 148, 6, ${1 / (i + 1) ** 1.4})`;
      const shadowBlur = 5;
      const shadowOpacity = 0.3;

      return (
        <Circle
          x={x - HIDDEN_OBJECT_OFFSET + HOUSE_WIDTH / 2}
          y={y + HOUSE_HEIGHT / 2 - calculateRadius() - HIDDEN_OBJECT_OFFSET}
          radius={calculateRadius() + i * RADIUS_WIDTH_FACTOR}
          fill={DEFAULT_COLOR_RGBA}
          shadowColor={color}
          shadowBlur={shadowBlur}
          shadowOpacity={shadowOpacity}
          shadowOffset={{
            x: HIDDEN_OBJECT_OFFSET,
            y: HIDDEN_OBJECT_OFFSET,
          }}
        />
      );
    });
};

export default HouseHalo;
