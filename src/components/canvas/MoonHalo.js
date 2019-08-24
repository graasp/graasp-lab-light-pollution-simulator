import React from 'react';
import { Circle } from 'react-konva';
import {
  NUM_ITERATIONS_TO_SKIP,
  CRESCENT_MOON,
  NUM_CIRCLES_IN_HALO,
  SIZE_LARGE,
  SIZE_SMALL,
  DEFAULT_COLOR_MOON_RGBA,
  FULL_MOON,
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

const MoonHalo = ({ size, x, y, phase }) => {
  const RADIUS_WIDTH_FACTOR = 10;
  // this is the location where the hidden
  // object that casts a shadow is being placed
  const HIDDEN_OBJECT_OFFSET = 100000;
  return Array(NUM_CIRCLES_IN_HALO)
    .fill()
    .map((e, i) => {
      // skip first iterations to avoid having too much light in the center
      if (i < NUM_ITERATIONS_TO_SKIP) {
        return null;
      }
      const color = `rgba(211, 211, 211, ${1 / (i + 1) ** 1})`;
      const shadowBlur = 5;
      const shadowOpacity = 0.1;
      switch (phase) {
        case CRESCENT_MOON:
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
              fill={DEFAULT_COLOR_MOON_RGBA}
              // emulating the law of inverse square,
              // but actually exponentiating to one
              shadowColor={color}
              shadowBlur={shadowBlur}
              shadowOpacity={shadowOpacity}
              shadowOffset={{
                x: HIDDEN_OBJECT_OFFSET,
                y: HIDDEN_OBJECT_OFFSET,
              }}
            />
          );
        case FULL_MOON:
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
              fill={DEFAULT_COLOR_MOON_RGBA}
              // emulating the law of inverse square,
              // but actually exponentiating to one
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

export default MoonHalo;
