import { combineReducers } from 'redux';

import {
  SET_FILTER,
  SET_MOVIES,
  SET_USER,
  UPDATE_USER,
  DELETE_USER,
  SET_FAVOuRITES,
  ADD_FAVOuRITE,
  REMOVE_FAVOuRITE,
} from '../actions/actions';

function visibilityFilter(state = '', action) {
  switch (action.type) {
    case SET_FILTER:
      return action.value;
    default:
      return state;
  }
}

function movies(state = [], action) {
  switch (action.type) {
    case SET_MOVIES:
      return action.value;
    default:
      return state;
  }
}

function user(state = '', action) {
  switch (action.type) {
    case SET_USER:
      return action.value;
    case UPDATE_USER:
      return action.value;
    case DELETE_USER:
      return action.value;
    default:
      return state;
  }
}

function favouriteMovies(state = [], action) {
  switch (action.type) {
    case SET_FAVOuRITES:
      return action.value;
    case ADD_FAVOuRITE:
      return [...state, action.value];
    case REMOVE_FAVOuRITE:
      return [...state.filter((movie) => movie !== action.value)];
    default:
      return state;
  }
}

const moviesApp = combineReducers({
  visibilityFilter,
  movies,
  user,
  favouriteMovies,
});

export default moviesApp;