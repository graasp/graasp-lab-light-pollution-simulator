import {
  ADD_LAMP_POST,
  CHANGE_LAMP_POST_SHIELDING,
  FLAG_REMOVING_LAMP_POST,
  REMOVE_LAMP_POST,
  RESIZE_LAMP_POST,
} from '../types';
import {
  DEFAULT_COLOR_TEXT,
  DEFAULT_SHIELDING,
  DEFAULT_SIZE,
  SIZE_SMALL,
} from '../config/settings';

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
            color: DEFAULT_COLOR_TEXT,
            shielding: DEFAULT_SHIELDING,
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
          // exclude the old lamp post
          ...state.content.filter(e => e.x !== payload),
          // add a new lamp post
          {
            // extract the props from the old lamp post but change the size
            ...state.content.find(e => e.x === payload),
            size: SIZE_SMALL,
          },
        ],
      };

    // in this case the x is being passed as a property inside payload
    case CHANGE_LAMP_POST_SHIELDING:
      return {
        ...state,
        content: [
          // exclude the old lamp post
          ...state.content.filter(e => e.x !== payload.x),
          // add a new lamp post
          {
            // extract the props from the old lamp post but change the size
            ...state.content.find(e => e.x === payload.x),
            shielding: payload.shielding,
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
