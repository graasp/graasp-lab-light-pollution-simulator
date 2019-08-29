import { TURN_LIGHT_OFF_IN_HOUSE, TURN_LIGHT_ON_IN_HOUSE } from '../types';

const INITIAL_STATE = {
  on: false,
};

export default (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case TURN_LIGHT_ON_IN_HOUSE:
      return {
        ...state,
        on: true,
      };
    case TURN_LIGHT_OFF_IN_HOUSE:
      return {
        ...state,
        on: false,
      };
    default:
      return state;
  }
};
