import * as actionTypes from './actionTypes';

const defaultState = {
  data: {}
}

const sideReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_DATA:
      return {
        ...state,
        data: action.data
      }
    default:
      return state;
  }
}

export default sideReducer;