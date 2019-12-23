import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import { actionCreators } from './store'
import User from '../../components/User'
import { getToken } from '../../utils/token'
import { upload } from '../../utils/upload'
import {message} from 'antd'

const mapStateToProps = (state) => {
  return {
    userInfo: state.user.userInfo,
    favorData: state.user.favorData,
    commentData: state.user.commentData
  }
}

const getUserData = (dispatch) => {
  const token = getToken('access_token')
  if (token) {
    dispatch(actionCreators.getUser())
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser() {
      getUserData(dispatch)
    },
    getUserFavors (query = {}) {
      dispatch(actionCreators.getUserFavors(query))
    },
    getUserComments () {
      dispatch(actionCreators.getUserComments())
    },
    async updateUserInfo(data = {}) {
      const result = await dispatch(actionCreators.updateUserInfo(data))
      if (result.error_code === 0) {
        message.success(result.msg)
      }
    },
    async updatePass(data = {}) {
      const result = await dispatch(actionCreators.updatePass(data))
      if (result.error_code === 0) {
        message.success(result.msg)
      }
    },
    async updateAvatar(fileData) {
      const ret = await upload(fileData)
      if (ret) {
        const url = ret[0].url
        const result = await dispatch(actionCreators.updateAvatar(url))
        if (result.error_code === 0) {
          message.success(result.msg)
          getUserData(dispatch)
        }
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(User))