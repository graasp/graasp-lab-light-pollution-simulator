import { combineReducers } from 'redux';
import context from './context';
import appInstanceResources from './appInstanceResources';
import users from './users';
import appInstance from './appInstance';
import settings from './settings';
import lampPost from './lampPost';
import moon from './moon';
import house from './house';

export default combineReducers({
  // keys should always be lowercase
  context,
  appInstanceResources,
  users,
  appInstance,
  settings,
  lampPost,
  moon,
  house,
});
