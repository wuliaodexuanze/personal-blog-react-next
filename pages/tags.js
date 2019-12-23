import TagsComp from '../containers/Tags'
import Side from '../containers/Side'
import {get} from '../utils/http'
import User from '../utils/user'
import config from '../config'
import { actionCreators as tagsActionCreators } from '../containers/Tags/store'
import { actionCreators as sideActionCreators } from '../containers/Side/store'

const Tags = ({}) => (
  <>
    <Side />
    <div className="main-left animated fadeInLeft">
      <TagsComp />
    </div>
    <div className="clearfix"></div>
  </>
)

Tags.getInitialProps = async (ctx) => {
  const id = ctx.ctx.query.id
  const sideData = await get('/v1/side')
  const detail = await get('/v1/tag')
  const offset = 0
  const limit = config.limit
  const data = await get(`/v1/tag/${id}/blog`, {offset, limit});

  ctx.reduxStore.dispatch(tagsActionCreators.changeTags(detail))
  ctx.reduxStore.dispatch(tagsActionCreators.changeContentList(data))
  ctx.reduxStore.dispatch(sideActionCreators.changeData(sideData))


  return {
  }
}


 export default Tags
