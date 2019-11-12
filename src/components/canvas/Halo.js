import React from 'react';
import { Arc, Circle } from 'react-konva';
import {
  DEFAULT_COLOR_RGBA,
  FULL_SHIELDING,
  HALF_SHIELDING,
  TOP_SHIELDING,
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

  // these values are constant for all rings
  const shadowBlur = 5;
  const shadowOpacity = 0.1;
  const calculatedSize = calculateSize(size);
  const calculatedRadius = calculateRadius();
  return Array(NUM_CIRCLES_IN_HALO)
    .fill()
    .map((e, i) => {
      // emulating the law of inverse square,
      // but actually exponentiating to 0.8 to reinforce the color of light
      const color = `rgba(254, 146, 0, ${1 / (i + 1) ** 0.8})`;
      const key = `arc-${i}`;
      switch (shielding) {
        case FULL_SHIELDING:
          return (
            <Arc
              x={x - HIDDEN_OBJECT_OFFSET}
              y={
                y -
                calculatedSize -
                calculatedRadius * 1.3 -
                HIDDEN_OBJECT_OFFSET
              }
              key={key}
              fill={DEFAULT_COLOR_RGBA}
              innerRadius={0}
              outerRadius={calculatedRadius + i * RADIUS_WIDTH_FACTOR}
              angle={80}
              rotation={49}
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
                y - calculatedSize - calculatedRadius - HIDDEN_OBJECT_OFFSET + 3
              }
              fill={DEFAULT_COLOR_RGBA}
              innerRadius={0}
              outerRadius={calculatedRadius + i * RADIUS_WIDTH_FACTOR}
              angle={180}
              key={key}
              shadowColor={color}
              shadowBlur={shadowBlur}
              shadowOpacity={shadowOpacity}
              shadowOffset={{
                x: HIDDEN_OBJECT_OFFSET,
                y: HIDDEN_OBJECT_OFFSET,
              }}
            />
          );
        case TOP_SHIELDING:
          return (
            <Arc
              x={x - HIDDEN_OBJECT_OFFSET}
              y={y - calculatedSize - calculatedRadius - HIDDEN_OBJECT_OFFSET}
              fill={DEFAULT_COLOR_RGBA}
              innerRadius={0}
              outerRadius={calculatedRadius + i * RADIUS_WIDTH_FACTOR}
              angle={240}
              rotation={-30}
              key={key}
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
              y={y - calculatedSize - calculatedRadius - HIDDEN_OBJECT_OFFSET}
              radius={calculatedRadius + i * RADIUS_WIDTH_FACTOR}
              fill={DEFAULT_COLOR_RGBA}
              key={key}
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
