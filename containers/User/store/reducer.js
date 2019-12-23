import * as actionTypes from './actionTypes';

const defaultState = {
  userInfo: {},
  favorData: {},
  commentData: {}
}

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER:
      return {
        ...state,
        userInfo: action.info
      }
    case actionTypes.GET_FAVORS:
      return {
        ...state,
        favorData: action.favors
      }
    case actionTypes.GET_COMMENTS:
      return {
        ...state,
        commentData: action.comments
      }
    default:
      return state;
  }
}

export default userReducer;