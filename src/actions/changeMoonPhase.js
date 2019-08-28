import { CHANGE_MOON_PHASE } from '../types';

const changeMoonPhase = ({ phase }) => dispatch => {
  dispatch({
    type: CHANGE_MOON_PHASE,
    payload: {
      phase,
    },
  });
};

export { changeMoonPhase };
