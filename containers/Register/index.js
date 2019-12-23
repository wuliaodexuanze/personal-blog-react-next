import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {trim} from 'lodash';
// import { actionCreators } from './store';
import Message from 'antd/es/message';
import 'antd/es/message/style/index.css';
import Register from '../../components/Register';

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    async register (data) {
      const { username, password, email, confirm_password } = data;
      if (trim(username) && trim(password) && trim(email) && trim(confirm_password)) {
        Message.info('暂时不支持用户注册，注册用户请联系管理员！');
        // const ret = dispatch(actionCreators.register({
        //   username,
        //   password,
        //   email,
        //   confirm_password
        // }));
        // if (ret.error_code === 0) {
        //   Message.success(ret.msg);
        // } else {
        //   Message.error(ret.msg);
        // }
      } else {
        Message.warning('信息填写不完整');
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register));