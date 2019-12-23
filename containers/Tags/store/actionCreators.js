import * as actionTypes from './actionTypes'
import { get } from '../../../utils/http'

export const changeTags = (data) => ({
  type: actionTypes.GET_TAGS,
  tags: data
});
export const changeContentList = (data) => ({
  type: actionTypes.GET_CONTENTLIST,
  content: data
})

export const getContentList = (id, {offset=0, limit=10}) => {
  return async (dispatch) => {
    if (id) {
      const data = await get(`/v1/tag/${id}/blog`, {offset, limit});
      dispatch(changeContentList(data))
    }
  }
}
