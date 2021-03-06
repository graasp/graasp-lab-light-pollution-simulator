import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Path } from 'react-konva';

const CrescentMoon = ({ x, y, scaleX, scaleY, fill, onClick }) => (
  <Fragment>
    <Path
      onClick={onClick}
      onTap={onClick}
      x={x}
      y={y}
      data="M59.693 76.996a42.514 42.514 0 0 0 15.435-2.882 42.431 42.431 0 0 1-25.236 8.271c-23.547.001-42.635-19.087-42.635-42.633C7.257 21.649 18.541 6.186 34.456 0 23.906 7.761 17.06 20.262 17.06 34.363c-.001 23.546 19.086 42.633 42.633 42.633z"
      fill={fill}
      scaleX={scaleX}
      scaleY={scaleY}
    />
    <Path
      x={x}
      y={y}
      onClick={onClick}
      onTap={onClick}
      data="M86.016 43.008q0 11.704-5.768 21.588T64.596 80.248q-9.884 5.768-21.588 5.768T21.42 80.248Q11.536 74.48 5.768 64.596 0 54.712 0 43.008T5.768 21.42q5.768-9.884 15.652-15.652Q31.304 0 43.008 0t21.588 5.768q9.884 5.768 15.652 15.652 5.768 9.884 5.768 21.588z"
      fill="transparent"
      scaleX={scaleX}
      scaleY={scaleY}
    />
  </Fragment>
);

CrescentMoon.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  scaleX: PropTypes.number.isRequired,
  scaleY: PropTypes.number.isRequired,
  fill: PropTypes.string,
  onClick: PropTypes.func,
};

CrescentMoon.defaultProps = {
  fill: 'lightgray',
  onClick: () => {},
};

export default CrescentMoon;
