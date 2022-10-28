export const SET_MOVIES = 'SET_MOVIES';
export const SET_FILTER = 'SET_FILTER';
export const SET_USER = 'CREATE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const SET_FAVOuRITES = 'SET_FAVOuRITES';
export const ADD_FAVOuRITE = 'ADD_FAVOuRITE';
export const REMOVE_FAVOuRITE = 'REMOVE_FAVOuRITE';

export function setMovies(value) {
  return {
    type: SET_MOVIES,
    value,
  };
}

export function setFilter(value) {
  return { type: SET_FILTER, value };
}

export function setUser(value) {
  return { type: SET_USER, value };
}

export function updateUser(value) {
  return { type: UPDATE_USER, value };
}

export function deleteUser(value) {
  return { type: DELETE_USER, value };
}

export function setFavourites(value) {
  return { type: SET_FAVOuRITES, value };
}

export function addFavourite(value) {
  return { type: ADD_FAVOuRITE, value };
}

export function removeFavourite(value) {
  return { type: REMOVE_FAVOuRITE, value };
}