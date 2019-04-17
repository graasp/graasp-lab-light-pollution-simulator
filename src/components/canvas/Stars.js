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
