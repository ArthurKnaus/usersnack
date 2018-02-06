import { combineReducers } from 'redux';

import {
  SET_APP_TITLE,
} from './actions';

const initialState = {
  title: 'Usersnack - Pizza Service',
};

const title = (state = initialState.title, action) => {
  switch (action.type) {
    case SET_APP_TITLE:
      document.title = action.payload;
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  title,
});
