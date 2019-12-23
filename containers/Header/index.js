import { connect } from 'react-redux'
import {
  trim,
  split
} from 'lodash'
import { actionCreators } from './store'
import { actionCreators as homeActionCreators } from '../Home/store'
import { actionCreators as contentListActionCreators } from '../ContentList/store'
import Header from '../../common/Header'

const mapStateToProps = (state) => {
  return {
    showSearch: state.header.showSearch,
    showCollapseNav: state.header.showCollapseNav,
    hasSearch: state.header.hasSearch,
    navs: state.header.navs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchBtnClick() {
      dispatch(actionCreators.searchToggle())
    },
    handleCollapseNavClick() {
      dispatch(actionCreators.collapseToggle())
    },
    search(val, url) {
      const newVal = trim(val)
      if (url === '/') {
        dispatch(homeActionCreators.getBlogList({
          q: newVal
        }))
      } else if ((url === '/web') || (url === '/server')) {
        dispatch(contentListActionCreators.getList(url, {
          q: newVal
        }))
      }
    },
    /**
     * 隐藏输入框
     */
    showSearchInpt(route) {
      if (route === '/' || route === '/blog') {
        dispatch(actionCreators.showSearch(true))
      } else {
        dispatch(actionCreators.showSearch(false))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)