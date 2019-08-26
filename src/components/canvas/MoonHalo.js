import React from 'react';
import { Circle } from 'react-konva';
import {
  NUM_ITERATIONS_TO_SKIP, // might need to define more of these variables according to phase
  CRESCENT_MOON,
  NUM_CIRCLES_IN_HALO,
  DEFAULT_COLOR_MOON_RGBA,
  FULL_MOON,
} from '../../config/settings';

const calculateRadius = (scale = 1) => {
  return scale * 20;
};

const MoonHalo = ({ x, y, phase }) => {
  const RADIUS_WIDTH_FACTOR = 10;
  // this is the location where the hidden
  // object that casts a shadow is being placed
  const HIDDEN_OBJECT_OFFSET = 100000;
  return Array(NUM_CIRCLES_IN_HALO)
    .fill()
    .map((e, i) => {
      // skip first iterations to avoid having too much light in the center
      // FIX: move this `if' inside the `switch (phase)' because
      // NUM_ITERATIONS_TO_SKIP will depend on the phase of the Moon
      if (i < NUM_ITERATIONS_TO_SKIP) {
        return null;
      }
      // these variables depend on phase of the Moon
      // default values
      // emulating the law of inverse square,
      let color = `rgba(211, 211, 211, ${1 / (i + 1) ** 0.5})`;
      let shadowBlur = 5;
      let shadowOpacity = 0.1;
      switch (phase) {
        case CRESCENT_MOON:
          // emulating the law of inverse square,
          // but actually exponentiating to one
          color = `rgba(211, 211, 211, ${1 / (i + 1) ** 1.2})`;
          shadowBlur = 5;
          shadowOpacity = 0.1;
          return (
            <Circle
              x={x - HIDDEN_OBJECT_OFFSET}
              y={y - calculateRadius() - HIDDEN_OBJECT_OFFSET}
              radius={calculateRadius() + i * RADIUS_WIDTH_FACTOR}
              fill={DEFAULT_COLOR_MOON_RGBA}
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
              y={y - calculateRadius() - HIDDEN_OBJECT_OFFSET}
              radius={calculateRadius() + i * RADIUS_WIDTH_FACTOR}
              fill={DEFAULT_COLOR_MOON_RGBA}
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
