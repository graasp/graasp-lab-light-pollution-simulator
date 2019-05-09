import React from 'react';
import { connect } from 'react-redux';
import LampPost from './LampPost';
import { FOOTER_HEIGHT } from '../../config/settings';

const LampPosts = ({ lampPosts }) => {
  // y is calculated from the top of the canvas to the bottom of the post
  const y = window.innerHeight - FOOTER_HEIGHT;
  return lampPosts.map(({ x, size, shielding }) => (
    <LampPost y={y} x={x} size={size} key={x} shielding={shielding} />
  ));
};

const mapStateToProps = ({ lampPost }) => {
  const { content } = lampPost;
  return {
    lampPosts: content,
  };
};

export default connect(mapStateToProps)(LampPosts);
