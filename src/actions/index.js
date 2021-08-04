export const setFavorite = payload => ({
  type: 'SET_FAVORITE',
  payload,
});

export const deleFavorite = payload => ({
  type: 'DELETE_FAVORITE',
  payload,
});

export const loginRequest = payload => ({
  type: 'LOGIN_REQUEST',
  payload,
});
