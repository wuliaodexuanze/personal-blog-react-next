import * as actionTypes from './actionTypes';

const defaultState = {
  list: []
}

const contentlistReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_LIST:
      return {
        ...state,
        data: action.data
      }
    default:
      return state;
  }
}

export default contentlistReducer;