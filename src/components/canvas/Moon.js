import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MoonHalo from './MoonHalo';
import CrescentMoon from '../svgs/CrescentMoon';
import FullMoon from '../svgs/FullMoon';
import NewMoon from '../svgs/NewMoon';
import QuarterMoon from '../svgs/QuarterMoon';
import { changeMoonPhase } from '../../actions';
import {
  CRESCENT_MOON,
  FULL_MOON,
  NEW_MOON,
  QUARTER_MOON,
} from '../../config/settings';

class Moon extends Component {
  static propTypes = {
    moon: PropTypes.shape({
      scaleX: PropTypes.number,
      scaleY: PropTypes.number,
      x: PropTypes.number,
      y: PropTypes.number,
      width: PropTypes.number,
      height: PropTypes.number,
    }).isRequired,
    phase: PropTypes.oneOf([CRESCENT_MOON, FULL_MOON, NEW_MOON, QUARTER_MOON]),
    dispatchChangeMoonPhase: PropTypes.func.isRequired,
  };

  static defaultProps = {
    phase: CRESCENT_MOON,
  };

  handleClick = phase => {
    const { dispatchChangeMoonPhase } = this.props;
    dispatchChangeMoonPhase(phase);
  };

  render() {
    const { moon } = this.props;
    const { phase } = this.props;
    switch (phase) {
      case CRESCENT_MOON:
      default:
        return (
          <>
            <MoonHalo
              x={moon.x + 0.25 * moon.width}
              y={moon.y + 0.18 * moon.height}
              phase={CRESCENT_MOON}
            />
            <CrescentMoon
              x={moon.x}
              y={moon.y}
              scaleX={moon.scaleX}
              scaleY={moon.scaleY}
              onClick={() => this.handleClick(QUARTER_MOON)}
            />
          </>
        );
      case FULL_MOON:
        return (
          <>
            <MoonHalo
              x={moon.x + 0.25 * moon.width}
              y={moon.y + 0.18 * moon.height}
              phase={FULL_MOON}
            />
            <FullMoon
              x={moon.x}
              y={moon.y}
              scaleX={moon.scaleX}
              scaleY={moon.scaleY}
              onClick={() => this.handleClick(NEW_MOON)}
            />
          </>
        );
      case NEW_MOON:
        return (
          <>
            <MoonHalo
              x={moon.x + 0.25 * moon.width}
              y={moon.y + 0.18 * moon.height}
              phase={NEW_MOON}
            />
            <NewMoon
              x={moon.x}
              y={moon.y}
              scaleX={moon.scaleX}
              scaleY={moon.scaleY}
              onClick={() => this.handleClick(CRESCENT_MOON)}
            />
          </>
        );
      case QUARTER_MOON:
        return (
          <>
            <MoonHalo
              x={moon.x + 0.25 * moon.width}
              y={moon.y + 0.18 * moon.height}
              phase={QUARTER_MOON}
            />
            <QuarterMoon
              x={moon.x}
              y={moon.y}
              scaleX={moon.scaleX}
              scaleY={moon.scaleY}
              onClick={() => this.handleClick(FULL_MOON)}
            />
          </>
        );
    }
  }
}

const mapStateToProps = ({ moon }) => ({
  phase: moon.phase,
});

const mapDispatchToProps = {
  dispatchChangeMoonPhase: changeMoonPhase,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Moon);
