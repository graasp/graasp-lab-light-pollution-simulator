import React, { Component, Fragment } from 'react';
import { Line, Circle, Arc } from 'react-konva';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  removeLampPost,
  resizeLampPost,
  changeLampPostShielding,
} from '../../actions';
import {
  FULL_SHIELDING,
  HALF_SHIELDING,
  TOP_SHIELDING,
  NO_SHIELDING,
  SIZE_LARGE,
  SIZE_SMALL,
} from '../../config/settings';
import Halo from './Halo';

class LampPost extends Component {
  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    size: PropTypes.oneOf(['small', 'large']),
    shielding: PropTypes.oneOf(['none', 'top', 'half', 'full']),
    stroke: PropTypes.string,
    dispatchRemoveLampPost: PropTypes.func.isRequired,
    dispatchChangeLampPostShielding: PropTypes.func.isRequired,
    dispatchResizeLampPost: PropTypes.func.isRequired,
    lampPosts: PropTypes.arrayOf(PropTypes.shape({ x: PropTypes.number }))
      .isRequired,
  };

  static defaultProps = {
    stroke: '#2f2f2f',
    size: SIZE_LARGE,
    shielding: 'none',
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

  calculateRadius = (scale = 1) => {
    return scale * 15;
  };

  handlePostClick = ({ target }) => {
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

  handleLampClick = ({ target }) => {
    const { attrs: { id } = {} } = target;
    const { lampPosts, dispatchChangeLampPostShielding } = this.props;

    // get lamp post by id from array
    const lampPost = lampPosts.find(lp => lp.x === id);
    const { shielding } = lampPost;

    switch (shielding) {
      case NO_SHIELDING:
        dispatchChangeLampPostShielding({ x: id, shielding: 'top' });
        break;
      case TOP_SHIELDING:
        dispatchChangeLampPostShielding({ x: id, shielding: 'half' });
        break;
      case HALF_SHIELDING:
        dispatchChangeLampPostShielding({ x: id, shielding: 'full' });
        break;
      default:
      case FULL_SHIELDING:
        dispatchChangeLampPostShielding({ x: id, shielding: 'none' });
        break;
    }
  };

  renderShielding({ x, y, size }) {
    const { shielding, dispatchChangeLampPostShielding } = this.props;

    switch (shielding) {
      case FULL_SHIELDING:
        return (
          <React.Fragment>
            <Line
              points={[
                x - this.calculateRadius() * 1.2,
                y - this.calculateSize(size) - this.calculateRadius() + 12,
                x + this.calculateRadius() * 1.2,
                y - this.calculateSize(size) - this.calculateRadius() + 12,
                x + this.calculateRadius() * 1.2,
                y - this.calculateRadius() * 1.6 - this.calculateSize(size),
                x + this.calculateRadius() * 0.9,
                y - this.calculateRadius() * 1.8 - this.calculateSize(size),
                x - this.calculateRadius() * 0.9,
                y - this.calculateRadius() * 1.8 - this.calculateSize(size),
                x - this.calculateRadius() * 1.2,
                y - this.calculateRadius() * 1.6 - this.calculateSize(size),
                x - this.calculateRadius() * 1.2,
                y - this.calculateSize(size) - this.calculateRadius(),
              ]}
              fill="black"
              stroke="black"
              strokeWidth={5}
              onClick={() =>
                dispatchChangeLampPostShielding({ x, shielding: 'none' })
              }
              onTap={() =>
                dispatchChangeLampPostShielding({ x, shielding: 'none' })
              }
              closed
            />
            <Arc
              x={x}
              y={y - this.calculateSize(size) - this.calculateRadius() - 1}
              outerRadius={this.calculateRadius() + 5}
              innerRadius={0}
              angle={180}
              rotation={180}
              fill="black"
            />
          </React.Fragment>
        );
      case HALF_SHIELDING:
        return (
          <React.Fragment>
            <Line
              points={[
                x - this.calculateRadius() * 1.2,
                y - this.calculateSize(size) - this.calculateRadius(),
                x + this.calculateRadius() * 1.2,
                y - this.calculateSize(size) - this.calculateRadius(),
                x + this.calculateRadius(),
                y - this.calculateRadius() * 1.6 - this.calculateSize(size),
                x + this.calculateRadius() * 0.9,
                y - this.calculateRadius() * 1.8 - this.calculateSize(size),
                x - this.calculateRadius() * 0.9,
                y - this.calculateRadius() * 1.8 - this.calculateSize(size),
                x - this.calculateRadius(),
                y - this.calculateRadius() * 1.6 - this.calculateSize(size),
                x - this.calculateRadius() * 1.2,
                y - this.calculateSize(size) - this.calculateRadius(),
              ]}
              fill="black"
              stroke="black"
              strokeWidth={5}
              closed
            />
            <Arc
              x={x}
              y={y - this.calculateSize(size) - this.calculateRadius()}
              outerRadius={this.calculateRadius() + 5}
              innerRadius={0}
              angle={180}
              rotation={180}
              fill="black"
              onClick={this.handleLampClick}
              onTap={this.handleLampClick}
              id={x}
            />
          </React.Fragment>
        );
      case TOP_SHIELDING:
        return (
          <React.Fragment>
            <Arc
              x={x}
              y={y - this.calculateSize(size) - this.calculateRadius()}
              outerRadius={this.calculateRadius() + 1}
              innerRadius={0}
              angle={120}
              rotation={210}
              onClick={this.handleLampClick}
              onTap={this.handleLampClick}
              fill="black"
              id={x}
            />
            <Arc
              x={x}
              y={y - this.calculateSize(size) - this.calculateRadius() - 8}
              outerRadius={this.calculateRadius() - 7}
              innerRadius={0}
              angle={120}
              rotation={30}
              onClick={this.handleLampClick}
              onTap={this.handleLampClick}
              fill="black"
              id={x}
            />
          </React.Fragment>
        );
      case NO_SHIELDING:
      default:
        return null;
    }
  }

  render() {
    const { x, y, size, stroke, shielding } = this.props;
    return (
      <Fragment>
        <Halo x={x} y={y + 5} size={size} shielding={shielding} />
        <Circle
          x={x}
          y={y - this.calculateSize(size) - this.calculateRadius()}
          radius={this.calculateRadius()}
          fillRadialGradientStartPoint={{ x: 0, y: 0 }}
          fillRadialGradientStartRadius={0}
          fillRadialGradientEndPoint={{ x: 0, y: 0 }}
          fillRadialGradientEndRadius={100}
          fillRadialGradientColorStops={[
            0,
            'rgba(248, 148, 6, 1)',
            1,
            'rgba(248, 148, 6, 0)',
          ]}
          onClick={this.handleLampClick}
          onTap={this.handleLampClick}
          id={x}
        />
        <Line
          id={x}
          points={[x, y - this.calculateSize(size), x, y]}
          stroke={stroke}
          strokeWidth={5}
          onClick={this.handlePostClick}
          onTap={this.handlePostClick}
        />
        <Line
          id={x}
          points={[x, y - this.calculateSize(size), x, y]}
          stroke="transparent"
          strokeWidth={50}
          onClick={this.handlePostClick}
          onTap={this.handlePostClick}
        />
        {this.renderShielding({ x, y, size })}
      </Fragment>
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
  dispatchChangeLampPostShielding: changeLampPostShielding,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LampPost);
