import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Path } from 'react-konva';

const FullMoon = ({ x, y, scaleX, scaleY, fill, onClick }) => (
  <Fragment>
    <Path
      x={x}
      y={y}
      onClick={onClick}
      onTap={onClick}
      data="M86.016 43.008q0 11.704-5.768 21.588T64.596 80.248q-9.884 5.768-21.588 5.768T21.42 80.248Q11.536 74.48 5.768 64.596 0 54.712 0 43.008T5.768 21.42q5.768-9.884 15.652-15.652Q31.304 0 43.008 0t21.588 5.768q9.884 5.768 15.652 15.652 5.768 9.884 5.768 21.588z"
      fill={fill}
      scaleX={scaleX}
      scaleY={scaleY}
    />
  </Fragment>
);

FullMoon.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  scaleX: PropTypes.number.isRequired,
  scaleY: PropTypes.number.isRequired,
  fill: PropTypes.string,
  onClick: PropTypes.func,
};

FullMoon.defaultProps = {
  fill: 'lightgray',
  onClick: () => {},
};

export default FullMoon;
