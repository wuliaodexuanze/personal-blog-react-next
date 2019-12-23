import { connect } from 'react-redux';
import { actionCreators } from './store';
import ContentList from '../../common/ContentList';
import { actionCreators as headerActionCreators } from '../Header/store';

const mapStateToProps = (state) => {
  return {
    navs: state.header.navs,
    listData: state.contentList.data
  }
}

const mapDispatchToProps = (dispatch) => ({
  getList(path, {offset, limit}) {
    dispatch(actionCreators.getList(path, {offset, limit}));
  },
  /**
   * 显示输入框
   */
  showSearch() {
    dispatch(headerActionCreators.showSearch(true));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ContentList);