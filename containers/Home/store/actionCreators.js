import * as actionTypes from './actionTypes'
import { get } from '../../../utils/http'
import config from '../../../config'

/**
 * 获取博客列表
 */
export const getBlogList = (query = {}) => {
  const {
    offset = 0,
    limit = config.limit,
    q = ''
  } = query
  return async (dispatch) => {
    const data = await get('/v1/blog', {offset, limit, q})
    dispatch(changeBlogList(data))
  }
};

export const changeBlogList = (data) => ({
  type: actionTypes.GET_BLOG_LIST,
  data
})

export const changeTopList = (list) => ({
  type: actionTypes.GET_BLOG_TOP_LIST,
  list
})
