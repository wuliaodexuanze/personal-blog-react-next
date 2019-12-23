import React, {
  useCallback,
  useRef
} from 'react';
import Link from 'next/link'
import 'animate.css'
import {
	LoginWrapper
} from './style'

function Login({
  login,
  router
}) {
  const usernameEle = useRef();
  const passwordEle = useRef();
  const handleLogin = useCallback(async (e) => {
    e.preventDefault();
    const username = usernameEle.current.value;
    const password = passwordEle.current.value;
    const flag = await login(username, password);
    if (flag) {
      const historyStr = window.localStorage.getItem('history');
      if (historyStr) {
        const his = JSON.parse(historyStr);
        router.push(his.pathname)
      } else {
        router.push('/')
      }
    }
    return false;
  }, [login, router]);

	return (
		<LoginWrapper>
      <div className="login-page animated fadeInUp">
        <div className="form">
          <form className="login-form">
            <input
              ref={usernameEle}
              type="text"
              placeholder="用户名"
              autoComplete="off"
              required />
            <input
              ref={passwordEle}
              type="password"
              placeholder="密码"
              autoComplete="off"
              required />
            <button type="submit" onClick={handleLogin}>登录</button>
            <p className="message">还没有账号？<Link href="/register"><a>立即注册</a></Link></p>
          </form>
        </div>
      </div>
    </LoginWrapper>
	)
}

export default Login;