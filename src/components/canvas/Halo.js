import React from 'react';
import { Arc, Circle } from 'react-konva';
import {
  DEFAULT_COLOR_RGBA,
  FULL_SHIELDING,
  HALF_SHIELDING,
  NO_SHIELDING,
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

const Halo = ({ size, x, y, shielding }) => {
  const RADIUS_WIDTH_FACTOR = 10;
  // this is the location where the hidden
  // object that casts a shadow is being placed
  const HIDDEN_OBJECT_OFFSET = 100000;
  return Array(NUM_CIRCLES_IN_HALO)
    .fill()
    .map((e, i) => {
      // emulating the law of inverse square,
      // but actually exponentiating to one
      const color = `rgba(248, 148, 6, ${1 / (i + 1) ** 1})`;
      const shadowBlur = 5;
      const shadowOpacity = 0.1;
      switch (shielding) {
        case FULL_SHIELDING:
          return (
            <Arc
              x={x - HIDDEN_OBJECT_OFFSET}
              y={
                y -
                calculateSize(size) -
                calculateRadius() * 2 -
                HIDDEN_OBJECT_OFFSET
              }
              fill={DEFAULT_COLOR_RGBA}
              innerRadius={0}
              outerRadius={calculateRadius() + i * RADIUS_WIDTH_FACTOR}
              angle={100}
              rotation={40}
              shadowColor={color}
              shadowBlur={shadowBlur}
              shadowOpacity={shadowOpacity}
              shadowOffset={{
                x: HIDDEN_OBJECT_OFFSET,
                y: HIDDEN_OBJECT_OFFSET,
              }}
            />
          );
        case HALF_SHIELDING:
          return (
            <Arc
              x={x - HIDDEN_OBJECT_OFFSET}
              y={
                y -
                calculateSize(size) -
                calculateRadius() -
                HIDDEN_OBJECT_OFFSET
              }
              fill={DEFAULT_COLOR_RGBA}
              innerRadius={0}
              outerRadius={calculateRadius() + i * RADIUS_WIDTH_FACTOR}
              angle={180}
              shadowColor={color}
              shadowBlur={shadowBlur}
              shadowOpacity={shadowOpacity}
              shadowOffset={{
                x: HIDDEN_OBJECT_OFFSET,
                y: HIDDEN_OBJECT_OFFSET,
              }}
            />
          );
        case NO_SHIELDING:
        default:
          return (
            <Circle
              x={x - HIDDEN_OBJECT_OFFSET}
              y={
                y -
                calculateSize(size) -
                calculateRadius() -
                HIDDEN_OBJECT_OFFSET
              }
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
      }
    });
};

export default Halo;
