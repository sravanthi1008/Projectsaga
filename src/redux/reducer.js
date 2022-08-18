import * as types from "./actionTypes";
const initialState = {
  users: [],
  user: {},
  loading: false,
};

const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_USERS_START:
    case types.CREATE_USER_START:
    case types.UPDATE_USER_START:
    case types.SEARCH_USER_START:
    case types.SORT_USER_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_USERS_SUCCESS:
    case types.SEARCH_USER_SUCCESS:
    case types.SORT_USER_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case types.LOAD_USERS_ERROR:
    case types.CREATE_USER_ERROR:
    case types.UPDATE_USER_ERROR:
    case types.SEARCH_USER_ERROR:
    case types.SORT_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case types.CREATE_USER_SUCCESS:

      return {
        ...state,
        loading: false,
      };
    case types.UPDATE_USER_SUCCESS:
      if (!action.payload)
        return {
          ...state,
          loading: false,
        }
      const obj = state.users.find(ele => ele.id === action.payload.id);
      obj.title = action.payload.title;
      // console.log('@@@1', obj);
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default usersReducers;
