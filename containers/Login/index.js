import { withRouter } from 'next/router'
import { connect } from 'react-redux'
import {
  trim,
  hasIn
} from 'lodash'
import {
  message
} from 'antd'
import { saveTokens } from '../../utils/token'
import { actionCreators } from './store'
import { actionCreators as userActionCreators } from '../User/store'
import Login from '../../components/Login'
import 'antd/es/message/style/index.css'

const mapDispatchToProps = (dispatch) => ({
  async login(username, password) {
    if (trim(username) && trim(password)) {
      const tokens = await dispatch(actionCreators.login(username, password))
      if (tokens && hasIn(tokens, 'access_token')) {
        saveTokens(tokens.access_token, tokens.refresh_token);
        const user = await dispatch(userActionCreators.getUser())
        if (user && user.id) {
          message.success('登录成功')
          return true;
        }
        message.error(user.msg);
      }
    } else {
      message.error('用户名和密码不能为空')
    }

    return false
  }
});

export default connect(null, mapDispatchToProps)(withRouter(Login))