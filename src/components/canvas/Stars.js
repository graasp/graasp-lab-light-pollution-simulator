import React from 'react';
import { connect } from 'react-redux';
import Star from './Star';

const generateStars = lampPosts => {
  // do some complex logic
  const numLampPosts = lampPosts.length;
  return [
    {
      x: 100,
      y: 100,
      opacity: 1 - numLampPosts * 0.1,
      r: 1,
    },
    {
      x: 300,
      y: 150,
      opacity: 0.7 - numLampPosts * 0.1,
      r: 1,
    },
    {
      x: 500,
      y: 250,
      opacity: 0.9 - numLampPosts * 0.1,
      r: 2,
    },
    {
      x: 700,
      y: 375,
      opacity: 0.7 - numLampPosts * 0.1,
      r: 1,
    },
    {
      x: 650,
      y: 350,
      opacity: 0.9 - numLampPosts * 0.1,
      r: 3,
    },
    {
      x: 500,
      y: 250,
      opacity: 0.9 - numLampPosts * 0.1,
      r: 2.5,
    },
    {
      x: 725,
      y: 155,
      opacity: 1 - numLampPosts * 0.1,
      r: 0.5,
    },
    {
      x: 750,
      y: 200,
      opacity: 1 - numLampPosts * 0.1,
      r: 1.5,
    },
    {
      x: 825,
      y: 155,
      opacity: 1 - numLampPosts * 0.1,
      r: 0.5,
    },
    {
      x: 1050,
      y: 175,
      opacity: 0.9 - numLampPosts * 0.1,
      r: 1.5,
    },
    {
      x: 1500,
      y: 300,
      opacity: 1 - numLampPosts * 0.1,
      r: 2,
    },
    {
      x: 1700,
      y: 80,
      opacity: 1 - numLampPosts * 0.1,
      r: 1.5,
    },
    {
      x: 1800,
      y: 50,
      opacity: 1 - numLampPosts * 0.1,
      r: 0.7,
    },
    {
      x: 1900,
      y: 60,
      opacity: 1 - numLampPosts * 0.1,
      r: 0.8,
    },
    {
      x: 1850,
      y: 120,
      opacity: 1 - numLampPosts * 0.1,
      r: 1.5,
    },
    {
      x: 1610,
      y: 215,
      opacity: 1 - numLampPosts * 0.1,
      r: 2.5,
    },
    {
      x: 1380,
      y: 340,
      opacity: 1 - numLampPosts * 0.1,
      r: 1.0,
    },
    {
      x: 1010,
      y: 213,
      opacity: 1 - numLampPosts * 0.1,
      r: 0.9,
    },
    {
      x: 700,
      y: 50,
      opacity: 1 - numLampPosts * 0.1,
      r: 1.1,
    },
    {
      x: 437,
      y: 400,
      opacity: 1 - numLampPosts * 0.1,
      r: 1.3,
    },
    {
      x: 547,
      y: 87,
      opacity: 1 - numLampPosts * 0.1,
      r: 1.1,
    },
    {
      x: 314,
      y: 314,
      opacity: 1 - numLampPosts * 0.1,
      r: 1.5,
    },
    {
      x: 271,
      y: 271,
      opacity: 1 - numLampPosts * 0.1,
      r: 0.7,
    },
    {
      x: 157,
      y: 157,
      opacity: 1 - numLampPosts * 0.1,
      r: 0.9,
    },
    {
      x: 78,
      y: 157,
      opacity: 1 - numLampPosts * 0.1,
      r: 0.9,
    },
    {
      x: 111,
      y: 333,
      opacity: 1 - numLampPosts * 0.1,
      r: 1.3,
    },
    {
      x: 113,
      y: 131,
      opacity: 1 - numLampPosts * 0.1,
      r: 0.9,
    },
    {
      x: 51,
      y: 151,
      opacity: 1 - numLampPosts * 0.1,
      r: 1.2,
    },
    {
      x: 149,
      y: 223,
      opacity: 1 - numLampPosts * 0.1,
      r: 2.3,
    },
    {
      x: 177,
      y: 523,
      opacity: 1 - numLampPosts * 0.1,
      r: 1.3,
    },
    {
      x: 343,
      y: 343,
      opacity: 1 - numLampPosts * 0.1,
      r: 0.7,
    },
    {
      x: 1243,
      y: 232,
      opacity: 1 - numLampPosts * 0.1,
      r: 1.6,
    },
    {
      x: 1491,
      y: 505,
      opacity: 1 - numLampPosts * 0.1,
      r: 0.8,
    },
    {
      x: 1717,
      y: 377,
      opacity: 1 - numLampPosts * 0.1,
      r: 1.7,
    },
    {
      x: 1857,
      y: 253,
      opacity: 1 - numLampPosts * 0.1,
      r: 1.0,
    },
    {
      x: 1789,
      y: 178,
      opacity: 1 - numLampPosts * 0.1,
      r: 0.6,
    },
    {
      x: 987,
      y: 543,
      opacity: 1 - numLampPosts * 0.1,
      r: 2.2,
    },
    {
      x: 1011,
      y: 432,
      opacity: 1 - numLampPosts * 0.1,
      r: 1.4,
    },
    {
      x: 1222,
      y: 123,
      opacity: 1 - numLampPosts * 0.1,
      r: 1.143,
    },
    {
      x: 1875,
      y: 523,
      opacity: 1 - numLampPosts * 0.1,
      r: 3.142,
    },
  ];
};

const Stars = props => {
  const { lampPosts } = props;
  const stars = generateStars(lampPosts);
  return stars.map(star => <Star {...star} />);
};

const mapStateToProps = ({ lampPost }) => {
  const { content } = lampPost;
  return {
    lampPosts: content,
  };
};

export default connect(mapStateToProps)(Stars);
