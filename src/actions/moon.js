import { CHANGE_MOON_PHASE } from '../types';

const changeMoonPhase = phase => dispatch => {
  dispatch({
    type: CHANGE_MOON_PHASE,
    payload: phase,
  });
};

// todo: remove when more actions are added
// eslint-disable-next-line import/prefer-default-export
export { changeMoonPhase };
