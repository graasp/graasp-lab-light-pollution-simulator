import React, { Component } from 'react';
import { Line } from 'react-konva';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeLampPost } from '../../actions';

class LampPost extends Component {
  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    size: PropTypes.oneOf(['small', 'large']),
    stroke: PropTypes.string,
    dispatchRemoveLampPost: PropTypes.func.isRequired,
  };

  static defaultProps = {
    stroke: 'black',
    size: 'large',
  };

  calculateSize = (size, scale = 1) => {
    switch (size) {
      case 'small':
        return 80 * scale;
      case 'large':
      default:
        return 150 * scale;
    }
  };

  handleClick = ({ target }) => {
    console.log(target);
    const { attrs: { id } = {} } = target;
    const { dispatchRemoveLampPost } = this.props;
    dispatchRemoveLampPost({ x: id });
  };

  render() {
    const { x, y, size, stroke } = this.props;
    return (
      <Line
        id={x}
        size={this.calculateSize(size)}
        points={[x, y, x, y + this.calculateSize(size)]}
        stroke={stroke}
        strokeWidth={5}
        onClick={this.handleClick}
      />
    );
  }
}

const mapDispatchToProps = {
  dispatchRemoveLampPost: removeLampPost,
};

export default connect(
  null,
  mapDispatchToProps
)(LampPost);
