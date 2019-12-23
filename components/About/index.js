import React from 'react';
import 'animate.css';
import Crumbs from '../../common/Crumbs'
import {
  AboutWrapper
} from './style';

function About() {
  const crumbsData = [
    {
      name: '主页',
      path: '/'
    },
    {
      name: '关于',
      path: '/about'
    }
  ]

  return (
    <AboutWrapper className="wrap animated slideInLeft">
      <div className="article">
        <Crumbs crumbs={ crumbsData }/>
        <h2 className="title"> 关于博主 </h2>
        <ul className="article_content"> 
          <li>前端小白</li>
          <li>地址：四川成都</li>
          <li>邮编：000000</li>
          <li>手机：暂无</li>
          <li>网站：www.www.cn</li>
        </ul>
      </div>
    </AboutWrapper>
  )
}

export default About;