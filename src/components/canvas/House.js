import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { turnLightOffInHouse, turnLightOnInHouse } from '../../actions/house';
import HouseHalo from './HouseHalo';
import HouseWithLight from '../svgs/HouseWithLight';
import HouseWithoutLight from '../svgs/HouseWithoutLight';

class House extends Component {
  static propTypes = {
    house: PropTypes.shape({
      scaleX: PropTypes.number,
      scaleY: PropTypes.number,
      x: PropTypes.number,
      y: PropTypes.number,
    }).isRequired,
    on: PropTypes.bool,
    dispatchTurnLightOnInHouse: PropTypes.func.isRequired,
    dispatchTurnLightOffInHouse: PropTypes.func.isRequired,
  };

  static defaultProps = {
    on: false,
  };

  handleClick = on => () => {
    const {
      dispatchTurnLightOnInHouse,
      dispatchTurnLightOffInHouse,
    } = this.props;
    if (on) {
      dispatchTurnLightOffInHouse();
    } else {
      dispatchTurnLightOnInHouse();
    }
  };

  render() {
    const { on, house } = this.props;
    if (on) {
      return (
        <>
          <HouseHalo x={house.x} y={house.y} />
          <HouseWithLight
            x={house.x}
            y={house.y}
            scaleX={house.scaleX}
            scaleY={house.scaleY}
            onClick={this.handleClick(on)}
          />
        </>
      );
    }
    return (
      <>
        <HouseWithoutLight
          x={house.x}
          y={house.y}
          scaleX={house.scaleX}
          scaleY={house.scaleY}
          onClick={this.handleClick(on)}
        />
      </>
    );
  }
}

const mapStateToProps = ({ house }) => ({
  on: house.on,
});

const mapDispatchToProps = {
  dispatchTurnLightOnInHouse: turnLightOnInHouse,
  dispatchTurnLightOffInHouse: turnLightOffInHouse,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(House);
