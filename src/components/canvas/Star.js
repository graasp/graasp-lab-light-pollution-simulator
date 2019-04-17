import React from 'react';
import PropTypes from 'prop-types';
import { Circle } from 'react-konva';

const Star = ({ x, y, r, opacity }) => {
  return (
    <Circle x={x} y={y} radius={r} fill={`rgba(255,255,255,${opacity})`} />
  );
};

Star.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  r: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired,
};

export default Star;
