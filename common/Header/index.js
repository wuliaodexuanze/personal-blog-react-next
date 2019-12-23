import React, {
  useMemo,
  useCallback,
  useRef,
  useEffect
} from 'react'
import Link from 'next/link'
import {
  withRouter
} from 'next/router'
import {
  trim
} from 'lodash'
import { CSSTransition } from 'react-transition-group'
import SliderNav from '../../utils/sliderNav'
import config from '../../config'
import 'animate.css'
import {
  HeaderWrapper,
  NavWrapper
} from './style'

function Header({
  router,
  navs = [],
  showSearch = false,
  showCollapseNav = false,
  hasSearch = false,
  handleSearchBtnClick,
  handleCollapseNavClick,
  search,
  showSearchInpt
}) {
  const searchInput = useRef()
  const urlhash = useMemo(() => {
    if (router.route === '/blog') {
      return router.query.type
    }
    return router.route
  }, [router])
  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    const searchInp = searchInput.current
    const val = trim(searchInp.value)
    search(val, urlhash)
    searchInp.value = ''
    return false;
  }, [search, urlhash])

  useEffect(() => {
    showSearchInpt(router.route)
  }, [router.route, showSearchInpt])

  return(
    <HeaderWrapper className="animated fadeInDown">
      <div className="wrap top clearfix">
        <h1 className="logo">
          <a href="/" className="clearfix" title="logo">
            <img src={'../../static/logo.png'} alt="logo" />
            <h1 className="page-title">手里有糖</h1>
          </a>
        </h1>
        <p className="title"></p>
        <div className="contact">
          <li>
            <a
              className="link"
              href={config.QQ}
              title="QQ联系"
              target="blank">
                <i className="fa fa-qq fa-2x"></i>
              </a></li>
          <li>
            <a
              className="link"
              href="/"
              onClick={e => {e.preventDefault();return false;}}
              title="微信">
              <i className="fa fa-weixin fa-2x"></i>
              <div className="weixin"><img src={'../../static/imgs/weixin.png'} alt="微信" /></div>
            </a>
          </li>
          <li>
            <a
              className="link"
              href={config.github}
              title="github">
              <i className="fa fa-github-square fa-2x"></i>
            </a>
          </li>
        </div>
      </div>
      <NavWrapper>
        <div className="wrap nav">
          <ul className="navbar-header">
            <li
            className = {
              showCollapseNav ? 'navbar-toggle active' : 'navbar-toggle'
            }
            onClick={ () => handleCollapseNavClick() }>
              <i className="fa fa-list fa-2x"></i>
            </li>
            <li
              className = {
                hasSearch ? 'navbar-search-btn' : 'hide'
              }
              onClick={ handleSearchBtnClick }>
              <div className = {
                showSearch ? 'toggle-search-btn active' : 'toggle-search-btn'
              } >
                <i className="fa fa-search fa-2x"></i>
              </div>
            </li>
            <li className={
              hasSearch ? 'navbar-search-input' : 'hide'
            }>
              <CSSTransition
                in={ showSearch }
                timeout={300}
                classNames="opacity"
                unmountOnExit>
                <div className="search-expand">
                  <form
                    className="search-expand-inner"
                    onSubmit={handleSubmit}>
                    <input
                      ref={searchInput}
                      type="text"
                      className="search"
                      placeholder="按回车键搜索..." />
                  </form>
                </div>
              </CSSTransition>
            </li>
          </ul>
          <SliderNav
            in={ showCollapseNav }
            timeout={200}
            effect='ease-out'>
            <div className="navbar-collapse">
              <ul>
                  <li
                  className={
                    (urlhash === '/')
                    ? 'menu-item current_page_item'
                    : 'menu-item'
                  }>
                    <Link href="/"><a>首页</a></Link>
                  </li>
                  {
                    navs.map(item => (
                      <li
                        key={`nav_${item.id}`}
                        className={
                          item.path === urlhash 
                          ? 'menu-item current_page_item' 
                          : 'menu-item'
                        }>
                        <Link href={`/blog?type=${item.path}`} as={`/blog${item.path}`}><a>{item.name}</a></Link>
                      </li>
                    ))
                  }
                  <li
                    className={
                      urlhash === '/about'
                      ? 'menu-item current_page_item'
                      : 'menu-item'
                    }>
                    <Link href="/about"><a>关于</a></Link>
                  </li>
                </ul>
            </div>
          </SliderNav>
        </div>
      </NavWrapper>
    </HeaderWrapper>
  )
}

export default withRouter(Header)