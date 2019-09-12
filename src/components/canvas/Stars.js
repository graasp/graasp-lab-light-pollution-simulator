import React from 'react';
import { connect } from 'react-redux';
import Star from './Star';
import {
  FIXED_HEIGHT,
  FIXED_WIDTH,
  HALF_SHIELDING,
  NO_SHIELDING,
  STAR_OPACITY_REDUCTION_FACTOR,
} from '../../config/settings';

// compute opacity when number of lamp posts increases
const calculateOpacity = lampPosts => {
  const numLampPosts = lampPosts.length;
  const numUnshieldedLampPosts = lampPosts.filter(
    lampPost => lampPost.shielding === NO_SHIELDING
  ).length;
  const numHalfShieldedLampPosts = lampPosts.filter(
    lampPost => lampPost.shielding === HALF_SHIELDING
  ).length;

  // basic dimming depends only on number of lamp posts, to model
  // light reflecting from the pavement or other objects
  let dimming = numLampPosts * STAR_OPACITY_REDUCTION_FACTOR;

  // added dimming from unshielded and half-shielded lamp posts
  dimming += numUnshieldedLampPosts * STAR_OPACITY_REDUCTION_FACTOR;
  dimming += numHalfShieldedLampPosts * (STAR_OPACITY_REDUCTION_FACTOR / 2);

  return dimming;
};

const width = FIXED_WIDTH;
const height = FIXED_HEIGHT;

const generateStars = lampPosts => {
  const dimming = calculateOpacity(lampPosts);
  // do some complex logic
  return [
    {
      x: 0.02 * width,
      y: 0.15 * height,
      opacity: 1 - dimming,
      r: 1.2,
    },
    {
      x: 0.04 * width,
      y: 0.17 * height,
      opacity: 1 - dimming,
      r: 0.9,
    },
    {
      x: 0.05 * width,
      y: 0.1 * height,
      opacity: 1 - dimming,
      r: 1,
    },
    {
      x: 0.06 * width,
      y: 0.4 * height,
      opacity: 1 - dimming,
      r: 1.3,
    },
    {
      x: 0.062 * width,
      y: 0.16 * height,
      opacity: 1 - dimming,
      r: 1.6,
    },
    {
      x: 0.08 * width,
      y: 0.28 * height,
      opacity: 1 - dimming,
      r: 2.3,
    },
    {
      x: 0.11 * width,
      y: 0.55 * height,
      opacity: 1 - dimming,
      r: 0.05,
    },
    {
      x: 0.13 * width,
      y: 0.54 * height,
      opacity: 0.6 - dimming,
      r: 0.07,
    },
    {
      x: 0.13 * width,
      y: 0.29 * height,
      opacity: 1 - dimming,
      r: 0.9,
    },
    {
      x: 0.131 * width,
      y: 0.287 * height,
      opacity: 1 - dimming,
      r: 1.3,
    },
    {
      x: 0.14 * width,
      y: 0.288 * height,
      opacity: 1 - dimming,
      r: 0.9,
    },
    {
      x: 0.15 * width,
      y: 0.15 * height,
      opacity: 0.7 - dimming,
      r: 1,
    },
    {
      x: 0.165 * width,
      y: 0.35 * height,
      opacity: 1 - dimming,
      r: 1.5,
    },
    {
      x: 0.18 * width,
      y: 0.37 * height,
      opacity: 0.5 - dimming,
      r: 0.7,
    },
    {
      x: 0.23 * width,
      y: 0.42 * height,
      opacity: 1 - dimming,
      r: 1.3,
    },
    {
      x: 0.25 * width,
      y: 0.28 * height,
      opacity: 1 - dimming,
      r: 2,
    },
    {
      x: 0.3 * width,
      y: 0.11 * height,
      opacity: 1 - dimming,
      r: 1.1,
    },
    {
      x: 0.33 * width,
      y: 0.37 * height,
      opacity: 1 - dimming,
      r: 3,
    },
    {
      x: 0.36 * width,
      y: 0.07 * height,
      opacity: 1 - dimming,
      r: 1.1,
    },
    {
      x: 0.365 * width,
      y: 0.405 * height,
      opacity: 0.8 - dimming,
      r: 1,
    },
    {
      x: 0.38 * width,
      y: 0.15 * height,
      opacity: 1 - dimming,
      r: 0.5,
    },
    {
      x: 0.4 * width,
      y: 0.25 * height,
      opacity: 1 - dimming,
      r: 1.5,
    },
    {
      x: 0.43 * width,
      y: 0.17 * height,
      opacity: 1 - dimming,
      r: 0.5,
    },
    {
      x: 0.5 * width,
      y: 0.5 * height,
      opacity: 1 - dimming,
      r: 2.2,
    },
    {
      x: 0.51 * width,
      y: 0.15 * height,
      opacity: 0.9 - dimming,
      r: 0.9,
    },
    {
      x: 0.53 * width,
      y: 0.47 * height,
      opacity: 1 - dimming,
      r: 1.4,
    },
    {
      x: 0.55 * width,
      y: 0.185 * height,
      opacity: 1 - dimming,
      r: 1.5,
    },
    {
      x: 0.63 * width,
      y: 0.16 * height,
      opacity: 1 - dimming,
      r: 1.143,
    },
    {
      x: 0.647 * width,
      y: 0.233 * height,
      opacity: 0.9 - dimming,
      r: 1.6,
    },
    {
      x: 0.72 * width,
      y: 0.4 * height,
      opacity: 1 - dimming,
      r: 1.0,
    },
    {
      x: 0.77 * width,
      y: 0.51 * height,
      opacity: 0.6 - dimming,
      r: 0.8,
    },
    {
      x: 0.78 * width,
      y: 0.32 * height,
      opacity: 1 - dimming,
      r: 2,
    },
    {
      x: 0.84 * width,
      y: 0.23 * height,
      opacity: 1 - dimming,
      r: 2.5,
    },
    {
      x: 0.88 * width,
      y: 0.09 * height,
      opacity: 0.95 - dimming,
      r: 1.5,
    },
    {
      x: 0.89 * width,
      y: 0.37 * height,
      opacity: 1 - dimming,
      r: 1.7,
    },
    {
      x: 0.93 * width,
      y: 0.21 * height,
      opacity: 0.4 - dimming,
      r: 0.6,
    },
    {
      x: 0.935 * width,
      y: 0.08 * height,
      opacity: 1 - dimming,
      r: 0.7,
    },
    {
      x: 0.945 * width,
      y: 0.1 * height,
      opacity: 1 - dimming,
      r: 1.5,
    },
    {
      x: 0.957 * width,
      y: 0.273 * height,
      opacity: 0.9 - dimming,
      r: 1.0,
    },
    {
      x: 0.97 * width,
      y: 0.35 * height,
      opacity: 1 - dimming,
      r: 3.142,
    },
    {
      x: 0.985 * width,
      y: 0.02 * height,
      opacity: 0.7 - dimming,
      r: 0.8,
    },
  ];
};

const Stars = props => {
  const { lampPosts } = props;
  const stars = generateStars(lampPosts);
  return stars.map(star => <Star {...star} key={`(${star.x},${star.y})`} />);
};

const mapStateToProps = ({ lampPost }) => {
  const { content } = lampPost;
  return {
    lampPosts: content,
  };
};

export default connect(mapStateToProps)(Stars);
