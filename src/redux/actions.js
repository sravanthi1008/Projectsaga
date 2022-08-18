import * as types from "./actionTypes";

export const loadUsersStart = () => ({
  type: types.LOAD_USERS_START,
});

export const loadUsersSuccess = (users) => ({
  type: types.LOAD_USERS_SUCCESS,
  payload: users,
});

export const loadUsersError = (error) => ({
  type: types.LOAD_USERS_ERROR,
  payload: error,
});

export const createUserStart = (user) => ({
  type: types.CREATE_USER_START,
  payload: user,
});

export const createUserSuccess = (users) => ({
  type: types.CREATE_USER_SUCCESS,
  payload: users,
});

export const createUserError = (error) => ({
  type: types.CREATE_USER_ERROR,
  payload: error,
});

export const updateUserStart = (userInfo) => ({
  type: types.UPDATE_USER_START,
  payload: userInfo,
});

export const updateUserSuccess = (userInfo) => ({
  type: types.UPDATE_USER_SUCCESS,
  payload: userInfo,
});

export const updateUserError = (error) => ({
  type: types.UPDATE_USER_ERROR,
  payload: error,
});

export const searchUserStart = (Query) => ({
  type: types.SEARCH_USER_START,
  payload: Query,
});

export const searchUserSuccess = (users) => ({
  type: types.SEARCH_USER_SUCCESS,
  payload: users,
});

export const searchUserError = (error) => ({
  type: types.SEARCH_USER_ERROR,
  payload: error,
});

export const sortUserStart = (value) => ({
  type: types.SORT_USER_START,
  payload: value,
});

export const sortUserSuccess = (users) => ({
  type: types.SORT_USER_SUCCESS,
  payload: users,
});

export const sortUserError = (error) => ({
  type: types.SORT_USER_ERROR,
  payload: error,
});
