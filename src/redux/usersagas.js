import {
  takeLatest,
  put,
  call,
  fork,
  all,
  delay,
} from "redux-saga/effects";
import {
  loadUsersSuccess,
  loadUsersError,
  createUserSuccess,
  createUserError,
  updateUserSuccess,
  updateUserError,
  searchUserSuccess,
  searchUserError,
  sortUserSuccess,
  sortUserError,
} from "./actions";
import {
  loadUsersApi,
  createUserApi,
  updateUserApi,
  searchUserApi,
  sortUserApi,
} from "./api";

import * as types from "./actionTypes";

export function* onLoadUsersStartAsync() {
  try {
    const response = yield call(loadUsersApi);
    if (response.status === 200) {
      yield delay(500);
      yield put(loadUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(loadUsersError(error));
  }
}




function* onCreateUserStartAsync({ payload }) {
  try {
    const response = yield call(createUserApi, payload);
    console.log("responseCreate", response);
    if (response.status === 200) {
      yield put(createUserSuccess(response.data));
    }
  } catch (error) {
    yield put(createUserError(error));
  }
}

function* onUpdateUserStartAsync({ payload: { id, formValue } }) {
  try {
    const response = yield call(updateUserApi, id, formValue);
    if (response.status === 200) {
      yield put(updateUserSuccess(response.data));
    }
  } catch (error) {
    yield put(updateUserError(error));
  }
}
function* onSearchUserStartAsync({ payload: Query }) {
  try {
    const response = yield call(searchUserApi, Query);
    if (response.status === 200) {
      yield put(searchUserSuccess(response.data));
    }
  } catch (error) {
    yield put(searchUserError(error));
  }
}

function* onSortUserStartAsync({ payload: value }) {
  try {
    const response = yield call(sortUserApi, value);
    if (response.status === 200) {
      yield put(sortUserSuccess(response.data));
    }
  } catch (error) {
    yield put(sortUserError(error));
  }
}

export function* onLoadUsers() {
  yield takeLatest(types.LOAD_USERS_START, onLoadUsersStartAsync);
}

export function* onCreateUser() {
  yield takeLatest(types.CREATE_USER_START, onCreateUserStartAsync);
}

export function* onUpdateUser() {
  yield takeLatest(types.UPDATE_USER_START, onUpdateUserStartAsync);
}

export function* onSearchUser() {
  yield takeLatest(types.SEARCH_USER_START, onSearchUserStartAsync);
}

export function* onSortUser() {
  yield takeLatest(types.SORT_USER_START, onSortUserStartAsync);
}

const userSagas = [
  fork(onLoadUsers),
  fork(onCreateUser),
  fork(onUpdateUser),
  fork(onSearchUser),
  fork(onSortUser),
];

export default function* rootSaga() {
  yield all([...userSagas]);
}
