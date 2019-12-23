import ContentList from '../containers/ContentList'
import Side from '../containers/Side'
import {get} from '../utils/http'
import User from '../utils/user'
import config from '../config'
import { actionCreators as contentListActionCreators } from '../containers/ContentList/store'
import { actionCreators as sideActionCreators } from '../containers/Side/store'

const Blog = ({}) => (
  <>
    <Side />
    <div className="main-left animated fadeInLeft">
      <ContentList />
    </div>
    <div className="clearfix"></div>
  </>
)

Blog.getInitialProps = async (ctx) => {
  const type = ctx.ctx.query.type
  const sideData = await get('/v1/side')
  const offset = 0
  const limit = config.limit
  const q = ''
  const blogsData = await get(`/v1/blog${type}`, {offset, limit, q});

  ctx.reduxStore.dispatch(contentListActionCreators.changeList(blogsData))
  ctx.reduxStore.dispatch(sideActionCreators.changeData(sideData))


  return {
  }
}


 export default Blog
