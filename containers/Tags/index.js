import { connect } from 'react-redux';
import { actionCreators } from './store';
import Tags from '../../components/Tags';

const mapStateToProps = (state) => {
  return {
    tags: state.tags.tags,
    content: state.tags.content
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTags() {
      dispatch(actionCreators.getTags())
    },
    getContentList(id, query={}) {
      dispatch(actionCreators.getContentList(id, query));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tags);