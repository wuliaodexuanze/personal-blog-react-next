import * as actionTypes from './actionTypes';

const defaultState = {
  topList: [],
  blogsData: {}
}

const homeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_BLOG_LIST:
      return {...Object.assign(state, {
        blogsData: action.data
      })};
    case actionTypes.GET_BLOG_TOP_LIST:
      return { ...Object.assign(state, {
        topList: action.list
      })};
    default:
      return state;
  }
}

export default homeReducer;