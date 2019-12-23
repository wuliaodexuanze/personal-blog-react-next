import React, {
  useCallback,
  useRef
} from 'react';
import Link from 'next/link'
import {
  trim
} from 'lodash';
import {message} from 'antd'
import 'animate.css'
import {
  RegisterWrapper
} from './style'

function Register({
  register
}) {
  const usernameEle = useRef();
  const emailEle = useRef();
  const passEle = useRef();
  const confirmPassEle = useRef();
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const username = trim(usernameEle.current.value);
    const email = trim(emailEle.current.value);
    const pass = passEle.current.value;
    const confirmPass = confirmPassEle.current.value;
    const emailReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;

    if (!username) {
      message.warning('用户名不能为空');
      return false;
    }
    if (!email) {
      message.warning('邮箱不能为空');
      return false;
    }
    if (!emailReg.test(email)) {
      message.warning('邮箱格式不正确');
      return false;
    }
    if (!pass) {
      message.warning('密码不能为空');
      return false;
    } else if (pass.length < 6) {
      message.warning('密码长度不能少于6位');
      return false;
    }
    if (!confirmPass) {
      message.warning('确认密码不能为空');
      return false;
    } else if(pass !== confirmPass) {
      message.warning('两次输入密码不一致!');
      return false;
    }

    register({
      username,
      email,
      password: pass,
      confirm_password: confirmPass
    });
    return false;
  }, [register]);

  return (
    <RegisterWrapper>
      <div className="login-page animated fadeInUp">
        <div className="form">
          <form className="register-form">
            <input
              ref={usernameEle}
              type="text"
              placeholder="用户名"
              autoComplete="off"
              required />
            <input
              ref={emailEle}
              type="email"
              placeholder="邮箱"
              autoComplete="off"
              required />
            <input
              ref={passEle}
              type="password"
              placeholder="密码"
              autoComplete="off"
              required />
            <input
              ref={confirmPassEle}
              type="password"
              placeholder="确认密码"
              autoComplete="off"
              required />
            <button onClick={handleSubmit}>注册</button>
            <p className="message">已有账号? <Link href="/login"><a>立即登录</a></Link></p>
          </form>
        </div>
      </div>
    </RegisterWrapper>
  )
}

export default Register;