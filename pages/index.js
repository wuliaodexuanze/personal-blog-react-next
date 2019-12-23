import Home from '../containers/Home'
import Side from '../containers/Side'
import {get} from '../utils/http'
import config from '../config'
import { actionCreators as homeActionCreators } from '../containers/Home/store'
import { actionCreators as sideActionCreators } from '../containers/Side/store'

const Index = ({}) => (
  <>
    <Side />
    <div className="main-left animated fadeInLeft">
      <Home />
    </div>
    <div className="clearfix"></div>
  </>
)

Index.getInitialProps = async (ctx) => {
  const sideData = await get('/v1/side')
  const topList = await get('/v1/blog/tops')
  const offset = 0
  const limit = config.limit
  const q = ''
  const blogsData = await get('/v1/blog', {offset, limit, q})

  ctx.reduxStore.dispatch(homeActionCreators.changeBlogList(blogsData))
  ctx.reduxStore.dispatch(homeActionCreators.changeTopList(topList))
  ctx.reduxStore.dispatch(sideActionCreators.changeData(sideData))


  return {
  }
}


 export default Index
