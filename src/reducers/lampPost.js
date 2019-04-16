import {
  ADD_LAMP_POST,
  FLAG_REMOVING_LAMP_POST,
  REMOVE_LAMP_POST,
  RESIZE_LAMP_POST,
} from '../types';
import { DEFAULT_COLOR, DEFAULT_SIZE, SIZE_SMALL } from '../config/settings';

const INITIAL_STATE = {
  content: [],
  activity: false,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ADD_LAMP_POST:
      return {
        ...state,
        content: [
          ...state.content,
          {
            x: payload,
            size: DEFAULT_SIZE,
            color: DEFAULT_COLOR,
          },
        ],
      };
    case REMOVE_LAMP_POST:
      // include only posts where the x is not the one selected for removal
      return {
        ...state,
        content: state.content.filter(e => e.x !== payload),
      };

    case RESIZE_LAMP_POST:
      return {
        ...state,
        content: [
          ...state.content.filter(e => e.x !== payload),
          {
            x: payload,
            size: SIZE_SMALL,
            color: DEFAULT_COLOR,
          },
        ],
      };

    case FLAG_REMOVING_LAMP_POST:
      return {
        ...state,
        activity: payload,
      };
    default:
      return state;
  }
};
