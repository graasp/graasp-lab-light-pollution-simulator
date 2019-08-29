import { TURN_LIGHT_ON_IN_HOUSE, TURN_LIGHT_OFF_IN_HOUSE } from '../types';

const turnLightOnInHouse = () => dispatch =>
  dispatch({ type: TURN_LIGHT_ON_IN_HOUSE });
const turnLightOffInHouse = () => dispatch =>
  dispatch({ type: TURN_LIGHT_OFF_IN_HOUSE });

export { turnLightOffInHouse, turnLightOnInHouse };
