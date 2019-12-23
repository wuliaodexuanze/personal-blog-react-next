import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import {
  trim,
  cloneDeep,
  isEmpty
} from 'lodash'
import {
  message
} from 'antd'
import { actionCreators } from './store'
import Article from '../../common/Article'

const mapStateToProps = (state) => {
  return {
    OrsoArticle: state.article.articles,
    commentsData: state.article.comments,
    detail: state.article.detail,
    likeData: state.article.like
  }
}

const mapDispatchToProps = (dispatch) => ({
  getDetail(id) {
    if (Number(id)) {
      dispatch(actionCreators.getDetail(id))
    }
  },
  getComments(id, query = {}) {
    dispatch(actionCreators.getComments(id, query))
  },
  async like(id) {
    const data = await dispatch(actionCreators.like(id));
    await dispatch(actionCreators.getFavorCount(id));
    if (data && (data.error_code === 0)) {
      message.success(data.msg);
    }
  },
  async dislike(id) {
    const data = await dispatch(actionCreators.dislike(id));
    await dispatch(actionCreators.getFavorCount(id));
    if (data && (data.error_code === 0)) {
      message.success(data.msg);
    }
  },
  async addComment(id, content) {
    if (id && trim(content)) {
      const comment = await dispatch(actionCreators.addComment(id, content));
      if (comment && (comment.error_code === 0)) {
        return comment;
      }
    }
  },
  async support(blogId, data = {}, index) {
    if (isEmpty(data)) {
      return false;
    }
    const newData = cloneDeep(data);
    const comment = newData.rows && newData.rows[index];
    if (comment) {
      const ret = await dispatch(actionCreators.support(blogId, comment.id));
      if (ret && ret.error_code === 0) {
        message.success(ret.msg);
        comment.comment_state = 1;
        comment.like_nums += 1;
        dispatch(actionCreators.changeComments(newData));
      }
    }
  },
  async oppose(blogId, data, index) {
    if (isEmpty(data)) {
      return false;
    }
    const newData = cloneDeep(data);
    const comment = newData.rows && newData.rows[index];
    if (comment) {
      const ret = await dispatch(actionCreators.oppose(blogId, comment.id));
      if (ret && ret.error_code === 0) {
        message.success(ret.msg);
        comment.comment_state = -1;
        comment.dislike_nums += 1;
        if (comment.like_nums > 0) {
          comment.like_nums -= 1;
        }
        dispatch(actionCreators.changeComments(newData));
      }
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Article))