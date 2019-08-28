import React from 'react';
import { Circle } from 'react-konva';
import {
  CRESCENT_MOON,
  DEFAULT_COLOR_MOON_RGBA,
  FULL_MOON,
  NEW_MOON,
  NUM_CIRCLES_IN_HALO,
  NUM_ITERATIONS_TO_SKIP, // might need to define more of these variables according to phase
  QUARTER_MOON,
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
      const haloColorCrescent = `rgba(211, 211, 211, ${1 / (i + 1) ** 1.2})`;
      const haloColorFull = `rgba(211, 211, 211, ${1 / (i + 1) ** 0.5})`;
      const haloColorNew = `rgba(211, 211, 211, ${1 / (i + 1) ** 10})`;
      const haloColorQuarter = `rgba(211, 211, 211, ${1 / (i + 1) ** 0.9})`;
      const haloBlur = 5;
      const haloOpacity = 0.1;
      switch (phase) {
        case CRESCENT_MOON:
        default:
          return (
            <Circle
              x={x - HIDDEN_OBJECT_OFFSET}
              y={y - calculateRadius() - HIDDEN_OBJECT_OFFSET}
              radius={calculateRadius() + i * RADIUS_WIDTH_FACTOR}
              fill={DEFAULT_COLOR_MOON_RGBA}
              shadowColor={haloColorCrescent}
              shadowBlur={haloBlur}
              shadowOpacity={haloOpacity}
              shadowOffset={{
                x: HIDDEN_OBJECT_OFFSET,
                y: HIDDEN_OBJECT_OFFSET,
              }}
            />
          );
        case FULL_MOON:
          return (
            <Circle
              x={x - HIDDEN_OBJECT_OFFSET}
              y={y - calculateRadius() - HIDDEN_OBJECT_OFFSET}
              radius={calculateRadius() + i * RADIUS_WIDTH_FACTOR}
              fill={DEFAULT_COLOR_MOON_RGBA}
              shadowColor={haloColorFull}
              shadowBlur={haloBlur}
              shadowOpacity={haloOpacity}
              shadowOffset={{
                x: HIDDEN_OBJECT_OFFSET,
                y: HIDDEN_OBJECT_OFFSET,
              }}
            />
          );
        case NEW_MOON:
          return (
            <Circle
              x={x - HIDDEN_OBJECT_OFFSET}
              y={y - calculateRadius() - HIDDEN_OBJECT_OFFSET}
              radius={calculateRadius() + i * RADIUS_WIDTH_FACTOR}
              fill={DEFAULT_COLOR_MOON_RGBA}
              shadowColor={haloColorNew}
              shadowBlur={haloBlur}
              shadowOpacity={haloOpacity}
              shadowOffset={{
                x: HIDDEN_OBJECT_OFFSET,
                y: HIDDEN_OBJECT_OFFSET,
              }}
            />
          );
        case QUARTER_MOON:
          return (
            <Circle
              x={x - HIDDEN_OBJECT_OFFSET}
              y={y - calculateRadius() - HIDDEN_OBJECT_OFFSET}
              radius={calculateRadius() + i * RADIUS_WIDTH_FACTOR}
              fill={DEFAULT_COLOR_MOON_RGBA}
              shadowColor={haloColorQuarter}
              shadowBlur={haloBlur}
              shadowOpacity={haloOpacity}
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
