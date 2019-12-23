import ArticleComp from '../containers/Article'
import Side from '../containers/Side'
import {get} from '../utils/http'
import User from '../utils/user'
import config from '../config'
import {
  actionCreators
} from '../containers/Article/store'
import { actionCreators as sideActionCreators } from '../containers/Side/store'

const Article = ({

}) => (
  <>
    <Side />
    <div className="main-left animated fadeInLeft">
      <ArticleComp />
    </div>
    <div className="clearfix"></div>
  </>
)

Article.getInitialProps = async (ctx) => {
  const id = ctx.ctx.query.id
  const offset = 0
  const limit = config.limit
  const sideData = await get('/v1/side')
  const detail = await get(`/v1/blog/${id}`)
  const OrsoArticle = await get(`/v1/blog/${id}/orso`)
  const commentsData = await get(`/v1/comment/blog/${id}`, {offset, limit})

  ctx.reduxStore.dispatch(actionCreators.changeComments(commentsData))
  ctx.reduxStore.dispatch(actionCreators.changeData(detail))
  ctx.reduxStore.dispatch(actionCreators.changeArticle(OrsoArticle))
  ctx.reduxStore.dispatch(sideActionCreators.changeData(sideData))

  return {
  }
}

export default Article