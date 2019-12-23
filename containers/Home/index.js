import { connect } from 'react-redux'
import { actionCreators } from './store'
import { actionCreators as headerActionCreators } from '../Header/store'
import Home from '../../components/Home'

const mapStateToProps = (state) => {
  return {
    topList: state.home.topList,
    blogsData: state.home.blogsData
  }
}

const mapDispatchToProps = (dispatch) => ({
  getBlogList({offset, limit}) {
    dispatch(actionCreators.getBlogList({
      offset,
      limit
    }))
  },
  /**
   * 显示输入框
   */
  showSearch() {
    dispatch(headerActionCreators.showSearch(true));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)