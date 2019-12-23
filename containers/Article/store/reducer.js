import * as actionTypes from './actionTypes';

const defaultState = {
  detail: {},
  articles: {},
  comments: [],
  like: {}
}

const articleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_DETAIL:
      return {
        ...state,
        detail: action.detail
      }
    case actionTypes.GET_ORSO:
      return {
        ...state,
        articles: action.articles
      }
    case actionTypes.GET_COMMENTS:
      return {
        ...state,
        comments: action.comments
      }
    case actionTypes.LIKE:
      return {
        ...state,
        detail: {
          ...state.detail,
          fav_state: action.like
        }
      }
    case actionTypes.DISLIKE:
      return {
        ...state,
        detail: {
          ...state.detail,
          fav_state: action.like
        }
      }
    case actionTypes.GET_FAVOR_COUNT:
      return {
        ...state,
        detail: {
          ...state.detail,
          fav_nums: action.favcount
        }
      }
    default:
      return state;
  }
}

export default articleReducer;