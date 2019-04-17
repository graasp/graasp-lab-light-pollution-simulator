import {
  ADD_LAMP_POST,
  CHANGE_LAMP_POST_SHIELDING,
  FLAG_REMOVING_LAMP_POST,
  REMOVE_LAMP_POST,
  RESIZE_LAMP_POST,
} from '../types';
import { flag } from './common';

const flagRemovingLampPost = flag(FLAG_REMOVING_LAMP_POST);

const addLampPost = ({ x }) => dispatch =>
  dispatch({
    type: ADD_LAMP_POST,
    payload: x,
  });

const removeLampPost = ({ x }) => dispatch => {
  dispatch(flagRemovingLampPost(true));
  dispatch({
    type: REMOVE_LAMP_POST,
    payload: x,
  });
  dispatch(flagRemovingLampPost(false));
};

const resizeLampPost = ({ x }) => dispatch =>
  dispatch({
    type: RESIZE_LAMP_POST,
    payload: x,
  });

const changeLampPostShielding = ({ x, shielding }) => dispatch => {
  dispatch({
    type: CHANGE_LAMP_POST_SHIELDING,
    payload: {
      x,
      shielding,
    },
  });
};

export { addLampPost, removeLampPost, resizeLampPost, changeLampPostShielding };
