import * as actionTypes from './actionTypes';

const defaultState = {
  hasShow: false
}

const registerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER:
      return {
        focused: true
      };
    default:
      return state;
  }
}

export default registerReducer;