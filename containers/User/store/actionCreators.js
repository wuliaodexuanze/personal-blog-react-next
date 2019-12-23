import * as actionTypes from './actionTypes'
import User from '../../../utils/user'
import { get, put } from '../../../utils/request'
import config from '../../../config'

export const changeUser = (info) => ({
  type: actionTypes.GET_USER,
  info
})

const changeFavors = (favors) => ({
  type: actionTypes.GET_FAVORS,
  favors
})

const changeComments = (comments) => ({
  type: actionTypes.GET_COMMENTS,
  comments
})

/**
 * 获取用户信息
 */
export const getUser = () => {
  return async (dispatch) => {
    const user = await User.getUser()
    dispatch(changeUser(user))
    return user
  }
}

/**
 * 获取用户收藏
 */
export const getUserFavors = ({offset=0, limit=config.limit}) => {
  return async (dispatch) => {
    const favorData = await get('/v1/favor', {
      offset,
      limit
    })
    dispatch(changeFavors(favorData))
  }
}

/**
 * 获取用户评论
 */
export const getUserComments = () => {
  return async (dispatch) => {
    const commentData = await get('/v1/comment')
    dispatch(changeComments(commentData))
  }
}

/**
 * 退出登录
 */
export const logout = () => {
  return async (dispatch) => {
    dispatch(changeUser({}))
  }
}

/**
 * 修改基本信息
 * @param {*} data 
 */
export const updateUserInfo = (data) => {
  return async (dispatch) => {
    const {
      email,
      nickname
    } = data

    return await put('cms/user', { email, nickname })
  }
}

/**
 * 修改密码
 * @param {*} data 
 */
export const updatePass = (data) => {
  return async (dispatch) => {
    const {
      old_password,
      new_password,
      confirm_password
    } = data

    if (old_password && new_password && confirm_password) {
      return await put('/cms/user/change_password', {
        old_password,
        new_password,
        confirm_password
      })
    }
  }
}

export const updateAvatar = (url) => {
  return async (dispatch) => {
    return await put('/cms/user/avatar', {avatar: url})
  }
}