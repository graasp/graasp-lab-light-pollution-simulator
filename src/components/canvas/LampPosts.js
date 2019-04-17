import React from 'react';
import { connect } from 'react-redux';
import LampPost from './LampPost';

const LampPosts = ({ lampPosts }) => {
  return lampPosts.map(({ x, size }) => (
    <LampPost y={600} x={x} size={size} key={x} />
  ));
};

const mapStateToProps = ({ lampPost }) => {
  const { content } = lampPost;
  return {
    lampPosts: content,
  };
};

export default connect(mapStateToProps)(LampPosts);
