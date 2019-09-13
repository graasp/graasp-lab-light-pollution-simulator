import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Path } from 'react-konva';
import { SIDEWALK_COLOR } from '../../config/settings';

const Sidewalk = ({ x, y, scaleX, scaleY, fill }) => (
  <Fragment>
    <Path
      x={x}
      y={y}
      data="M0 0h1145.208v6.028H0z"
      fill={fill}
      scaleX={scaleX}
      scaleY={scaleY}
    />
  </Fragment>
);

Sidewalk.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  scaleX: PropTypes.number.isRequired,
  scaleY: PropTypes.number.isRequired,
  fill: PropTypes.string,
};

Sidewalk.defaultProps = {
  fill: SIDEWALK_COLOR,
};

export default Sidewalk;
