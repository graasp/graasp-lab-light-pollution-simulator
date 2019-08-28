import { CRESCENT_MOON } from '../config/settings';
import { CHANGE_MOON_PHASE } from '../types';

const INITIAL_STATE = {
  phase: CRESCENT_MOON,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CHANGE_MOON_PHASE:
      return {
        ...state,
        phase: payload,
      };
    default:
      return state;
  }
};
