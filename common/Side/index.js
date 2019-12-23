/*
 * @Description: 描述
 * @Author: jayafs
 * @Email: 1169655050@qq.com
 * @Date: 2019-11-21 19:48:42
 * @LastEditors: jayafs
 * @LastEditTime: 2019-11-21 23:39:15
 */
import React, {
  useMemo,
  useCallback,
  useEffect
} from 'react'
import Link from 'next/link'
import SiderItem from '../SideItem'
import TagItem from '../TagItem'
import LinkItem from '../LinkItem'
import 'animate.css'
import {
  SideWrapper
} from './style'

function Side({
  sideData = {},
  userInfo = {},
  logout,
  getUser
}) {

  const {
    recommendList=[],
    popularList=[],
    links=[],
    tags
  } = sideData || {};

  const {
    username,
    nickname,
    avatar,
    email
  } = userInfo || {};

  const allData = useMemo(() => ({
    reclist: recommendList,
    linklist: links,
    populist: popularList,
    taglist: tags
  }), [recommendList, popularList, links, tags])

  const handleLogout = useCallback(() => logout(), [logout])

  useEffect(() => {
    getUser()
  }, [getUser])

  return (
    <SideWrapper>
      <div className="main-right animated fadeInRight">
        <div className="main">
          
          {
            username ? (
              <div className="author">
                <div className="topauthor">
                  <Link href="/user">
                    <a>
                      <img alt="avatar" src={
                        avatar || '../../static/imgs/default-avatar.jpg'
                      } />
                    </a>
                  </Link>
                  <span className="intag">
                    <i className="fa fa-user-o"></i>
                    用户名
                  </span>
                  <span className="names">{ username }</span>
                  <br />
                  <span className="intag">
                    <i className="fa fa-vcard-o"></i>
                    昵称
                  </span>
                  <span className="talk">{ nickname || '暂无' }</span>
                  <br />
                  <span className="intag">
                    <i className="fa fa-envelope-o"></i>
                    邮箱
                  </span>
                  <span className="talk">{ email || '暂无' }</span>
                  <br />
                  <button
                    className="logout-btn"
                    onClick={handleLogout}>退出登录</button>
                </div>
              </div>
            ) : (
              <div className="no-login">
                <Link href="/login"><a className="btn login-btn">登录</a></Link>
                <Link href="/register"><a className="btn register-btn">注册</a></Link>
              </div>
            )
          }
          
          <div className="right-box">
            <SiderItem
              title="热门文章"
              icon="fire"
              list={allData.reclist} />
            <SiderItem
              title="推荐文章"
              list={allData.populist}
              icon="graduation-cap" />
            <div className="tag-item">
              <TagItem list={allData.taglist} title="标签" icon="tags" />
            </div>
            <div className="tag-item">
              <LinkItem list={allData.linklist} title="友情链接" icon="link" />
            </div>
          </div>
        </div>
      </div>
    </SideWrapper>
  )
}

export default Side;