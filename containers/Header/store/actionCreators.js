import * as actionTypes from './actionTypes'

export const searchToggle = () => ({
  type: actionTypes.SEARCH_TOGGLE
})

export const collapseToggle = () => ({
  type: actionTypes.COLLAPSE_TOGGLE
})

export const showSearch = (state) => ({
  type: actionTypes.HAS_SEARCH,
  hasSearch: state
})

export const changeNav = (list) => ({
  type: actionTypes.GET_NAV,
  list
})