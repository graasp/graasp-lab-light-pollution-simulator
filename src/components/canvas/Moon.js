import React from 'react';
import PropTypes from 'prop-types';
import { CRESCENT_MOON, FULL_MOON } from '../../config/settings';
import MoonHalo from './MoonHalo';
import CrescentMoon from '../svgs/CrescentMoon';

const Moon = ({ phase, moon }) => {
  switch (phase) {
    case CRESCENT_MOON:
      return (
        <>
          <MoonHalo
            x={moon.x + 0.25 * moon.width}
            y={moon.y + 0.18 * moon.height}
            phase={CRESCENT_MOON}
          />
          <CrescentMoon
            x={moon.x}
            y={moon.y}
            scaleX={moon.scaleX}
            scaleY={moon.scaleY}
          />
        </>
      );
    case FULL_MOON:
    default:
      return (
        <>
          <MoonHalo
            x={moon.x + 0.35 * moon.width}
            y={moon.y + 0.18 * moon.height}
            phase={FULL_MOON}
          />
          <CrescentMoon
            x={moon.x}
            y={moon.y}
            scaleX={moon.scaleX}
            scaleY={moon.scaleY}
          />
        </>
      );
  }
};

Moon.propTypes = {
  phase: PropTypes.string,
  moon: PropTypes.shape({
    scaleX: PropTypes.number,
    scaleY: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
  }).isRequired,
};

Moon.defaultProps = {
  phase: CRESCENT_MOON,
};

export default Moon;
