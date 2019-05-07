import React from 'react';
import { connect } from 'react-redux';
import LampPost from './LampPost';

const LampPosts = ({ lampPosts }) => {
  return lampPosts.map(({ x, size, shielding }) => (
    <LampPost y={770} x={x} size={size} key={x} shielding={shielding} />
  ));
};

const mapStateToProps = ({ lampPost }) => {
  const { content } = lampPost;
  return {
    lampPosts: content,
  };
};

export default connect(mapStateToProps)(LampPosts);
