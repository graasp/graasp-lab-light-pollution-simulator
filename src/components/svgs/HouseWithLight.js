import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Path } from 'react-konva';

const HouseWithLight = ({ x, y, scaleX, scaleY, fill, onClick }) => (
  <Fragment>
    <Path
      x={x}
      y={y + 23.4}
      data="M590.4 171.9h64.2l-2.2 118.5-69.8-4zM574.5 341.1h64.2l-2.2 188.8-69.8-6.4zM306.8 384.3H371l-2.3 188.9-69.8-6.4z"
      fill="#f89406"
      scaleX={scaleX}
      scaleY={scaleY}
      onClick={onClick}
    />
    <Path
      x={x}
      y={y + 23.4}
      data="M31.6 399.7l-27.6.5L145.4 297h20.5c-1.1-2-1.8-4.5-1.8-7.2 0-6.2 3.5-11.2 7.9-11.8v-7.3c-4.5-.5-7.9-5.6-7.9-11.8 0-.8.1-1.6.2-2.4H122l205.3-148.2-9.6-9.8 362.6-59.7V20.6L733 8.3l95.5 23.9 1.3 114 90.2 91.2-26.2 6.4c.8 1.5 1.2 3.4 1.2 5.4 0 4.9-2.8 9-6.3 9.4v6.7c3.6.4 6.3 4.5 6.3 9.4s-2.8 9-6.3 9.4v3.3L1023 399.1l-24.8 2v166h9.6V582h-9.6v10.6s8.8 7.2 0 11.6c0 0 6.7 7.6 0 12.9l-335 7.4s-33.1 3.7-33.1-10.4c0 0-8.7 5.4-17.4-2.2 0 0-33.8 6.5-41.4-2.2 0 0-15.5 3.3-20.8-1.1l-7 .2c.4.9.6 1.9.6 2.9 0 4.1-3.3 7.4-7.4 7.4h-20.2c-4.1 0-7.4-3.3-7.4-7.4 0-.6.1-1.3.2-1.9L392 613.3c0 .4.1.7.1 1.1 0 5.6-4.5 10.1-10.1 10.1h-14.9c-5.6 0-10.1-4.5-10.1-10.1v-.6L60.1 604c-.9 4.4-4.7 7.8-9.4 7.8h-17c-5.1 0-9.2-3.9-9.5-8.9L4 602.2v-17l27.6-1V399.7zm875.2 192.9h76.5V582h-76.6l.1 10.6zm-8.5-25.5h85V402.3l-85.1 6.7.1 158.1zm-318-178.4l16 .3v-35.1l-16-.4v35.2zm38.3 9.2l-14.9-.3v29.8l14.9.3v-29.8zm0-8.5v-34.9l-14.9-.4v35.1l14.9.2zm-15.9-142.3l20.2 1.4v-36.8l-20.2-1.4v36.8zm15.9 189l-14.9-.3v28.7l14.9.3v-28.7zm-22.3-.3l-16-.3v28.7l16 .3v-28.7zm0-8.6v-29.8l-16-.3v29.8l16 .3zm6.4-225.4l20.2 1.4v-15.3l-20.2-1.4v15.3zm27.6-13.4v15.3l18.1 1.3v-15.4l-18.1-1.2zm18.1 61.8v-36.8l-18.1-1.3v36.8l18.1 1.3zm-29.8 257.4v-34.2l-14.9-.3v34.1l14.9.4zm-22.3-.6v-34l-16-.3v33.8l16 .5zm-285 53.7l50-1.1v-168l-50 1.1v168zm-158.4 19.4l20.2-.7v-17.2h-.3c-4.8 0-8.7-5.3-8.7-11.8s3.9-11.8 8.7-11.8h.3v-10.4h-.3c-4.8 0-8.7-5.3-8.7-11.8 0-6.5 3.9-11.8 8.7-11.8h.3v-9.4h-.3c-4.8 0-8.7-5.3-8.7-11.8s3.9-11.8 8.7-11.8h.3v-12.5h-.3c-4.8 0-8.7-5.3-8.7-11.8s3.9-11.8 8.7-11.8h.3v-9.4h-.3c-4.8 0-8.7-5.3-8.7-11.8s3.9-11.8 8.7-11.8h.3V397l-20.2.4v182.7zm-106.4 3.6l91.4-3.1V397.7l-91.4 1.7v184.3z"
      onClick={onClick}
      fill={fill}
      scaleX={scaleX}
      scaleY={scaleY}
    />
  </Fragment>
);

HouseWithLight.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  scaleX: PropTypes.number.isRequired,
  scaleY: PropTypes.number.isRequired,
  fill: PropTypes.string,
  onClick: PropTypes.func,
};

HouseWithLight.defaultProps = {
  fill: 'black',
  onClick: () => {},
};

export default HouseWithLight;
