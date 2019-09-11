import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Path } from 'react-konva';

const QuarterMoon = ({ x, y, scaleX, scaleY, fill, onClick }) => (
  <Fragment>
    <Path
      x={x}
      y={y}
      onClick={onClick}
      onTap={onClick}
      data="M25.768 0a44.1 49 60 0 0 44.1 76.383"
      fill={fill}
      scaleX={scaleX}
      scaleY={scaleY}
    />
  </Fragment>
);

QuarterMoon.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  scaleX: PropTypes.number.isRequired,
  scaleY: PropTypes.number.isRequired,
  fill: PropTypes.string,
  onClick: PropTypes.func,
};

QuarterMoon.defaultProps = {
  fill: 'lightgray',
  onClick: () => {},
};

export default QuarterMoon;
