import React from 'react'
import {
  NotFoundWrapper
} from './style'

function NotFound() {

  return (
    <NotFoundWrapper>
      <img className="img" src={'../static/imgs/404.png'} alt="404 NOT FOUND" />
      <h3 className="h3">很抱歉，你访问的页面找不到了</h3>
    </NotFoundWrapper>
  );
}

export default NotFound;
