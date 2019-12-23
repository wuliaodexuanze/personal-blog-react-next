import * as actionTypes from './actionTypes';

const defaultState = {
  tags: [],
  content: {}
}

const tagsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_TAGS:
      return {
        ...state,
        tags: action.tags
      };
    case actionTypes.GET_CONTENTLIST:
      return {
        ...state,
        content: action.content
      }
    default:
      return state;
  }
}

export default tagsReducer;