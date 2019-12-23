import * as actionTypes from './actionTypes'
import { get } from '../../../utils/http'
import { get as clientGet, post as clientPost } from '../../../utils/request'
import config from '../../../config'


export const changeData = (detail) => ({
  type: actionTypes.GET_DETAIL,
  detail
})

export const changeArticle = (articles) => ({
  type: actionTypes.GET_ORSO,
  articles
})

export const changeLike = (like) => ({
  type: actionTypes.LIKE,
  like
})
export const changeFavorCount = (favcount) => ({
  type: actionTypes.GET_FAVOR_COUNT,
  favcount
})

export const changeComments = (comments) => ({
  type: actionTypes.GET_COMMENTS,
  comments
})

/**
 * 前端获取文章详情
 * @param {*} id 文章id 
 */
export const getDetail = (id) => {
  return async (dispatch) => {
    if (id) {
      const detail = await clientGet(`/v1/blog/${id}`)
      dispatch(changeData(detail))
    }
  }
}

/**
 * 获取文章评论
 * @param {*} id 
 */
export const getComments = (id, {offset=0, limit=config.limit}) => {
  return async (dispatch) => {
    if (id) {
      const comments = await clientGet(`/v1/comment/blog/${id}`, {offset, limit})
      dispatch(changeComments(comments))
    }
  }
}

/**
 * 点赞
 * @param {*} id 
 */
export const like = (id) => {
  return async (dispatch) => {
    if (id) {
      const like = await clientPost(`/v1/favor`, {id})
      if (like.error_code === 0) {
        dispatch(changeLike(true))
        return like
      }
    }
  }
}

/**
 * 取消点赞
 * @param {*} id 文章id
 */
export const dislike = (id) => {
  return async (dispatch) => {
    if (id) {
      const like = await clientPost(`/v1/favor/cancel`, {
        id
      })
      if (like.error_code === 0) {
        dispatch(changeLike(false))
        return like
      }
    }
  }
}

/**
 * 获取文章收藏数
 * @param {*} id 文章id
 */
export const getFavorCount = (id) => {
  return async (dispatch) => {
    if (id) {
      const blog = await get(`/v1/blog/${id}/favcount`)
      dispatch(changeFavorCount(blog.fav_nums))
    }
  }
}

/**
 * 评论
 * @param {*} blogId 文章id
 * @param {*} content 评论内容
 */
export const addComment = (blogId, content) => {
  return async () => {
    if (blogId && content) {
      const comment = await clientPost('/v1/comment', {
        blog_id: blogId,
        content
       })
       return comment
    }
  }
}

/**
 * 评论支持
 * @param {*} blogId 文章id
 * @param {*} commentId 评论id
 */
export const support = (blogId, commentId) => {
  return async () => {
    if (blogId && commentId) {
      const result = await clientPost('/v1/attitude', {
        blog_id: blogId,
        comment_id: commentId
      })

      return result
    }
  }
}

/**
 * 反对评论
 * @param {*} blogId 文章id
 * @param {*} commentId 评论id
 */
export const oppose = (blogId, commentId) => {
  return async () => {
    if (blogId && commentId) {
      const result = await clientPost('/v1/attitude/cancel', {
        blog_id: blogId,
        comment_id: commentId
      })

      return result
    }
  }
}