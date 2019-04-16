import React, { Component } from 'react';
import { Line } from 'react-konva';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeLampPost, resizeLampPost } from '../../actions';
import { SIZE_LARGE, SIZE_SMALL } from '../../config/settings';

class LampPost extends Component {
  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    size: PropTypes.oneOf(['small', 'large']),
    stroke: PropTypes.string,
    dispatchRemoveLampPost: PropTypes.func.isRequired,
    dispatchResizeLampPost: PropTypes.func.isRequired,
    lampPosts: PropTypes.arrayOf(PropTypes.shape({ x: PropTypes.number }))
      .isRequired,
  };

  static defaultProps = {
    stroke: 'black',
    size: SIZE_LARGE,
  };

  calculateSize = (size, scale = 1) => {
    switch (size) {
      case SIZE_SMALL:
        return 80 * scale;
      case SIZE_LARGE:
      default:
        return 150 * scale;
    }
  };

  handleClick = ({ target }) => {
    const { attrs: { id } = {} } = target;
    const {
      dispatchRemoveLampPost,
      lampPosts,
      dispatchResizeLampPost,
    } = this.props;

    // get lamp post by id from array
    const lampPost = lampPosts.find(lp => lp.x === id);

    const { size } = lampPost;
    if (size === SIZE_SMALL) {
      dispatchRemoveLampPost({ x: id });
    } else {
      dispatchResizeLampPost({ x: id });
    }
  };

  render() {
    const { x, y, size, stroke } = this.props;
    return (
      <Line
        id={x}
        size={this.calculateSize(size)}
        points={[x, y - this.calculateSize(size), x, y]}
        stroke={stroke}
        strokeWidth={5}
        onClick={this.handleClick}
      />
    );
  }
}

const mapStateToProps = ({ lampPost }) => {
  const { content } = lampPost;
  return {
    lampPosts: content,
  };
};

const mapDispatchToProps = {
  dispatchRemoveLampPost: removeLampPost,
  dispatchResizeLampPost: resizeLampPost,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LampPost);
